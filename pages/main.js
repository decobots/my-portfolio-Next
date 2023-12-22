import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import PgHeader from '../components/pg-header'
import PgSection from '../components/pg-section'
import Cspreviewlink from '../components/cspreviewlink'
import PgFooter from '../components/pg-footer'

const Main = (props) => {
  return (
    <>
      <div className="main-container">
        <Head>
          <title>main - exported project</title>
          <meta property="og:title" content="main - exported project" />
        </Head>
        <PgHeader rootClassName="pg-header-root-class-name3"></PgHeader>
        <div className="main-container1">
          <PgSection rootClassName="pg-section-root-class-name40">
            <Link href="/">
              <a>
                <Cspreviewlink
                  skills="ux | ui | product | research"
                  Case_name="VV"
                  image_src="/vv/frame%204287.svg"
                  description="New category for mobile store’s catalog"
                  rootClassName="cspreviewlink-root-class-name"
                  className="main-component2"
                ></Cspreviewlink>
              </a>
            </Link>
          </PgSection>
        </div>
        <PgFooter rootClassName="pg-footer-root-class-name3"></PgFooter>
      </div>
      <style jsx>
        {`
          .main-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .main-container1 {
            width: 100%;
          }
          .main-component2 {
            text-decoration: none;
          }
        `}
      </style>
    </>
  )
}

export default Main
