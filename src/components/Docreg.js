import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './style.css'

const Docreg = () => {
    const [doctors, setDoctor] = useState([]);

  useEffect(() => {
    loadDoctors();
  }, []);

  const loadDoctors = async () => {
    const result = await axios.get("http://localhost:3001/doctors");
    setDoctor(result.data.reverse());
  };

  const deleteDoctor = async id => {
    await axios.delete(`http://localhost:3001/doctors/${id}`);
    loadDoctors();
  };
    return (
        <div className="app-container">
            <h1>Doctor Registration</h1>
            <div>
                <form>
                <div className="form-group">
                    <label>Doctor Id</label>
                    <input type="text" className="form-control" placeholder="Doctor Id"  />
                </div>

                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Department</label>
                    <input type="text" className="form-control" placeholder="Enter Department" />
                </div>
                <br/>
                <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
            <div className="container">
           <div className="py-4">
        <h2>Doctor Details</h2>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Doctor Id</th>
              <th scope="col">Name</th>
              <th scope="col">Department</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, index) => (
              <tr>
                <td>{doctor.did}</td>
                <td>{doctor.name}</td>
                <td>{doctor.dept}</td>
                <td>
                  <Link class="btn btn-primary mr-2" to={`/doctors/${doctor.id}`}>
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/doctors/edit/${doctor.id}`}>Edit</Link>
                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteDoctor(doctor.id)}>
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
 </div>
)};
export  default Docreg;
