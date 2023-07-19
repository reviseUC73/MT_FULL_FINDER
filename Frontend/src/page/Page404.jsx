import React from "react";
import "./Page404.css";
function Page404() {
  return (
    <div className="center-item">
      <p class="zoom-area"></p>
      <section class="error-container">
        <span class="four">
          <span class="screen-reader-text">4</span>
        </span>
        <span class="zero">
          <span class="screen-reader-text">0</span>
        </span>
        <span class="four">
          <span class="screen-reader-text">4</span>
        </span>
        <div id="text_detail">OPPS! PAGE NOT FOUND </div>
        <div>Apologies, but the page you're looking for doesn't exist.</div>
        <div>Please check the word you searched for and try again.</div>
      </section>
      <div class="link-container">
        <a href="/login" class="more-link">
          GO Back To Main Page
        </a>
      </div>
    </div>
  );
}

export default Page404;
