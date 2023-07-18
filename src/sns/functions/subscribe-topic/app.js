const {SNSClient, SubscribeCommand} = require('@aws-sdk/client-sns');
const snsClient = new SNSClient();

const snsTopicArn = process.env.SNS_TOPIC_ARN;

exports.subcribesTopic = async (event) => {

    // Calls the update expression to update the item
    try {
        await snsClient.send(new SubscribeCommand({TopicArn: snsTopicArn, Protocol: 'email', Endpoint: event.request.userAttributes.email}));
        return event;
    } catch (err) {
        console.log("Failure", err.message)
        throw err;
    }
}