const AWS = require('aws-sdk'); 

const ddb = new AWS.DynamoDB.DocumentClient({region: 'us-east-2'}); 

exports.handler = async (event, context, callback) => {
    await readMessage().then(data => {
        callback(null, {
            statusCode: 200,
            body: data.Items,
            headers: {
                "X-Requested-With": '*',
                "Access-Control-Allow-Headers": 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Requested-With',
                "Access-Control-Allow-Origin": '*',
                "Access-Control-Allow-Methods": 'GET, OPTIONS',
                "Access-Control-Allow-Credentials": true
            },
        })
    }).catch((err) => {
        console.error(err);
    })
};

function readMessage() {
    const params = {
        TableName: 'MovieList',
    }
    return ddb.scan(params).promise();
}
