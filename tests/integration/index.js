const setup = require('./setup');
const teardown = require('./teardown');

beforeAll(async () => {
  await setup();
});

afterAll(async () => {
  await teardown();
});

