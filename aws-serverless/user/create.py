import json

def create(event, context):
    print(event)

    body = {
        "message": "Testing",
        "input": event
    }

    return {
        "statusCode": 200,
        "body": json.dumps(body)
    }
