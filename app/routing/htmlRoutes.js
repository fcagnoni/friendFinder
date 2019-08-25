const path = require('path');

module.exports = {};

module.exports.homeRoute = (app) => {
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'home.html'));
  });
};

module.exports.surveyRoute = (app) => {
  app.get('/survey', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'survey.html'));
  });
};