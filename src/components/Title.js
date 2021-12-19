import React from 'react';
import {inputText} from "../redux/actions";
import {useDispatch, useSelector} from "react-redux";

const Title = (props) => {

    const dispatch = useDispatch()
    const text = useSelector((state) => {
        const { inputReducer } = state;
        return inputReducer.text
    })


    const handleChange = (event) => {
        dispatch(inputText(event.target.value))
    }


    return (
        <div className='card-title'>
            <div className='card-title-top'>
                <input type='text' onChange={handleChange} placeholder='enter your title'/>
            </div>
            <p>{text}</p>
        </div>
    );
};

export default Title;