# WordFlow Site

[![Greenkeeper badge](https://badges.greenkeeper.io/nathanpower/wordflow-site.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/nathanpower/wordflow-site.svg?branch=master)](https://travis-ci.org/nathanpower/wordflow-site)

A statically generated portfolio and blog site built with [react-static](https://github.com/nozzle/react-static) and [flexboxgrid-sass](https://github.com/hugeinc/flexboxgrid-sass)


### Running locally
```
npm install

npm start
```

### Test a production build locally
```
npm run dist
```

Site will be served locally from `localhost:3000`

Note SITE_ROOT is set with an env variable made available by Netlify, need to set this if deploying somewhere else.
Also will need to set SITE_RECAPTCHA_KEY for recaptcha to work.
