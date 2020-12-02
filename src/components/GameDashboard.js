import React from 'react';
import Dashboard from './dashboard/Dashboard';
import { gameWidgetData } from '../mockdata/widgets/game/gameWidgetData';

import { h2Height } from '../constants/layout';

const GameDashboard = () => {
	return (
		<div className='dashboard portfolio-dashboard-container orange h-100'>
			<div className='row h-100'>
				<div className='col h-100'>
					<div
						className='portfolio-dashboard-header'
						style={{ height: h2Height }}
					>
						<h2 className='ml-2 portfolio-dashboard-title'>
							Games
						</h2>
					</div>
					<Dashboard
						widgetData={gameWidgetData}
						headerHeight={h2Height}
					/>
				</div>
			</div>
		</div>
	);
};

export default GameDashboard;
