import { css } from 'docz-plugin-css';
import path from 'path';

const PATH_SOURCE = path.join(process.cwd(), 'src');

export default {
  title: 'Genome',
  description: 'React Component Library',
  wrapper: 'wrapper.js',
  indexHtml: './.docz.html',
  src: './src',
  dest: './docs',
  themeConfig: {
    mode: 'light',
    colors: {
      primary: '#A8026F',
    },
    styles: {
      body: {
        fontFamily: '\'Source Sans Pro\', Helvetica, sans-serif',
        fontSize: 16,
        lineHeight: 1.6,
      },
      container: {
        width: ['100%', '100%', 920],
        padding: ['20px', '0 40px 40px'],
      },
      h1: {
        fontFamily: '\'Maven Pro\', Helvetica, sans-serif',
        margin: ['30px 0 20px', '60px 0 20px', '40px 0'],
        fontSize: '48px !important',
        fontWeight: 600,
        letterSpacing: '-0.02em',
      },
      h2: {
        fontFamily: '\'Maven Pro\', Helvetica, sans-serif',
        margin: ['20px 0 20px', '35px 0 20px'],
        lineHeight: ['1.2em', '1.5em'],
        fontSize: 28,
        fontWeight: 600,
        letterSpacing: '-0.02em',
      },
      h3: {
        margin: '25px 0 10px',
        fontSize: [22, 24],
        fontWeight: 400,
      },
      h4: {
        fontSize: 20,
        fontWeight: 400,
      },
      h5: {
        fontSize: 18,
        fontWeight: 400,
      },
      h6: {
        fontSize: 16,
        fontWeight: 400,
      },
      paragraph: {
        fontSize: '1rem',
      },
      //   table: {
      //     overflowY: 'hidden',
      //     overflowX: ['initial', 'initial', 'initial', 'hidden'],
      //     display: ['block', 'block', 'block', 'table'],
      //     width: '100%',
      //     marginBottom: ['.5rem', '.5rem'],
      //     fontFamily: '"Source Code Pro", monospace',
      //     fontSize: 14,
      //     thead: {
      //       th: {
      //         padding: '.5rem',
      //       },
      //     },
      //     tbody: {
      //       td: {
      //         padding: '.5rem',
      //       },
      //     },
      //   },
    },
  },
  plugins: [
    css({
      preprocessor: 'sass',
      cssmodules: true,
      loaderOpts: {
        includePaths: [path.resolve(PATH_SOURCE)],
      },
    }),
    css({
      preprocessor: 'postcss',
    }),
  ],
};
