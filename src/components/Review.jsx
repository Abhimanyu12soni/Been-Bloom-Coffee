import React from "react";
import ReviewCard from "../layouts/ReviewCard";
import img1 from "../assets/img/pic1.png";
import img2 from "../assets/img/pic2.png";
import img3 from "../assets/img/pic3.png";

const Review = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor ">
      <h1 className=" font-semibold text-center text-4xl lg:mt-14 mt-24 ">
        Customer's Reviews
      </h1>

      <div className=" flex flex-col lg:flex-row gap-5 justify-center py-4 my-8">
        <ReviewCard
          img={img1}
          title="Kamal"
          text="Best coffee I've ever had! The aroma hits you the moment you walk in.Their Ethiopian blend is absolutely divine — smooth, rich, and perfectly balanced. I'm here every morning now, it's become my happy place!"/>
        <ReviewCard
          img={img2}
          title="Abhimanyu"
          text="Absolutely the best coffee in town! The Ethiopian Yirgacheffe blend is out of this world — fruity, floral, and incredibly smooth. I've been a loyal customer for 2 years and every visit feels like the first time."/>
        <ReviewCard
          img={img3}
          title="Nitin"
          text="The best part? They remember your name and your order! I've never felt so welcome at a coffee shop. The vanilla oat milk latte is perfection. Cozy vibes, amazing music, and even better coffee."/>
      </div>
    </div>
  );
};

export default Review;