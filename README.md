# website for Navyug Vidyabhavan Trust

# Development

```bash
# to run in developement mode
yarn run dev
```

# Deployement

```bash
cd ~/navyugtrust.org
git pull

# to build for production
yarn run build

# list pm2
pm2 list

# note process number of navyugtrust.org and restart it

# for e.g.
pm2 restart 7
pm2 restart 8
```

# Environment
- Nuxt version - `3.3.5`
- Node version - `v14.17.0`