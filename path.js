if (typeof DepsPath === 'undefined') {
    DepsPath = function (host) {
      var path = '/';
      var deps = new Deps.Dependency;

      var get = function (removeTrailingSlash) {
        if (typeof Deps === 'undefined') {
          return;
        }
        Deps.depend(deps);

        if (removeTrailingSlash) {
          return path.replace(/(.)\/$/, '$1');
        }

        return path;
      };

      var set = function (value) {
        if (! value || typeof value !== 'string') {
          throw Meteor.Error('Please, set a valid string for path');
        }

        value = value.split('?');
        if (value.length > 2) {
          throw Meteor.Error('Invalid url. It has two or more "?"');
        }
        value = value[0];

        value = value.split('#');
        if (value.length > 2) {
          throw Meteor.Error('Invalid url. It has two or more "#"');
        }
        value = value[0];

        if (path !== value) {
          path = value;
          deps.changed();
        }
      };

      var innerChain = { set: set, get: get };
      innerChain.__proto__ = get.__proto__;
      get.__proto__ = innerChain;
      
      // This allows calling Path.get() or simply Path()
      return get;
    };
}

if (typeof Path === 'undefined') {
    Path = DepsPath();
}
