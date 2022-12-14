# OpenAIChatBot
Ce petit projet est le Back-End permettant de faire fonctionner le ChatBot. Veillez à bien lancez
```
npm install
```
et renseignez votre clé d'API dans le .env (retirez le .example) avant de lancez l'API via la commande 
```
npm start
```
Une seul route est disponibles c'est la route 
POST http://localhost:8080/bot
et dans le body veuillez passez un objet JSON avec l'attribut input
