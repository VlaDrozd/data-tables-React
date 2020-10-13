import { useState } from "react"
import { addPerson } from "../store/People/actions";


export const usePeopleForm = (dispatcher) => {
    const [name, setName] = useState('');
    const [height, setHeight] = useState('');
    const [gender, setGender] = useState('n/a');
    const [mass, setMass] = useState('');

    const changeName = (e) => {
        setName(e.target.value);
    } 

    const changeHeight = (e) => {
        setHeight(e.target.value);
    } 

    const changeGender = (e) => {
        setGender(e.target.value);
    }

    const changeMass = (e) => {
        setMass(e.target.value);
    }

    const submitForm = () => {
        dispatcher(addPerson({
            name, mass, gender, height
        }));
    }

    return {
        nameInput: {
            value: name,
            onChange: changeName
        },
        heightInput: {
            value: height,
            onChange: changeHeight
        },
        genderInput: {
            value: gender,
            onChange: changeGender
        },
        massInput: {
            value: mass, 
            onChange: changeMass
        },
        submitButton: {
            onClick: submitForm
        }
    }
}