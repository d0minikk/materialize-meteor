Package.describe({
  name: 'd0minikk:materialize-meteor',
  summary: ' /* Fill me in! */ ',
  version: '0.0.1',
  git: 'https://github.com/d0minikk/materialize-meteor.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('d0minikk:materialize-meteor.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('d0minikk:materialize-meteor');
  api.addFiles('d0minikk:materialize-meteor-tests.js');
});
