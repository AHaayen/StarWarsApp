import React from 'react';


export default function Character(props) {
    return (
        <div>
        <h1>{props.name}</h1>
        <p >Eye color: {props.eye_color}</p>
        <p >Hair color: {props.hair_color}</p>
        <p>Birth Year: {props.birth_year}</p>
        </div>
    )
}