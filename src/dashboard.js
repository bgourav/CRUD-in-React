import React from 'react';
import './App.css';
import { Link, withRouter } from 'react-router-dom';

const url = 'http://dummy.restapiexample.com/api/v1/employees';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      userData: [],
    };

  }

  componentDidMount() {
  fetch(url,{
  method: 'GET', 
  headers: {
  'Content-Type': 'application/json'
  }
  })
  .then(response => response.json())
  .then(data => { 
    this.setState({ userData: data })});
  }


  handleDelete=(id)=> {
    // here we can use any keyword in place of id and have to use same keyword at the end of url
    const url = `http://dummy.restapiexample.com/api/v1/delete/${id}`;

        fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
              if(data){
                alert(data.success.text);
                console.log("deleted msg", data)
              }
            });
  }

  render() {
    const { userData } = this.state;
    return (
      <div>
       
        <table>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Salary</th>
            <th>Age</th>
            <th colSpan="2">Action</th>
          </tr>
       
        {userData && userData.map(obj =>

            <tr>
              <td>{obj.id}</td>
              <td>{obj.employee_name}</td>
              <td>{obj.employee_salary}</td>
              <td>{obj.employee_age}</td>
              <button className="btn" type="submit"> <Link class="abc" to={`/update/${obj.id}`}>Edit</Link></button>
              <button className="btn" onClick={()=>this.handleDelete(obj.id)}>Delete</button>
              
            </tr>

        )}
        </table>
      </div>
    );
  }


}
export default withRouter(App);