const express = require('express');
const htmlRoutes = require('./app/routing/htmlRoutes.js');
const apiRoutes = require('./app/routing/apiRoutes.js');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

htmlRoutes.homeRoute(app);
htmlRoutes.surveyRoute(app);
apiRoutes.addFriendRoute(app);
apiRoutes.getFriendsRoute(app);
app.listen(PORT);