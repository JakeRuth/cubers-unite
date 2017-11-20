import json
import boto3

def handler(event, context):
    dynamodb = boto3.resource('dynamodb')
    queryParams = event['queryStringParameters']

    table = dynamodb.Table('Room')
    response = table.query(
        IndexName="puzzleType-createdAt",
        ExpressionAttributeValues={
            ':3x3': '3x3',
        },
        KeyConditionExpression="puzzleType = :3x3",
        ScanIndexForward=False,
    )

    return {
        "statusCode": 200,
        "headers": {
            "Access-Control-Allow-Origin" : "*",
            "Access-Control-Allow-Credentials" : True,
        },
        "body": json.dumps({
            "rooms": response["Items"],
        }),
    }
