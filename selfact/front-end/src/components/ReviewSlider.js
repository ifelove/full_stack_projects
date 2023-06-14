import React from "react";
import reviewData from "./landing/data";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";

const ReviewSlider = () => {
  const [reviews, setReview] = React.useState(reviewData);
  const [index, setIndex] = React.useState(1);
  React.useEffect(() => {
    const lastIndex = reviews.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, reviews]);

   React.useEffect(() => {
     let slider = setInterval(() => {
       setIndex(index + 1);
     }, 5000);
     return () => {
       clearInterval(slider);
     };
   }, [index]);


  return (
    <section className="review-section">
      <div className="title">
        <h2>
          <span>Our reviews</span>
        </h2>
      </div>
      <div className="review-section-container">
        {reviews.map((review, reviewIndex) => {
          const { id, image, name, title, quote } = review;

          let location = "hiddenSlide";
          if (reviewIndex === index) {
            location = "activeSlide";
          }
          if (
            reviewIndex === index - 1 ||
            (index === 0 && reviewIndex === reviews.length - 1)
          ) {
            location = "prevSlide";
          }
          if (
            reviewIndex === index + 1 ||
            (index === reviews.length - 1 && reviewIndex === 0)
          ) {
            location = "nextSlide";
          }

          return (
            <article className={` article ${location}`} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
      </div>
      <button className="prev" onClick={() => setIndex(index - 1)}>
        <FiChevronLeft />
      </button>
      <button className="next" onClick={() => setIndex(index + 1)}>
        <FiChevronRight />
      </button>
    </section>
  );
};
export default ReviewSlider;
