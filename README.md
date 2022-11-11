# Dashboard in react  

## Installation  
``` bash
$ git clone https://github.com/Kisala1/P12_06092022.git  
$ cd ../path/to/the/file  
$ npm install  
$ npm start  
```

## Changement de la source de données
Dans le fichier Dashboard.jsx (sportsee/src/pages/Dashboard/Dashboard.jsx) changer la ligne 32 : 
``` js
    // Source API
if (process.env.REACT_APP_SOURCE !== 'API') 
    // Source Mock 
if (process.env.REACT_APP_SOURCE === 'API') {