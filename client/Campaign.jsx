import React, { Component } from 'react';

const Campaign = props => {
  const {campaign_id, name, description, recap} = props;
  return(
    <div className='campItems'>
        <ul>
          <li>#{campaign_id}</li>
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