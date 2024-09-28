"use client";

import { useEffect, useRef, useState } from "react";
import Form from '/components/Form.jsx';

const Home = () => {
  // State and refs for all sections
  const [isVisible, setIsVisible] = useState(false);
  const [isSecondVisible, setIsSecondVisible] = useState(false);
  const [isThirdVisible, setIsThirdVisible] = useState(false);
  const ref = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);

  useEffect(() => {
    // Observer for the first section
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // Trigger animation based on visibility
      },
      { threshold: 0.5 } // Trigger when 50% is in view
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Observer for the second section
    const secondObserver = new IntersectionObserver(
      ([entry]) => {
        setIsSecondVisible(entry.isIntersecting); // Trigger animation based on visibility
      },
      { threshold: 0.5 } // Trigger when 50% is in view
    );

    if (secondRef.current) {
      secondObserver.observe(secondRef.current);
    }

    // Observer for the third section
    const thirdObserver = new IntersectionObserver(
      ([entry]) => {
        setIsThirdVisible(entry.isIntersecting); // Trigger animation based on visibility
      },
      { threshold: 0.5 } // Trigger when 50% is in view
    );

    if (thirdRef.current) {
      thirdObserver.observe(thirdRef.current);
    }

    // Clean up observers when component unmounts
    return () => {
      if (ref.current) observer.unobserve(ref.current);
      if (secondRef.current) secondObserver.unobserve(secondRef.current);
      if (thirdRef.current) thirdObserver.unobserve(thirdRef.current);
    };
  }, []);

  return (
    <>
      {/* Background Section */}
      <section
        className="relative w-screen h-[75vh] bg-cover flex flex-col justify-center items-center px-4 sm:px-6 md:px-8"
        style={{
          backgroundImage: `url('/assets/images/car.jpg')`,
          backgroundPosition: 'center 30%', // Adjust to bring the image down
        }}
      >
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-black bg-opacity-70 z-10"></div>

        {/* Content with Animation */}
        <div
          ref={ref}
          className={`relative z-20 text-center text-white transition-opacity duration-1000 ease-in-out max-w-screen-lg mx-auto ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            Discover the <br className="block md:hidden" />
            <span className="text-red-500">best towing service</span>
          </h1>
          <p className="text-lg sm:text-xl  max-w-xl mx-auto text-center">
            Link Towing and Recovery is a local business in North Carolina that
            specializes in jumpstarts, towing, and unlock services.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        ref={secondRef}
        className="relative w-screen h-auto py-16 flex flex-col justify-center items-center bg-white px-4 sm:px-6 md:px-8"
      >
        {/* Content with Animation */}
        <div
          className={`transition-opacity duration-1000 ease-in-out ${
            isSecondVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            Why Choose Link Towing & Recovery?
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed text-center">
            At <span className="font-semibold">Link Towing & Recovery</span>, we pride ourselves on providing{" "}
            <span className="font-semibold text-red-500">fast, reliable, and professional towing services</span>. Our team of experienced experts is available around the clock, using the latest technology to ensure your vehicle is safely handled. Whether you're stuck on the roadside, in an emergency, or dealing with an unexpected situation, <span className="font-semibold text-red-500">you can count on us to get you back on track</span>. With <span className="font-semibold">affordable rates, prompt response times, and exceptional customer care</span>, we're committed to being the towing service you can trust.
          </p>
        </div>
      </section>

      <section 
      ref={thirdRef}
      className="relative flex-col bg-white w-screen h-auto justify-start px-4 sm:px-6 md:px-8">
        <hr class="h-px my-8 border-spacing-0"></hr>
        <div 
          className={`grid grid-cols-2 transition-opacity duration-1000 ease-in-out ${
            isThirdVisible ? "opacity-100" : "opacity-0"
          }`}>
            <div className="">
              <h1 className="text-4xl ml-8 text-red-500"><strong>We would love for you to contact us for all your towing needs!</strong></h1>
              <br />
              <p className="ml-8"> Here at Link, we pride ourselves on the ability to take care of all our clients. Our priority is you and our goal is to get the job done for you by any means!</p>
            </div>
            
            <div className="grid-cols-2 ml-8">
              <Form />
            </div>
          </div>
      </section>
    </>
  );
};

export default Home;
