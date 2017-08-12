import json

def handler(event, context):
    body = {
        "message": "Pre sign up triggered!",
        "input": event
    }

    return {
        "statusCode": 200,
        "body": json.dumps(body)
    }
