import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

export default function Politics() {
    const [politics, setPolitics] = useState([]);
    useEffect(() => {
        fetch("http://printsanaccess.online/api/Explore/GetPolicies")
            .then((response) => response.json())
            .then(response => setPolitics(response))
            .catch(error => console.log(error))
    }, []);

    const politicsAll = politics.map(item => (
        <tr>
            <td>{item.Header.toUpperCase()}</td>
            <td><a className="text-decoration-none text-danger" href={item.PDFUrl} target="_blank" rel="noreferrer">PDF</a></td>
        </tr>
    ))
    return (
        <section style={{ padding: "40px 0px", overflow: "hidden" }}>
            <h2 className="text-center container-fluid  p-2 alert alert-danger border-0 rounded-0 " style={{ "width": "85%","fontSize": "2.8rem" }}>Politikalar</h2>
            <div className="container-fluid" style={{ "width": "85%" }}>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Başlık</th>
                            <th scope="col">İçerik</th>
                        </tr>
                    </thead>
                    <tbody>
                        {politicsAll}

                    </tbody>
                </table>
            </div>

        </section>

    )
}
