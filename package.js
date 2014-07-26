Package.describe({
  summary: "Reactive raw path on client under Path namespace"
});

Package.on_use(function (api, where) {
  api.use(['deps'], 'client');

  api.add_files(['path.js'], 'client');

  api.export('Path', 'client');
});

Package.on_test(function (api) {
  api.use('meteor-reactive-path', 'client');
  api.use(['tinytest', 'test-helpers', 'deps']);
  api.add_files('test.js', 'client');
});
