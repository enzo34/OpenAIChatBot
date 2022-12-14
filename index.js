const { Configuration, OpenAIApi } = require("openai");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 8080;
require('dotenv').config()

// Configuration de l'API
app.use(cors());
app.use(bodyParser.json());

console.log(process.env.API_KEY)
const configuration = new Configuration({
    apiKey: process.env.API_KEY,
});
const openai = new OpenAIApi(configuration);


// Fais une route qui me permet d'envoyer des messages au bot
app.post('/bot', async (req, res) => {
    // Utilisation de l'instruction await pour attendre la réponse de l'API
    const bot = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: req.body.input,
        max_tokens: 2200
    });
    
    console.log(bot.data)
    res.status(200).json({message: bot.data.choices[0].text});
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
