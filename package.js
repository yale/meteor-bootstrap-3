Package.describe({
  summary: "Front-end framework from Twitter"
});

Package.on_use(function (api) {
  api.use('jquery');

  var path = Npm.require('path');
  var asset_path = path.join('bootstrap-3', 'docs', 'assets');
  api.add_files(asset_path.join('css', 'bootstrap.css'), 'client');
  api.add_files(asset_path.join('js', 'bootstrap.js'), 'client');
  api.add_files(asset_path.join('fonts', 'glyphicons-halflings.png'), 'public');

  // XXX this makes the paths to the icon sets absolute. it needs
  // to be included _after_ the standard bootstrap css so
  // that its styles take precedence.
  api.add_files(path.join('bootstrap-override.css'), 'client');
});
