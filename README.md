# AWS session examples 
## S3-example, Steps to run:

### Assumptions:
- you have an AWS account
- you have security credentials setup (AWS KEY and Secret)
- you have created a bucket in your aws account and have the name handy, and the security credentials allow you to access the bucket

Step 1: `cd s3-example && npm install`
Step 2: in the `s3-example` folder create a .env.local file and ensure it contains the following information:

`AWS_ACCESS_KEY_ID=<your AWS access key>
AWS_SECRET_ACCESS_KEY=<your AWS secret key>
AWS_REGION=<the AWS region where your bucket lives>
AWS_S3_BUCKET=<the name of your bucket>`

Step 3: while in the s3-example directory start the app `npm run dev`
Step 4: access the app (likely at http://localhost:3000) and upload a file. Observe that it's available in your bucket (this can be done via the management console or using the AWS CLI command `aws s3 ls s3://<name of your bucket>`)

Step 5: also try the download button, ensuring you provide the correct file name