import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Global } from '@emotion/react';
// @ts-ignore
import * as inter from '../styles/inter.css';
// @ts-ignore
import * as lato from '../styles/latofonts.css';
import { extendTheme } from '@chakra-ui/react';

const colors = {
    brand: {
        50: "#ecefff",
        100: "#cbceeb",
        200: "#a9aed6",
        300: "#888ec5",
        400: "#666db3",
        500: "#4d5499",
        600: "#3c4178",
        700: "#2a2f57",
        800: "#181c37",
        900: "#080819",
    },
};

const config: any = {
    useSystemColorMode: false,
};

const fonts = {
    body: 'Inter, sans-serif',
    heading: 'LatoWeb, sans-serif',
    mono: '"Courier New"',
};

const theme = extendTheme({ colors, config, fonts });

const App = ({ Component, pageProps }) => {
    return (
        <ChakraProvider theme={theme}>
            <Global styles={{...inter, ...lato}} />
            <Component {...pageProps} />
        </ChakraProvider>
    );
};

export default App;