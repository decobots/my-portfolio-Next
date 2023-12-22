import React from 'react'

import PropTypes from 'prop-types'

const Imgcarousel = (props) => {
  return (
    <>
      <div
        name="gallery"
        className={`imgcarousel-imagecarousel _fullwidth100 ${props.rootClassName} `}
      >
        <div className="imgcarousel-container _fullwidth100">
          <div className="imgcarousel-container1 _fullwidth100">
            <span name="left" className="imgcarousel-text">
              &lt;&lt;
            </span>
            <div className="imgcarousel-container2 _fullwidth100">
              <img
                alt="image"
                src={props.image_src1}
                name="imb0"
                className="imgcarousel-image _fullwidth100"
              />
              <img
                alt="image"
                src={props.image_src2}
                name="imb1"
                className="imgcarousel-image1 _fullwidth100"
              />
              <img
                alt="image"
                src={props.image_src3}
                name="imb2"
                className="imgcarousel-image2 _fullwidth100"
              />
              <img
                alt="image"
                src={props.image_src4}
                name="imb3"
                className="imgcarousel-image3 _fullwidth100"
              />
            </div>
            <span name="right" className="imgcarousel-text1">
              &gt;&gt;
            </span>
          </div>
          <div className="imgcarousel-container3 _fullwidth100">
            <div className="imgcarousel-container4">
              <img
                alt="image"
                src={props.image_src1}
                name="ims0"
                className="imgcarousel-image4 _fullwidth100"
              />
            </div>
            <div className="imgcarousel-container5">
              <img
                alt="image"
                src={props.image_src2}
                name="ims1"
                className="imgcarousel-image5 _fullwidth100"
              />
            </div>
            <div className="imgcarousel-container6">
              <img
                alt="image"
                src={props.image_src3}
                name="ims2"
                className="imgcarousel-image6 _fullwidth100"
              />
            </div>
            <div className="imgcarousel-container7">
              <img
                alt="image"
                src={props.image_src4}
                name="ims3"
                className="imgcarousel-image7 _fullwidth100"
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .imgcarousel-imagecarousel {
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            align-self: stretch;
            flex-shrink: 0;
            border-radius: var(--dl-radius-radius-corner);
            flex-direction: column;
            background-color: var(--dl-color-palette-light);
          }
          .imgcarousel-container {
            gap: var(--dl-space-space-threeunits);
            flex: 0 0 auto;
            display: flex;
            flex-direction: column;
          }
          .imgcarousel-container1 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .imgcarousel-text {
            width: auto;
            padding: var(--dl-space-space-unit);
            font-size: 3rem;
            margin-top: 0px;
            font-family: Kalnia;
            font-weight: 900;
            line-height: 100%;
            margin-left: 0px;
            margin-right: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-corner);
            margin-bottom: 0px;
            background-color: var(--dl-color-palette-lightest);
          }
          .imgcarousel-container2 {
            display: flex;
            max-height: 100%;
            align-items: center;
            justify-content: space-between;
          }
          .imgcarousel-image {
            object-fit: cover;
          }
          .imgcarousel-image1 {
            display: none;
            object-fit: cover;
          }
          .imgcarousel-image2 {
            display: none;
            object-fit: cover;
          }
          .imgcarousel-image3 {
            display: none;
            object-fit: cover;
          }
          .imgcarousel-text1 {
            width: auto;
            padding: var(--dl-space-space-unit);
            font-size: 3rem;
            margin-top: 0px;
            font-family: Kalnia;
            font-weight: 900;
            line-height: 100%;
            margin-left: var(--dl-space-space-twounits);
            margin-right: 0px;
            border-radius: var(--dl-radius-radius-corner);
            margin-bottom: 0px;
            background-color: var(--dl-color-palette-lightest);
          }
          .imgcarousel-container3 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .imgcarousel-container4 {
            flex: 1;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            min-width: var(--dl-size-size-small);
            align-self: stretch;
            align-items: center;
            border-radius: var(--dl-radius-radius-corner);
            justify-content: center;
            background-color: var(--dl-color-palette-lightest);
          }
          .imgcarousel-image4 {
            object-fit: cover;
          }
          .imgcarousel-container5 {
            flex: 1;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            min-width: var(--dl-size-size-small);
            align-self: stretch;
            align-items: center;
            border-radius: var(--dl-radius-radius-corner);
            justify-content: center;
            background-color: var(--dl-color-palette-lightest);
          }
          .imgcarousel-image5 {
            object-fit: cover;
          }
          .imgcarousel-container6 {
            flex: 1;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            min-width: var(--dl-size-size-small);
            align-self: stretch;
            align-items: center;
            border-radius: var(--dl-radius-radius-corner);
            justify-content: center;
            background-color: var(--dl-color-palette-lightest);
          }
          .imgcarousel-image6 {
            object-fit: cover;
          }
          .imgcarousel-container7 {
            flex: 1;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            min-width: var(--dl-size-size-small);
            align-self: stretch;
            align-items: center;
            border-radius: var(--dl-radius-radius-corner);
            justify-content: center;
            background-color: var(--dl-color-palette-lightest);
          }
          .imgcarousel-image7 {
            object-fit: cover;
          }
          .imgcarousel-root-class-name {
            width: 100%;
          }
          .imgcarousel-root-class-name1 {
            width: 100%;
          }
          .imgcarousel-root-class-name2 {
            width: 100%;
          }
          .imgcarousel-root-class-name3 {
            width: 100%;
          }
          .imgcarousel-root-class-name4 {
            width: 100%;
          }
          .imgcarousel-root-class-name5 {
            width: 100%;
          }
          .imgcarousel-root-class-name6 {
            width: 100%;
          }
          .imgcarousel-root-class-name7 {
            width: 100%;
          }
          .imgcarousel-root-class-name8 {
            width: 100%;
          }
          @media (max-width: 991px) {
            .imgcarousel-text {
              font-size: 2rem;
            }
            .imgcarousel-text1 {
              font-size: 2rem;
            }
          }
          @media (max-width: 767px) {
            .imgcarousel-container3 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 479px) {
            .imgcarousel-text {
              padding: var(--dl-space-space-halfunit);
              margin-right: var(--dl-space-space-unit);
            }
            .imgcarousel-text1 {
              padding: var(--dl-space-space-halfunit);
              margin-left: var(--dl-space-space-unit);
            }
            .imgcarousel-container3 {
              gap: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

Imgcarousel.defaultProps = {
  rootClassName: '',
  image_src4:
    'https://images.unsplash.com/photo-1703042569304-381d416c5be7?ixid=M3w5MTMyMXwwfDF8YWxsfDI4fHx8fHx8Mnx8MTcwMzEyMjA4OXw&ixlib=rb-4.0.3&w=1500',
  image_src2:
    'https://images.unsplash.com/photo-1702971916897-8f510b82d482?ixid=M3w5MTMyMXwwfDF8YWxsfDR8fHx8fHwyfHwxNzAzMTIxMDY2fA&ixlib=rb-4.0.3&w=1500',
  image_src3:
    'https://images.unsplash.com/photo-1702135214290-3d64446356c5?ixid=M3w5MTMyMXwwfDF8YWxsfDd8fHx8fHwyfHwxNzAzMTIxMDY2fA&ixlib=rb-4.0.3&w=1500',
  image_src1:
    'https://images.unsplash.com/photo-1703015619478-0fe558ed7d05?ixid=M3w5MTMyMXwwfDF8YWxsfDE1fHx8fHx8Mnx8MTcwMzEyMTA2Nnw&ixlib=rb-4.0.3&w=1500',
}

Imgcarousel.propTypes = {
  rootClassName: PropTypes.string,
  image_src4: PropTypes.string,
  image_src2: PropTypes.string,
  image_src3: PropTypes.string,
  image_src1: PropTypes.string,
}

export default Imgcarousel
