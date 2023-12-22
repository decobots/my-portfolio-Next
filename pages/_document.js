import Document, { Html, Head, Main, NextScript } from 'next/document'
class CustomDocument extends Document {
  render() {
    return (
      <Html lang="english">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>
          <meta charSet="utf-8"></meta>
          <meta property="twitter:card" content="summary_large_image"></meta>
          <style
            dangerouslySetInnerHTML={{
              __html:
                'html {  line-height: 1.15;}body {  margin: 0;}* {  box-sizing: border-box;  border-width: 0;  border-style: solid;}p,li,ul,pre,div,h1,h2,h3,h4,h5,h6,figure,blockquote,figcaption {  margin: 0;  padding: 0;}button {  background-color: transparent;}button,input,optgroup,select,textarea {  font-family: inherit;  font-size: 100%;  line-height: 1.15;  margin: 0;}button,select {  text-transform: none;}button,[type="button"],[type="reset"],[type="submit"] {  -webkit-appearance: button;}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner {  border-style: none;  padding: 0;}button:-moz-focus,[type="button"]:-moz-focus,[type="reset"]:-moz-focus,[type="submit"]:-moz-focus {  outline: 1px dotted ButtonText;}a {  color: inherit;  text-decoration: inherit;}input {  padding: 2px 4px;}img {  display: block;}html { scroll-behavior: smooth  }',
            }}
            data-tag="reset-style-sheet"
          ></style>
          <style
            dangerouslySetInnerHTML={{
              __html:
                '\n  html {\n    font-family: Lato;\n    font-size: 1.1rem;\n  }\n\n  body {\n    font-weight: 400px;\n    font-style:normal;\n    text-decoration: undefined;\n    text-transform: undefined;\n    letter-spacing: normal;\n    line-height: 150%;\n    color: var(--dl-color-palette-darkest);\n    background-color: var(--dl-color-palette-lightest);\n    \n  }\n\n  \n\n  ',
            }}
            data-tag="default-style-sheet"
          ></style>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Kalnia:wght@100;200;300;400;500;600;700&amp;display=swap"
            data-tag="font"
          ></link>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&amp;display=swap"
            data-tag="font"
          ></link>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Kalnia:wght@100;200;300;400;500;600;700&amp;display=swap"
            data-tag="font"
          ></link>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Kalnia:wght@100;200;300;400;500;600;700&amp;display=swap"
            data-tag="font"
          ></link>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&amp;display=swap"
            data-tag="font"
          ></link>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&amp;display=swap"
            data-tag="font"
          ></link>
          <link
            rel="stylesheet"
            href="https://unpkg.com/@teleporthq/teleport-custom-scripts/dist/style.css"
          ></link>
          <noscript
            dangerouslySetInnerHTML={{
              __html:
                "</noscript><!--This is the head section-->\n<style> \np{\n  max-width: 60ch;\n  word-wrap: break-word;\n}\np:empty {\n  display: none;\n}\n\n\n.dark {\nbackground-color: var(--dl-color-palette-dark);\nborder: 0px !important;\n}\n.dark p {\ncolor: var(--dl-color-palette-light);\n}\n.dark .colored_detail_bg{\n  background-color: var(--dl-color-palette-light);\n}\n.dark .card-section p{\ncolor: var(--dl-color-palette-darkest);\n}\n.dark .chart-card-flowchartblock p{\ncolor: var(--dl-color-palette-darkest);\n}\n\n\n.accent {\n      background-color: var(--dl-color-palette-accent);\n      border: 0px !important;\n      }\n.accent h1,\n.accent h2,\n.accent h3,\n.accent h4,\n.accent h5,\n.accent h6  {\ncolor: var(--dl-color-palette-dark);\n}\n.accent p {\ncolor: var(--dl-color-palette-lightest);\n}\n\n.accent .colored_detail_bg{\n  background-color: var(--dl-color-palette-light);\n}\n.accent .card-section {\nbackground-color: var(--dl-color-palette-dark);\n}\n.accent .card-section p{\n  color:var(--dl-color-palette-accent);\n}\n.accent .card-section h1,\n.accent  .card-section h2,\n.accent .card-section h3,\n.accent  .card-section h4,\n.accent .card-section h5,\n.accent .card-section h6  {\ncolor: var(--dl-color-palette-lightest);\n}\n.accent .chart-card-flowchartblock{\n  background-color: var(--dl-color-palette-light);\n}\n.accent .chart-card-flowchartblock p{\n  color: var(--dl-color-palette-accent);\n}\n\n\n\n </style>\n\n <script src=\"https://storage.googleapis.com/playground-bucket-v2.teleporthq.io/e369f455-d0b8-49dc-ad54-6c08e7690397/283f2d7d-60c8-4d4e-a7a2-4d3b67e84c33\"></script>\n <script src=\"https://code.jquery.com/jquery-3.7.1.slim.min.js\" integrity=\"sha256-kmHvs0B+OpCW5GVHUNjv9rOmY0IvSIRcf7zGUDTDQM8=\" crossorigin=\"anonymous\"></script>\n <script>\n$(function () {\n  $('span').each(function() {\n    var $this = $(this);\n    // Check if the span is empty and doesn't have any inline styles\n    if ($this.is(':empty') && $.trim($this.attr('style')) === '') {\n      $this.remove(); // Remove the empty span without styles\n    }\n  });\n});\n   </script><noscript>",
            }}
          ></noscript>
        </Head>
        <body>
          <Main></Main>
          <NextScript></NextScript>
          <div
            dangerouslySetInnerHTML={{
              __html:
                '<!-- Your body code here -->\n<!-- <script type="text/javascript"> ... </script> -->',
            }}
          ></div>
        </body>
      </Html>
    )
  }
}
export default CustomDocument
