import json
import boto3
import uuid
import datetime

def handler(event, context):
    client = boto3.client('dynamodb')
    body = json.loads(event['body'])
    name = body['name']
    username = body['username']
    user_id = body['userId']

    room_id = str(uuid.uuid4())
    client.put_item(
        TableName='Room',
        Item={
            'id': {'S': room_id},
            'name': {'S': name},
            'puzzleType': {'S': '3x3'},
            'createdBy': {'S': username},
            'createdAt': {'S': str(datetime.datetime.utcnow())},
            'status': {'S': 'active'},
        },
    )
    client.put_item(
        TableName='RoomUser',
        Item={
            'id': {'S': str(uuid.uuid4())},
            'roomId': {'S': room_id},
            'userId': {'S': user_id},
            'createdAt': {'S': str(datetime.datetime.utcnow())},
            'status': {'S': 'active'},
        },
    )

    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Credentials' : True,
        },
        'body': json.dumps({}),  # empty response
    }
