import json
import boto3
import uuid
import datetime

# This function is triggered automatically in aws directly after a user confirms their verification code
def handler(event, context):
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table('User')

    # save user to the database
    table.put_item(
        Item={
            'id': str(uuid.uuid4()),
            'username': event['userName'],
            'email': event['request']['userAttributes']['email'],
            'createdAt': str(datetime.datetime.utcnow()),
        }
    )

    # aws expects this to be returned for cognito triggered events
    return event
