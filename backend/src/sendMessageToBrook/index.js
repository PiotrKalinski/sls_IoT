import AWS from 'aws-sdk';
import Ajv from 'ajv';
import uuid from 'uuid'
import schema from "../common/schema/cashMachineInput.schema.json"
import {
    invalidArgumentException
} from '../common/models/invalidArgumentException';
import {
    schemaNotValid
} from '../common/models/schemaNotValid'
import {
    noteUnavailableException
} from "../common/models/noteUnavailableException"
import {
    validAmount
} from '../common/models/validAmount'
AWS.config.region = process.env.IOT_AWS_REGION;
AWS.config.accessKeyId = process.env.IOT_ACCESS_KEY
AWS.config.secretAccessKey = process.env.IOT_SECRET_KEY
const iotData = new AWS.IotData({
    endpoint: process.env.IOT_ENDPOINT_HOST
});

exports.handler = async function(event, context) {
    const ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}
    const valid = ajv.validate(schema, JSON.parse(event.body));
    const {
        amount
    } = JSON.parse(event.body)
    let response = null;
    let isFailed = false;
    let billSet;
    if (!valid) {
        response = schemaNotValid;
    }

    if (amount % 10) {
        response = noteUnavailableException;
        isFailed = true
    }
    if (amount < 0) {
        response = invalidArgumentException;
        isFailed = true
    }
    if (response === null) {
        billSet = generateBillsSet(amount);
        response = validAmount(billSet);
        isFailed = false
    }


    let params = {
        topic: 'message',
        payload: JSON.stringify({
            username: "atm",
            id: uuid(),
            status: isFailed,
            set: !isFailed ? billSet : null
        }),
        qos: 0
    };
    await iotData.publish(params, function(err, data) {
        if (err) {
            console.log(`Error: ${err}`);
        } else {
            console.log('Successfully notified IoT');
        }
    });

    return response

};


const generateBillsSet = (amount) => {
    const bills = [10, 20, 50, 100];
    const sets = [];
    const index = bills.length - 1;
    while (amount >= bills[0]) {
        if (amount >= bills[index]) {
            amount -= bills[index];
            sets.push(bills[index]);
        } else {
            index--;
        }
    }
    return sets;
}