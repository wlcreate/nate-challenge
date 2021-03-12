const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.send("<h1>This is the backend!</h1>");
});

module.exports = router