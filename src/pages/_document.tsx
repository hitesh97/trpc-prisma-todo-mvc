import { createGetInitialProps, ServerStyles, createStylesServer} from '@mantine/next';
import Document, { Head, Html, Main, NextScript, DocumentContext } from 'next/document';

// const getInitialProps = createGetInitialProps();

// export default class _Document extends Document {
//   static getInitialProps = getInitialProps;
// }

const stylesServer = createStylesServer();

export default class _Document extends Document {
  // static getInitialProps = getInitialProps;

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }

  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: [
        initialProps.styles,
        <ServerStyles html={initialProps.html} server={stylesServer} key="styles" />,
      ],
    };
  }
}

