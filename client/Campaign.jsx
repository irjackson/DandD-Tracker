import React, { Component } from 'react';

const Campaign = props => {
  const {campaign_id, name, description, recap} = props;

  const deleteCamp = async () => {
    console.log(campaign_id)
    fetch(`/main/${campaign_id}`, {
      method: 'DELETE',
    })
    .then(resp => resp.json())
    .then((data) => {
      console.log(data);
      
    })
    setTimeout(() => window.location.reload(), 300)
  }
  return(
    <div className='campItems' value={campaign_id} onClick={props.handleClick}>
        <ul>
          <strong><p><li>{name}</li><li style={{ textAlign: 'right' }}>id: {campaign_id}</li></p></strong>
          <hr className='boxHr'/>
          <center>
          <p><strong><u>Description:</u></strong></p>
          <li>{description}</li>
          <hr className='boxHr'/>
          </center>
        </ul>
      <div className='recap'>
        <strong><u>Recap:</u></strong>
      </div>
      {recap}
      <div className='campBtns'>
       <button >New Character</button> 
        <button >Update</button>
        <button onClick={() => deleteCamp(campaign_id)}>Delete</button>
      </div>
    </div>
  )
}

export default Campaign;