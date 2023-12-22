import React, { useState } from 'react'

import PropTypes from 'prop-types'

const BgsCard = (props) => {
  const [HEADER_CARD, setHEADER_CARD] = useState(true)
  const [PARAGRAPH_CARD, setPARAGRAPH_CARD] = useState(true)
  return (
    <>
      <div className={`bgs-card-section _fullwidth100 ${props.rootClassName} `}>
        {props.children}
      </div>
      <style jsx>
        {`
          .bgs-card-section {
            display: flex;
            position: relative;
            align-self: stretch;
            text-align: center;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-corner);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: center;
            background-color: var(--dl-color-palette-light);
          }
          .bgs-card-root-class-name {
            flex: 4;
            width: 100%;
          }
          .bgs-card-root-class-name1 {
            flex: 4;
            width: 100%;
          }

          .bgs-card-root-class-name3 {
            flex: 4;
            width: 100%;
          }
          .bgs-card-root-class-name4 {
            flex: 4;
            width: 100%;
          }

          .bgs-card-root-class-name7 {
            flex: 4;
            width: auto;
          }

          .bgs-card-root-class-name9 {
            flex: 4;
            width: auto;
          }
          .bgs-card-root-class-name10 {
            flex: 4;
            width: 100%;
          }
          .bgs-card-root-class-name11 {
            flex: 4;
            width: 100%;
          }

          .bgs-card-root-class-name16 {
            flex: 4;
            width: 100%;
          }
          .bgs-card-root-class-name17 {
            flex: 4;
            width: 100%;
          }
          .bgs-card-root-class-name18 {
            flex: 4;
            width: auto;
          }
          .bgs-card-root-class-name19 {
            flex: 4;
            width: 100%;
          }

          @media (max-width: 767px) {
            .bgs-card-root-class-name {
              flex: 0 0 auto;
            }
            .bgs-card-root-class-name1 {
              flex: 0 0 auto;
            }
            .bgs-card-root-class-name3 {
              flex: 0 0 auto;
            }
            .bgs-card-root-class-name4 {
              flex: 0 0 auto;
            }
            .bgs-card-root-class-name7 {
              flex: 0 0 auto;
              width: 100%;
            }
            .bgs-card-root-class-name9 {
              flex: 0 0 auto;
              width: 100%;
            }
            .bgs-card-root-class-name10 {
              flex: 0 0 auto;
            }
            .bgs-card-root-class-name11 {
              flex: 0 0 auto;
            }
            .bgs-card-root-class-name16 {
              flex: 0 0 auto;
            }
            .bgs-card-root-class-name17 {
              flex: 0 0 auto;
            }
            .bgs-card-root-class-name18 {
              flex: 0 0 auto;
              width: 100%;
            }
            .bgs-card-root-class-name19 {
              flex: 0 0 auto;
            }
          }
        `}
      </style>
    </>
  )
}

BgsCard.defaultProps = {
  link_text: 'https://example.com',
  rootClassName: '',
  text: 'Link',
}

BgsCard.propTypes = {
  link_text: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default BgsCard
