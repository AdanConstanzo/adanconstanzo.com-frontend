// Libraries
import React, { useState, useRef, useEffect } from 'react';

const FeatureToggle = ({ filterRef, featureRef, openFeature, MyMapClickFunction }) => {
	// States
	const [open, setOpen] = useState(false);
	const [startAlert, setStartAlert] = useState(false);
	const [startRecord, setStartRecord] = useState(false);
	const [featureIcons, setFeatureIcons] = useState([]);
	// Refs
	const openFeatureIcon = useRef(null);
	const mymap = window.mymap;

	const OpenFeatures = (e) => {
		openFeature(featureRef, filterRef)();
		if (open) {
			openFeatureIcon.current.classList.remove('DisplayNone');
			featureIcons.forEach(ele => ele.classList.add('DisplayNone'));
		} else {
			openFeatureIcon.current.classList.add('DisplayNone');
			featureIcons.forEach(ele => ele.classList.remove('DisplayNone'));
		}
		setOpen(!open);
	}
	const CloseFeatures = () => {
		setOpen(false);
		OpenFeatures(null);
	}
	function AlertMapCords(e) {
		const latLongMessage = `Lat: ${e.latlng.lat}\nLon:${e.latlng.lng}`;
		alert(latLongMessage + '\nCheck Console');
		console.log(latLongMessage);
	}

	// console.log("Lat, Lon : " + e.latlng.lat + ", " + e.latlng.lng);
	const AlertFunction = (e) => {
		if (startAlert) {
			e.currentTarget.classList.remove('active');
			mymap.off('click');
			mymap.on('click', MyMapClickFunction);
		} else {
			e.currentTarget.classList.add('active');
			mymap.on('click', AlertMapCords);
		}
		setStartAlert(!startAlert);
	}
	const StartRecordFunction = (e) => {
		if (startRecord) {
			e.currentTarget.classList.remove('active');
			e.currentTarget.classList.remove('record')
		} else {
			e.currentTarget.classList.add('active');
			e.currentTarget.classList.add('record')
		}
		setStartRecord(!startRecord);
	}
	useEffect(() => {
		const featureIconsDom = document.querySelectorAll('.features .feature');
		setFeatureIcons(Array.from(featureIconsDom));
	}, [])
	return (
		<div className="features icon-hide" ref={featureRef}>
			<i onClick={AlertFunction} className="fa fa-bullhorn DisplayNone feature" aria-hidden="true"></i>
			<i onClick={StartRecordFunction} className="fa fa-bullseye DisplayNone feature" aria-hidden="true"></i>
			{/* <i className="fa fa-check" aria-hidden="true"></i> */}
			<i onClick={CloseFeatures} className="fa fa-times DisplayNone feature" aria-hidden="true"></i>
			<i onClick={OpenFeatures} ref={openFeatureIcon} className="fa fa-archive" aria-hidden="true"></i>
		</div>
	);
}
export default FeatureToggle;