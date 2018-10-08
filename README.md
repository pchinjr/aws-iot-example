# aws-iot-example
Example AWS IoT with Node.js

- Get Node
- Get AWS Account
  - Set up IAM user and configure AWS CLI profile
  - Create IoT Thing
  - Get Security Certificates
    - aws iot describe-endpoint --endpoint-type iot:Data-ATS --profile iot-demo --region us-east-1
    - 3 files from creating a certificate
    - create policy and attach policy to thing
- Get Serverless Framework 
  - AWS profile configurations 
  - 