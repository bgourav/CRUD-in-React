import React from 'react';
import './App.css';
import { withRouter } from 'react-router-dom';

class RegistryForm extends React.Component {
  state = {
    name: "",
    salary: "",
    age:""
  }

  handleSubmit =(e)=> {
   
e.preventDefault();
    const url = 'http://dummy.restapiexample.com/api/v1/create';
    const data = {
      name: this.state.name,
      salary: this.state.salary,
      age: this.state.age

    };

    try {
     fetch(url, {
        method: 'POST', 
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res=> res.json()).then( res=> 
      {
        if(res.id){
          this.props.history.push('/dashboard')
          alert("user created Successfully");

        }
      });
          
    } catch (error) {
      console.error('Error:', error);
    }
  }


  render() {

    return (
  
<div className="form-style-5">
<form onSubmit={this.handleSubmit}>
<fieldset>
<legend> User Registry Form</legend>
<input type="text" name="name" placeholder="Your name" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })}/>
<input type="number" name="salary" placeholder="Salary" value={this.state.salary} onChange={(e) => this.setState({ salary: e.target.value })}/>
<input type="number" name="age" placeholder="Age" value={this.state.age} onChange={(e) => this.setState({ age: e.target.value })}/>
<button className="btn" type="submit">Submit</button>

</fieldset>

</form>
        
</div>

    );
  }

}

export default withRouter(RegistryForm);
