import React from 'react'

import PropTypes from 'prop-types'

const Txttagskill = (props) => {
  return (
    <>
      <div
        className={`txttagskill-container _colored_detail_bg ${props.rootClassName} `}
      >
        <span className="txttagskill-text">{props.skill}</span>
      </div>
      <style jsx>
        {`
          .txttagskill-container {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-corner);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            border-top-left-radius: 0;
            border-top-right-radius: var(--dl-radius-radius-corner);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: var(--dl-radius-radius-corner);
          }
          .txttagskill-text {
            font-style: italic;
            font-weight: 900;
            text-transform: uppercase;
          }
          .txttagskill-root-class-name {
            top: 0px;
            left: 0px;
            width: auto;
            height: auto;
            position: static;
          }
          .txttagskill-root-class-name1 {
            top: 0px;
            left: 0px;
            width: auto;
            height: auto;
            position: static;
          }
          .txttagskill-root-class-name2 {
            top: 0px;
            left: 0px;
            width: auto;
            height: auto;
            position: static;
          }
          .txttagskill-root-class-name3 {
            top: 0px;
            left: 0px;
            width: auto;
            height: auto;
            position: static;
          }
          .txttagskill-root-class-name4 {
            top: 0px;
            left: 0px;
            width: auto;
            height: auto;
            position: static;
          }
        `}
      </style>
    </>
  )
}

Txttagskill.defaultProps = {
  skill: 'skill',
  rootClassName: '',
}

Txttagskill.propTypes = {
  skill: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Txttagskill
