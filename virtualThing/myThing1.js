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

device
  .on('connect', function() {
    console.log('Connected');
    device.subscribe('topic_1'); 
    device.publish('topic_3', JSON.stringify({message: 'Praise Cage'}));
  });

device
  .on('message', function(topic, payload) {
    console.log('message', topic, payload.toString());
  });

// device
//   .on('connect', function() {
//     console.log('connect');
//     device.subscribe('topic_1');
//     device.publish('topic_2', JSON.stringify({ test_data: 1}));
//   });

// device
//   .on('message', function(topic, payload) {
//     console.log('message', topic, payload.toString());
//   });