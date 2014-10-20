Meteor Reactive Path
================

Just a package to parse an URI and make it available as a reactive variable.

Note that this package does not handle changing the browser history or related stuff.

# Install

To install into a new project:
```bash
> meteor add coderstv:reactive-path
```

# Usage

## Set the path

`Path.set('/somepath')` to set the path.

## Get the path

`Path()` to get the current path.

`Path(true)` to get the current path without the trailing slash

# Examples:

```javascript
Path.set('/');
Path.get(); // returns /
Path.get(true); // returns /

Path.set('/test/')
Path.get(); // returns /test/
Path.get(true); // returns /test

Path.set('/test/?param=1')
Path.get(); // returns /test/
Path.get(true); // returns /test

Path.set('/test/#section')
Path.get(); // returns /test/
Path.get(true); // returns /test
```
