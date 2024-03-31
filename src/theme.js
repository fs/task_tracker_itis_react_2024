import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    body: 'Arial, sans-serif',
    heading: 'Georgia, serif',
  },
  styles: {
    global: {
      body: {
        fontFamily: 'body',
      },
      h1: {
        fontFamily: 'heading',
        fontSize: '2xl',
        fontWeight: 'bold',
        color: 'teal',
      },
    },
  },
});

export default theme;
