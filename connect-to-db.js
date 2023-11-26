//RUN npm install
//RUN npm install
//RUN npm install
//RUN npm install
//RUN npm install

//First we import the drivers in order to connect to MySQL
import mysql from 'mysql2/promise';

const db = await mysql.createConnection({
    host: '161.97.144.27',
    port:'8092',
    user: 'root',
    password: 'guessagain92',
    database: 'test'
});

//Function to let us ask questions to the database
async function query(sql){
    let result = await db.execute(sql);
    return result[0];
}
let persons = await query('SELECT * FROM persons');

//Show results
console.log(persons);