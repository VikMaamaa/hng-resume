/*eslint-disable*/
// import axios from 'axios';
// const axios = require('axios')
import { showAlert } from './alerts.js';

export const register = async(name, email, message) => {

    try {
        const res = await axios({
            method: 'POST',
            url: '/send-mail',
            data: {
                name,
                email,
                message
            }
        });
        console.log(res.data)
        if (res.data === 'success') {
            showAlert('success', 'Successful');
            console.log(res)
            window.setTimeout(() => {
                location.assign('/')
            }, 1500)
        }
    } catch (err) {
        showAlert('error', "failed")

        if (err.response.data == 'failed') {
            // showAlert('success', 'Successful');
            // window.setTimeout(() => {
            //     location.assign('/')
            // }, 1500)
            console.log(err.response.data)
            showAlert('error', "failed")
        }
        // if (err.response.data.message == 'Something went very wrong') {
        //     showAlert('success', 'Registration Successful');
        //     window.setTimeout(() => {
        //         location.assign('/')
        //     }, 1500)
        // }

    }
};