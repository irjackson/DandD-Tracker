const express = require('express');
const dndController = require('./controller');
const router = express.Router();

//campaigns
router.get('/', dndController.getCampaigns, (req, res) =>{
  return res.status(200).json(res.locals.campaigns);
})

router.post('/', dndController.addCampaign, (req, res) =>{
  return res.status(200).send('Campaign added successfully');
})

router.patch('/:id', dndController.updateCampaign, (req, res) =>{
  return res.status(200).send('Campaign updated successfully')
})

router.delete('/:id', dndController.deleteCampaign, (req, res) => {
  return res.status(200).send('Campaign deleted successfully')
})

//characters
router.get('/char', dndController.getCharacters, (req, res) =>{
  return res.status(200).json(res.locals.characters);
})

router.delete('/char/:id', dndController.deleteCharacters, (req, res) => {
  return res.status(200).send('Character deleted successfully')
})



module.exports = router;