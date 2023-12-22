import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

const ImgcarouselJS = (props) => {
  return (
    <>
      <div className={` ${props.rootClassName} `}>
        <div>
          <div className="imgcarousel-js-container2">
            <React.Fragment>
              <React.Fragment>
                <Script>{`
  \$(function () {
    var galleries = \$("[name=\'gallery\']");

    \$(galleries).each(function (g) {
      var bigs = \$(this).find("[name^=\'imb\'");
      var smalls = \$(this).find("[name^=\'ims\'");
      var left = \$(this).find("[name=\'left\'")[0];
      var right = \$(this).find("[name=\'right\'")[0];

      var n = 0;

      \$(left).on("click", function () {
        //console.log(n , "left", );
        n++;
        update_slide(bigs, n);
      });

      \$(right).on("click", function () {
        //console.log(n, "right");
        if (n > 0) {
          n--;
        } else {
          n = bigs.length - 1;
        }
        update_slide(bigs, n);
      });
      \$(smalls).each(function (i) {
        \$(this).on("click", { value: i }, function (event) {
          console.log(i, "small");
          update_slide(bigs, event.data.value);
        });
      });
      function update_slide(bigs, n) {
        var current = n % bigs.length;
        for (var j = 0; j < bigs.length; j++) {
          if (j == current) \$(bigs[j]).show();
          else \$(bigs[j]).hide();
        }
      }
    });
  });
`}</Script>
              </React.Fragment>
            </React.Fragment>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .imgcarousel-js-container2 {
            display: contents;
          }

          .imgcarousel-js-root-class-name1 {
            width: auto;
            height: auto;
          }
          .imgcarousel-js-root-class-name2 {
            width: auto;
            height: auto;
          }
        `}
      </style>
    </>
  )
}

ImgcarouselJS.defaultProps = {
  rootClassName: '',
}

ImgcarouselJS.propTypes = {
  rootClassName: PropTypes.string,
}

export default ImgcarouselJS
