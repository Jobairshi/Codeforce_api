import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Contest from './Contest';


export default function Problem() {
    const [data, setData] = useState({});
    const [inputNumber, setInputNumber] = useState('');
    const [User_name,setUser_name] = useState('');
    useEffect(() => {
        if (inputNumber !== '') {
            axios
                .get(`https://codeforces.com/api/user.status?handle=${User_name}&from=1&count=${inputNumber}`)
                .then((res) => {
                    setData(res.data);
                });
        }
    }, [User_name, inputNumber]);

    console.log(data);

    const handleInputChange = (e) => {
        setInputNumber(e.target.value);
    };
    const submitName=(e)=>{
        setUser_name(e.target.value);
    };
    console.log(User_name);
    return (
        <div>
            <div className='input-container'>
                <textarea
                    placeholder='Enter a number'
                    value={inputNumber}
                    onChange={handleInputChange}
                />
            </div>
            <div className='input-container'> 
            <textarea
                    placeholder='Enter codeforce id'
                    value={User_name}
                    onChange={submitName}
                />

            </div>
            {data.status === "OK" && data.result.length > 0 && (
                <table className='problem-table'>
                    <thead>
                        <tr>
                            <th>Problem Name</th>
                            <th>Rating</th>
                            <th>Tags</th>
                            <th>Links</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.result.map((prob) => {
                            if (prob.verdict === "OK") {
                                return (
                                    <tr key={prob.id}>
                                        <td>{prob.problem.name}</td>
                                        <td>{prob.problem.rating}</td>
                                        <td>{prob.problem.tags[0]}</td>
                                        <td>
                                            <a href={`https://codeforces.com/contest/ ${prob.problem.contestId}/problem/${prob.problem.index}`}>Solve</a>
                                        </td>
                                       
                                       
                                    </tr>
                                );
                            }
                            return null; 
                        })}
                    </tbody>
                </table>
            )}
        </div>
    );
}
