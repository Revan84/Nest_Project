# EUILLOT Quentin B3-Dev

# Setup

## Nest JS installation

`npm i -g @nestjs/cli`

## Project installation

`yarn` or `npm install`

## Create a .env
Avec un 'MONGO_URI' (url entière de la bdd)
et un 'JWT_TOKEN'

## Running

`yarn start` or `npm run start`

## Swagger on :
http://localhost:3000/api#/


___________________________
# Contexte

Le projet permet d'ajouter (POST) un album avec les titres quil contient.
On peut réaliser un GET sur les albums, les tracks et les users.
On peux aussi supprimer et mettre à jour un utilisateur en ayant l'id
Le temps d'un album est calculé en ajoutant le temps de tout les titres qu'il contient


# Eléments à ajouter

Ajouter les deux méthodes Update et Delete à album
Ajouter des vérifications sur les bon format d'email, de mot de passe et d'username (Regex)

# Notes

Pas mal de difficultés à comprendre les erreurs propres à NestJs,
mais au final maintenant je les comprends mieux, et j'arrive 
à comprendre cette architecture.