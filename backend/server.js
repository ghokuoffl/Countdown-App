const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 5000;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/start', (req, res) => {
    const {seconds} = req.body;
    res.json({message: `Timer has started for ${seconds}`})

});
app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});

