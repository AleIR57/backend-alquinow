const mongoose = require('mongoose');

mongoose
    .connect("mongodb://localhost/alquinow", {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    
    })

mongoose.connect('mongodb://localhost/alquinow')
    .then(db => console.log('Db is connected'))
    .catch((err) => console.error(err));