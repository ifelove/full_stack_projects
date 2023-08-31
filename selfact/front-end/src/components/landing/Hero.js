import React from "react";
import ReviewSlider from "../ReviewSlider";
import Pricing from "./Pricing";
import Footer from "../Footer";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";
import img5 from "../images/img5.png";
import img6 from "../images/img6.png";
import img7 from "../images/img7.png";
import img8 from "../images/img8.png";
import img9 from "../images/img9.png";
import img10 from "../images/img10.png";
import img11 from "../images/img11.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <section className="hero-heading">
        <div className="hero-to-flex">
          <div className="first-flex">
            <h1>Easy way to get full control of your tasks</h1>
            <h5 className="hero-p">
              A powerful toolthat can help you stay organised and manage your
              tasks efficiently and monitor your jobs hunts activity. Take
              control and acheive your goals
            </h5>
            <main className="hero-btns">
              <Link to={"/register"}>
                
                <button className="hero-sign-up-btn">Get Started</button>
              </Link>
            </main>
          </div>
          <div className="second-flex">
            <img
              src="https://img.freepik.com/free-vector/happy-freelancer-with-computer-home-young-man-sitting-armchair-using-laptop-chatting-online-smiling-vector-illustration-distance-work-online-learning-freelance_74855-8401.jpg?w=826&t=st=1685709392~exp=1685709992~hmac=c96a186b1c325b3c868ba7e124660117a4633f8923086505be7f4da97e191625"
              alt=""
            />
          </div>
        </div>
      </section>
      <div className="sub-hero">
        <h2>
          More than 12,000 businesses delight their customers with Selfact.
        </h2>
        <span className="logo">
          <img
            src="https://hs-marketing-contentful.imgix.net/https%3A%2F%2Fimages.ctfassets.net%2Fp15sglj92v6o%2F370hH5fiu3QhXFwL4BXbui%2F45774fe77cb61f88f638c1c5a9375c20%2FMixmax.svg?ixlib=gatsbySourceUrl-2.1.1&auto=format%2C%20compress&s=6df7705017e29906b7e9ed9aac8e79ff"
            alt=""
          />
          <img
            src="https://hs-marketing-contentful.imgix.net/https%3A%2F%2Fimages.ctfassets.net%2Fp15sglj92v6o%2F2PitZw0QeolbcFJRFs0rtv%2Fbd6755a806d283347f324acc2e262290%2FSpikeball.svg?ixlib=gatsbySourceUrl-2.1.1&auto=format%2C%20compress&s=ff06d26ea63770626f86ec200c59645e"
            alt=""
          />
        </span>
        <img
          src="https://hs-marketing-contentful.imgix.net/https%3A%2F%2Fimages.ctfassets.net%2Fp15sglj92v6o%2F6CeGFfGbKaunwsCzOWla9h%2Fe2566720637a659a3ddedd860c60ed0a%2FAffirm.svg?ixlib=gatsbySourceUrl-2.1.1&auto=format%2C%20compress&s=8c23a5d73bf95119ab2d9a8ef2729580"
          alt=""
        />
        <img
          src="https://hs-marketing-contentful.imgix.net/https%3A%2F%2Fimages.ctfassets.net%2Fp15sglj92v6o%2F2KnC2IFLTB7RISfZMyKqSF%2Fca60a3e22f99aec529d4c33dfe53385c%2FHoney.svg?ixlib=gatsbySourceUrl-2.1.1&auto=format%2C%20compress&s=4c357d96ea99cad0fcc5927304952f87"
          alt=""
        />
      </div>
      <main className="what-u-can">
        <div className="hero-feature">
          <h2>Key Features</h2>
          <p>
            Exclusive Features Gigmos enables businesses to reduce support cost
            by smart outsourcing of their workforce on Gigmos platform. Gigmos
            AI platform ensures onboarding of sharp and motivated Gig workers,
            through stringent testing standards, from across the globe.
          </p>
        </div>

        <section className="features">
          <div className="feature-1">
            <div className="feature-img">
              <img src={img1} alt="" className="imgs" />
            </div>
            <div className="feature-heading">
              <h5>Kanban</h5>
              <span className="feature-deatail">
                Visualize the state of your job search in a kanban board. See
                how many applications, interviews and offers you’ve received in
                one view.
              </span>
            </div>
          </div>
          <div className="feature-1">
            <div className="feature-img">
              {" "}
              <img src={img2} alt="" className="imgs" />
            </div>
            <div className="feature-heading">
              <h5>Collect jobs from across</h5>
              <span className="feature-deatail">
                Our Chrome Extension can save jobs from large job sites like
                Indeed and LinkedIn to small startup career pages.
              </span>
            </div>
          </div>
          <div className="feature-1">
            <div className="feature-img">
              {" "}
              <img src={img8} alt="" className="imgs" />
            </div>
            <div className="feature-heading">
              <h5>Manage tasks</h5>
              <span className="feature-deatail">
                Track everything you need to do to get your dream job, from
                polishing your resume to preparing for the big interview.
              </span>
            </div>
          </div>
          <div className="feature-1">
            <div className="feature-img">
              {" "}
              <img src={img4} alt="" className="imgs" />
            </div>
            <div className="feature-heading">
              <h5>Manage contacts</h5>
              <span className="feature-deatail">
                Keep contact information for anyone you interact with during
                your search, from interviewers to recruiters and everyone in
                between.
              </span>
            </div>
          </div>
          <div className="feature-1">
            <div className="feature-img">
              {" "}
              <img src={img5} alt="" className="imgs" />
            </div>
            <div className="feature-heading">
              <h5>Upload Documents</h5>
              <span className="feature-deatail">
                Upload your resumes, cover letters and any other job search
                documents you need. Then link them to jobs, activities and more.
              </span>
            </div>
          </div>
          <div className="feature-1">
            <div className="feature-img">
              {" "}
              <img src={img11} alt="" className="imgs" />
            </div>
            <div className="feature-heading">
              <h5>Powerful analytics</h5>
              <span className="feature-deatail">
                Track your job search progress through insightful metrics.
              </span>
            </div>
          </div>
        </section>
        <button className="more-btn"> View More</button>
      </main>

      <ReviewSlider />
      <section className="pricing-hero-section">
        <h1>Need to level up your career even faster?</h1>
        <p>
          Upgrade to unlock Teal's premium features and turbocharge your job
          search.
        </p>
        <Pricing />
      </section>
      <Footer />
    </div>
  );
};

export default Hero;
