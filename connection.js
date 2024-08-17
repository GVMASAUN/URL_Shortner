const mongoose = require("mongoose");

function makeDBConnection(url)
{
    return mongoose.connect(url);
}

module.exports = makeDBConnection;