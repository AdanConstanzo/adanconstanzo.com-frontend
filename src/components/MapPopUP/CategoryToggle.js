import React, { useState } from 'react';
import { Portal } from 'react-portal';

const CategoryToggle = ({ categoryRef }) => {
	const [open, setOpen] = useState(false);
	return (
		<div className="icons icon-hide" ref={categoryRef}>
			<i onClick={() => setOpen(!open)} className="fa fa-window-maximize" aria-hidden="true"></i>
			{open && <Portal><CategoryPanel close={setOpen} /></Portal>}
		</div>
	);
}

const CategoryPanel = ({ close }) => (
	<div className="CategoryPanel">
		<div className="Panel Content">
			<i className="fa fa-times Close" aria-hidden="true" onClick={() => close(false)} ></i>
		</div>
	</div>
);

export default CategoryToggle;