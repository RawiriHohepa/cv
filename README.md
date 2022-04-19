# React CV

A React version of my CV since I got fed up with using Figma.\
Converts to PDF using a puppeteer script by [William Kwok](https://medium.com/swlh/making-a-resume-in-html-or-react-bd1781abcdef).

## How To Use

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.\
Open [http://localhost:3000/cvonly=true](http://localhost:3000/cvonly=true) to view just the CV component.

### `npm run save`

Runs a puppeteer script to view the CV and convert it to an A4 PDF. The app must be running first.\
Saves the PDF as `cv.pdf` in the root folder.

### `npm test``

Runs a snapshot test to check that the contents and layout of the CV have not changed.\
**NOTE: styling is not tested** due to limitations with Jest

## TODO

- [x] Create snapshot test for refactoring
- [ ] Centralise layout settings (spacing, margins, etc.)
- [ ] Change to fully data-driven rendering
- [ ] Use CMS (e.g. Strapi) for data
- [ ] get hired
