import React from 'react'

import PropTypes from 'prop-types'

const PgSection = (props) => {
  return (
    <>
      <section
        className={`pg-section-container _fullwidth100 ${props.rootClassName} `}
      >
        {props.children}
      </section>
      <style jsx>
        {`
          .pg-section-container {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-tenunits);
            padding-right: var(--dl-space-space-tenunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
          }

          @media (max-width: 991px) {
            .pg-section-container {
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 767px) {
            .pg-section-container {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .pg-section-container {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

PgSection.defaultProps = {
  rootClassName: '',
}

PgSection.propTypes = {
  rootClassName: PropTypes.string,
}

export default PgSection
