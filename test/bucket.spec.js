const storage = require('../src/service/storage/bucket');

test('Create bucket', () => {
  return storage.createBucket('hot-mocha').then((bucket) => {
    const bucketName = bucket.metadata.name;
    expect(bucketName).toBe('hot-mocha');
  });
});
