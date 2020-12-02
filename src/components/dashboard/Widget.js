import React from 'react';

const Widget = props => {
	const { title, className, component, children, icon } = props;

	return (
		<div {...props} className={`widget ${className}`}>
			<div className='widget-header'>
				<div className='widget-title'>
					<i className={`icons ${icon} d-inline-block`}></i>
					<h5 className='d-inline-block'>{title}</h5>
				</div>
			</div>
			<div className='widget-content'>{component ? component : ''}</div>
			{children}
		</div>
	);
};

export default Widget;
