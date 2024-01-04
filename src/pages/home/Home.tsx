import React from "react";
import "./home.scss";
import TopBox from "../../components/topBox/TopBox";
const Home = () => {
  return (
    <section className="home">
      <div className="box box1">
        <TopBox />
      </div>

      <div className="box box2">Box 2</div>
      <div className="box box3">Box 3</div>
      <div className="box box4">Box 4</div>
      <div className="box box5">Box 5</div>
      <div className="box box6">Box 6</div>
      <div className="box box7">Box 7</div>
      <div className="box box8">Box 8</div>
      <div className="box box9">Box 9</div>
    </section>
  );
};

export default Home;
