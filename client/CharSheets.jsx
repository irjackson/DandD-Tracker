import React, { Component } from 'react';

const CharSheets = props => {
  const { charId, id, name, race, role, pronouns, charClass, level, notes } = props;

  const deleteChar = async () => {
    console.log(charId);
    fetch(`/main/char/${charId}`, {
      method: 'DELETE',
    })
    .then(resp => resp.json())
    .then((data) => {
      console.log(data);
      
    })
    setTimeout(() => window.location.reload(), 300)
  }
  return(
    <div className='charItems' value={charId}>
        <ul>
          <strong>
            <p>
              <li><strong><u>Name:</u></strong></li>
              <li>{name}</li>
              <li style={{ textAlign: 'right' }}>id: {charId}</li>
            </p>
          </strong>
        <center>
        <hr className='boxHr'/>
          <strong><u>Race:</u></strong>
          <li>{race}</li>
          <strong><u>Pronouns:</u></strong>
          <li>{pronouns}</li>
          <strong><u>Role:</u></strong>
          <li>{role}</li>
          <strong><u>Class:</u></strong>
          <li>Level {level} {charClass}</li>
        <hr className='boxHr'/>
        </center>
        </ul>
      <div className='notes'>
        <strong><u>Notes:</u></strong>
      </div>
        {notes}
        <div className='charBtns'>
        <button >Update</button>
          <button onClick={() => deleteChar(charId)}>Delete</button>
      </div>
    </div>
  )
}

export default CharSheets;