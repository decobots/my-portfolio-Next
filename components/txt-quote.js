import React from 'react'

import PropTypes from 'prop-types'

const TxtQuote = (props) => {
  return (
    <>
      <div className={`txt-quote-quote ${props.rootClassName} `}>
        <h2 className="txt-quote-text headerH2">{props.Quote}</h2>
        <p className="txt-quote-text1">“</p>
      </div>
      <style jsx>
        {`
          .txt-quote-quote {
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: center;
            padding-top: 0px;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: 0px;
            justify-content: flex-start;
          }
          .txt-quote-text {
            color: var(--dl-color-palette-accent);
            align-self: center;
            text-align: center;
            line-height: 100%;
            padding-top: var(--dl-space-space-threeunits);
          }
          .txt-quote-text1 {
            top: 0px;
            left: 0px;
            color: var(--dl-color-palette-accent);
            right: 0px;
            height: auto;
            margin: auto;
            position: absolute;
            font-size: 96px;
            font-style: Bold;
            text-align: center;
            font-family: 'Kalnia';
            font-weight: 700;
            line-height: 100%;
            font-stretch: normal;
            text-decoration: none;
          }
        `}
      </style>
    </>
  )
}

TxtQuote.defaultProps = {
  Quote: 'Quote',
  rootClassName: '',
}

TxtQuote.propTypes = {
  Quote: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default TxtQuote
