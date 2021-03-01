import React from 'react';
import './App.css';
import users from "./users";

class App extends React.Component {

state = {
  search: ''
}

handleChange = event => {
  console.log(event.target.value)
  let searchVal = event.target.value.toLowerCase();

  this.setState((state, props) =>({
    search: searchVal,
  }))
}

  render() {

const filteredUsers = users.filter((ironhacker) => {
    if (ironhacker.firstName.toLowerCase().includes(this.state.search) 
      || ironhacker.lastName.includes(this.state.search))
      {
        return ironhacker
      }
      })
    
const displayIronhackers = filteredUsers.map((ironhacker) => {
  let linkedinImage;
  let superLink; 
  if (ironhacker.linkedin) {
    superLink = ironhacker.linkedin
    linkedinImage = 'linkedin.png'
  } else {
    superLink = ''
  }
  
  return(
  <tr>
    <td>{ironhacker.firstName}</td>
    <td>{ironhacker.lastName}</td>
    <td>{ironhacker.campus}</td>
    <td>{ironhacker.role}</td>
    <td><a href= {superLink}><img src={linkedinImage}></img></a></td>
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
        <th>LinkedIn</th>
        </tr>
      {displayIronhackers}
      </table>  
      </div>
    );
  }
}

export default App;