import React from 'react'

import PropTypes from 'prop-types'

const PgFooter = (props) => {
  return (
    <>
      <footer
        className={`pg-footer-footer _fullwidth100 ${props.rootClassName} `}
      >
        <p className="paragraphp2">LINKEDIN</p>
        <p className="paragraphp2">BEHANCE</p>
        <p className="paragraphp2">EMAIL</p>
      </footer>
      <style jsx>
        {`
          .pg-footer-footer {
            gap: var(--dl-space-space-fourunits);
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: flex-end;
          }
          .pg-footer-root-class-name {
            left: 0px;
            bottom: 0px;
            position: static;
          }
          .pg-footer-root-class-name1 {
            left: 0px;
            bottom: 0px;
            position: static;
          }
          .pg-footer-root-class-name2 {
            left: 0px;
            bottom: 0px;
            position: static;
          }
          .pg-footer-root-class-name3 {
            left: 0px;
            bottom: 0px;
            position: absolute;
          }
        `}
      </style>
    </>
  )
}

PgFooter.defaultProps = {
  rootClassName: '',
}

PgFooter.propTypes = {
  rootClassName: PropTypes.string,
}

export default PgFooter
