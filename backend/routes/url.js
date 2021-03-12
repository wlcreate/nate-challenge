const express = require('express');
const router = express.Router();
const https = require('https');

router.use(cors());
router.use(express.json());

router.get('/', (request, response) => {
    response.send("<h1>This is the backend!</h1>");
});

router.post('/url', (request, response) => {
    let url = request.body.url;

    https.get(`${url}`, res => {
        let data = '';

        res.on('data', chunk => {
            data += chunk;
        });

        res.on('end', () => {
            let urlResponse = JSON.parse(data);

            response.send(urlResponse);
        });
    }).on('error', error => {
        response.send("Error:", error.message);
    });
});

module.exports = router