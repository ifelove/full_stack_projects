import React from "react";

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
              <button className="hero-sign-up-btn">Get Started</button>
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
        <h2 style={{ textAlign: "left", padding: "100px", color: "black" }}>
          Key Features
        </h2>
        <section className="features">
          <div className="feature-1">
            <div className="feature-img"></div>
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
            <div className="feature-img"></div>
            <div className="feature-heading">
              <h5>Collect jobs from across the web</h5>
              <span className="feature-deatail">
                Our Chrome Extension can save jobs from large job sites like
                Indeed and LinkedIn to small startup career pages.
              </span>
            </div>
          </div>
          <div className="feature-1">
            <div className="feature-img"></div>
            <div className="feature-heading">
              <h5>Manage tasks</h5>
              <span className="feature-deatail">
                Track everything you need to do to get your dream job, from
                polishing your resume to preparing for the big interview.
              </span>
            </div>
          </div>
          <div className="feature-1">
            <div className="feature-img"></div>
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
            <div className="feature-img"></div>
            <div className="feature-heading">
              <h5>Upload Documents</h5>
              <span className="feature-deatail">
                Upload your resumes, cover letters and any other job search
                documents you need. Then link them to jobs, activities and more.
              </span>
            </div>
          </div>
          <div className="feature-1">
            <div className="feature-img"></div>
            <div className="feature-heading">
              <h5>Powerful analytics</h5>
              <span className="feature-deatail">
                Track your job search progress through insightful metrics.
              </span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Hero;
