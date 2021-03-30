import React, { Component } from 'react'
function Card (){
 
    return (
      <div className="container" style={{ backgroundImage: "url(/s2.jpg)" }}>
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
          <h2 style={{}}>RATHNAVEL SUBRAMANIAM COLLEGE OF ARTS AND SCIENCE </h2>
          
            <h2 style={{}}>(AUTONOMOUS)</h2>
            <h2 style={{}}>DEPARTMENT MANAGEMENT SYSTEM</h2>
            <h1 className="text-center">WELCOME</h1>
            <button 
                type="submit"
                style={{marginTop:"30px" ,marginBottom:"50px",backgroundColor:"#CE17E4",width:"180px",height:"28px",borderRadius:"7px",borderColor:"white",color:"white"}}
              >STUDENTS DETAILS</button>
               <button 
                type="submit"
                style={{marginTop:"30px" ,marginBottom:"50px",backgroundColor:"#CE17E4",width:"180px",height:"28px",borderRadius:"7px",borderColor:"white",color:"white"}}
              >STUDENTS UPDATES</button>
            <button 
                type="submit"
                style={{marginTop:"30px" ,marginBottom:"50px",backgroundColor:"#CE17E4",width:"180px",height:"28px",borderRadius:"7px",borderColor:"white",color:"white"}}
              > WEEKLY SPECIAL</button>
                   <button 
                type="submit"
                style={{marginTop:"30px" ,marginBottom:"50px",backgroundColor:"#CE17E4",width:"180px",height:"28px",borderRadius:"7px",borderColor:"white",color:"white"}}
              >SEND UPDATES</button>
          </div>
        </div>
      </div>
    )
  }


export default Card