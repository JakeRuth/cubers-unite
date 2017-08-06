import json

def create(event, context):
    body = {
        "message": "Testing",
        "input": event
    }

    return {
        "statusCode": 200,
        "body": json.dumps(body)
    }
