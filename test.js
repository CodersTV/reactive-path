Tinytest.add('reactive-path - basic', function (test) {
  test.equal(Path(), '/');
  test.equal(Path(true), '/');

  var path = '/test/';
  Path.set(path);

  test.equal(Path(), path);
  test.notEqual(Path(), '/test');
  test.equal(Path(true), '/test');

  path = '/test/test2/';
  Path.set(path);

  test.equal(Path(), path);
  test.notEqual(Path(), '/test/test2');
  test.equal(Path(true), '/test/test2');
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

  test.equal(Path(), '/test');
  test.notEqual(Path(), '/test?a=1');
  test.notEqual(Path(), '/test/');
  test.equal(Path(true), '/test');
  test.notEqual(Path(true), '/test?a=1');

  Path.set('/test/?a=1');

  test.equal(Path(), '/test/');
  test.notEqual(Path(), '/test/?a=1');
  test.notEqual(Path(), '/test');
  test.equal(Path(true), '/test');
  test.notEqual(Path(true), '/test/?a=1');
  test.notEqual(Path(true), '/test?a=1');
});

Tinytest.add('reactive-path - with hash', function (test) {
  Path.set('/test#something');

  test.equal(Path(), '/test');
  test.notEqual(Path(), '/test#something');
  test.equal(Path(true), '/test');
  test.notEqual(Path(true), '/test#something');

  Path.set('/test/#something');

  test.equal(Path(), '/test/');
  test.notEqual(Path(), '/test/#something');
  test.notEqual(Path(), '/test');
  test.equal(Path(true), '/test');
  test.notEqual(Path(true), '/test#something');
});

Tinytest.add('reactive-path - with params and with hash', function (test) {
  Path.set('/test?a=1#something');

  test.equal(Path(), '/test');
  test.notEqual(Path(), '/test?a=1#something');
  test.equal(Path(true), '/test');
  test.notEqual(Path(true), '/test?a=1#something');

  Path.set('/test/?a=1#something');

  test.equal(Path(), '/test/');
  test.notEqual(Path(), '/test/?a=1#something');
  test.notEqual(Path(), '/test');
  test.equal(Path(true), '/test');
  test.notEqual(Path(true), '/test?a=1#something');
});
