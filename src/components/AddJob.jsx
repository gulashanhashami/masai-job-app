import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Stylediv=styled.div`
font-family:   Arial, sans-serif;
 .title{
     margin: auto;
     width: 45%;
     font-size:1.2vw;
     color: red;
    //   border: 1px solid red; 
 }
  form{
      width: 45%;
      height: auto;
      /* border: 1px solid red; */
      margin: auto;
  } 
  input{
      width: 60%;
      height: 3.5vh;
      font-size:1vw;
  }
  p{
      font-size:1.2vw;
      line-height:.1vh;
  }

  .select{
    font-size:1.2vw;
  }
  .option{
      width: 45%;
      height: 4.3vh;
      font-size:1.2vw;
  }
  #btn{
      width: 30%;
      height: 4.5vh;
      font-weight: bold;
      font-size:1.2vw;
      background-color: green;
      color: white;
      border: 2px solid green;
      border-radius: 3px;
      margin-left: 14%;
  }
  #btn:hover{
      background-color: white;
      color: red;
  }
`;
export const AddJob=()=>{
const [pdata, setData] =useState({})

const handleChange=(e)=>{
   let key=e.target.name;
       setData(
           {
               ...pdata,
               [key]: e.target.value,
           }
       )
}

   return (
      
           <Stylediv>
       <div className="title">
       <h1>Add the company</h1>
       </div>
       <form onSubmit={(e)=>{
          
           e.preventDefault();
           axios.post(`https://jsonmock-pa4s.onrender.com/jobData`, pdata).then((res)=>{
              setData({
                company_name:"",
                company_address:"",
                  city:"",
                  state_name:"",
                  start_date:"",
                  position:"",
                  contract:"",
                  description:"",
              })
           })
       }}>
       <p>Company name</p>
       <input type="text" name="company_name" value={pdata.company_name} onChange={handleChange} placeholder="Company name" required />
        <p>Enter city</p>
       <input type="text" name="city" value={pdata.city} onChange={handleChange} placeholder="City" required />
       <p>Enter Location</p>
       <input type="text" name="company_address" value={pdata.company_address} onChange={handleChange} placeholder="Location" required />
       <p>Role</p>
       <input type="text" name="role_name" value={pdata.role_name} onChange={handleChange} placeholder="role" required />
       <p>Level</p>
       <input type="text" name="level_date" value={pdata.level_date} onChange={handleChange} required />
       <p>Position</p>
       <input type="text" name="position" value={pdata.position} onChange={handleChange} required />
       <p>Language</p>
       <input type="text" name="language" value={pdata.language} onChange={handleChange} placeholder="language" required />
       <br />
       <br />
     <span className="select">Cotract
       <select name="contract" value={pdata.contract} onChange={handleChange} className="option" required>
           <option value="0">Select</option>
           <option value="full">Full Time</option>
           <option value="part">Part Time</option>
       </select></span>
       <p>Date</p>
       <input type="date" name="postedAt" value={pdata.postedAt} onChange={handleChange} required />
       <br />
       <br />
      <input id="btn" type="submit"  value="Submit" />
       </form>
</Stylediv>
    
   )
}