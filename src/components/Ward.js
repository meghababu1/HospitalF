import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export const Ward = () => {
    const [patient, setPatient] = useState({
        pid: "",
        name: "",
        age: "",
        did: "",
        ward: ""
      });
      const { pid } = useParams();
      useEffect(() => {
        loadPatient();
      }, []);
      const loadPatient = async () => {
        const res = await axios.get(`http://localhost:3003/patients/`);
        setPatient(res.data);
      };
    return (
        <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">Patient Deatils</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">Id: {patient.id}</li>
        <li className="list-group-item">Patient name: {patient.name}</li>
        <li className="list-group-item">Age {patient.age}</li>
        <li className="list-group-item">Doctor Id: {patient.did}</li>
        <li className="list-group-item">ward: {patient.ward}</li>
      </ul>
    </div>
    )
}

