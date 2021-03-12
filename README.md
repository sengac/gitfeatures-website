# GitFeatures Website
This repository contains the code that runs [gitfeatures.com](https://gitfeatures.com) and is implemented with [Next.js](https://nextjs.org) and [Chakra UI](https://chakra-ui.com). Some of the components are based on samples from [Choc UI](https://choc-ui.tech/).   

This website uses [Lato](https://www.latofonts.com/lato-free-fonts/) as the font for headings and [Inter](https://rsms.me/inter/) as the default font for text.

The picture on the home page is by You X Ventures and can be found at: [https://unsplash.com/photos/Oalh2MojUuk](https://unsplash.com/photos/Oalh2MojUuk)

The website is exported to static files using the `next export` command for easy hosting and SEO.


## Building
To run in development mode that rebuilds automatically after file changes:

`yarn dev`

To run in production mode that uses Server-Side Rendering (SSR):

`yarn start`

To export static files to the `/out` directory for static website hosting (this is how gitfeatures.com is hosted):

`yarn export`


## License
[![CC BY 4.0][cc-by-shield]][cc-by]

This work is licensed under a
[Creative Commons Attribution 4.0 International License][cc-by].

[cc-by]: http://creativecommons.org/licenses/by/4.0/
[cc-by-image]: https://i.creativecommons.org/l/by/4.0/88x31.png
[cc-by-shield]: https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg
