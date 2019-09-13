## Set up the project

- Create `deployer` IAM user
  - Navigate IAM -> Users and click "Add User"
  - Set "User name" to `deployer`
  - Set "Access type" to "Programmatic access" and click "Next"
  - Click "Attach existing policies directly"
  - Select "AdministratorAccess" from the list and click "Next"
  - Review information and click "Create user"
  - Click "Download .csv"

- Create `iot-connector` IAM user
  - Navigate IAM -> Users and click "Add User"
  - Set "User name" to `iot-connector`
  - Set "Access type" to "Programmatic access" and click "Next"
  - Click "Attach existing policies directly"
  - Select "AWSIoTDataAccess" from the list and click "Next"
  - Review information and click "Create user"
  - Click "Download .csv"

- Go to AWS IoT console
  - Navigate IoT Core -> Settings
  - Copy and save endpoint

## Set up the back-end

- Install serverless: `npm install -g serverless`

- Configure serverless from the `deployer` .csv file
`serverless config credentials --provider aws --key <Access key ID> --secret <Secret access key> --profile serverless-demo`

- Edit `serverless.yml`. Under the `provider` section set the `region` to where your AWS Lambda functions will live. Also, make sure to set the `IOT_AWS_REGION` environment variable in the same file.

- Set `IOT_ACCESS_KEY` and `IOT_SECRET_KEY` from the `iot-connector` .csv file

- In the AWS console navigate to AWS IoT -> Settings. Set the `IOT_ENDPOINT_HOST` variable in the `serverless.yml` to the `Endpoint` that you see on the page.

- Install the dependencies: `npm install`

- Start up the lambdas locally: `serverless offline --port 8080 start`

## Set up the front-end

- Navigate to the front-end folder: `cd ../frontend`

- Install the dependencies: `npm install`

- Navigate in the browser to `localhost:3000`. You should see the Serverless IoT WebSockets chat app in action.

## Test logic

Open Postman and send POST request to url http://localhost:8080/send

    {
    "amount": 260
    }

## Tests

To run tests you need to:
1. `sls deploy -s dev`
2. `serverless test`

(That might require register at serverless)

## Issues, important notes

In terms of showing processed expression, I had to think about how communicate admin with atm machine.

If I had a possibility to change, or improve something I'd rather:

* Rewrite logic in Typescript
* Perhaps split calculation method to class
* Save logs to dynamodb, then allow front-end to look at history
* Prepare recipes and save them on S3
* Due to unknown problems with webpack, I didn't menage to finish tests
* Add some security
* Do some yml cleanups