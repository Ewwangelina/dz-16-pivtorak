// Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору characters довжиною length.

/*
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const key = generateKey(16, characters);
console.log(key); // eg599gb60q926j8i
*/

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(length, characters) {
    let result = '';
    for(let i = 0; i <= length; i++){
        result+=characters.charAt(Math.floor(Math.random()*characters.length));
    }
    return result;
};

console.log(generateKey(16, characters))
