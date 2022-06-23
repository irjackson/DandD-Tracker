import React, { Component } from 'react';

const Campaign = props => {
  const {campaign_id, name, description, recap} = props;
  return(
    <div className='campItems' value={campaign_id} onClick={props.handleClick}>
        <ul>
          <p><li>#{campaign_id}</li></p>
          <center>
          <li>{name}</li>
          <li>{description}</li>
          </center>
        </ul>
      <p>
        <strong><u>Recap:</u></strong>
      </p>
      {recap}
    </div>
  )
}

export default Campaign;