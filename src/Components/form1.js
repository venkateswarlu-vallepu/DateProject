import React from 'react'

function form1() {
  return (
    <div>
          <form>
        <div>
          <label  htmlFor='name'>Name</label>
          <input type="string" id='name'></input>
        </div>
        <div>
          <label htmlFor='gen'>Gender</label>
          <input type="radio" id='gen'>Male</input>
          <input type="radio" id='gen'>Female</input>
        </div>
        <div>
          <label htmlFor='date'>DOB</label>
          <input id='date' type="date"></input>
        </div>
        <div>
          <label htmlFor='date'>SSC Year</label>
          <input id='date' type="date"></input>
        </div>
        <div>
          <label htmlFor='date'>INTER Year</label>
          <input id='date' type="date"></input>
        </div>
        <div>
          <label htmlFor='date'>Degree Year</label>
          <input id='date' type="date"></input>
        </div>
        
      </form>
    </div>
  )
}

export default form1