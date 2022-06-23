const db = require('./model.js');

const dndController = {};

//Campaign controllers
dndController.getCampaigns = (req, res, next) => {
  const search = `SELECT * FROM campaigns`;

  db.query(search)
    .then(data => {
      res.locals.campaigns = data.rows;
      next();
    })
    .catch(error => {
      next('No results');
    });
};

dndController.addCampaign = (req, res, next) =>{
  const { campaign_id, name, description, recap } = req.body;
  const search = `INSERT INTO campaigns (name, description, recap)
  VALUES(
    '${name}', '${description}', '${recap}')
  RETURNING *;`;

  db.query(search)
    .then(data =>{
      console.log(`Campaign added`)
      next();
    })
    .catch(err => {
      next('Error occurred in addCampaign');
    })
}

dndController.updateCampaign = (req, res, next) => {
  const { campaign_id, name, description, recap } = req.body;
  const search = `UPDATE campaigns SET name = '${name}', description = '${description}', recap = '${recap}' WHERE campaign_id = ${req.params['id']}
  RETURNING *;`

  db.query(search)
  .then(data =>{
    console.log(`Campaign updated`)
    next();
  })
  .catch(err => {
    next('Error occurred in addCampaign');
  })
}

dndController.deleteCampaign = (req, res, next) =>{
  const search = `DELETE FROM campaigns WHERE campaign_id = ${req.params['id']}`

  db.query(search)
    .then(data => {
      next();
    })
    .catch(err => {
      next('Error occurred in deleteCampaign');
    })
}

dndController.getCharacters = (req, res, next) => {
  const search = `SELECT * FROM characters`;

  db.query(search)
    .then(data => {
      res.locals.characters = data.rows;
      next();
    })
    .catch(error => {
      next('No results');
    });
}

dndController.addCharacter = (req, res, next) =>{
  const { campaign_id, name, race, role, pronouns, level, notes } = req.body;
  const search = `INSERT INTO characters (
    campaign_id,
    name,
    role,
    pronouns,
    class,
    level,
    notes,
    race
    )
    VALUES
    (${campaign_id}, '${name}', '${role}', '${pronouns}', '${req.body.class}', ${level}, '${notes}', '${race}')`;

  db.query(search)
    .then(data =>{
      console.log(`Character added`)
      next();
    })
    .catch(err => {
      next('Error occurred in addCharacter');
    })
}

dndController.deleteCharacters = (req, res, next) =>{
  const search = `DELETE FROM characters WHERE character_id = ${req.params['id']}`

  db.query(search)
    .then(data => {
      next();
    })
    .catch(err => {
      next('Error occurred in deleteCharacters');
    })
}


module.exports = dndController;