const express = require('express');
const path = require('path');
//const db = require('.config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
//app.use('/images', express.static(path.join(__dirname, '../client/images')))

app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../client/build')));

//db.once('open', ()=> {
    app.listen(PORT, ()=> {
        console.log(`Server started and is listening on port: ${PORT}`);
    })
//})
