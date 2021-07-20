'use strict';

exports.handler = async (event, context) => {
  // Lambdas are currently deployed as HTTP API not as REST API in AWS.
  // The event object is different in REST API lambdas.
  // More details see https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api.html
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'text/plain' },
    body: JSON.stringify({ eventData: event }),
  };
};
