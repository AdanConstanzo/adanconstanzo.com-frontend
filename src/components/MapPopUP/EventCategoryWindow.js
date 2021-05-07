import React, { useState } from 'react';
import { FormatUrlSrc } from '../../utils/index';

const EventCategoryWindow = ({ mapEventMap, mapIcon, setOpen }) => {
	return (
		<div className="EventCategoryWindow">
			<DesktopView mapIcon={mapIcon} setOpen={setOpen} mapEventMap={mapEventMap} />
		</div>
	);
};

const DesktopView = ({ mapIcon, mapEventMap, setOpen }) => {
	const [view, setView] = useState("hike");
	return(
		<React.Fragment>
			<DesktopTable setOpen={setOpen} view={view} mapEventMap={mapEventMap} />
			<DesktopEventDivision view={view} setView={setView} mapIcon={mapIcon} />
		</React.Fragment>
	);
}

const DesktopTable = ({ view, mapEventMap, setOpen }) => {
	return (
		<div className="DesktopTable">
			<table>
				<tr>
					<th>Name</th>
					<th>City</th>
					<th>State</th>
					<th>Rating</th>
				</tr>
				<TableData view={view} mapEventMap={mapEventMap} setOpen={setOpen} />
			</table>
		</div>
	);
};

const TableData = ({ view, mapEventMap, setOpen }) => {
	const keys = Object.keys(mapEventMap[view]);
	return(
		keys.map(ele => <EventTableRow setOpen={setOpen} ele={mapEventMap[view][ele]} />)
	)
}


const HandleClick = (ele, setOpen) => () => {
	const { latitude, longitude } = ele;
	setOpen(false);
	setTimeout(() => {
		ele.marker._events.click[0].fn(null, latitude, longitude);	
	}, 100);
	
}

const EventTableRow = ({ele, setOpen}) => (
	<tr>
		<td className="Clickable" onClick={HandleClick(ele, setOpen)} >{ele.name}</td>
		<td>{ele.city}</td>
		<td>{ele.state}</td>
		<td>{ele.starRating}/5</td>
	</tr>
)

const DesktopEventDivision = ({ mapIcon, setView, view }) => (
	<div className="DesktopEventDivision">
		{Object.keys(mapIcon).map((key, i) => {
				if (key !== "__typename") {
					const url = mapIcon[key].url;
					return (
						<div>
							<img onClick={() => setView(key)} className={view === key ? "" : "opacity" } key={i} src={FormatUrlSrc(url)} />
						</div>
					);
				}
			})}
	</div>
);



export default EventCategoryWindow;