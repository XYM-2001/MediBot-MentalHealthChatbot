import React from "react";
// import Metrics from "../components/Metrics";

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200">
      <div className="bg-white shadow-md rounded-lg p-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 py-10">
            <div className="">
              <h2 className="text-4xl sm:text-5xl mb-6 font-bold text-blue-900">
                Welcome to MediBot: Your Mental Health Companion
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                MediBot is designed to provide you with the support and resources you need to manage your mental health. Our mission is to make mental health care more accessible, personalized, and effective through innovative technology.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Whether you're feeling anxious, stressed, or just need someone to talk to, MediBot is here to help. Our chatbot uses advanced AI techniques to understand your emotions and provide you with tailored responses and resources.
              </p>
              <p className="text-lg text-gray-700">
                MediBot is more than just a chatbot; it's a friend you can rely on at any time. Our goal is to bridge the gap between you and mental health care, offering support whenever you need it.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <video controls className="w-full h-auto object-cover rounded-lg shadow-lg">
                <source src="/One_Earth_Environmental_Short_Film.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
      {/* <Metrics /> */}
      <br/>
      <div className="max-w-6xl mx-auto mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-3xl sm:text-5xl mb-6 font-bold text-blue-900">
            Key Metrics of our Success and Milestones
          </h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-2 gap-8">
          {/* Top Left */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center text-[#ccff34]">
            <h3 className="text-xl font-bold mb-6  text-[60px]">50%</h3>
            <p className="text-gray-600">New Users</p>
          </div>

          {/* Top Right */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center text-[#ccff34]">
            <h3 className="text-xl font-bold mb-6  text-[60px]">80+</h3>
            <p className="text-gray-600">Reviews</p>
          </div>

          {/* Bottom Left */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center text-[#ccff34]">
            <h3 className="text-xl font-bold mb-6  text-[60px]">20k</h3>
            <p className="text-gray-600">Overall users</p>
          </div>

          {/* Bottom Right */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center text-[#ccff34]">
            <h3 className="text-xl font-bold mb-6 text-[60px]">99%</h3>
            <p className="text-gray-600">Success</p>
          </div>
        </div>
      </div>
    </div>
    <br/>
    </div>
    
  );
}

export default About;
