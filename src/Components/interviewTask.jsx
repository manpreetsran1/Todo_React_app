import React from 'react';
import { useState , useEffect } from 'react';
import axios from "axios";

import { Link } from 'react-router-dom';
//import {Mailto} from 'react-mailto';

function InterviewTask(){
    const [Responsefirst, setResponsefirst] = useState([]);
    const [Responsesecond, setResponsesecond] = useState([]);
    const [Responsethird, setResponsethird] = useState([]);



const fetchdata = () => {
let one = "https://reqres.in/api/users/1";
let two = "https://reqres.in/api/users/3";
let three = "https://reqres.in/api/users/10";

const requestOne = axios.get(one);
const requestTwo = axios.get(two);
const requestThree = axios.get(three);

axios
  .all([requestOne, requestTwo, requestThree])
  .then(
    axios.spread((...responses) => {
      const responseOne = responses[0];
      const responseTwo = responses[1];
      const responesThree = responses[2];

      

      // use/access the results
      setResponsefirst(responseOne.data.data.email);
      setResponsesecond(responseTwo.data.data.email);
      setResponsethird(responesThree.data.data.email);


      
    })
)
  .catch((errors) =>{
    console.error(errors)
  });

}


useEffect(() => {
    fetchdata()
  },[])

//console.log(Responsefirst);

  //const responesT = Responsefirst.map((todo) => {todo});
    return(
        <>
          <div class="email_section">
            <h4>Email Output</h4>
            <Link to={`mailto:${Responsefirst}`}>{Responsefirst}</Link><br/>
            <Link to={`mailto:${Responsesecond}`}>{Responsesecond}</Link><br/>
            <Link to={`mailto:${Responsethird}`}>{Responsethird}</Link><br/>
          </div>
        </>
    )
}

export default InterviewTask;