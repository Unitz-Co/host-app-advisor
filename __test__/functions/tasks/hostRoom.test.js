const _ = require('lodash');
require('@vl/mod-config/dotenv');

const fibjsFns = require('@vl/mod-clients/fibjsFns');

const firebase = require('firebase-admin');
firebase.initializeApp();

const sessionInputs = {
  user_id: 'PdOJWFBgNPUEMhX1JlsDm7zWy012',
  room_id: 'b12cfccb-e33e-4a28-94e3-7c8e5b0c7b96',
};

describe('hostRoom test', () => {
  jest.setTimeout(60 * 1000);

  test('host room with valid inputs', async () => {
    try {
      const res = await fibjsFns.getClient().post('course-hostRoom', {
        ...sessionInputs,
      });
      console.log(res);
    } catch (err) {
      console.log('err', err);
    }
  });
});
