import React from 'react'

import PropTypes from 'prop-types'

const PgHeader = (props) => {
  return (
    <>
      <header
        className={`pg-header-header _fullwidth100 ${props.rootClassName} `}
      >
        <p className="paragraphp2">MIA PRITCHINA UX/UI DESIGNER</p>
        <div className="pg-header-frame6">
          <p className="paragraphp2">LINKEDIN</p>
          <p className="paragraphp2">BEHANCE</p>
          <p className="paragraphp2">EMAIL</p>
        </div>
      </header>
      <style jsx>
        {`
          .pg-header-header {
            display: flex;
            position: relative;
            align-self: stretch;
            flex-shrink: 0;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .pg-header-frame6 {
            gap: var(--dl-space-space-fiveunits);
            display: flex;
          }

          @media (max-width: 991px) {
            .pg-header-frame6 {
              gap: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 767px) {
            .pg-header-header {
              gap: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
              justify-content: flex-start;
            }
            .pg-header-frame6 {
              gap: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .pg-header-header {
              gap: var(--dl-space-space-oneandhalfunits);
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-start;
            }
          }
        `}
      </style>
    </>
  )
}

PgHeader.defaultProps = {
  rootClassName: '',
}

PgHeader.propTypes = {
  rootClassName: PropTypes.string,
}

export default PgHeader
