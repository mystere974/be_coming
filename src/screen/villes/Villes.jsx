import styled from "styled-components";
import { capitalData } from "../../data";
import Map from "../map/Map";
import { useReducer } from "react";
import { initialState } from "../../Reducer";
import reducer from "../../Reducer";



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
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
        <Container>
            {capitalData.features.map((capitals, index) => (
                <>
                {console.log(capitals)}
                <Wrapper>
                <div style={{display: "none"}}>
                 <Map key={index} {...capitals}  />
                </div>
                <h2>{capitals.properties.name}</h2>
                <p>{capitals.properties.description}</p>
                <p>Coordonnées: {[
                    capitals.geometry.coordinates[0], 
                    capitals.geometry.coordinates[1]
                ]}
                <ButtonContainer>
                <button onClick={() => dispatch({type: 'ADD_CAPITAL'})}>AJOUTER</button>
                <button onClick={() => dispatch({type: 'EDIT_CAPITAL'})}>MODIFIER</button>
                <button onClick={() => dispatch({type: 'REMOVE_CAPITAL'})}>SUPPRIMER</button>
                </ButtonContainer>
                </p>
                </Wrapper>
                </>
                ))}
        </Container>
        </>
    )
}

export default Villes;