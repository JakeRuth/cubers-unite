# cubers-unite
A web app that gives cubers around the world the ability to solve puzzles together in real time.s

Infrastructure (110% hosted with AWS, main goal is to be very cheap to host):
- Lambda: Serverless backend.  Goal is to write most functions in python but not opposed to using Java8 or NodeJS
- S3: Host website and any other static content like user picture icons etc that the web app needs access to.
- DynamoDB: Database.  Why? Cause it's cheap as hell and it works.
- Gateway: API management, configuration to map API endpoints to lambda functions.
- Cognito: User management.  Handles sign up/login/authentication/reset password/etc.

Tech Stack (for now I'm keeping this list super abstracted):
- Python: Backend Lambda functions
- ReactJS/Redux: Front-end website (See the [README](https://github.com/JakeRuth/cubers-unite/tree/master/website) for more information!)
- [Serverless](https://github.com/serverless/serverless): Framework used to make configuring/deploying to AWS easy and programmatic :)
