import React from "react";

class Tablesheet extends React.Component{

  constructor(props){
          super(props)
          this.state = {
            list: []
          }

          this.callAPI = this.callAPI.bind(this)
          this.callAPI();
  }

  async deleteId(id) {
    console.log(id);  
      const response = await fetch('https://mockrestapi.herokuapp.com/api/employee/'+id, {method: 'DELETE'});
      if(response.ok){
        this.reRenderTable();
        console.log("Delete Successful!");
      }
      else{
        console.log("Delete Failed!");
      }
  }

  callAPI(){

    fetch("http://mockrestapi.herokuapp.com/api/employee?pageNo=1&limit=5").then(
      (response) => response.json()
    ).then((data) => {
      console.log(data)
      this.setState({
        list:data.data
      })
    })
  }
  render(){
    let tb_data = this.state.list.map((item)=>{
      return(
        <tr key={item.name}>
          <td>{item.name}</td>
          <td>{item.phone}</td>
          <td>{item.email}</td>
          <td>{item.country}</td>
          <td>{item.about}</td>
          <td>{item.age}</td>
          <td>{item.dob}</td>
          <td>{item.address}</td>
          <td>
            {/* <button className="btn btn-danger">Delete</button> */}
            {/* <button onClick={deleteId(id)}>Delete</button> */}
            <button onClick={()=>this.deleteId(item._id)}type="button">Delete</button>
            console.log(id)
          </td>
          <td>
            <button className="btn tn-danger">Add</button>
          </td>
        </tr>
      )
    })
    return (
      <div>
        <h1 align="center">Employee Table</h1>
        <table width="Style:80%">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Country</th>
              <th>About</th>
              <th>Age</th>
              <th>DOB</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {tb_data}
          </tbody>
        </table>
      </div>
    )
  }   
}

export default Tablesheet;