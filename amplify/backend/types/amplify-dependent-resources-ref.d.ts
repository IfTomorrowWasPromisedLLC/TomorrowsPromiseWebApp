export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "tomorrowspromiseweba60965faf": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string",
            "CreatedSNSRole": "string"
        },
        "userPoolGroups": {
            "ITWPCustomersGroupRole": "string"
        }
    },
    "function": {
        "S3Triggerb26b4f5c": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        },
        "tomorrowspromiseweba60965fafCustomMessage": {
            "Name": "string",
            "Arn": "string",
            "LambdaExecutionRole": "string",
            "Region": "string"
        },
        "tomorrowspromiseweba60965fafPostConfirmation": {
            "Name": "string",
            "Arn": "string",
            "LambdaExecutionRole": "string",
            "Region": "string"
        }
    },
    "storage": {
        "itwpDevTest": {
            "BucketName": "string",
            "Region": "string"
        }
    }
}