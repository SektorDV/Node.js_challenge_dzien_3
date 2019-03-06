//Twój kod

const fs = require('fs');
const crypto = require('crypto');

const hashFile = (path) => {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err == null) {
           const hash = crypto.createHmac('sha256', data).digest('hex');; 
           console.log(hash);
        } else {
            console.log(`Error! ${err}`);
        }
    })
}


hashFile(process.argv[2]);