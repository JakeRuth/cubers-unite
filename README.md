# cubers-unite
A web app that gives cubers around the world the ability to solve puzzles together in real time.
See the work in progress documentation/spec here: https://drive.google.com/open?id=133T5peH2An4hNFnU2G2t4X8T4YJHNOyuVFVjU8h1A28

At the moment I am learning all about AWS services that we will use to host this, but this is the rough overview of what this project will be built with:

Infrastrucure (110% hosted with AWS, main goal is to be very cheap to host):
- Lambda: Serverless backend.  Goal is to write most functions in python but not opposed to using Java8 or NodeJS
- S3: Host website and any other static content like profile pictures etc that the web app needs access to.
- DynamoDB: Primary (and only) datastore.  Why? Cause it's cheap as hell and it works.
- Gateway: API management, configuration to map API endpoints to lambda functions, etc.
- Cognito: User permission management... I think?  Honestly still pretty confused on this but will update as I learn more.

Tech Stack (for now I'm keeping this list super abstracted):
- Python: Backend Lambda functions
- ReactJS/Redux: Front-end website
- Cloudfront templates: Programatic way to handle aws services (I believe these can be generated with AWS but I'm not positive)
