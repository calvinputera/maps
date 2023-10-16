import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { divIcon, point, Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import "./maps.css";

function App() {
	const position = [-3.0952311, 120.4639164];

	const markers = [
		{
			geocode: [-3.0952311, 120.4639164],
			popup: "Aku disini 😎",
		},
		{
			geocode: [-3.1952311, 120.6639164],
			popup: "Aku disini 🤣",
		},
		{
			geocode: [-3.2952311, 120.8639164],
			popup: "Aku disini 😊",
		},
		{
			geocode: [-4.4952311, 120.8639164],
			popup: "Aku disini 😃",
		},
		{
			geocode: [-4.5952311, 120.9639164],
			popup: "Aku disini 😏",
		},
	];

	const customIcons = new Icon({
		iconUrl: require("./assets/image/point.png"),
		iconSize: [50, 50],
	});

	const createCustomCluster = (cluster) => {
		return new divIcon({
			html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
			className: "custom-icon",
			iconSize: point(30, 30, true),
		});
	};

	return (
		<>
			<MapContainer
				center={position}
				zoom={7}
				scrollWheelZoom={true}
				className="main-container"
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<MarkerClusterGroup
					chunkedLoading
					iconCreateFunction={createCustomCluster}
				>
					{markers.map((marker) => (
						<Marker position={marker.geocode} icon={customIcons}>
							<Popup>{`${marker.popup} Lat: ${marker.geocode[0]}, Long: ${marker.geocode[1]}`}</Popup>
						</Marker>
					))}
				</MarkerClusterGroup>
			</MapContainer>
		</>
	);
}

export default App;
