import React from "react";

import quotes from "../qoutes";

export const Home = () => {
  const [index, setIndex] = React.useState(0);
  const { quote, id, writer } = quotes[index];
  // console.log(curentQuote);
  const checkRandomQuoteValidity = (number) => {
    if (number > quotes.length - 1) {
      return 0;
    }
    if (number < 0) {
      return quotes.length - 1;
    }
    return number;
  };
  const showRandomQoute = () => {
    let randomNumber = Math.floor(Math.random() * quotes.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkRandomQuoteValidity(randomNumber));
  };

  React.useEffect(() => {
    const timer = setInterval(showRandomQoute, 5000);
    return () => clearInterval(timer);
  }, [index]);
  //showRandomQoute();

  return (
    <section className="home-container">
      <>
        <main className="title">
          <h1>Welcome to Book Shop</h1>
        </main>
        <div className="quotes-container">
          <div className="qoute"> {quote}</div>
          <span>{`-${writer}`}</span>
        </div>
      </>
    </section>
  );
};

export default Home;
