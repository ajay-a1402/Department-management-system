
import React, { Component } from 'react'
import { register } from '../../ApiService'
import "./register.css";
class Register extends Component {
  constructor() {
    super()
    this.state = {
      Name: '',
      studentId: '', 
      email: '',
      depertment:'',
      password: '',
     type:'',
      errors: {}
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const newUser = {
      Name: this.state.Name,
      studentId: this.state.studentId,
      email: this.state.email,
      password: this.state.password,
      depertment:this.state.depertment,
      type:this.state.type
  
    }

    register(newUser).then(res => {
      this.props.history.push('/login')
    })
  }

  render() {
    return (
      <div className="canteiner" style={{textAlign:"center"}}>
            <form noValidate onSubmit={this.onSubmit} style={{width: "min-content",borderStyle:"groove",width:"370px",marginTop:"20px",marginLeft:"465px",borderRadius:"10px",background:"#FFE3FA"}}>
              <h1  style={{marginTop:"15px" ,color:"blueviolet"}}> Register!</h1>
              <div className="form-group"style={{marginTop:"25px"}}>
                <label htmlFor="email" style={{color:"blueviolet",textAlign:"-moz-initial"}}>Name</label>
               </div>
               <div style={{marginTop:"10px"}}>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="                 Name"
                  // value={this.state.Name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group"style={{marginTop:"20px"}}>
                <label htmlFor="email" style={{color:"blueviolet",textAlign:"-moz-initial"}}>StudentId</label>
               </div>
               <div style={{marginTop:"10px"}}>
                <input
                  type="text"
                  className="form-control"
                  name="StudentId"
                  placeholder="              Student Id"
                  // value={this.state.studentId}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group"style={{marginTop:"20px"}}>
                <label htmlFor="email" style={{color:"blueviolet",textAlign:"-moz-initial"}}>Email address</label>
               </div>
               <div style={{marginTop:"10px"}}>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  placeholder="           Enter email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group"style={{marginTop:"20px"}}>
                <label style={{color:"blueviolet",textAlign:"-moz-initial"}}>Depertment</label>
               </div>
               <div style={{marginTop:"10px"}}>
                <input
                  type="text"
                  className="form-control"
                  name="depertment"
                  placeholder="           Depertment"
                  value={this.state.depertment}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group"style={{marginTop:"20px"}}>
                <label  style={{color:"blueviolet",textAlign:"-moz-initial"}}>Type of person</label>
               </div>
               <div style={{marginTop:"10px"}}>
                <input
                  type="text"
                  className="form-control"
                  name="type"
                  placeholder="         Type of person"
                  value={this.state.type}
                  onChange={this.onChange}
                />
              </div>

Barath Mca, [27.03.21 12:04]
<div className="form-group" style={{marginTop:"20px",color:"blueviolet"}}>
                <label htmlFor="password">Password</label>
                </div>
                <div style={{marginTop:"10px"}}>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="            Password"
                  
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <button 
                type="submit"
                style={{marginTop:"30px" ,marginBottom:"30px",backgroundColor:"#CE17E4",width:"118px",height:"28px",borderRadius:"7px",borderColor:"white",color:"white"}}
              >
                Register!
              </button>
            </form>
          </div>
    )
  }
}

export default Register