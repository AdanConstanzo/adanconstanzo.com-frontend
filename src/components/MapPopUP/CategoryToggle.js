import React, { useState } from 'react';
import { Portal } from 'react-portal';
import EventCategoryWindow from './EventCategoryWindow';

const CategoryToggle = ({ categoryRef, mapEventMap, mapIcon }) => {
	const [open, setOpen] = useState(false);
	return (
		<div className="icons icon-hide" ref={categoryRef}>
			<i onClick={() => setOpen(!open)} className="fa fa-window-maximize" aria-hidden="true"></i>
			{open && <Portal><CategoryPanel mapIcon={mapIcon} setOpen={setOpen} mapEventMap={mapEventMap} /></Portal>}
		</div>
	);
}

const CategoryPanel = ({ setOpen, mapEventMap, mapIcon }) => {
	return (
		// TODO: Make a generic modal component
		<div className="CategoryPanel">
			<div className="Panel Content CategoryPanelModal">
				<i className="fa fa-times Close" aria-hidden="true" onClick={() => setOpen(false)} ></i>
				<EventCategoryWindow mapEventMap={mapEventMap} setOpen={setOpen} mapIcon={mapIcon} />
			</div>
		</div>
)};

export default CategoryToggle;