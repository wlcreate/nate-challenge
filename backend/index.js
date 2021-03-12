const express = require('express');
const app = express();

const PORT = 3000;

app.use('/', require('./routes/url'));
 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})