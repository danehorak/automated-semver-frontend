# Automated SemVer Frontend

Angular frontend with automated semantic versioning for testing purposes.

## Features

- Displays frontend version from package.json
- Fetches and displays backend API version
- Automated semantic versioning using semantic-release
- Modern Angular standalone components

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm start
```

The application will be available at http://localhost:4200

## Building

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Semantic Versioning

This project uses [semantic-release](https://semantic-release.gitbook.io/) for automated versioning.

Commit message format:

- `feat:` - New feature (minor version bump)
- `fix:` - Bug fix (patch version bump)
- `BREAKING CHANGE:` - Breaking change (major version bump)

## Environment Configuration

The application uses environment files to configure the API URL:

- `src/environments/environment.ts` - Development environment (default)
- `src/environments/environment.prod.ts` - Production environment

Both files automatically import the version from `package.json`.
