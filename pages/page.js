import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'

import PgSection from '../components/pg-section'
import TxtH2 from '../components/txt-h2'
import TxtH3 from '../components/txt-h3'
import BgsChartCard from '../components/bgs-chart-card'

const Page = (props) => {
  return (
    <>
      <div className="page-container">
        <Head>
          <title>Page - exported project</title>
          <meta property="og:title" content="Page - exported project" />
        </Head>
        <PgSection rootClassName="pg-section-root-class-name42">
          <TxtH2 rootClassName="txt-h2-root-class-name51"></TxtH2>
        </PgSection>
        <PgSection rootClassName="pg-section-root-class-name43">
          <TxtH2 rootClassName="txt-h2-root-class-name52"></TxtH2>
        </PgSection>
        <div>
          <PgSection rootClassName="pg-section-root-class-name44">
            <TxtH2
              H2="Let's fix it "
              rootClassName="txt-h2-root-class-name53"
            ></TxtH2>
            <TxtH3
              H3="Before"
              ph31="With current user-flow users prefer to skip the onboarding because it's not why they came to the app at the moment. It’s not only defiese the purpose but angers users by distracting them from their original intention."
              rootClassName="txt-h3-root-class-name43"
            ></TxtH3>
            <div className="page-before">
              <div className="page-container01">
                <div className="page-container02">
                  <React.Fragment>
                    <React.Fragment>
                      <Script>{`
  // Wait for HTML document to get ready
  window.addEventListener("load", function () {
    // NOT \`DOMContentLoaded\`
    var accent = getComputedStyle(document.documentElement).getPropertyValue(
      "--dl-color-palette-accent"
    );
    var dark = getComputedStyle(document.documentElement).getPropertyValue(
      "--dl-color-palette-dark"
    );

    new LeaderLine(\$("#fch1")[0], \$("#fch2")[0], {
      color: accent,
      startPlug: "disc",
      endPlug: "arrow3",
    });

    new LeaderLine(\$("#fch2")[0], \$("#fch3")[0], {
      color: accent,
      startPlug: "disc",
      endPlug: "arrow3",
    });


  });
`}</Script>
                    </React.Fragment>
                  </React.Fragment>
                </div>
              </div>
              <div className="page-container03">
                <div id="fch1">
                  <BgsChartCard
                    text="Onboarding"
                    rootClassName="bgs-chart-card-root-class-name36"
                  ></BgsChartCard>
                </div>
              </div>
              <div className="page-container05">
                <div id="fch2">
                  <BgsChartCard
                    text="Main"
                    rootClassName="bgs-chart-card-root-class-name37"
                  ></BgsChartCard>
                </div>
              </div>
              <div className="page-container07">
                <div id="fch3">
                  <BgsChartCard
                    text="Catalog"
                    rootClassName="bgs-chart-card-root-class-name38"
                  ></BgsChartCard>
                </div>
              </div>
            </div>
            <TxtH3
              H3="After"
              ph31="I decided to move the onboarding to the moment of the first interaction with the catalogue or search."
              rootClassName="txt-h3-root-class-name44"
            ></TxtH3>
            <div className="page-after">
              <div className="page-container09">
                <div className="page-container10">
                  <React.Fragment>
                    <React.Fragment>
                      <Script>{`
  // Wait for HTML document to get ready
  window.addEventListener("load", function () {
    // NOT \`DOMContentLoaded\`
    var accent = getComputedStyle(document.documentElement).getPropertyValue(
      "--dl-color-palette-accent"
    );
    var dark = getComputedStyle(document.documentElement).getPropertyValue(
      "--dl-color-palette-dark"
    );

    new LeaderLine(\$("#f2ch1")[0], \$("#f2ch4")[0], {
      color: accent,
      startPlug: "disc",
      endPlug: "arrow3",
    });

    new LeaderLine(\$("#f2ch2")[0], \$("#f2ch4")[0], {
      color: accent,
      startPlug: "disc",
      endPlug: "arrow3",
    });

    new LeaderLine(\$("#f2ch3")[0], \$("#f2ch4")[0], {
      color: accent,
      startPlug: "disc",
      endPlug: "arrow3",
    });

    new LeaderLine(\$("#f2ch4")[0], \$("#f2ch5")[0], {
      color: accent,
      startPlug: "disc",
      endPlug: "arrow3",
    });

    new LeaderLine(\$("#f2ch4")[0], \$("#f2ch6")[0], {
      color: accent,
      startPlug: "disc",
      endPlug: "arrow3",
    });
  });
`}</Script>
                    </React.Fragment>
                  </React.Fragment>
                </div>
              </div>
              <div className="page-container11">
                <div id="f2ch1">
                  <BgsChartCard
                    text="Main"
                    rootClassName="bgs-chart-card-root-class-name39"
                  ></BgsChartCard>
                </div>
                <div id="f2ch2">
                  <BgsChartCard
                    text="Catalog"
                    rootClassName="bgs-chart-card-root-class-name40"
                  ></BgsChartCard>
                </div>
                <div id="f2ch3">
                  <BgsChartCard
                    text="Search"
                    rootClassName="bgs-chart-card-root-class-name41"
                  ></BgsChartCard>
                </div>
              </div>
              <div className="page-container15">
                <div id="f2ch4">
                  <BgsChartCard
                    text="Onboarding"
                    rootClassName="bgs-chart-card-root-class-name42"
                  ></BgsChartCard>
                </div>
              </div>
              <div className="page-container17">
                <div id="f2ch5">
                  <BgsChartCard
                    text="Catalog"
                    rootClassName="bgs-chart-card-root-class-name43"
                  ></BgsChartCard>
                </div>
                <div id="f2ch6">
                  <BgsChartCard
                    text="Search result"
                    rootClassName="bgs-chart-card-root-class-name44"
                  ></BgsChartCard>
                </div>
              </div>
            </div>
          </PgSection>
        </div>
      </div>
      <style jsx>
        {`
          .page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .page-before {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
          }
          .page-container01 {
            display: none;
          }
          .page-container02 {
            display: contents;
          }
          .page-container03 {
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .page-container05 {
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .page-container07 {
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .page-after {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .page-container09 {
            display: none;
          }
          .page-container10 {
            display: contents;
          }
          .page-container11 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .page-container15 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .page-container17 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          @media (max-width: 991px) {
            .page-container11 {
              align-items: flex-start;
            }
            .page-container17 {
              align-items: flex-end;
            }
          }
          @media (max-width: 767px) {
            .page-before {
              gap: var(--dl-space-space-fiveunits);
              flex-direction: column;
            }
            .page-after {
              gap: var(--dl-space-space-fiveunits);
              flex-direction: column;
              justify-content: flex-start;
            }
            .page-container11 {
              gap: 0;
              flex-direction: row;
              justify-content: space-between;
            }
            .page-container17 {
              gap: 0;
              flex-direction: row;
              justify-content: space-between;
            }
          }
          @media (max-width: 479px) {
            .page-after {
              flex-direction: column;
            }
            .page-container11 {
              flex-direction: row;
            }
            .page-container17 {
              flex-direction: row;
            }
          }
        `}
      </style>
    </>
  )
}

export default Page
