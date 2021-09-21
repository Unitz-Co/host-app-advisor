const _ = require('lodash');
require('@vl/mod-config/dotenv');

const fibjsFns = require('@vl/mod-clients/fibjsFns');

const firebase = require('firebase-admin');
firebase.initializeApp();

const sessionInputs = {
  user_id: '9KGhxtVGdPMD4VRIuZw25Iwo8x33',
  room_id: '16053b93-7795-4b3f-8648-bf994567fd4c',
};

describe('attendRoom test', () => {
  jest.setTimeout(60 * 1000);

  test('attend room with valid inputs', async () => {
    try {
      const res = await fibjsFns.getClient().post('course-attendRoom', {
        ...sessionInputs,
      });
      console.log(res);
    } catch (err) {
      console.log('err', err);
    }
  });
});
