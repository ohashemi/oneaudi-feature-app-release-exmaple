const welcomeGet = require('./welcome_get');

test('Returns expected object', async () => {
  const mockEvent = { hello: 'world' };
  const response = await welcomeGet.handler(mockEvent);

  expect(response).toEqual({
    headers: { 'Content-Type': 'text/plain' },
    body: JSON.stringify({ eventData: { hello: 'world' } }),
    statusCode: 200,
  });
});
