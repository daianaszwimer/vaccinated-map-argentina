import {Geography} from "react-simple-maps"

const MapItem = ({geo, setTooltipContent}) => {
	// leer de selector el valor en base a la key, alli estaran los valores que llegan de la api
	const rounded = num => {
		return "31231"
	};
	const handleOnMouseEnter = () => {
		const { NAME_1, POP_EST } = geo.properties;
		setTooltipContent(`${NAME_1} — ${rounded(POP_EST)}`);
	}
	const handleOnMouseLeave = () => {
		setTooltipContent("");
	}
	return (
		<Geography
			geography={geo}
			onMouseEnter={handleOnMouseEnter}
			onMouseLeave={handleOnMouseLeave}
			style={{
				default: {
					fill: "#D6D6DA",
					outline: "none"
				},
				hover: {
					fill: "#FE5E41",
					outline: "none"
				},
				pressed: {
					fill: "#E42",
					outline: "none"
				}
			}}
		/>
	)
}

export default MapItem