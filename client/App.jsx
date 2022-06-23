import React, { Component } from 'react';
import img from '../images/DnD_logo.png'

import Campaign from './Campaign.jsx';
import CharSheets from './CharSheets.jsx';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      campaigns: [],
      characters: [],
    }
  }

  componentDidMount(){
    fetch('/main')
    .then(res => res.json())
    .then((campaigns) => {
      if (!Array.isArray(campaigns)) campaigns = [];
      return this.setState({
        campaigns,
      });
    })
    .catch(err => console.log('Error fetching campaigns', err)); 

    fetch('main/char')
    .then(res => res.json())
    .then((characters) => {
      if (!Array.isArray(characters)) characters = [];
      return this.setState({
        characters,
      });
    })
    .catch(err => console.log('Error fetching characters', err)); 
  }

  render(){
    const { campaigns } = this.state;
    const { characters } = this.state;

    const campaignList = [];
    for(let i = 0; i < campaigns.length; i++){
      campaignList.push(<Campaign
        key={i}
        campaign_id={campaigns[i].campaign_id}
        name={campaigns[i].name}
        description={campaigns[i].description}
        recap={campaigns[i].recap}
      />);
    }

    const characterList = [];
    for(let i = 0; i < characters.length; i++){
      characterList.push(<CharSheets
        key={i}
        name={characters[i].name}
        race={characters[i].race}
        role={characters[i].role}
        pronouns={characters[i].pronouns}
        charClass={characters[i].class}
        level={characters[i].level}
        notes={characters[i].notes}
      />);
    }
    // const campaignList = campaigns.map((campaigns, i) => {
    //   return(
    //     <Campaign 
    //     key={i}
    //     camps={campaigns}
    //     />
    //   )
    // })

    // const characterList = characters.map((characters, i) =>{
    //   return(
    //     <CharSheets
    //     key={i}
    //     chars={characters}
    //     />
    //   )
    // })

    return(
    <div>
      <center>
        Campaigns:
        <div className='campBox'>
          {campaignList}
        </div>
      </center>
      <center>
        Character List:
        <div className='charBox'>
        {characterList}
        </div>
      </center>
    </div>
    );
  }
}

export default App;