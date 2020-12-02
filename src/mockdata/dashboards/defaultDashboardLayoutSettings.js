export const defaultDashboardConfig = {
	breakpoints: {
		lg: 1200,
		md: 996,
		sm: 768,
		xs: 480,
		xxs: 320
	},
	cols: {
		lg: 12,
		md: 12,
		sm: 6,
		xs: 4,
		xxs: 1
	},
	compactType: 'vertical',
	measureBeforeMount: true,
	autoSize: false,
	margin: [30, 30],
	containerPadding: [30, 30],
	rowHeight: 40,
	useCSSTransforms: true,
	preventCollision: false,
	static: false,
	isDraggable: true,
	isResizable: true
};

export const defaultWidgetLayouts = {
	lg: {
		w: 3,
		h: 4,
		x: 0,
		y: 0,
		minW: 4,
		maxW: defaultDashboardConfig.cols.lg,
		minH: 4,
		maxH: defaultDashboardConfig.cols.lg,
		static: defaultDashboardConfig.static,
		isDraggable: defaultDashboardConfig.isDraggable,
		isResizable: defaultDashboardConfig.isResizable
	},
	md: {
		w: 4,
		h: 4,
		x: 0,
		y: 0,
		minW: 2,
		maxW: defaultDashboardConfig.cols.md,
		minH: 2,
		maxH: defaultDashboardConfig.cols.md,
		static: defaultDashboardConfig.static,
		isDraggable: defaultDashboardConfig.isDraggable,
		isResizable: defaultDashboardConfig.isResizable
	},
	sm: {
		w: 2,
		h: 4,
		x: 0,
		y: 0,
		minW: 1,
		maxW: defaultDashboardConfig.cols.sm,
		minH: 1,
		maxH: defaultDashboardConfig.cols.sm,
		static: defaultDashboardConfig.static,
		isDraggable: defaultDashboardConfig.isDraggable,
		isResizable: defaultDashboardConfig.isResizable
	},
	xs: {
		w: 2,
		h: 4,
		x: 0,
		y: 0,
		minW: 2,
		maxW: defaultDashboardConfig.cols.xs,
		minH: 2,
		maxH: defaultDashboardConfig.cols.xs,
		static: defaultDashboardConfig.static,
		isDraggable: defaultDashboardConfig.isDraggable,
		isResizable: defaultDashboardConfig.isResizable
	},
	xxs: {
		w: 1,
		h: 4,
		x: 0,
		y: 0,
		minW: 1,
		maxW: defaultDashboardConfig.cols.xxs,
		minH: 1,
		maxH: 4,
		static: defaultDashboardConfig.static,
		isDraggable: defaultDashboardConfig.isDraggable,
		isResizable: defaultDashboardConfig.isResizable
	}
};
