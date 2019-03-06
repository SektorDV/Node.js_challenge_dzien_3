const crypto = require('crypto');

const ENCRYPTED_TEXT = '4f9fa8f98650091c4910f5b597773c0a48278cfb001fe4eb3ff47ada85cbf0ed3dc17016b031e1459e6e4d9b001ab6e102c11e834a98dce9530c9668c47b76ee6f09d075d19a38e48b415e067c6ddcfad0d3526c405a4f4f2fb1e7502f303c40';
const PASS_STRING = 'Pobawmy się jak komputerowy Detektyw';
const algorithms = [
    'aes192',
    'aes-256-cbc',
    'aes-256-ecb'
];


const getPaswd = (string) => {
    let arr = string.split(' ');
    let result = '';
    for (let i = 0; i<arr.length; i++) {
        result += arr[i][0];
        result += arr[i][arr[i].length-1];
    }
    return result;
}

const decrypt = (input, passwd) => {
    for (let i=0; i<algorithms.length; i++) {
        console.log(`Algorithm: ${algorithms[i]}`);
        const decipher = crypto.createDecipher(algorithms[i], passwd);
        let decrypted = decipher.update(input, 'hex', 'utf8');
        try {
            decrypted += decipher.final('utf8');
            console.log(decrypted);
        }
        catch(error) {
            console.log('Wrong key');
        }

    }
}

decrypt(ENCRYPTED_TEXT, getPaswd(PASS_STRING));