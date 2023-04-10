console.log("Basic Challenge 02 : Create a function that return random string that could contain lower-case, upper-case, numeric, special character");

function generateRandomString(length) {
    let result = " ";
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890`~!@#$%^&*()-_=+[]\;',./{}|:<>?";
    const charsetLength = charset.length;
    for(let i = 0; i < length; i++) {
        result += charset.charAt(Math.floor(Math.random()* charsetLength));
    }
    return result;
}
console.log(generateRandomString(5)); 