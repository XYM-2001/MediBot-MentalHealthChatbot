import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faStethoscope, faAppleAlt, faNotesMedical, faShieldAlt, faUserShield } from '@fortawesome/free-solid-svg-icons';
import "/src/styles/Features.css";

const Features = () => {
  return (
    <section className="features">
      <div className="animate_top text-center">
        <div className="mb-4 inline-block rounded-full bg-zumthor px-4.5 py-1.5 dark:border dark:border-strokedark dark:bg-blacksection">
          <span className="text-sectiontitle font-medium text-black dark:text-white">
            MEDIBOT FEATURES
          </span>
        </div>
        <h2 className="mx-auto mb-4 text-3xl font-bold text-black dark:text-white md:w-4/5 xl:w-1/2 xl:text-sectiontitle3">
          Core Features of MediBot
        </h2>
        <p className="mx-auto md:w-4/5 lg:w-3/5 xl:w-[46%]">
          Your all-in-one healthcare solution with AI chatbot support, doctor
          consultations, diet planning, symptom analysis, and secure data
          privacy via facial recognition.
        </p>
      </div>
      <br/>
      <div className="feature-grid mt-12.5 grid gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
        <div className="feature-card">
          <div className="icon1 bg-primary">
            <FontAwesomeIcon icon={faRobot} />
          </div>
          <h3 className="mb-5 mt-7.5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">AI Chatbot</h3>
          <p>Engage users with an intelligent conversational agent powered by artificial intelligence, providing instant assistance and answering queries 24/7.</p>
        </div>
        <div className="feature-card">
          <div className="icon1 bg-primary">
            <FontAwesomeIcon icon={faNotesMedical} />
          </div>
          <h3 className="mb-5 mt-7.5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">Symptom Analysis</h3>
          <p>Empower users to assess their health conditions by inputting symptoms, receiving accurate analysis, and guidance on potential next steps.</p>
        </div>
        <div className="feature-card">
          <div className="icon1 bg-primary">
            <FontAwesomeIcon icon={faAppleAlt} />
          </div>
          <h3 className="mb-5 mt-7.5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">Diet Planner</h3>
          <p>Help users achieve their health and fitness goals with personalized diet plans tailored to their nutritional needs and preferences.</p>
        </div>
        <div className="feature-card">
          <div className="icon1 bg-primary">
            <FontAwesomeIcon icon={faStethoscope} />
          </div>
          <h3 className="mb-5 mt-7.5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">Doctor Consultation</h3>
          <p>Connect users with qualified healthcare professionals for virtual consultations, diagnosis, treatment plans, and medical advice from the comfort of their homes.</p>
        </div>
        <div className="feature-card">
          <div className="icon1 bg-primary">
            <FontAwesomeIcon icon={faShieldAlt} />
          </div>
          <h3 className="mb-5 mt-7.5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">Data Privacy</h3>
          <p>Ensure the confidentiality and security of users' sensitive health data through robust privacy measures and compliance with data protection regulations.</p>
        </div>
        <div className="feature-card">
          <div className="icon1 bg-primary">
            <FontAwesomeIcon icon={faUserShield} />
          </div>
          <h3 className="mb-5 mt-7.5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">Facial Recognition</h3>
          <p>Enhance user experience and security with facial recognition technology for identity verification, access control, and personalized interactions.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
