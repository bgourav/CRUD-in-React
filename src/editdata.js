import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';


class EditDataPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            salary: "",
            age:""
        };

    }

    handleSubmit =(e)=> {
   
        e.preventDefault();
        const id = this.props.match.params.id
        const url = `http://dummy.restapiexample.com/api/v1/update/${id}`;

        const data = {
            name: this.state.name,
            salary: this.state.salary,
            age: this.state.age
      
          };

        fetch(url, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log("UPDATED DATA", data)
                if(data){
                    this.props.history.push('/dashboard')
                    alert("User Updated Successfully");
                } else{
                    alert("Error while Updating");

                }
            });

    }

    componentDidMount() {
        const id = this.props.match.params.id
        const url = `http://dummy.restapiexample.com/api/v1/employee/${id}`;

        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log("single user data", data)
                this.setState({ name: data.employee_name, salary: data.employee_salary, age: data.employee_age, })
            });

    }

    render() {
        const { user } = this.state;
        return (

            <div className="form-style-5">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                    <input type="number" name="salary" value={this.state.salary} onChange={(e) => this.setState({ salary: e.target.value })} />
                    <input type="number" name="age" value={this.state.age} onChange={(e) => this.setState({ age: e.target.value })} />
                    <button className="btn" type="submit">Update</button>

                </form>
            </div>
        );
    }


}
export default EditDataPage;