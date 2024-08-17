const express = require("express");
const {
    handleIncomingUrl,
    handleShowallUrls,
    handleRedirection,
} = require("../controllers/urlController");


const urlRoute = express.Router();

urlRoute.route('/').post(handleIncomingUrl);
urlRoute.route('/users').get(handleShowallUrls);
urlRoute.route('/:urls').get(handleRedirection);



module.exports = urlRoute;