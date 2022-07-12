## scarpingIP

WELCOME,
this small application retrived your scarpingIP

## Technologies and lamgages

Just java script

- Use express [Documentation](https://expressjs.com/)
- puppeteer [Documentation](https://github.com/puppeteer/puppeteer)
- dotenv [npmjs](https://www.npmjs.com/package/dotenv)
- cors [npmjs](https://www.npmjs.com/package/cors)

## User Guide 

- clone this repository in your computer
- open a terminal into your new repositorie folder
- install the dependencies with your terminal and  with ```npm i``` command
- start the server with ```node index.js``` command into your terminal
- open a browser and copy the following url ```http://localhost:3000/test/startIP```
- press enter and wait few seconds
- your ip address appear in your browser
  

- you can use a front application to send a http request 
  with get method and url ```http://localhost:3000/test/startIP```, 
  you will receive your ip address in reply
- enter press ```CTRL``` and ```C``` for quit and stop the application

## Posibilities

you can hide or show the scraping browser instance.

into ```./app/controller.js``` ligne 10 you have two posibilities:

    ```js
    headless: false,// you can see work the browser instance```
    headless: true,// you can't see the browser instance
    ```