Tinytest.add('reactive-path - basic', function (test) {
  test.equal(Path.get(), '/');
  test.equal(Path.get(true), '/');

  var path = '/test/';
  Path.set(path);

  test.equal(Path.get(), path);
  test.notEqual(Path.get(), '/test');
  test.equal(Path.get(true), '/test');

  path = '/test/test2/';
  Path.set(path);

  test.equal(Path.get(), path);
  test.notEqual(Path.get(), '/test/test2');
  test.equal(Path.get(true), '/test/test2');
});

Tinytest.add('reactive-path - invalid input', function (test) {
  var invalidInputs = [{}, [], null, undefined, '/test?a=1?b=2', '/test#something#something'];

  for (var i = 0; i < invalidInputs.length; i++) {
    test.throws(function () {
      Path.set(invalidInputs[i]);
    });
  }
});

Tinytest.add('reactive-path - with params', function (test) {
  Path.set('/test?a=1');

  test.equal(Path.get(), '/test');
  test.notEqual(Path.get(), '/test?a=1');
  test.notEqual(Path.get(), '/test/');
  test.equal(Path.get(true), '/test');
  test.notEqual(Path.get(true), '/test?a=1');

  Path.set('/test/?a=1');

  test.equal(Path.get(), '/test/');
  test.notEqual(Path.get(), '/test/?a=1');
  test.notEqual(Path.get(), '/test');
  test.equal(Path.get(true), '/test');
  test.notEqual(Path.get(true), '/test/?a=1');
  test.notEqual(Path.get(true), '/test?a=1');
});

Tinytest.add('reactive-path - with hash', function (test) {
  Path.set('/test#something');

  test.equal(Path.get(), '/test');
  test.notEqual(Path.get(), '/test#something');
  test.equal(Path.get(true), '/test');
  test.notEqual(Path.get(true), '/test#something');

  Path.set('/test/#something');

  test.equal(Path.get(), '/test/');
  test.notEqual(Path.get(), '/test/#something');
  test.notEqual(Path.get(), '/test');
  test.equal(Path.get(true), '/test');
  test.notEqual(Path.get(true), '/test#something');
});

Tinytest.add('reactive-path - with params and with hash', function (test) {
  Path.set('/test?a=1#something');

  test.equal(Path.get(), '/test');
  test.notEqual(Path.get(), '/test?a=1#something');
  test.equal(Path.get(true), '/test');
  test.notEqual(Path.get(true), '/test?a=1#something');

  Path.set('/test/?a=1#something');

  test.equal(Path.get(), '/test/');
  test.notEqual(Path.get(), '/test/?a=1#something');
  test.notEqual(Path.get(), '/test');
  test.equal(Path.get(true), '/test');
  test.notEqual(Path.get(true), '/test?a=1#something');
});
