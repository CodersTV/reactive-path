Package.describe({
  summary: "Reactive raw path on client under Path namespace",
  version: "0.2.1",
  git: "https://github.com/CodersTV/reactive-path",
  name: "coderstv:reactive-path"
});

Package.onUse(function (api, where) {
  api.versionsFrom('METEOR@0.9.0');

  api.use(['deps'], 'client');

  api.add_files(['path.js'], 'client');

  api.export('Path', 'client');
});

Package.onTest(function (api) {
  api.use('coderstv:reactive-path', 'client');
  api.use(['tinytest', 'test-helpers', 'deps']);
  api.add_files('test.js', 'client');
});
