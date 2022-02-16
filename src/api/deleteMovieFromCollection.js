const AWS = require('aws-sdk');

const ddb = new AWS.DynamoDB.DocumentClient({region: 'us-east-2'});

exports.handler = async (event, context, callback) => {
    deleteMessage();
    await deleteMessage(event.movieid).then(() => {
        callback(null, {
            statusCode: 201,
            body: 'The movie '+event.title+' was successfully deleted',
            headers: {
                'Access-Control-Allow-Origin' : '*'
            }
        });
    }).catch((err) => {
        console.error(err)
    })
};

function deleteMessage(movieid) {
    const params = {
        TableName: 'MovieList',
        Index: {
            'movieid' : movieid
        }
    }
    return ddb.delete(params).promise();
}
