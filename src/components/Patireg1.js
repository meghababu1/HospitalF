import React, { Component } from 'react'

export default class Patireg extends Component {
    constructor(props){
        super();
        this.state ={
            patientData : []
        }
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        let patientData = this.state.employeeData;
        let name = this.refs.txtName.value;
        let age  = this.refs.txtAge.value;
        let doctor = this.refs.txtId.value;
        let ward = this.refs.txtWard.value;

        let newPatient = {
            "name" : name,
            "age" : age,
            "doctor" : doctor,
            "ward" : ward
        }
        patientData.push(newPatient);

        this.setState({
            patientData : patientData
        })
        this.refs.myForm.reset()
    }
    render() {
        let patientData = this.state.patientData;
        return (
            <div>
                <form ref="myForm">
                    <label>PatientName</label>
                    <input type="text" ref="txtName" placeholder="Enter Name" />
                    <label>Age</label>
                    <input type="text" ref="txtAge" placeholder="Enter Age" />
                    <label>Doctor Id</label>
                    <input type="number" ref="txtId" placeholder="Enter DoctorId" />
                    <label>Ward</label>
                    <input type="text" ref="txtWard" placeholder="Enter Ward" />
                    <button type="submit" className="btn btn-primary btn-block" onClick={e =>{this.handleSubmit(e)}}>Register</button>
                </form>
                <table>
                    <tr>
                        <th>Patient Name</th>
                        <th>Age</th>
                        <th>Doctor_Id</th>
                        <th>Ward</th>
                        {
                            patientData.map((data,i) =>{
                                <tr key={i}>
                                    <td>{data.name}</td>
                                    <td>{data.age}</td>
                                    <td>{data.doctor}</td>
                                    <td>{data.ward}</td>
                                </tr>
                            })
                        }
                    </tr>
                </table>
            </div>
        )
    }
}
