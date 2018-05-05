# Web Starter

Here you can find configuration for static web development.

## Configuration

What has been configured:

- Webpack with dev server
- SCSS compilation
- CSS minification (only on production build)
- automatic index.html template filling with styles and scripts
- injected Bootstrap 4 (all SCSS and JS components)
- injected Font Awesome
- copying of custom fonts
- copied static assets with hash in names
- custom Nginx configuration for gzipping and caching
- Dockerfile for building Docker image

All page sources are stored in `src/` directory.

### Example

For example purposes there has been:

- created basic `index.html` template using Bootstrap and Font Awesome
- setup `$body-bg` variable in `src/scss/_variables.scss` to show how Bootstrap variables can be overriden
- stored image in `src/images/bulldog.jpg` to show how it can be included in html
- stored [Dancing Script](https://fonts.google.com/specimen/Dancing+Script) font in `src/fonts`

## How to use it

For development please execute:
```bash
npm run serve
```

For building production distribution please execute:
```bash
npm run build
```

This will generate `dist/` folder with compiled sources.

There is a script for clearing `dist/` directory:
```bash
npm run clean
```

It is possible to build Docker image with:
```bash
docker build -t <image-name> .
```

## Docker

There is available docker image with this example: `klyman/web-starter`.
