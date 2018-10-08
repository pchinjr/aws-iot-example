require('dotenv').config()

const awsIot = require('aws-iot-device-sdk');
const path = require('path');


const device = awsIot.device({
  keyPath: __dirname + '/certs/myThing.private.key',
  certPath: __dirname + '/certs/myThing.cert.pem',
  caPath: __dirname + '/certs/root-CA.crt',
  clientId: process.env.CLIENT_ID,
  host: process.env.HOST
});

// Connect
device
  .on('connect', function() {
    console.log('Connected');
  });

// Error
device
  .on('error', function(error) {
    console.log('Error: ', error);
  });
