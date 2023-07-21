import React from "react";
import "./Page404.css";
function Page404() {
  return (
    <div className="center-item">
      <p className="zoom-area"></p>
      <section className="error-container">
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
        <span className="zero">
          <span className="screen-reader-text">0</span>
        </span>
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
        <div id="text_detail">OPPS! PAGE NOT FOUND </div>
        <div>Apologies, but the page you're looking for doesn't exist.</div>
        <div>Please check the word you searched for and try again.</div>
      </section>
      <div className="link-container">
        <a href="/login" className="more-link">
          GO Back To Main Page
        </a>
      </div>
    </div>
  );
}

export default Page404;
