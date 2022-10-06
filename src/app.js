const express = require('express');
const morgan = require('morgan');
const cors = require('cors')


const app = express();


app.set('port', process.env.PORT || 4000);

app.use(cors());
app.use(morgan('dev'));

app.use(express.json({limit: '50mb', extended: true}));
app.use(express.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));

app.use("/api/usuarios", require("./routes/usuarios.routes"));
app.use("/api/productos", require("./routes/productos.routes"));
app.use("/api/servicios", require("./routes/servicios.routes"));

module.exports = app;