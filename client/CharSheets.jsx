import React, { Component } from 'react';

const CharSheets = ({ chars }) => {
  return(
    <div className='charItems'>
      <center>
        <ul>
          <li>{chars.name}</li>
          <li>{chars.role}</li>
          <li>{chars.pronouns}</li>
          <li>{chars.class}</li>
          <li>{chars.level}</li>
          <li>{chars.notes}</li>
        </ul>
      </center>
    </div>
  )
}

export default CharSheets;