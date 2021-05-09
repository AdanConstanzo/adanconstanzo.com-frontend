import React, { useState, useRef, useEffect } from 'react';

let line = null;
let latlngs = [];

const FeatureToggle = ({ filterRef, featureRef, openFeature, MyMapClickFunction }) => {
	// States
	const [open, setOpen] = useState(false);
	const [startAlert, setStartAlert] = useState(false);
	const [startRecord, setStartRecord] = useState(false);
	const [featureIcons, setFeatureIcons] = useState([]);	
	// Refs
	const openFeatureIcon = useRef(null);
	const RecordIcon = useRef(null);
	const AlertIcon = useRef(null);
	const CloseIcon = useRef(null);
	// Globals
	const mymap = window.mymap;
	const L = window.L;

	const OpenFeatures = (_) => {
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
	const Undo = () => {
		latlngs.pop();
		RemoveLine();
		line = new L.polyline(latlngs, {
			color: 'red',
			weight: 3,
			opacity: 0.5,
			smoothFactor: 1
		});
		line.addTo(mymap);
	}
	const CloseFeatures = () => {
		if (startRecord) {
			Undo();
			console.log('undo');
		} else {
			setOpen(false);
			RemoveLine();
			OpenFeatures(null);
			if (startAlert) {
				AlertFunction(null);
			}
		}
	}
	const AlertMapCords = (e) => {
		const latLongMessage = `Lat: ${e.latlng.lat}\nLon:${e.latlng.lng}`;
		alert(latLongMessage + '\nCheck Console');
		console.log(latLongMessage);
	}

	const AlertFunction = (_) => {
		if (startAlert) {
			AlertIcon.current.classList.remove('active');
			mymap.off('click');
			mymap.on('click', MyMapClickFunction);
		} else {
			if (startRecord) {
				StartRecordFunction();
				RemoveLine();
			}
			AlertIcon.current.classList.add('active');
			mymap.off('click');
			mymap.on('click', AlertMapCords);
		}
		setStartAlert(!startAlert);
	}
	const RemoveLine = () => {
		if (line !== null) {
			if (line.remove) {
				line.remove(mymap);
			}
		}
	}
	const StartRecording = (e) => {
		latlngs.push([e.latlng.lat, e.latlng.lng]);
		RemoveLine();
		line = new L.polyline(latlngs, {
			color: 'red',
			weight: 3,
			opacity: 0.5,
			smoothFactor: 1
		});
		line.addTo(mymap);
	}
	const StartRecordFunction = (_) => {
		if (startRecord) {
			RecordIcon.current.classList.remove('active');
			RecordIcon.current.classList.remove('record')
			CloseIcon.current.classList.remove('undo')
			mymap.off('click');
			mymap.on('click', MyMapClickFunction);
			alert("Saved latitude and longitude to local storage and console.\nCheck Recording");
			localStorage.setItem('Recording', JSON.stringify(latlngs));
			console.log('Recording', latlngs);
			latlngs = [];
		} else {
			if (startAlert) {
				AlertFunction(null);
			}
			RecordIcon.current.classList.add('active');
			RecordIcon.current.classList.add('record')
			CloseIcon.current.classList.add('undo')
			mymap.off('click');
			mymap.on('click', StartRecording)
		}
		setStartRecord(!startRecord);
	}
	useEffect(() => {
		const featureIconsDom = document.querySelectorAll('.features .feature');
		setFeatureIcons(Array.from(featureIconsDom));
	}, [])
	return (
		<div className="features icon-hide" ref={featureRef}>
			<i onClick={AlertFunction} ref={AlertIcon} className="fa fa-bullhorn DisplayNone feature" aria-hidden="true"></i>
			<i onClick={StartRecordFunction} ref={RecordIcon} className="fa fa-bullseye DisplayNone feature" aria-hidden="true"></i>
			<i onClick={CloseFeatures} ref={CloseIcon} className="fa fa-times DisplayNone feature" aria-hidden="true"></i>
			<i onClick={OpenFeatures} ref={openFeatureIcon} className="fa fa-archive" aria-hidden="true"></i>
		</div>
	);
}
export default FeatureToggle;