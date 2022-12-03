import React from 'react'
import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect } from 'react';

const Stylediv=styled.div`
.mainbox{
    width: 95%;
    display: flex;
   flex-direction: column;
   gap: 2vh;
   border: 1px solid gray;
   margin: auto;
}
.itembox{
   width: 95%;
   height: 6vh;
  padding:10px;
   border: 1px solid gray;
}
  .logoCompany{
    width: 50%;
    height: 5vh;
    display: flex;
    flex-direction: row;
    padding:5px;
   align-items: center;
   gap: 10px;
  
  }
  .image{
    width: 7%;
    height: 90%;
  }
  .topbox{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10%;
  }
`;
export const JobListingPage=()=> {
const [jobData, setJobData]= useState([])
    useEffect(()=>{
        getJobData();
    },[])

    const getJobData=()=>{
        axios.get("https://jsonmock-pa4s.onrender.com/jobData").then(({data})=>{
            console.log(data)
            setJobData(data)
    });
    }

  return (
    <>
    <Stylediv>
    <div className=''>
        <p>Job Listing Page</p>
        <Link to={"/addjob"}>
        <p>Add new job</p>
        </Link>
    </div>
    <div className='mainbox'>
        {jobData.map((item)=>{
            return (
                <div className='itembox' key={item.id}>
                   <div className='logoCompany'>
                    <img className='image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0HT0GRHVKL3StouKXuJl31O5z-xf-HjtfiQ&usqp=CAU" alt="" />
                      <div>
                        <p>{item.company_name}</p>
                        <p>{item.position}</p>
                      </div>
                   </div>
                </div>
            )
        })}
    </div>
    </Stylediv>
    </>
  )
}

export default JobListingPage