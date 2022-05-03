import NavBar from "../../component/NavBar";
import { initialState } from "../../data";
import { Reducer } from "../../Reducer";
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
    
    const center = [45.04399313916874, -0.39699185132995324]
    const mapTest = [
        {name: 'Rome', description:'La capitale de l\'italie, 2873000 habitants', lat: 41.9098128620644, lon: 12.533893273348621},
        {name: 'Copenhagen', description:'La capitale de la danemark, 5000000 habitants',lat: 55.687499, lon: 12.574722}, 
        {name: 'Berlin', description:'La capitale de l\'allemagne, 10000000 habitants', lat: 52.52, lon: 13.404954},
        {name: 'Madrid', description:'La capitale de l\'espagne, 30000000 habitants', lat: 40.4, lon: -3.7037},
        {name: 'Budapest', description:'La capitale de la hongrie, 17000000 habitants', lat: 47.497912, lon: 19.040235},]
    
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

                    {mapTest.map((e, index) => (
                    <Marker 
                        key={index} 
                        position={[
                            e.lat, e.lon
                            ]}
                        icon={mapIcon}
                        
                        >
                        <Popup>
                            <h3>{e.name}</h3>
                            <p>{e.description}</p>
                        </Popup>
                    </Marker>
                    ))}
                </MapContainer>
            </Container>
        </div>
    )
}

export default Map;