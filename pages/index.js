import Link from "next/link";
import Head from "next/head";
import NavBar from "../components/navigation";

const Index = () => {
  return (
    <section>
      <Head>
        <title>My styled page</title>
      </Head>
      <div className="navigationContainer">
        <Link href="/">
          <img
            src="https://github.com/brokenulock/frontend/blob/master/src/bulfmlimg/navlogo.png?raw=true"
            alt=""
            className="navLogo"
          />
        </Link>

        <nav className="navigation">
          <a
            href="https://documenter.getpostman.com/view/7133880/SVfMUAdJ?version=latest"
            className="footerLink"
            style={{ marginRight: "15px" }}
          >
            Api Doc
          </a>
          <a
            href="https://github.com/brokenulock"
            className="footerLink"
            style={{ marginRight: "15px" }}
          >
            Github Repo
          </a>
        </nav>
      </div>

      <div className="homeContainer">
        <div className="section" id="top">
          <div className="topMain">
            <div className="HomePageLogoContainer">
              <img
                src="https://github.com/fixmylifedesigns/images/blob/master/cartoonround.png?raw=true"
                alt=""
                className="HomePageLogo"
              />
            </div>
            <div className="topTextContainer">
              <h3>
                <section className="introText">
                  Bringing the community together to help locate stolen
                  bicycles.
                </section>
                <section>SINCE 2016</section>
              </h3>
              <a href="https://www.brokenulock.com" className="footerLink">
                Download Boilerplate
              </a>
            </div>
          </div>
        </div>
        <div className="section" id="section1">
          <div className="sectionContent">
            <div className="imgContainer">
              {/* className="illustration" */}
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/cGs1AjyHRHc"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="textContainer">
              <h5>
                Jimmy stepped inside a coffee shop to get a drink. He was only
                gone for 10 minutes. When he came outside he realized his bike
                had been stolen.
              </h5>
            </div>
          </div>
        </div>
        {/* <div className="section">
          <div className="sectionContent ContentReverse">
            <div className="imgContainer">
              <img
                src="https://github.com/brokenulock/frontend/blob/master/src/bulfmlimg/design2.png?raw=true"
                className="illustration"
                alt=""
              />
            </div>
            <div className="textContainer">
              <h5>
                Jimmy quickly went on brokenulock.com and made a post alerting
                the other users his bike had been stolen. He listed the make,
                model, location and any other valuable information.
              </h5>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="sectionContent">
            <div className="imgContainer">
              <img
                src="https://github.com/brokenulock/frontend/blob/master/src/bulfmlimg/design3.png?raw=true"
                className="illustration"
                alt=""
              />
            </div>
            <div className="textContainer">
              <h5>
                A couple of days later, Rocco is on his way home and notices
                someone riding a bike that he remembers seeing on
                brokenulock.com
              </h5>
            </div>{" "}
          </div>
        </div>
        <div className="section">
          <div className="sectionContent ContentReverse">
            <div className="imgContainer">
              <img
                src="https://github.com/brokenulock/frontend/blob/master/src/bulfmlimg/design4.png?raw=true"
                className="illustration"
                alt=""
              />
            </div>
            <div className="textContainer">
              <h5>
                Rocco quickly opens up the web app, finds Jimmy's post and in
                seconds he is able to contact Jimmy to let him know he just
                spotted someone with his bike going down the block.
              </h5>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="sectionContent">
            <div className="imgContainer">
              <img
                src="https://github.com/brokenulock/frontend/blob/master/src/bulfmlimg/design5.png?raw=true"
                className="illustration"
                alt=""
              />
            </div>
            <div className="textContainer">
              <h5>
                Jimmy was able to search the last known location of his bike and
                take the proper actions to retrieve it. All thanks to the
                community.
              </h5>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="sectionContent ContentReverse">
            <div className="imgContainer">
              <img
                src="https://github.com/brokenulock/frontend/blob/master/src/bulfmlimg/design6.png?raw=true"
                className="illustration"
                alt=""
              />
            </div>
            <div className="textContainer">
              <h5>
                This Web App is being designed with the idea to help New Yorkers
                retrieve their bikes. But there is nothing stopping us from
                helping others worldwide.
              </h5>
            </div>
          </div>
        </div>
       */}
      </div>
      <style jsx>
        {`
          /* Navigation */
          .navigationContainer {
            margin: auto;
            width: 90%;
            // position: fixed;
            background: #33b8f3;
            padding: 10px 5% ;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          }

          .navLogo {
            width: 300px;
          }
          .navLogo:hover {
            cursor: pointer;
          }
          .navigation {
            display: flex;
            /* flex-direction: row; */
          }

          .navImgContainer {
            width: 100%;
            display: flex;
            justify-content: center;
            margin: 40px 0;
          }
          .mobileLogo {
            margin: auto;
            width: 250px;
          }

          .fa-bars {
            font-size: 40px;
            color: white;
            display: none;
          }
          .fa-bars:hover {
            cursor: pointer;
          }
          .fa-chevron-circle-down {
            display: none;
            font-size: 40px;
            color: white;
          }
          .fa-chevron-circle-down:hover {
            cursor: pointer;
          }

          .menuFont {
            font-size: 20px;
            font-weight: bold;
            color: grey;
          }

          /* Home Page */
          .homeContainer {
            width: 100%; 
            display: flex;
        flex-direction: column;
        justify-content: center; */
          }

          .section {
            /* margin: auto; */
            /* max-height: 300px;  */
            /* width: 100%; */
            /* align-content: center; */
            /* display: flex; */
            background: white;
          }
          .section:nth-child(odd) {
            background: #9b9b9b;
          }

          .section:first-child {
            padding-top: 30px;
            height: 100vh;
            background: #33b8f3;
          }

          .topMain {
            margin: auto;
            height: 95%;
            padding-top: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .HomePageLogoContainer {
            width: 300px;
          }
          .HomePageLogo {
            width:300px
          }

          .topTextContainer {
            margin: 50px;
            width: 200px;
            color: white;
            text-align: center;
          }

          .topButton {
            background: #9b9b9b;
            border: #9b9b9b;
            font-weight: bold;
          }

          .fa-arrow-down {
            color: #9b9b9b;
            margin: auto;
          }
          .fa-arrow-down:hover {
            cursor: pointer;
          }

          .bottomButton {
            height: 5%;
            /* padding-top:0.5%; */
            background: white;
            display: flex;
            justify-content: center;
            align-content: center;
          }
          .sectionContent {
            margin: auto;
            padding: 10px;
            width: 70%;
            display: flex;
            flex-direction: row;
          }
          .ContentReverse {
            color: white;
            display: flex;
            flex-direction: row-reverse;
          }

          .textContainer {
            width: 30%;
            margin: auto;
          }
          .imgContainer {
            width: 60%;
            display: flex;
            align-items: center;
          }
          .illustration {
            padding: 10px;
            width: 90%;
            margin: auto;
            /* height:100px; */
            /* height: auto; */
          }
          @media only screen and (max-width: 900px) {
            .sectionContent {
              padding: 0;
              width: 100%;
            }
          }

          @media only screen and (max-width: 700px) {
            .navigation {
              display: none;
            }
            .fa-bars {
              display: block;
            }
            /*  */
            .sectionContent {
              padding: 10px 0;
              width: 100%;
              align-items: center;
              flex-direction: column;
            }
            .textContainer {
              width: 90%;
              margin: auto;
            }
            .imgContainer {
              width: 90%;
            }
            /*  */
            .HomePageLogoContainer {
              padding: 30px;
            }
            .sectionContent {
            }
          }

          @media only screen and (max-width: 450px) {
            .navigationContainer {
              flex-direction: column;
              align-items: center;
              justify-content: center;
            }
            .fa-bars {
              display: none;
            }
            .fa-chevron-circle-down {
              display: block;
            }
            .topMain {
              flex-direction: column;
            }
            .HomePageLogoContainer {
              padding: 10px 0px;
              width: 50%;
            }
            .topTextContainer {
              margin: 0px;
              width: 95%;
            }
            .topMain {
              height: 90%;
            }
            .bottomButton {
              height: 10%;
            }
            .sectionContent {
              flex-direction: column;
            }
            .textContainer {
              width: 90%;
              margin: auto;
            }
            .imgContainer {
              width: 90%;
            }
          }

          @media only screen and (max-width: 350px) {
            .navLogo {
              width: 100%;
            }
            .introText {
              display: none;
            }
            .topButton {
              display: none;
            }
          }
          /* Footer */
          .footerContainer {
            min-height: 40px;
            padding: 5px;
            text-align: center;
            background: #33b8f3;
            font-weight: bold;
            color: white;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
          }
          .iconLinks {
            color: white;
            /* font-weight: bold; */
            font-size: 25px;
            padding: 0px 4px;
          }
          .iconLinks:hover {
            cursor: pointer;
          }
          .footerLink {
            color: white;
            font-weight: bold;
          }
          .footerLink:hover {
            cursor: pointer;
          }

          @media only screen and (max-width: 450px) {
            .footerContainer {
              min-height: 40px;
              padding: 10px;
              text-align: center;
              flex-direction: column;
              flex-wrap: nowrap;
              justify-content: center;
            }
          }

         
          }
        `}
      </style>
    </section>
  );
};

export default Index;
