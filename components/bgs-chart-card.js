import React from 'react'

import PropTypes from 'prop-types'

const BgsChartCard = (props) => {
  return (
    <>
      <div className={`bgs-chart-card-flowchartblock ${props.rootClassName} `}>
        <p className="paragraphp2">{props.text}</p>
      </div>
      <style jsx>
        {`
          .bgs-chart-card-flowchartblock {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            flex-shrink: 0;
            border-radius: var(--dl-radius-radius-corner);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-palette-light);
          }

          .bgs-chart-card-root-class-name7 {
            width: auto;
          }

          .bgs-chart-card-root-class-name9 {
            width: auto;
          }

          .bgs-chart-card-root-class-name18 {
            width: auto;
          }

          .bgs-chart-card-root-class-name27 {
            width: auto;
          }

          .bgs-chart-card-root-class-name36 {
            width: auto;
          }
        `}
      </style>
    </>
  )
}

BgsChartCard.defaultProps = {
  rootClassName: '',
  text: 'body in p',
}

BgsChartCard.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default BgsChartCard
