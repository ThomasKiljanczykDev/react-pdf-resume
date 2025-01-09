# Thomas Kiljanczyk React PDF Resume

- **Framework**: [ReactPDF](https://react-pdf.org)
- **Development**: [Vite.js](http://vitejs.dev)

## Overview

- `scripts/build.js`: Build the server entry code to be imported by the serverless function. Powered by [esbuild](https://esbuild.github.io).
- `api/misc/data.ts`: Data used to fill out the resume document.
- `src/resume`: Contains the ReactPDF document app.
- `src/resume/index.print.tsx`: Alternative app entry point used to render the Resume to a PDF file.

## Running

### Development

This projects contains a `dev` script which will launch a development server with PDF previewer.
The PDF previewer does not react to HMR, so you will need to refresh the page to see changes.

```bash
yarn dev
```

### Rendering

You can render the PDF to a file using the `render` script.
The file will be rendered to current working directory as `resume.pdf`.

```bash
yarn render
```
