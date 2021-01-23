import {useState} from "react"
import './App.css'
import MapChart from "./components/Map"
import ReactTooltip from "react-tooltip";

function App () {
	const [content, setContent] = useState("");

	return (
		<div className="app">
			<MapChart setTooltipContent={setContent} />
			<ReactTooltip>{content}</ReactTooltip>
		</div>
	)
}

export default App
