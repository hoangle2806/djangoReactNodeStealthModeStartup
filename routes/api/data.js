
// Import dependencies
const express = require('express');
const axios = require("axios");

const router = express.Router();

// All availables URL :
const urls = {
    getDataFromDjango : 'http://localhost:8000/get-data/',
}

router.get('/', (req,res) => {
    axios(urls.getDataFromDjango, {
        method: "GET",
        headers: {
            "Content-Type" : 'application/json'
        }
    })
    .then(response => {
        res.send(response.data);
    })
    .catch( err => res.status(404).json({ notFetchFromDjango: "Unable to fetch from Django"}))
})



module.exports = router;