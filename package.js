Package.describe({
    summary: "Reactive path on client under Path namespace",
});

Package.on_use(function (api, where) {
    api.use([
            'deps',
    ], 'client');

    api.add_files([
                  'deps_path.js'
    ], 'client');

    if (typeof api.export !== 'undefined') {
        api.export('Path', 'client');
    }
});
