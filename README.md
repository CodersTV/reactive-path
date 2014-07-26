Meteor Reactive Path
================

Just a package to set and get the raw path of an URL.

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
