import React, { useState } from 'react';
import { Portal } from 'react-portal';

const CategoryToggle = ({ categoryRef, mapEventMap }) => {
	const [open, setOpen] = useState(false);
	return (
		<div className="icons icon-hide" ref={categoryRef}>
			<i onClick={() => setOpen(!open)} className="fa fa-window-maximize" aria-hidden="true"></i>
			{open && <Portal><CategoryPanel close={setOpen} mapEventMap={mapEventMap} /></Portal>}
		</div>
	);
}

const CategoryPanel = ({ close, mapEventMap }) => {
	
	const events = Object.keys(mapEventMap);
	console.log(events);
	
	return (
		<div className="CategoryPanel">
			<div className="Panel Content">
				<i className="fa fa-times Close" aria-hidden="true" onClick={() => close(false)} ></i>
				<div>
					{/* TODO: Add Componenet her for tab on per event type from MapEvent */}
				</div>
			</div>
		</div>
)};

export default CategoryToggle;