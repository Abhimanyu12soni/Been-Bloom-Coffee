import React from "react";
// Use a remote placeholder so Vite doesn't fail when a local file is missing.
// Replace the URL below with a local import if you add the image to src/assets/img/about.jpg
const img = "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=8f8a6f8e3f8c1c9f3b6e6f9d6c7a5e2a";
import Button from "../Layouts/Button";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className=" font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8">About Us</h1>

      <div className=" flex flex-col lg:flex-row items-center gap-5">
        <div className=" w-full lg:w-2/4">
          <img className=" rounded-lg" src={img} alt="img" />
        </div>
        <div className=" w-full lg:w-2/4 p-4 space-y-3">
          <h2 className=" font-semibold text-3xl">
            What Makes Our Coffee Special?
          </h2>
          <p>
            Every cup we serve is a masterpiece crafted with passion. We source our beans 
            directly from the finest organic farms across Ethiopia, Colombia, and Guatemala. 
            Our expert roasters carefully bring out the unique flavors hidden within each bean, 
            creating a rich and unforgettable experience that awakens your senses.
          </p>
          <p>
            From the first sip to the last drop, you'll taste the difference that dedication 
            and quality make. No shortcuts, no compromises — just pure, handcrafted perfection 
            in every cup we pour for you.
          </p>
          <p>
            It all starts with a journey — from sun-kissed mountains where our beans are 
            hand-picked at peak ripeness, to our local roastery where they're slow-roasted 
            in small batches. We believe great coffee isn't just brewed, it's crafted with 
            love, patience, and years of expertise passed down through generations.
          </p>

          <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default About;