import React, { Component } from 'react';

const Campaign = ({ camps }) => {
  const {campaign_id, name, description, recap} = camps;
  return(
    <div className='campItems'>
      <center>
        <ul>
          <li>{campaign_id}</li>
          <li>{name}</li>
          <li>{description}</li>
          <li>{recap}</li>
        </ul>

      </center>
    </div>
  )
}

export default Campaign;