module.exports = {
  apps: [{
    name: 'navuyugtrust.org',
    exec_mode: 'cluster',
    instances: 'max',
    cwd: '/home/ubuntu/workspace/navyugtrust.org',
    script: './node_modules/nuxt/bin/nuxt.js',
    args: 'start',
    autorestart: true,
  }],
};