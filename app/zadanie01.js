const crypto = require('crypto');

const MY_PWD_HASH = '5dca0fc4e306d92b2077ad85e7c4bd87a3e8648e';

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\const attempts = [
    '??TegoHasła',
    'CodersLab',
    'Node.js Szyfruje Pliki',
    'Zaźółć Gęślą Jaźń',
    'Moje Haslo 1@3!',
    '111#$((@)n',
    'Dzisiaj Szyfruje 83',
];

const algos = [
    'sha256',
    'sha512',
    'md5',
    'rmd160'
]

const hashpwd = (pwd, algs) => {
    let result = [];
    for (let i=0; i<algs.length; i++) {
        const hash = crypto.createHmac(algs[i], pwd).digest('hex');
        result.push(hash);      
    }
    return result;
}

const dictattack = (pwdlist) => {
    for (let i=0; i<pwdlist.length; i++) {
        let guess = hashpwd(pwdlist[i], algos);
        if (guess.includes(MY_PWD_HASH)) {
            console.log(`Password found - "${pwdlist[i]}". Algorithm: ${algos[guess.indexOf(MY_PWD_HASH)]}`);
        }
    }
}

dictattack(attempts);