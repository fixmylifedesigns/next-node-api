import Head from "next/head";

const Index = () => {
  return (
    <section>
      <Head>
        <title>Fixmylife</title>
      </Head>
      <div className="navigationContainer">
        <a className="portfolio" href="https://www.duranirving.com/">
          <h2>DuranIrving.com</h2>
        </a>

        <nav className="navigation">
          <a
            href="https://documenter.getpostman.com/view/7133880/SVfQRUJX?version=latest"
            className="navLink"
          >
            Api Doc
          </a>
          <a
            href="https://github.com/fixmylife-boilerplates/next-node-api"
            className="navLink"
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
                <h2 className="introText">
                  Client Plus Server Api Boilerplate<br></br>
                  Powered with Next.js
                </h2>
              </h3>
              <a
                href="https://github.com/fixmylifedesigns/next-node-api/archive/master.zip"
                className="downloadLink"
              >
                <h3>Download Boilerplate</h3>
              </a>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="sectionContent">
            <div className="imgContainer">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/RnbW-0t9ixY"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="textContainer">
              <h3>
                "This tutorial goes through the steps of downloading and setting
                up out Next Js app. In just a few minutes you can get start and
                depoly an app alongside with a server."
              </h3>
            </div>
          </div>
        </div>

        <div className="section" id="section1">
          <div className="sectionContent ContentReverse">
            <div className="imgContainer">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/cGs1AjyHRHc"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="textContainer">
              <h3>
                This tutorial shows how to get started with my node api
                boilerplate. If you downloaded this then you are probably
                looking to use next.js. this tutorial still works the same. Only
                main difference is a new command added to scripts.
              </h3>
            </div>
          </div>
        </div>

        <div className="section" id="section1">
          <div className="sectionContent">
            <div className="imgContainer">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/YNJAKLru2wY"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="textContainer">
              <h3>
                This tutorial you how to deploy our Next Js app/api on heroku.
                These steps will also work on my Node Js boilerplate. In less
                than 10 minutes you can start a Full Stack project deploy it.
              </h3>
            </div>
          </div>
        </div>
      </div>
      <style jsx global>
        {`
        h1 h2 h3 h4 h5 h6 a p{
          font-family: Impact, Charcoal, sans-serif
        }

          .navigationContainer {
            margin: auto;
            width: 90%;
            background: #282C34;
            padding: 10px 5% ;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          }
          .downloadLink{
            color: white;
            font-weight: bold;
          }
          .navLink {
            color: white;
            font-weight: bold;
            margin-right:5px;
            
          }
          .portfolio{
            color:white;
          }
          .navigation {
            display: flex;
            align-items:center;
          }
          .homeContainer {
            width: 100%; 
            display: flex;
            flex-direction: column;
            justify-content: center; */
          }
          .section {
            background: white;
          }
          .section:nth-child(odd) {
            background: #282C34;
          }
          .section:first-child {
            padding: 30px 0;
            background: #282C34;
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
          @media only screen and (max-width: 900px) {
            .sectionContent {
              padding: 0;
              width: 100%;
            }
          }

          @media only screen and (max-width: 700px) {
            .topMain{
              width:100%;
              flex-direction: column;
            }
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
            .HomePageLogoContainer {
              padding: 30px;
            }
          }

          @media only screen and (max-width: 450px) {
            .navigationContainer {
              flex-direction: column;
              align-items: center;
              justify-content: center;
            }
            .topMain {
              flex-direction: column;
              height: 90%;
            }
            .HomePageLogoContainer {
              padding: 10px 0px;
              width: 50%;
            }
            .topTextContainer {
              margin: 0px;
              width: 95%;
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
            .introText {
              display: none;
            }

          }
        `}
      </style>
    </section>
  );
};

export default Index;
