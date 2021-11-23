import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

export default function Politics() {
    const [politics, setPolitics] = useState([]);
    useEffect(() => {
        fetch("http://printsanaccess.online/api/Explore/GetPolicies")
            .then((response) => response.json())
            .then(response => setPolitics(response))
    }, []);

    const politicsAll = politics.map(item => (
        <tr>
            <td>{item.PolicyId}</td>
            <td>{item.Header}</td>
            <td><a className="text-decoration-none text-danger" href={item.PDFUrl} target="_blank">PDF</a></td>
            <td>{item.Text}</td>
        </tr>
    ))
    return (
        <section style={{ padding: "80px 0px", overflow: "hidden" }}>
            <h2 className="text-center container-fluid  p-2 alert alert-danger border-0 rounded-0 " style={{ "width": "85%" }}>Politikalar</h2>
            <div className="container-fluid" style={{ "width": "85%" }}>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Başlık</th>
                            <th scope="col">Pdf</th>
                            <th scope="col">Yazı</th>
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
