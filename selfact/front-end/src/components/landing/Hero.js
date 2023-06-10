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
        <h2 style={{ textAlign: "left", padding: "100px" }}>Key Features</h2>
        <section className="features">
          <div className="feature-1">
            <div className="feature-img"></div>
            <div className="feature-heading">
              <h3>heading here</h3>
              <span className="feature-deatail"> the details is here</span>
            </div>
          </div>
          <div className="feature-1"></div>
          <div className="feature-1"></div>
        </section>
      </main>
    </div>
  );
};

export default Hero;
