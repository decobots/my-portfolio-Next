import React from 'react'

import PropTypes from 'prop-types'

import Txttagskill from './txttagskill'

const Cspreviewlink = (props) => {
  return (
    <>
      <div className={`cspreviewlink-container ${props.rootClassName} `}>
        <div className="cspreviewlink-container1 _fullwidth100">
          <p className="cspreviewlink-text headerH3 _fullwidth100">
            {props.Case_name}
          </p>
          <span className="cspreviewlink-text1 paragraphp3 _fullwidth100">
            {props.description}
          </span>
        </div>
        <img
          alt="image"
          src={props.image_src}
          className="cspreviewlink-image _fullwidth100"
        />
        <div className="cspreviewlink-container2">
          <Txttagskill rootClassName="txttagskill-root-class-name"></Txttagskill>
          <Txttagskill rootClassName="txttagskill-root-class-name4"></Txttagskill>
          <Txttagskill rootClassName="txttagskill-root-class-name3"></Txttagskill>
          <Txttagskill rootClassName="txttagskill-root-class-name2"></Txttagskill>
          <Txttagskill rootClassName="txttagskill-root-class-name1"></Txttagskill>
        </div>
        <span className="cspreviewlink-text2 _fullwidth100 _colored_detail_bg">
          {props.skills}
        </span>
      </div>
      <style jsx>
        {`
          .cspreviewlink-container {
            width: var(--dl-size-size-xxlarge);
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .cspreviewlink-container1 {
            gap: var(--dl-space-space-oneandhalfunits);
            height: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-corner);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: flex-start;
            background-color: var(--dl-color-palette-light);
          }
          .cspreviewlink-text {
            text-align: center;
          }
          .cspreviewlink-text1 {
            text-align: center;
          }
          .cspreviewlink-image {
            top: 0px;
            left: 0px;
            height: 100%;
            display: block;
            position: absolute;
            object-fit: cover;
            transition: 0.3s;
            border-radius: var(--dl-radius-radius-corner);
          }
          .cspreviewlink-image:hover {
            display: none;
          }
          .cspreviewlink-container2 {
            gap: var(--dl-space-space-unit);
            top: 0px;
            left: 0px;
            width: auto;
            height: auto;
            display: none;
            position: absolute;
            flex-direction: column;
          }
          .cspreviewlink-text2 {
            left: 0px;
            bottom: 0px;
            position: absolute;
            text-align: center;
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-corner);
            padding-right: var(--dl-space-space-unit);
            text-transform: uppercase;
            border-top-left-radius: 0;
            border-top-right-radius: 0;
          }
          .cspreviewlink-root-class-name {
            width: auto;
            height: auto;
          }
        `}
      </style>
    </>
  )
}

Cspreviewlink.defaultProps = {
  description: 'description',
  rootClassName: '',
  image_src:
    'https://images.unsplash.com/photo-1682687981715-fa2ff72bd87d?ixid=M3w5MTMyMXwxfDF8YWxsfDE2fHx8fHx8Mnx8MTcwMzI3NTM2OXw&ixlib=rb-4.0.3&w=1500',
  skills: 'Text',
  Case_name: 'Case name',
}

Cspreviewlink.propTypes = {
  description: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  skills: PropTypes.string,
  Case_name: PropTypes.string,
}

export default Cspreviewlink
