const dotenv = require('dotenv');
const dayjs = require('dayjs');

dotenv.config();

function calcAge(date){
    const d = dayjs(date);
    const age = dayjs().diff(d,'year');
    return age;
}

const birthDay = process.argv[2];
console.log(birthDay);
const age = calcAge(birthDay);
console.log('age', age);


// const env = process.env;
// const apiKey = env.TMDB_API_KEY;