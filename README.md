# AWS session examples 

## Cloud Deploy Example
This project demonstrates a full-stack deployment pipeline using Node.js 22, Docker, Terraform, and GitHub Actions to deploy a Node app to AWS EC2.

## Stack
- Node.js 22
- Docker
- AWS EC2 (free tier)
- Terraform for Infrastructure as Code
- GitHub Actions for CI/CD

## Steps
1. **Terraform** deploys EC2 with Node.js 22 and Docker.
2. **Push to GitHub** triggers a CI workflow.
3. **GitHub Actions** copies code to EC2 and deploys a Docker container.
4. Site is live at EC2 IP (or custom domain if configured).

See `setup.sh`, `Dockerfile`, and `.github/workflows/deploy.yml` for implementation details.


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