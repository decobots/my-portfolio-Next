import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'

import ImgcarouselJS from '../components/imgcarousel-js'
import PgHeader from '../components/pg-header'
import PgSection from '../components/pg-section'
import TxtH1 from '../components/txt-h1'
import TxtH2 from '../components/txt-h2'
import TxtH3 from '../components/txt-h3'
import BgsCard from '../components/bgs-card'
import TxtQuote from '../components/txt-quote'
import Imgcarousel from '../components/imgcarousel'
import BgsChartCard from '../components/bgs-chart-card'
import PgFooter from '../components/pg-footer'

const Vvcase = (props) => {
  return (
    <>
      <div className="vvcase-container">
        <Head>
          <title>exported project</title>
        </Head>
        <ImgcarouselJS rootClassName="imgcarousel-js-root-class-name"></ImgcarouselJS>
        <PgHeader rootClassName="pg-header-root-class-name"></PgHeader>
        <div className="_fullwidth100 _dark">
          <PgSection rootClassName="pg-section-root-class-name41">
            <img
              alt="image"
              src="/vv/frame%204287.svg"
              className="vvcase-image _fullwidth100"
            />
          </PgSection>
        </div>
        <div className="_fullwidth100 _dark vvcase-hero">
          <PgSection rootClassName="pg-section-root-class-name11">
            <TxtH1
              H1="About VV"
              ph1="VV is a well-known chain of eco-friendly goods in the central region of Russia. They have an excellent reputation as a mono-brand store. VV meticulously selects manufacturers, tests products, and seeks feedback, so customers are always sure about the items’ quality."
              rootClassName="txt-h1-root-class-name"
            ></TxtH1>
          </PgSection>
        </div>
        <div className="_fullwidth100">
          <PgSection rootClassName="pg-section-root-class-name12">
            <TxtH2
              H1="Unfortunately, this approach doesn’t allow VV to grow their catalogue faster, which makes them lose potential customers."
              H2="Problem"
              ph21="Unfortunately, it takes a lot of time and research to launch each new product, which limits VV’s catalog. And with limited catalog VV looses their online customers to other stores."
              rootClassName="txt-h2-root-class-name"
            ></TxtH2>
            <TxtH2
              H1="Unfortunately, this approach doesn’t allow VV to grow their catalogue faster, which makes them lose potential customers."
              H2="Solution"
              ph21="VV wants to add products from third-party brands in their online catalog. Having bigger variety to choose from might help to attract online customers."
              rootClassName="txt-h2-root-class-name18"
            ></TxtH2>
            <TxtH2
              H1="Unfortunately, this approach doesn’t allow VV to grow their catalogue faster, which makes them lose potential customers."
              H2="State of UX and UI"
              ph21="VV already decided to present third-party items in new section of online catalog as a “Supermarket” based on marketing research. "
              ph22="They would like to have minimum additions to the existing Design System. "
              rootClassName="txt-h2-root-class-name19"
            ></TxtH2>
            <div className="vvcase-container02">
              <TxtH2
                H2="My task"
                ph21="To find a way to present new category and product cards in an easy to understand way. "
                rootClassName="txt-h2-root-class-name1"
              ></TxtH2>
              <TxtH2
                H2="My role"
                ph21="UX and UI design, with reviews from my mentor."
                rootClassName="txt-h2-root-class-name2"
              ></TxtH2>
            </div>
          </PgSection>
        </div>
        <div className="_accent _fullwidth100">
          <PgSection rootClassName="pg-section-root-class-name">
            <TxtH2
              H2="Approach"
              ph21="As an active customer of VV myself, I already had an idea of current user experience, so I focused on understanding why VV has problems with their existing catalog and how we can improve user experience."
              rootClassName="txt-h2-root-class-name6"
            ></TxtH2>
            <TxtH3
              H3="Understand business goals"
              ph31="I know what VV tries to do, but I’m not sure why they do it this exact way. So I start from series of interviews with stackholders to understand goals and concerns.\u2028\u2028To summarise all my findings I like to formulate Jobs to be done statements which easy to remember and quote:"
              rootClassName="txt-h3-root-class-name"
            ></TxtH3>
            <div className="vvcase-container03">
              <BgsCard
                Hcard="I want to find out which products are popular, so that I can release similar products under my own brand, because it brings in more profit."
                pCard="Having sales data about outside products VV can make better decisions on launching their own brand’s items."
                rootClassName="bgs-card-root-class-name1"
              >
                <TxtH3
                  H3="I want to sell third-party products, so that customers can order everything in one place, because then they will choose VV more often"
                  ph2="Having sales data about outside products VV can make better decisions on launching their own brand’s items."
                  ph31="With a bigger variety of items there is a better chance that customers will be able to order all they need in VV"
                  rootClassName="txt-h3-root-class-name1"
                ></TxtH3>
              </BgsCard>
              <BgsCard
                Hcard="I want to sell third-party products, so that customers can order everything in one place because then they will choose VkusVill more often."
                pCard="With a bigger variety of items there is a better chance that customers will be able to order all they need in VV."
                rootClassName="bgs-card-root-class-name"
              >
                <TxtH3
                  H3="I want to sell more in each order, so customers will be eligible for free delivery and will choose VV more often"
                  ph2="With a bigger variety of items there is a better chance that customers will be able to order all they need in VV."
                  ph31="A bigger catalog leads to a bigger average check which allows free delivery to more customers"
                  rootClassName="txt-h3-root-class-name2"
                ></TxtH3>
              </BgsCard>
            </div>
            <div className="vvcase-container04">
              <BgsCard
                Hcard="I want to sell third-party products, because it is difficult to negotiate the production of goods under our own brand, so we will be able to save resources on products that might not be successful."
                pCard="With well known items in catalog VV might attract new categories of customers who weren’t interested in VV before."
                rootClassName="bgs-card-root-class-name9"
              >
                <TxtH3
                  H3="I want to sell third-party products, to attract new customers, so my revenue is bigger"
                  ph2="With well known items in catalog VV might attract new categories of customers who weren’t interested in VV before."
                  ph31="With well known items in catalog VV might attract new categories of customers who weren’t interested in VV before"
                  rootClassName="txt-h3-root-class-name13"
                ></TxtH3>
              </BgsCard>
              <BgsCard
                Hcard="I want to sell more in each order so customers will be eligible for free delivery and will choose VV more often."
                pCard="A bigger catalog leads to a bigger average check which allows free delivery to more customers."
                rootClassName="bgs-card-root-class-name10"
              >
                <TxtH3
                  H3="I want to find out which products are popular, so that I can release similar products under my own brand, because it brings-in more profit"
                  ph31="Having sales data about outside products VV can make better decisions on launching their own brand’s items"
                  rootClassName="txt-h3-root-class-name14"
                ></TxtH3>
              </BgsCard>
            </div>
          </PgSection>
        </div>
        <div className="_fullwidth100">
          <PgSection rootClassName="pg-section-root-class-name5">
            <TxtH2
              H2="Empathize with user"
              ph3="I conduct a series of 15-minute interviews with users to understand what they treasure and what needs to be improved."
              ph21="I conduct a series of 15-minute interviews with users to understand what they treasure about VV and what needs to be improved."
              rootClassName="txt-h2-root-class-name7"
            ></TxtH2>
            <BgsCard
              pCard="Customers trust VV and expect VV to be used to buy from VV without reading the composition of the product and checking best-before dates. This saves time and lowers the mental load."
              rootClassName="bgs-card-root-class-name8"
            >
              <p className="vvcase-text">
                Customers trust VV and used to buy from VV without checking the
                contents of the product and best-before dates. This saves time
                and lowers the mental load.
              </p>
            </BgsCard>
            <TxtQuote
              Quote="I don't need to read the ingredients list because I trust VV reputation"
              rootClassName="txt-quote-root-class-name"
            ></TxtQuote>
            <BgsCard
              pCard="With growing delivery costs it becomes too expensive to place many small orders in different stores. It’s much more cost-effective to place a single order in one store to be eligible for free delivery. So people choose bigger chains even if the quality of goods is not the same."
              rootClassName="bgs-card-root-class-name5"
            >
              <p className="vvcase-text01">
                *There is no “leave it somewhere” delivery option in Moscow. All
                items are handled personally to the buyer; if the buyer is not
                home, the order will be returned to the store. How many
                Saturdays I spent at home waiting for deliveries…
              </p>
              <p>
                Ordering in multiple places leads to an additional mental load –
                you need to remember what and where to order, adapt to different
                navigation and product cards in apps, and wait for multiple
                deliveries*.
              </p>
            </BgsCard>
            <BgsCard
              pCard="Ordering in multiple places leads to an additional mental load – you need to remember what and where to order, adapt to different navigation and product cards in apps, and wait for multiple deliveries*."
              rootClassName="bgs-card-root-class-name6"
            >
              <p>
                Ordering in multiple places leads to an additional mental load –
                you need to remember what and where to order, adapt to different
                navigation and product cards in apps, and wait for multiple
                deliveries*.
              </p>
            </BgsCard>
            <TxtQuote
              Quote="I want to order everything in one place to avoid overpaying for delivery and save time"
              rootClassName="txt-quote-root-class-name1"
            ></TxtQuote>
          </PgSection>
        </div>
        <div className="_fullwidth100 _dark">
          <PgSection rootClassName="pg-section-root-class-name4">
            <TxtH2
              H2="Visualize"
              ph21="To keep on track our goal I create a customer journey map. I refer to it when we go too far away from our course"
              rootClassName="txt-h2-root-class-name8"
            ></TxtH2>
            <div className="vvcase-cjm">
              <div>
                <div className="vvcase-container06">
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

    new LeaderLine(\$("#em1")[0], \$("#em2n")[0], {
      color: dark,
      startPlug: "disc",
      endPlug: "arrow3",
      middleLabel: LeaderLine.captionLabel("Before", { color: dark }),
    });

    new LeaderLine(\$("#em1")[0], \$("#em2p")[0], {
      color: accent,
      startPlug: "disc",
      endPlug: "arrow3",
      middleLabel: LeaderLine.captionLabel("Afer", { color: accent }),
    });

    new LeaderLine(\$("#em2n")[0], \$("#em3n")[0], {
      color: dark,
      endPlug: "arrow3",
    });

    new LeaderLine(\$("#em2p")[0], \$("#em3p")[0], {
      color: accent,
      endPlug: "arrow3",
    });
  });
`}</Script>
                    </React.Fragment>
                  </React.Fragment>
                </div>
              </div>
              <div className="vvcase-row1">
                <div className="vvcase-container07">
                  <span className="typographyheaderH3">Step</span>
                </div>
                <div className="vvcase-container08">
                  <span className="typographyheaderH3">I want soup</span>
                </div>
                <div className="vvcase-container09">
                  <span className="typographyheaderH3">
                    I also wanna Ruffles, Oreo, Garlic, oh and dish soap!
                  </span>
                </div>
                <div className="vvcase-container10">
                  <span className="typographyheaderH3">It’s time to shop</span>
                </div>
              </div>
              <div className="vvcase-row2">
                <div className="vvcase-container11">
                  <span className="typographyheaderH3">Action</span>
                </div>
                <div className="vvcase-container12">
                  <span className="typographyparagraphp2">
                    Goes to the ready-to-eat food section
                  </span>
                </div>
                <div className="vvcase-container13">
                  <span className="typographyparagraphp2">
                    Searches for Ruffles, Oreo, Garlic, and dish soap
                  </span>
                </div>
                <div className="vvcase-container14">
                  <span className="typographyparagraphp2">
                    Goes to Wallmart
                  </span>
                </div>
              </div>
              <div className="vvcase-row3">
                <div className="vvcase-container15">
                  <span className="typographyheaderH3">Expected Outcome</span>
                </div>
                <div className="vvcase-container16">
                  <span className="typographyparagraphp2">
                    Soup is easy to find
                  </span>
                </div>
                <div className="vvcase-container17">
                  <span className="typographyparagraphp2">Items are found</span>
                </div>
                <div className="vvcase-container18">
                  <span className="typographyparagraphp2">
                    Orders everything in one place
                  </span>
                </div>
              </div>
              <div className="vvcase-row4 _colored_detail_bg">
                <div className="vvcase-container19">
                  <span className="typographyheaderH3">Stopper</span>
                </div>
                <div className="vvcase-container20">
                  <span className="typographyparagraphp2">—</span>
                </div>
                <div className="vvcase-container21">
                  <span className="typographyparagraphp2">
                    There are no such items
                  </span>
                </div>
                <div className="vvcase-container22">
                  <span className="typographyparagraphp2">
                    Doesn’t want to make an order at all
                  </span>
                </div>
              </div>
              <div className="vvcase-emotions">
                <div className="vvcase-container23">
                  <span className="typographyheaderH3 vvcase-text20">
                    Emotions
                  </span>
                </div>
                <div className="vvcase-frame4227">
                  <img
                    id="em1"
                    alt="ApathyI585"
                    src="/vv/apathyi585-76n-200h.png"
                    className="vvcase-apathy"
                  />
                </div>
                <div className="vvcase-frame4232">
                  <img
                    id="em2n"
                    alt="UnhappyI585"
                    src="/vv/unhappyi585-99p-200h.png"
                    className="vvcase-unhappy"
                  />
                  <img
                    id="em2p"
                    alt="IrreverentI585"
                    src="/vv/irreverenti585-nlm7-200h.png"
                    className="vvcase-irreverent"
                  />
                </div>
                <div className="vvcase-frame4233">
                  <img
                    id="em3n"
                    alt="UnhappyI585"
                    src="/vv/unhappyi585-dff-200h.png"
                    className="vvcase-unhappy1"
                  />
                  <img
                    id="em3p"
                    alt="IMAGE2xI585"
                    src="/vv/image2xi585-5zwr-200h.png"
                    className="vvcase-image2x"
                  />
                </div>
              </div>
              <div className="vvcase-row5 _colored_detail_bg">
                <div className="vvcase-container24">
                  <span className="typographyheaderH3">Fix</span>
                </div>
                <div className="vvcase-container25">
                  <span className="typographyparagraphp2">
                    There&apos;s also soup from Tim Hortons
                  </span>
                </div>
                <div className="vvcase-container26">
                  <span className="typographyparagraphp2">
                    Ruffles, Oreo, Garlic, and dish soap are found
                  </span>
                </div>
                <div className="vvcase-container27">
                  <span className="typographyparagraphp2">Makes an order</span>
                </div>
              </div>
            </div>
          </PgSection>
        </div>
        <div className="_fullwidth100">
          <PgSection rootClassName="pg-section-root-class-name6">
            <TxtH2
              H2="How do others do it?"
              ph21="I am analyzing the strategies of businesses that sell products from various brands as well as products under their own brand. I found two approaches to their products: they either mix-in or they stand out from the third-party product."
              rootClassName="txt-h2-root-class-name9"
            ></TxtH2>
            <TxtH3
              H3="Mix-in"
              ph31="Stores do not differentiate between their own and third-party items in catalog and cards. You can only guess based on the appearance and the name."
              rootClassName="txt-h3-root-class-name5"
            ></TxtH3>
            <Imgcarousel
              image_src1="/vv/mixin/frame%204283-200w.png"
              image_src2="/vv/mixin/frame%204284-200w.png"
              image_src3="/vv/mixin/frame%204285-200w.png"
              image_src4="/vv/mixin/frame%204286-200w.png"
              rootClassName="imgcarousel-root-class-name"
            ></Imgcarousel>
            <TxtH3
              H3="Stand out"
              ph31="Stores actively label products by their own brand, distinguishing them from third-party brands."
              rootClassName="txt-h3-root-class-name6"
            ></TxtH3>
            <Imgcarousel
              image_src1="/vv/standout/frame-1-200h.png"
              image_src2="/vv/standout/frame-2-200h.png"
              image_src3="/vv/standout/frame-3-200h.png"
              image_src4="/vv/standout/frame-200h.png"
              rootClassName="imgcarousel-root-class-name1"
            ></Imgcarousel>
            <TxtH3
              H3="Insight"
              ph31="Companies that actively develop their brand image highlight their own products more frequently."
              ph32="VV was initially focused on selling brand products, so it makes sense to give them more prominence."
              rootClassName="txt-h3-root-class-name11"
            ></TxtH3>
          </PgSection>
        </div>
        <div className="_accent _fullwidth100">
          <PgSection rootClassName="pg-section-root-class-name2">
            <TxtH2
              H2="How to show the difference?"
              ph21="I’m starting from preparing new elements for testing."
              ph22="The task is complicated by the fact that the brand's colour is green, and any attempt to mark VkusVill's cards with the green colour will make them look like they are correct/good-to-go 💚, while the other products might appear as if they are bad ❤️‍🩹"
              rootClassName="txt-h2-root-class-name11"
            ></TxtH2>
            <Imgcarousel
              image_src1="/vv/cards/frame%204151-200h.png"
              image_src2="/vv/cards/frame%204152-200h.png"
              image_src3="/vv/cards/frame%204153-200h.png"
              image_src4="/vv/cards/frame%204154-200h.png"
              rootClassName="imgcarousel-root-class-name2"
            ></Imgcarousel>
            <div className="vvcase-container28">
              <TxtH3
                H3="Testing findings"
                rootClassName="txt-h3-root-class-name12"
              ></TxtH3>
              <ul className="list">
                <li className="list-item">
                  <span>
                    Users don&apos;t understand the concept of the “Supermarket”
                    category. Even if they know that VV has started to sell
                    products from other brands.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
                <li className="list-item">
                  <span>
                    After a brief explanation of the concept of a
                    &quot;Supermarket&quot;, the difficulties disappear.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
                <li className="list-item">
                  <span>
                    Respondents don&apos;t care who produced the item.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
                <li className="list-item">
                  <span>The banner seems too busy.</span>
                </li>
              </ul>
            </div>
          </PgSection>
        </div>
        <div className="_fullwidth100 _dark">
          <PgSection rootClassName="pg-section-root-class-name1">
            <TxtH2 H2="Fix it" rootClassName="txt-h2-root-class-name13"></TxtH2>
            <div className="vvcase-container29">
              <div className="vvcase-container30">
                <TxtH3
                  H3='Clarify "supermarket"'
                  ph31="Since users don't have problem understanding feature after explanation I add short onboarding animation and a note into supermarket category in the catalog."
                  rootClassName="txt-h3-root-class-name7"
                ></TxtH3>
                <div className="vvcase-container31">
                  <img
                    alt="image"
                    src="/vv/%C3%B0%C2%92%C3%B0%C2%BD%C3%B1%C2%83%C3%B1%C2%82%C3%B1%C2%80%C3%B0%C2%B8%20%C3%B1%C2%81%C3%B1%C2%83%C3%B0%C2%BF%C3%B0%C2%B5%C3%B1%C2%80%C3%B0%C2%BC%C3%B0%C2%B0%C3%B1%C2%80%C3%B0%C2%BA%C3%B0%C2%B5%C3%B1%C2%82%C3%B0%C2%B0-200w.png"
                    className="vvcase-image1"
                  />
                  <img
                    alt="image"
                    src="/vv/image%20193-200w.png"
                    className="vvcase-image2"
                  />
                </div>
              </div>
              <div className="vvcase-container32">
                <TxtH3
                  H3='"Busy" graphics'
                  ph31="The new category looks more consistent with the rest of the app After toning down the gradient."
                  rootClassName="txt-h3-root-class-name8"
                ></TxtH3>
                <img
                  alt="image"
                  src="/vv/image%20223-200w.png"
                  className="vvcase-image3"
                />
              </div>
            </div>
          </PgSection>
        </div>
        <div className="_fullwidth100">
          <PgSection rootClassName="pg-section-root-class-name7">
            <TxtH2
              H2="Is it better?"
              ph21='Second round of testing showed great improvement in user&apos;s understanding of the "Supermarket" and better impression of UI.'
              ph22="But I found a new problem:"
              rootClassName="txt-h2-root-class-name12"
            ></TxtH2>
            <BgsCard rootClassName="bgs-card-root-class-name2">
              <TxtH3
                H3="Users open the app not only for ordering products but also for scanning their loyalty cards in-store and checking deliveries."
                rootClassName="txt-h3-root-class-name4"
              ></TxtH3>
            </BgsCard>
          </PgSection>
        </div>
        <div className="_fullwidth100 _dark">
          <PgSection rootClassName="pg-section-root-class-name45">
            <TxtH2
              H2="Let's fix it "
              rootClassName="txt-h2-root-class-name16"
            ></TxtH2>
            <TxtH3
              H3="Before"
              ph31="With current user-flow users prefer to skip the onboarding because it's not why they came to the app at the moment. It’s not only defiese the purpose but angers users by distracting them from their original intention."
              rootClassName="txt-h3-root-class-name9"
            ></TxtH3>
            <div className="vvcase-before">
              <div className="vvcase-container33">
                <div className="vvcase-container34">
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
              <div className="vvcase-container35">
                <div id="fch1">
                  <BgsChartCard
                    text="Onboarding"
                    rootClassName="bgs-chart-card-root-class-name9"
                  ></BgsChartCard>
                </div>
              </div>
              <div className="vvcase-container37">
                <div id="fch2">
                  <BgsChartCard
                    text="Main"
                    rootClassName="bgs-chart-card-root-class-name10"
                  ></BgsChartCard>
                </div>
              </div>
              <div className="vvcase-container39">
                <div id="fch3">
                  <BgsChartCard
                    text="Catalog"
                    rootClassName="bgs-chart-card-root-class-name11"
                  ></BgsChartCard>
                </div>
              </div>
            </div>
            <TxtH3
              H3="After"
              ph31="I decided to move the onboarding to the moment of the first interaction with the catalogue or search."
              rootClassName="txt-h3-root-class-name10"
            ></TxtH3>
            <div className="vvcase-after">
              <div className="vvcase-container41">
                <div className="vvcase-container42">
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
              <div className="vvcase-container43">
                <div id="f2ch1">
                  <BgsChartCard
                    text="Main"
                    rootClassName="bgs-chart-card-root-class-name12"
                  ></BgsChartCard>
                </div>
                <div id="f2ch2">
                  <BgsChartCard
                    text="Catalog"
                    rootClassName="bgs-chart-card-root-class-name13"
                  ></BgsChartCard>
                </div>
                <div id="f2ch3">
                  <BgsChartCard
                    text="Search"
                    rootClassName="bgs-chart-card-root-class-name14"
                  ></BgsChartCard>
                </div>
              </div>
              <div className="vvcase-container47">
                <div id="f2ch4">
                  <BgsChartCard
                    text="Onboarding"
                    rootClassName="bgs-chart-card-root-class-name15"
                  ></BgsChartCard>
                </div>
              </div>
              <div className="vvcase-container49">
                <div id="f2ch5">
                  <BgsChartCard
                    text="Catalog"
                    rootClassName="bgs-chart-card-root-class-name16"
                  ></BgsChartCard>
                </div>
                <div id="f2ch6">
                  <BgsChartCard
                    text="Search result"
                    rootClassName="bgs-chart-card-root-class-name17"
                  ></BgsChartCard>
                </div>
              </div>
            </div>
          </PgSection>
        </div>
        <div className="_fullwidth100">
          <PgSection rootClassName="pg-section-root-class-name10">
            <TxtH2
              H2="The result"
              ph21="Now, the new section has received the necessary attention from users, without hindering interaction with the rest of the app. "
              rootClassName="txt-h2-root-class-name14"
            ></TxtH2>
          </PgSection>
        </div>
        <div className="_fullwidth100 _dark">
          <PgSection rootClassName="pg-section-root-class-name9">
            <TxtH2
              H2="Final thoughts"
              ph21="At this project I was able to practice my research and visual skills. "
              rootClassName="txt-h2-root-class-name15"
            ></TxtH2>
          </PgSection>
        </div>
        <div className="_fullwidth100">
          <PgSection rootClassName="pg-section-root-class-name8">
            <TxtH2
              H2="Final mockup"
              rootClassName="txt-h2-root-class-name17"
            ></TxtH2>
            <img
              alt="image"
              src="/vv/image%20222-200w.png"
              className="vvcase-image4 _fullwidth100"
            />
          </PgSection>
        </div>
        <PgFooter rootClassName="pg-footer-root-class-name"></PgFooter>
      </div>
      <style jsx>
        {`
          .vvcase-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .vvcase-image {
            object-fit: cover;
          }
          .vvcase-container02 {
            gap: var(--dl-space-space-fourunits);
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .vvcase-container03 {
            gap: var(--dl-space-space-threeunits);
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .vvcase-container04 {
            gap: var(--dl-space-space-threeunits);
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .vvcase-text {
            width: auto;
          }
          .vvcase-text01 {
            font-size: 1rem;
            font-style: normal;
            font-family: 'Lato';
            font-weight: 300;
            line-height: 130%;
            padding-top: var(--dl-space-space-unit);
          }
          .vvcase-cjm {
            gap: 8px;
            width: 100%;
            height: auto;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            border-radius: 10px;
            flex-direction: column;
          }
          .vvcase-container06 {
            display: contents;
          }
          .vvcase-row1 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: flex-end;
            flex-shrink: 0;
            border-radius: var(--dl-radius-radius-corner);
            background-color: var(--dl-color-palette-light);
          }
          .vvcase-container07 {
            flex: 1;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .vvcase-container08 {
            flex: 1;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .vvcase-container09 {
            flex: 1;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .vvcase-container10 {
            flex: 1;
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
          }
          .vvcase-row2 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            flex-shrink: 0;
            border-radius: var(--dl-radius-radius-corner);
            justify-content: flex-start;
            background-color: var(--dl-color-palette-light);
          }
          .vvcase-container11 {
            flex: 1;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
          }
          .vvcase-container12 {
            flex: 1;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
          }
          .vvcase-container13 {
            flex: 1;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
          }
          .vvcase-container14 {
            flex: 1;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
          }
          .vvcase-row3 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            flex-shrink: 0;
            border-radius: var(--dl-radius-radius-corner);
            justify-content: space-between;
            background-color: var(--dl-color-palette-light);
          }
          .vvcase-container15 {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .vvcase-container16 {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .vvcase-container17 {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .vvcase-container18 {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .vvcase-row4 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            flex-shrink: 0;
            border-radius: var(--dl-radius-radius-corner);
            justify-content: space-between;
          }
          .vvcase-container19 {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .vvcase-container20 {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .vvcase-container21 {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .vvcase-container22 {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .vvcase-emotions {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            flex-shrink: 0;
            border-radius: var(--dl-radius-radius-corner);
            background-color: var(--dl-color-palette-light);
          }
          .vvcase-container23 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .vvcase-frame4227 {
            flex: 1;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .vvcase-apathy {
            width: 80px;
            height: 80px;
          }
          .vvcase-frame4232 {
            gap: var(--dl-space-space-twounits);
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .vvcase-unhappy {
            width: 80px;
            height: 80px;
          }
          .vvcase-irreverent {
            width: 80px;
            height: 80px;
          }
          .vvcase-frame4233 {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .vvcase-unhappy1 {
            width: 80px;
            height: 80px;
          }
          .vvcase-image2x {
            width: 80px;
            height: 80px;
          }
          .vvcase-row5 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            flex-shrink: 0;
            border-radius: var(--dl-radius-radius-corner);
            justify-content: space-between;
          }
          .vvcase-container24 {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .vvcase-container25 {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .vvcase-container26 {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .vvcase-container27 {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .vvcase-container28 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .vvcase-container29 {
            gap: var(--dl-space-space-threeunits);
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          .vvcase-container30 {
            gap: var(--dl-space-space-twounits);
            flex: 1;
            width: auto;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .vvcase-container31 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .vvcase-image1 {
            width: auto;
            object-fit: cover;
          }
          .vvcase-image2 {
            width: auto;
            height: auto;
            object-fit: cover;
          }
          .vvcase-container32 {
            gap: var(--dl-space-space-twounits);
            flex: 1;
            width: auto;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .vvcase-image3 {
            width: 100%;
            align-self: stretch;
            object-fit: cover;
          }
          .vvcase-before {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
          }
          .vvcase-container33 {
            display: none;
          }
          .vvcase-container34 {
            display: contents;
          }
          .vvcase-container35 {
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .vvcase-container37 {
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .vvcase-container39 {
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .vvcase-after {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .vvcase-container41 {
            display: none;
          }
          .vvcase-container42 {
            display: contents;
          }
          .vvcase-container43 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .vvcase-container47 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .vvcase-container49 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .vvcase-image4 {
            object-fit: cover;
          }
          @media (max-width: 991px) {
            .vvcase-container43 {
              align-items: flex-start;
            }
            .vvcase-container49 {
              align-items: flex-end;
            }
          }
          @media (max-width: 767px) {
            .vvcase-before {
              gap: var(--dl-space-space-fiveunits);
              flex-direction: column;
            }
            .vvcase-after {
              gap: var(--dl-space-space-fiveunits);
              flex-direction: column;
              justify-content: flex-start;
            }
            .vvcase-container43 {
              gap: 0;
              flex-direction: row;
              justify-content: space-between;
            }
            .vvcase-container49 {
              gap: 0;
              flex-direction: row;
              justify-content: space-between;
            }
          }
          @media (max-width: 479px) {
            .vvcase-container02 {
              gap: var(--dl-space-space-twounits);
            }
            .vvcase-text20 {
              width: 100%;
            }
            .vvcase-container29 {
              flex-direction: column;
            }
            .vvcase-image2 {
              width: 100%;
              height: auto;
            }
            .vvcase-after {
              flex-direction: column;
            }
            .vvcase-container43 {
              flex-direction: row;
            }
            .vvcase-container49 {
              flex-direction: row;
            }
          }
        `}
      </style>
    </>
  )
}

export default Vvcase
