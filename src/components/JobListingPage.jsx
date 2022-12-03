import React from 'react'
import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect } from 'react';

const Stylediv=styled.div`
.itembox{
   width: 95%;
   height: 6vh;

   border: 1px solid gray;
   margin: auto;
}
  .logoCompany{
    width: 90%;
    height: 5vh;
    display: flex;
    flex-direction: row;
   align-items: center;
   gap: 10px;
   margin: auto;
  }
  .image{
    width: 7%;
    height: 90%;
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
    <div>JobListingPage</div>
    <div>
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