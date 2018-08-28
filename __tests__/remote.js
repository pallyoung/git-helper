const remote = require('./../src/remote');

const testUrl = 'https://github.com/pallyoung/git-helper-test.git';
const testUrl2 = 'https://github.com/pallyoung/git-helper-test2.git';
const originUrl = 'https://github.com/pallyoung/git-helper.git';
it('remote info', function () {
  expect(remote.info()[0]).toEqual('origin');
})
it('remote verbose', function () {
  expect(remote.verbose().length).toEqual(2);
})
it('remote rename', function () {
  remote.rename('origin', 'tas');
  expect(remote.info()[0]).toEqual('tas');
  remote.rename('tas', 'origin');
  expect(remote.info()[0]).toEqual('origin');
})

it('remote add & remove', function () {
  remote.add('test', 'https://github.com/pallyoung/git-helper.git');
  expect(remote.info()[1]).toEqual('test');
  remote.remove('test');
  expect(remote.info()[1]).toEqual(undefined);
})

it('remote geturl & seturl', function () {
  remote.setUrl('origin',testUrl);
  expect(remote.getUrl('origin')[0]).toEqual(testUrl);
  remote.addUrl('origin',testUrl2);
  expect(remote.getUrl('origin','--all')[1]).toEqual(testUrl2);
  remote.deleteUrl('origin',testUrl2);
  expect(remote.getUrl('origin','--all')[1]).toEqual(undefined);
  remote.setUrl('origin',originUrl);
  expect(remote.getUrl('origin')[0]).toEqual(originUrl);
})
