// const { describe } = require('mocha');
// const { expect } = require('chai');
// const storage = require('../src/service/storage/bucket');

// describe('Bucket Instance Testing', async () => {
//   before(async () => {
//     const bucky = storage.createBucket('spicy-mocha').then((bucket) => {
//       return bucket;
//     });
//     return bucky;
//     done();
//   });
//   it('Create new bucket', async () => {
//     const bucky = await storage.createBucket('hot-spicy-chai');
//     const bucketName = bucky.metadata.name;
//     expect(bucketName).to.equal('hot-spicy-chai');
//   });

//   it('Create new bucket with custom options', async () => {
//     const bucky = await storage.createBucket('hot-spicy-chai-asia', {
//       location: 'ASIA',
//       storageClass: 'STANDARD',
//     });
//     const bucketLocation = bucky.metadata.location;
//     expect(bucketLocation).to.equal('Asia');
//   });
// });
describe('My Test Suite', () => {
  it('My Test Case', () => {
    expect(true).toEqual(true);
  });
});
