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
      filter: [],
    }
    this.handleClick = this.handleClick.bind(this);
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

    this.setState({...this.state, filter: []});
  }

  handleClick(e){
    let filterBy = e.currentTarget.getAttribute('value');
    const { characters } = this.state;
    const characterList = [];
    for(let i = 0; i < characters.length; i++){
      characterList.push(<CharSheets
        key={i}
        charId={characters[i].character_id}
        id={characters[i].campaign_id}
        name={characters[i].name}
        race={characters[i].race}
        role={characters[i].role}
        pronouns={characters[i].pronouns}
        charClass={characters[i].class}
        level={characters[i].level}
        notes={characters[i].notes}
      />);
    }
    let filter = characterList.filter(char => char.props.id === parseInt(filterBy))
    this.setState({...this.state, filter: filter});
  }

  render(){
    const { campaigns } = this.state;
    
    const campaignList = [];
    for(let i = 0; i < campaigns.length; i++){
      campaignList.push(<Campaign
        key={i}
        campaign_id={campaigns[i].campaign_id}
        name={campaigns[i].name}
        description={campaigns[i].description}
        recap={campaigns[i].recap}
        handleClick={this.handleClick}
      />);
    }

    return(
    <div>
      <center>
      <button className='campCreate'>New Campaign</button><br/><br/>
        Campaigns:
        <div className='campBox'>
          {campaignList}
        </div>
      </center>
      <center>
        Character List:
        <div className='charBox'>
        {this.state.filter}
        </div>
      </center>
    </div>
    );
  }
}

export default App;