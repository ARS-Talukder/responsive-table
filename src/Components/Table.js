import React from 'react';
import './Table.css';
import { useEffect, useState } from 'react';
import TableRow from './TableRow';

const Table = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(data => data.json())
            .then(data => setData(data))
    }, [])
    console.log(data)
    return (
        <table className='table'>
            <thead>
                <th>first_name</th>
                <th>last_name</th>
                <th>email</th>
                <th>gender</th>
                <th>ip_address</th>
                <th>airport_code</th>
                <th>time</th>
                <th>status</th>
                <th>mobile</th>
                <th>area</th>
                <th>show</th>
                <th>edit</th>
                <th>Color</th>
            </thead>

            <tbody>
                {
                    data.map(d => <TableRow key={d.id} data={d}></TableRow>)
                }  
            </tbody>

        </table>
    );
};

export default Table;