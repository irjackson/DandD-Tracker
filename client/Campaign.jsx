import React, { Component } from 'react';

const Campaign = props => {
  const {campaign_id, name, description, recap} = props;
  return(
    <div className='campItems' value={campaign_id} onClick={props.handleClick}>
        <ul>
          <p><li>#{campaign_id}</li></p>
          <li>{name}</li>
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
        <button>Delete</button>
      </div>
    </div>
  )
}

export default Campaign;