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
- .editorconfig for code formatting

All page sources are stored in `src/` directory. Production build produces compiled sources in `dist/` directory.

### Example

For example purposes there has been:

- created basic `index.html` template using Bootstrap and Font Awesome
- setup `$body-bg` variable in `src/scss/_variables.scss` to show how Bootstrap variables can be overriden
- stored image in `src/images/bulldog.jpg` to show how it can be included in html
- stored [Dancing Script](https://fonts.google.com/specimen/Dancing+Script) font in `src/fonts`

## How to use it

### Prerequisites

1. Install [Node.js](https://nodejs.org)
2. Install [GIT](https://git-scm.com/)
3. Optionally install [Docker](https://www.docker.com/)

### Starting new project

I suggest to clone entire repository, remove `.git/` and init new repository:
```bash
git clone https://github.com/adamszadkowski/web-starter.git project-name
cd project-name/
rm -rf .git/
git init
git commit -a -m "Initial commit"
```

You might want to delete all of the example changes:
- remove content of `src/fonts/` and `src/images/`
- clear `src/scss/_fonts.scss` and `src/scss/_variables.scss` files
- remove custom class from `src/scss/main.scss`
- remove body content from `src/index.html`

### Customizations

Please update `package.json` with project details:
```json
{
  "name": "project-name",
  "version": "1.0.0",
  "description": "Project description",
  "keywords": [
    "your",
    "project",
    "keywords"
  ],
  "author": "Author Name",
  "license": "License"
}
```

> Please notice that original `package.json` has more fields configured that the one shown above.

Please remember to execute `npm install` after making changes to update `package-lock.json` and commit both files.

### Commands

- `npm install` - installs all needed dependencies
- `npm run serve` - starts dev server
- `npm run build` - builds project with production configuration
- `npm run clean` - removes `dist/` directory

## Docker

It is possible to build Docker image with:
```bash
docker build -t <image-name> .
```

Image with example can be found under `klyman/web-starter` name.
