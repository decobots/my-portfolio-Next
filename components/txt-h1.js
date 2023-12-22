import React from 'react'

import PropTypes from 'prop-types'

const TxtH1 = (props) => {
  return (
    <>
      <div
        className={`txt-h1-property1h1 _fullwidth100 ${props.rootClassName} `}
      >
        <h1 className="txt-h1-text headerH1">{props.H1}</h1>
        <p className="paragraphp1">{props.ph1}</p>
      </div>
      <style jsx>
        {`
          .txt-h1-property1h1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .txt-h1-text {
            color: var(--dl-color-palette-accent);
          }
        `}
      </style>
    </>
  )
}

TxtH1.defaultProps = {
  H1: 'Heading',
  rootClassName: '',
  ph1: '',
}

TxtH1.propTypes = {
  H1: PropTypes.string,
  rootClassName: PropTypes.string,
  ph1: PropTypes.string,
}

export default TxtH1
