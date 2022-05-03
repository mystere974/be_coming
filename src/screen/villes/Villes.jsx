import styled from "styled-components";
import Map from "../map/Map";
import { useReducer } from "react";
import { initialState } from "../../data";
import { Reducer } from "../../Reducer";



const Container = styled.div`
    height: 150vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    background-color: #fff;
    position: relative;
    box-shadow: 0px 0px 10px #ccc;
    margin-top: 60px;
    `

const Wrapper = styled.div`
    height: 100%;
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0px 0px 10px #ccc;
    margin-top: 20px;
    `

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;`



const Villes = () => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    return (
        <>
            {initialState.capitalData.map((capitals, capital_ID) => (
        <Container key={capital_ID}>
                <>
                {console.log(capitals)}
                <Wrapper>
                <div style={{display: "none"}}>
                 <Map key={capital_ID} {...capitals}  />
                </div>
                <h2>{capitals.features[0].properties.name}</h2>
                <p>{capitals.features[0].properties.description}</p>
                <span>Coordonnées: {[
                    capitals.features[0].geometry.coordinates, 
                    capitals.features[1].geometry.coordinates
                ]}
                <ButtonContainer>
                <button onClick={() => dispatch({type: 'ADD_CAPITAL'})}>AJOUTER</button>
                <button onClick={() => dispatch({type: 'EDIT_CAPITAL'})}>MODIFIER</button>
                <button onClick={() => dispatch({type: 'REMOVE_CAPITAL', capital_ID: capitals.properties.capital_ID})}>SUPPRIMER</button>
                </ButtonContainer>
                </span>
                </Wrapper>
                </>
                
        </Container>
            ))}
        </>
    )
}

export default Villes;