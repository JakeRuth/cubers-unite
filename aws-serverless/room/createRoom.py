import json

def handler(event, context):
    return {
        "statusCode": 200,
        "headers": {
            "Access-Control-Allow-Origin" : "*",
            "Access-Control-Allow-Credentials" : True,
        },
        "body": json.dumps({
            "message": "woop woop",
            "input": event,
            'suck': 'my nuts',
        }),
    }
