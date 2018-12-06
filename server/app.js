const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');   // Mongoose: Online MongoDB Instance
// var MongoClient = require('mongodb').MongoClient,

const cors = require('cors');

const app = express();

// Allow cross-origin requests
app.use(cors());

// connnect to mlab database
mongoose.connect('mongodb://wmzhou:wmzhou9441_example@ds125198.mlab.com:25198/graphql', { useNewUrlParser: true });
// mongoose.connection.once('open', () => {
//     console.log('Connected to MLab online database...');
// });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', function() {
    console.log('Connected to MLab online database...');
});

/*
// connect to local MongoDB
MongoClient.connect('mongodb://localhost:27017/graphql', function(err, db) {
    console.log("Connected to local MongoDB...");
    
    // Middleware?
    app.use('/graphql', graphqlHTTP({
        schema,   // GraphQL Schema: Define graph in GraphQL
        graphiql: true
    }));
    
    // var server = app.listen(3000, function() {
    //     var port = server.address().port;
    //     console.log('Express server listening on port %s.', port);
    // });
    var server = app.listen(4000, () => {
        var port = server.address().port;
        console.log(`Now listening for requests on port ${port}...`);
    })
    
});
*/

// Middleware?
app.use('/graphql', graphqlHTTP({
    schema,   // GraphQL Schema: Define graph in GraphQL
    graphiql: true
}));

app.listen(4000, () => {
    console.log('Now listening for requests on port 4000...');
});