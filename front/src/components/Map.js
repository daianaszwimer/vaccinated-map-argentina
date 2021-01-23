import React, { memo } from "react";
import {
	ZoomableGroup,
	ComposableMap,
	Geographies
} from "react-simple-maps";
import MapItem from "./MapItem"

const geoUrl =
	"https://raw.githubusercontent.com/deldersveld/topojson/master/countries/argentina/argentina-provinces.json";

// todo: que sea mobile friendly
const Map = ({ setTooltipContent }) => {
	return (
		<div className="map">
			<ComposableMap data-tip="" projectionConfig={{ scale: 100 }} width={300} height={300}>
					<Geographies geography={geoUrl}>
						{({ geographies }) =>
							geographies.map(geo => (
								<MapItem
									key={geo.rsmKey}
									geo={geo}
									setTooltipContent={setTooltipContent}
								/>
							))
						}
					</Geographies>
			</ComposableMap>
		</div>
	);
};

export default memo(Map);
