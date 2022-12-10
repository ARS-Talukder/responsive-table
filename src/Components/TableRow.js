import React, { useState } from 'react';
import { GithubPicker } from 'react-color';

const TableRow = ({ data }) => {
    const [currentColor,setCurrentColor]=useState('#fff');
    const handleOnChange=(color)=>{
        setCurrentColor(color.hex)
    }

    const appStyle={
        backgroundColor:currentColor
    }
    
    const { first_name, last_name, email, gender, ip_address, airport_code, time, status, mobile, area, show, edit } = data;
    return (
        <tr style={appStyle}>
            <td data-label="First name">{first_name}</td>
            <td data-label="Last name">{last_name}</td>
            <td data-label="Email">{email}</td>
            <td data-label="Gender">{gender}</td>
            <td data-label="IP address">{ip_address}</td>
            <td data-label="Airport code">{airport_code}</td>
            <td data-label="Time">{time}</td>
            <td data-label="Status">{status === "true" ? <span style={{color:"green"}}>{status}</span> : <span style={{color:"red"}}>{status}</span>}</td>
            <td data-label="Mobile">{mobile}</td>
            <td data-label="Area">{area}</td>
            <td data-label="Show">{show}</td>
            <td data-label="Edit">{edit}</td>
            <td data-label="Edit"><GithubPicker color={currentColor} onChangeComplete={handleOnChange}/></td>
        </tr>
    );
};

export default TableRow;