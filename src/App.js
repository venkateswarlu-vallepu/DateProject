
import './App.css';
import React, {useRef} from 'react';
import moment from 'moment';

function App() {

  let date = useRef();
 
  let ageType = useRef();
  let ssc = useRef();
  let inter = useRef();
  let degree = useRef();
  let sscYOP = useRef();
  let interYOP = useRef();
  let degreeYOP = useRef();
  


  
  // let dobResult = useRef();



 let onButtonClick = ()=> {

  let dob = date.current.value;
  let today = new Date();
  let birthDate = new Date(dob);
  let age = today.getFullYear()-birthDate.getFullYear();
  
  if (dob !==""){
    if (age >= 18) {
      ageType.current.innerHTML= "Major";
      ageType.current.style.color = "green";
    } else {
      ageType.current.innerHTML = "Minor";
      ageType.current.style.color = "red";
      
    }
   } else
     {
      ageType.current.innerHTML = "Required";
      ageType.current.style.color = "red";
    }
    
  

     //SSC

     let sscDate = ssc.current.value;
     sscYOP.current.innerHTML = (moment(sscDate, "YYYYMMDD").fromNow());
     


     //Inter

     let interDate = inter.current.value;
     interYOP.current.innerHTML = (moment(interDate, "YYYYMMDD").fromNow());
    
     

    //Degree

    let degreeDate = degree.current.value;
    degreeYOP.current.innerHTML = (moment(degreeDate, "YYYYMMDD").fromNow());

  }


 

    return (
    <div className="App">
      <h1>Students Information:</h1>
      <form className='form'>
      <div className='div1'>
          <label className='label1'  htmlFor="name">Name:</label>

          <input className='inputname' type="string" id='name'></input>
        </div>
        <br></br>
        <div>
          <label className='gen' htmlFor='gen'>Gender:</label>
          <input className='inputg' type="radio" id='gen1' name='gender'></input>
          <label htmlFor='gen1'>Male</label>
          <input className='input1' type="radio" id='gen2'  name='gender'></input>
          <label htmlFor='gen2'>Female</label>
        </div>
        <br></br>
        <div className='ms'>
          <label className='ms1' htmlFor='ms'>Marital Status:</label>
          <input className='inputms' type="radio" id='m' name='mstatus'></input>


          <label htmlFor='m'>Married</label>
          <input className='inputms1' type="radio" id='s'  name='mstatus'></input>

 <label htmlFor='s'>Single</label>
         
        </div>
        <br></br>
        <div>
          <label className='label' htmlFor='date1'>DOB:</label>
          <input className='inputdob' ref={date} id='date1' type="date"></input>
          <div>
          <span className='input1' ref={ageType}
          ></span>
         </div>
        </div>
        <br></br>
        <div>
          <label htmlFor='date2'>SSC Year:</label>
          <input className='inputssc' ref={ssc} id='date2' type="date"></input>
          <div>
          <span className='input1' ref={sscYOP}></span>
          </div>
        </div>
        <br></br>
        <div>
          <label htmlFor='date3'>INTER Year:</label>
          <input className='inputinter' ref={inter} id='date3' type="date"></input>
          <div>
          <span className='input1' ref={interYOP}></span>
          </div>
        </div>
        <br></br>
        <div>
          <label htmlFor='date4'>Degree Year:</label>
          <input className='inputdegree' ref={degree} id='date4' type="date"></input>
          <div>
          <span className='input1' ref={degreeYOP}></span>
          </div>
        </div>
        <br></br>
        <div>
          <button  className='button' type='button' onClick={()=> {
             onButtonClick();
          }}>Submit</button>
        </div>
      </form>
    </div>

  )
        }
        
export default App;
