import React from 'react';
import './App.css';
import users from "./users";

class App extends React.Component {

state = {
  ironhackersList: users,
  search: ''
}

  render() {
    
const displayIronhackers = this.state.ironhackersList.map((ironhacker) => {
  return(
  <tr>
    <td>{ironhacker.firstName}</td>
    <td>{ironhacker.lastName}</td>
    <td>{ironhacker.campus}</td>
    <td>{ironhacker.role}</td>
  </tr>
  )
})

    return (
      <div>
      <form>
      <label htmlFor
      </form>
      
      <table>
        <tr>
        <th>First name</th>
        <th>Last name</th>
        <th>Campus</th>
        <th>Role</th>
        </tr>
      {displayIronhackers}
      </table>  
      </div>
    );
  }
}

export default App;