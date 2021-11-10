# :cat: My pet picture :dog:
Show a random pet picture and you can upload photos.

<img src="https://i.imgur.com/o4xQrCK.png" alt="screenshot" width="800"/>

## Usage with docker
Create a file named `mongodb.json` in `src/model/database` and put it:
```
{
  "uri": "mongodb://172.17.0.1:27017/pets"
}
```
Install modules and start Docker.
```
npm i 
docker-compose up -d  
```
If it's not the first time running this project you need to change this in `docker-compose.yml`.
```
#command: "npm run pets"
command: "npm run dev"
```
The command `npm run pets` will create some documents in MongoDB, if you have the documents use the `npm run dev` command for only running the project, but if you use `docker-compose down` you don't need to change anything because the database will be removed.

## Usage without Docker
Create a file named `mongodb.json` in `src/model/database` and put it:
```
{
  "uri": "your mongodb URI"
}
```
It's the first time running:
```
npm i 
npm run pets
```
after this use `npm run dev` to run the project.
## How to view the site
access `localhost:8080` in your browser.
