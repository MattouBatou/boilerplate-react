import React, { useState, useEffect } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import Widget from './Widget';
import CustomScroll from 'react-custom-scroll';

import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

import {
	defaultDashboardConfig,
	defaultWidgetLayouts
} from '../../mockdata/dashboards/defaultDashboardLayoutSettings';

const ResponsiveGridLayout = WidthProvider(Responsive);

const Dashboard = props => {
	const { headerHeight = '38px', layouts, widgetData } = props;

	useEffect(() => {
		let initialBreakpoint = 'lg';
		const { breakpoints } = defaultDashboardConfig;

		if (window.innerWidth < breakpoints[initialBreakpoint]) {
			initialBreakpoint = 'md';
		}

		if (window.innerWidth < breakpoints['md']) {
			initialBreakpoint = 'sm';
		}

		if (window.innerWidth < breakpoints['sm']) {
			initialBreakpoint = 'xs';
		}

		if (window.innerWidth < breakpoints['xs']) {
			initialBreakpoint = 'xxs';
		}

		generateWidgets(initialBreakpoint);
	}, []);

	const [widgets, setWidgets] = useState([]);

	const generateWidgets = breakpoint => {
		let currentRowWidth = 0;
		let currentRowY = 0;
		let currentRowHeightMax = 0;

		const widgetComponents = widgetData.map(({ ...widgetData }, i) => {
			const {
				'data-grid': { ...dataGrid },
				componentName
			} = widgetData;

			const widgetKey = componentName ? `${componentName}-${i}` : `${i}`;

			const widgetWidth =
				dataGrid &&
				dataGrid.w &&
				dataGrid.w <= defaultWidgetLayouts[breakpoint].maxW &&
				dataGrid.w >= defaultWidgetLayouts[breakpoint].minW
					? dataGrid.w
					: defaultWidgetLayouts[breakpoint].w;
			const widgetHeight =
				dataGrid &&
				dataGrid.h &&
				dataGrid.h <= defaultWidgetLayouts[breakpoint].maxH &&
				dataGrid.h >= defaultWidgetLayouts[breakpoint].minH
					? dataGrid.h
					: defaultWidgetLayouts[breakpoint].h;

			if (widgetHeight > currentRowHeightMax) {
				currentRowHeightMax = widgetHeight;
			}

			// Checks to see if we need to start a new row
			if (
				currentRowWidth + widgetWidth >
				defaultDashboardConfig.cols[breakpoint]
			) {
				currentRowWidth = 0;
				currentRowY += currentRowHeightMax;
				currentRowHeightMax = 0;
			}

			dataGrid.x = dataGrid.x >= 0 ? dataGrid.x : currentRowWidth;
			dataGrid.y = dataGrid.y >= 0 ? dataGrid.y : currentRowY;

			currentRowWidth += widgetWidth;

			return (
				<Widget
					key={widgetKey}
					component={<></>}
					title={widgetData.title}
					data-grid={{
						...defaultWidgetLayouts[breakpoint],
						...dataGrid
					}}
				/>
			);
		});

		setWidgets(widgetComponents);
	};

	const generateDefaultLayouts = () => {
		const { breakpoints } = defaultDashboardConfig;
		const defaultLayouts = {};

		const layoutKeys = Object.keys(breakpoints);
		layoutKeys.forEach(responsiveKey => {
			let widgetLayout = defaultWidgetLayouts[responsiveKey];
			defaultLayouts[responsiveKey] = [widgetLayout];
		});

		return defaultLayouts;
	};

	return (
		<CustomScroll heightRelativeToParent={`calc(100% - ${headerHeight})`}>
			<ResponsiveGridLayout
				className='dashboard-layout'
				layouts={layouts ? layouts : generateDefaultLayouts()}
				{...defaultDashboardConfig}
				onBreakpointChange={breakpoint => {
					generateWidgets(breakpoint);
				}}
			>
				{widgets}
			</ResponsiveGridLayout>
		</CustomScroll>
	);
};

export default Dashboard;
