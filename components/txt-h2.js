import React from 'react'

import PropTypes from 'prop-types'

const TxtH2 = (props) => {
  return (
    <>
      <div
        className={`txt-h2-property1h2 _fullwidth100 ${props.rootClassName} `}
      >
        <h2 className="txt-h2-text headerH2">{props.H2}</h2>
        <p className="txt-h2-text1 paragraphp2">{props.ph21}</p>
        <p className="txt-h2-text2 paragraphp2">{props.ph22}</p>
      </div>
      <style jsx>
        {`
          .txt-h2-property1h2 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            position: relative;
            align-self: stretch;
            flex-direction: column;
          }
          .txt-h2-text {
            color: var(--dl-color-palette-accent);
            align-self: stretch;
          }
          .txt-h2-text1 {
            align-self: stretch;
          }
          .txt-h2-text2 {
            align-self: stretch;
          }

          .txt-h2-root-class-name1 {
            flex: 1;
            width: 100%;
          }
          .txt-h2-root-class-name2 {
            flex: 1;
            width: 100%;
          }

          .txt-h2-root-class-name22 {
            flex: 1;
            width: 100%;
          }
          .txt-h2-root-class-name23 {
            flex: 1;
            width: 100%;
          }

          .txt-h2-root-class-name38 {
            flex: 1;
            width: 100%;
          }
          .txt-h2-root-class-name39 {
            flex: 1;
            width: 100%;
          }

          @media (max-width: 479px) {
            .txt-h2-root-class-name1 {
              flex: 0 0 auto;
            }
            .txt-h2-root-class-name2 {
              flex: 0 0 auto;
            }
            .txt-h2-root-class-name22 {
              flex: 0 0 auto;
            }
            .txt-h2-root-class-name23 {
              flex: 0 0 auto;
            }
            .txt-h2-root-class-name38 {
              flex: 0 0 auto;
            }
            .txt-h2-root-class-name39 {
              flex: 0 0 auto;
            }
          }
        `}
      </style>
    </>
  )
}

TxtH2.defaultProps = {
  ph21: '',
  rootClassName: '',
  ph22: '',
  H2: 'Header in H',
}

TxtH2.propTypes = {
  ph21: PropTypes.string,
  rootClassName: PropTypes.string,
  ph22: PropTypes.string,
  H2: PropTypes.string,
}

export default TxtH2
