import React from "react";
import "/src/styles/Homepage.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="section-container1">
      <div className="text-container">
        <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
          🔥 MediBot - where convenience meets quality healthcare
        </h4>
        <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero">
          Seamless healthcare access at your fingertips
          <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
            MediBot
          </span>
        </h1>
        <p>
          Your reliable virtual healthcare assistant, available anytime,
          anywhere. Experience personalized medical advice and connect with
          professionals effortlessly. With advanced AI technology, MediBot
          ensures prompt assistance and peace of mind on your health journey."
        </p>
        <div className="mt-10">
          <form>
            <div className="flex flex-wrap gap-5">
              {/* <div>
              </div>
              <div>
              </div>   */}
              <button className="rounded-full w-2/3 bg-dark px-9 py-2 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho">
                <Link
                  to="/auth/login"
                  aria-label="get started button"
                  className="flex rounded-full bg-black px-9 py-2 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                >
                  Get Started
                </Link>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="image-container">
        <img alt="Chatbot" loading="lazy" src="/chatbot_img.jpeg" />
      </div>
    </section>
  );
};

export default Header;
