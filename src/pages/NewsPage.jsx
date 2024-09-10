import React from "react";
import Container from "../components/common/Container";
import BreadCrums from "./../components/common/BreadCrums";

const NewsPage = () => {
  return (
    <section className="my-10">
      <Container>
        <BreadCrums location="News & Updates" />
      </Container>
    </section>
  );
};

export default NewsPage;
