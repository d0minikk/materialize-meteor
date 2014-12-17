Package.describe({
  name: 'd0minikk:materialize-meteor',
  summary: 'A modern responsive front-end framework based on Material Design',
  version: '1.0.3',
  git: 'https://github.com/d0minikk/materialize-meteor.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use('jquery');

  var path = Npm.require('path');
  var asset_path = path.join('materialize');
  api.addFiles(path.join(asset_path, 'css', 'materialize.css'), 'client');
  api.addFiles(path.join(asset_path, 'js', 'materialize.js'), 'client');

  // fonts
  api.addFiles(path.join(asset_path, 'font/roboto', 'Roboto-Bold.ttf'), 'client');
  api.addFiles(path.join(asset_path, 'font/roboto', 'Roboto-Light.ttf'), 'client');
  api.addFiles(path.join(asset_path, 'font/roboto', 'Roboto-Medium.ttf'), 'client');
  api.addFiles(path.join(asset_path, 'font/roboto', 'Roboto-Regular.ttf'), 'client');
  api.addFiles(path.join(asset_path, 'font/roboto', 'Roboto-Thin.ttf'), 'client');

  api.addFiles(path.join(asset_path, 'font/material-design-icons', 'Material-Design-Icons.eot'), 'client');
  api.addFiles(path.join(asset_path, 'font/material-design-icons', 'Material-Design-Icons.svg'), 'client');
  api.addFiles(path.join(asset_path, 'font/material-design-icons', 'Material-Design-Icons.ttf'), 'client');
  api.addFiles(path.join(asset_path, 'font/material-design-icons', 'Material-Design-Icons.woff'), 'client');

});
