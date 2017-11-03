import json
import boto3
import uuid

def handler(event, context):
    client = boto3.client('dynamodb')
    body = json.loads(event['body'])
    name = body['name']

    response = client.put_item(
        TableName='Room',
        Item={
            'id': {
                'S': str(uuid.uuid4()),
            },
            'name': {
                'S': name,
            },
        },
    )

    return {
        "statusCode": 200,
        "headers": {
            "Access-Control-Allow-Origin" : "*",
            "Access-Control-Allow-Credentials" : True,
        },
        "body": json.dumps({
            "input": event,
        }),
    }
