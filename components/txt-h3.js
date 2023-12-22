import React from 'react'

import PropTypes from 'prop-types'

const TxtH3 = (props) => {
  return (
    <>
      <div
        className={`txt-h3-property1h3 _fullwidth100 ${props.rootClassName} `}
      >
        <h3 className="txt-h3-text headerH3">{props.H3}</h3>
        <p className="txt-h3-text1 paragraphp2">{props.ph31}</p>
        <p className="txt-h3-text2 paragraphp2">{props.ph32}</p>
      </div>
      <style jsx>
        {`
          .txt-h3-property1h3 {
            gap: var(--dl-space-space-unit);
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .txt-h3-text {
            color: var(--dl-color-palette-accent);
            align-self: stretch;
          }
          .txt-h3-text1 {
            align-self: stretch;
          }
          .txt-h3-text2 {
            align-self: stretch;
          }

          .txt-h3-root-class-name7 {
            align-self: center;
          }
          .txt-h3-root-class-name8 {
            align-self: center;
          }

          .txt-h3-root-class-name24 {
            align-self: center;
          }
          .txt-h3-root-class-name25 {
            align-self: center;
          }

          .txt-h3-root-class-name38 {
            align-self: center;
          }
          .txt-h3-root-class-name39 {
            align-self: center;
          }

          .txt-h3-root-class-name45 {
            align-self: center;
          }
          .txt-h3-root-class-name46 {
            align-self: center;
          }
        `}
      </style>
    </>
  )
}

TxtH3.defaultProps = {
  rootClassName: '',
  ph31: '',
  ph32: '',
  H3: 'Header in H',
}

TxtH3.propTypes = {
  rootClassName: PropTypes.string,
  ph31: PropTypes.string,
  ph32: PropTypes.string,
  H3: PropTypes.string,
}

export default TxtH3
