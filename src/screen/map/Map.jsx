import NavBar from "../../component/NavBar";
import styled from "styled-components";
import {
    TileLayer,
    MapContainer,
    Marker,
    Popup,
} from 'react-leaflet';
import L from 'leaflet'
import 'leaflet/dist/leaflet.css';






const Container = styled.div`

    height: 60vh;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;`



const mapIcon = L.icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    iconSize: [20, 30],
    shadowSize: [50, 64],
    iconAnchor: [10, 30],
    popupAnchor: [10, -35]
})


const Map = props => {
    console.log(props);
    const center = [45.04399313916874, -0.39699185132995324]
    
    return (
        <div>
           <NavBar />
            <Container>
                <MapContainer
                    center={center}
                    zoom={10}
                    style={{
                        height: '100%',
                        width: '100%',
                        position: 'relative',
                        overflow: 'hidden',
                        borderStyle: 'solid',
                        borderColor: '#ccc',
                        boxShadow: '0px 0px 10px #ccc',
                        borderWidth: '1px',}}    
                >
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />

                    
                    <Marker 
                        key={props.properties.capital_ID} 
                        position={[
                            props.geometry.coordinates[0],
                            props.geometry.coordinates[1]
                            ]}
                        icon={mapIcon}
                        
                        >
                        <Popup>
                            <h3>{props.properties.name}</h3>
                            <p>{props.properties.description}</p>
                        </Popup>
                    </Marker>
                    
                </MapContainer>
            </Container>
        </div>
    )
}

export default Map;