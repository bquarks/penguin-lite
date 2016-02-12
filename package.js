Package.describe({
  name: 'bquarks:penguin-lite',
  version: '0.0.8',
  summary: 'Lite version for penguin ui framework',
  git: 'https://github.com/bquarks/penguin-lite.git',
  documentation: 'README.md'
});

var files = [
  'src/base/_variables.scss',
  'src/components/_variables.scss',
  'src/base/_mixins.scss',
  'src/base/_reset.scss',
  'src/base/_print.scss',
  'src/base/_scaffolding.scss',
  'src/base/_utils.scss',
  'src/base/_responsive.scss',
  'src/base/_grid.scss',
  'src/base/_animations.scss',
  'src/components/_alert.scss',
  'src/components/_text.scss',
  'src/components/_dropdown.scss',
  'src/components/_button.scss',
  'src/components/_navigation.scss',
  'src/components/_tab.scss',
  'src/components/_breadcrumb.scss',
  'src/components/_table.scss',
  'src/components/_form.scss',
  'src/components/_icon.scss',
  'src/components/_modal.scss',
  'src/components/_banner.scss',
  'src/components/_spinner.scss',
  'src/components/_paginator.scss',
  'src/components/_panel.scss'
];

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('fourseven:scss@3.4.1');
  api.addFiles(files, 'client');
});
