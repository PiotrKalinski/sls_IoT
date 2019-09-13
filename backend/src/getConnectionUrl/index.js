'use strict';

var awsIot = require('aws-iot-device-sdk');

exports.handler = async (event, context) => {
    const options = {
        host: process.env.IOT_ENDPOINT_HOST.toLowerCase(),
        region: process.env.IOT_AWS_REGION
    }

    const url = awsIot.device.prepareWebSocketUrl(
        options,
        process.env.IOT_ACCESS_KEY,
        process.env.IOT_SECRET_KEY
    );

    const response = {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify({
            url: url
        }),
    };
    return response

}