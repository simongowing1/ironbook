import React from 'react';
import './App.css';
import users from "./users";

class App extends React.Component {

state = {
  ironhackersList: users,
  search: ''
}

handleChange = event => {
  console.log(event.target.value)
  const searchVal = event.target.value;

  function capitalise(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  this.setState((state, props) =>({
    search: capitalise(searchVal),
    ironhackersList: this.state.ironhackersList.filter((ironhacker) => {
    if (ironhacker.firstName.includes(searchVal) || ironhacker.lastName.includes(searchVal))
    {
      return ironhacker
    }
    })
  }))
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
          <label htmlFor="search">Searchbar</label>
          <input
            type="text"
            name="search"
            id="search"
            value={this.state.search}
            onChange={this.handleChange}
          />
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