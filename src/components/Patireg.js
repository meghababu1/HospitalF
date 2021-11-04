import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

export const Patireg = () => {
   
  let history = useHistory();
  const [patient, setPatient] = useState({
    pid: "",
    name: "",
    age: "",  
    did: "",
    ward: ""
  });

  const { pid,name, age, did, ward } = patient;
  const onInputChange = e => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3001/patients", patient);
    history.push("/");
  }
    return (
        <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Patient Registration</h2>
          <form onSubmit={e => onSubmit(e)}>
            <div className="form-group">
              <input
                type="number"
                className="form-control form-control-lg"
                placeholder="Enter Your Patient Id"
                name="pid"
                value={pid}
                onChange={e => onInputChange(e)}
              />
            </div>
            <br/>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Patientname"
                name="name"
                value={name}
                onChange={e => onInputChange(e)}
              />
            </div>
            <br/>
            <div className="form-group">
              <input
                type="number"
                className="form-control form-control-lg"
                placeholder="Enter Your Age"
                name="age"
                value={age}
                onChange={e => onInputChange(e)}
              />
            </div>
            <br/>
            <div className="form-group">
              <input
                type="number"
                className="form-control form-control-lg"
                placeholder="Enter Your Doctor Id"
                name="did"
                value={did}
                onChange={e => onInputChange(e)}
              />
            </div>
            <br/>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Ward Name"
                name="ward"
                value={ward}
                onChange={e => onInputChange(e)}
              />
            </div>
            <br/>
            <button className="btn btn-primary btn-block">Register</button>
          </form>
        </div>
      </div>
    )
}

