import React, { useState } from 'react';

const TypeToggle = ({ icons, openFilter, hideType, showType, filterRef, featureRef }) => (
	<div className="icons icon-hide" ref={filterRef} >
		{Object.keys(icons).map((type, i) => <TypeToggleItem key={i} type={type} hideType={hideType(type)} showType={showType(type)}  src={icons[type].options.iconUrl} />)}
		<i onClick={openFilter(filterRef, featureRef)} className="fa fa-filter" aria-hidden="true"></i>
	</div>
);

const TypeToggleItem = ({ hideType, showType, src, type }) => {
	const [toggle, setToggle] = useState(false);
	const [cssClass, setCssClass] = useState("");
	const toggleType = () => {
		if (toggle) {
			setCssClass("");
			setToggle(false);
			showType()
		} else {
			setCssClass("opacity");
			setToggle(true);
			hideType()
		}
	}
	return (
		<img className={`${type} ${cssClass}`} onClick={toggleType} src={src} alt={type} />
	);
}

export default TypeToggle;