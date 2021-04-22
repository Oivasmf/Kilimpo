const express = require('express');
const cors = require('cors');

const app = express();
const port = 3389;
const usuariosRouter = require('./routes/kilimpo');


app.use(cors());
app.use(express.json());
app.use('/kilimpo', usuariosRouter);

app.listen(port, () => {
console.log(`Server is running on port: ${port}`);
});
