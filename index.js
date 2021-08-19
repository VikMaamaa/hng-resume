/*eslint-disable*/
const mongoose = require('mongoose');
const dotenv = require('dotenv');

process.on('uncaughtException', err => {
        console.log(err.name, err.message);
        console.log('UNCAUGHT EXCEPTION! Shutting Down....')
        process.exit(1);
    })
    // dotenv.config({ path: './config.env' });
dotenv.config();
const app = require('./App');

const DB = process.env.DATABASE_LOCAL;

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => console.log('DB Connection Successful!'))




const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log(`App running on port ${port}....`);
});