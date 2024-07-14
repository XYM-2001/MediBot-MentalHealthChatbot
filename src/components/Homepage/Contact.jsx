import React from "react";
import { useForm } from "react-hook-form";

function Contact() {
  const { register, handleSubmit } = useForm();
  const sendMsg = async (data) => { };

  return (
    <div className="flex flex-col min-h-screen items-center py-10 sm:py-16 bg-gray-50">
      <div className="bg-white flex flex-col items-center py-8 px-6 sm:px-14 sm:py-14 shadow-lg rounded-2xl w-full max-w-2xl">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Contact Us</h2>
        <form onSubmit={handleSubmit(sendMsg)} className="space-y-4 w-full">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              {...register("name", { required: true })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email Address"
              {...register("email", { required: true })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              {...register("message", { required: true })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 h-28"
            />
          </div>
          <div>
            <button type="submit" className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
              Send Message
            </button>
          </div>
        </form>
        <div className="flex flex-col sm:flex-row sm:space-x-12 space-y-6 sm:space-y-0 mt-10 text-gray-700 w-full">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-600 p-3 rounded-full">
              <img src="/email.svg" alt="Email" className="w-6 h-6" />
            </div>
            <div className="text-sm">
              <p>info@medibot.com</p>
              <p>support@medibot.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-blue-600 p-3 rounded-full">
              <img src="/phone.svg" alt="Phone" className="w-6 h-6" />
            </div>
            <div className="text-sm">
              <p>+1 (354) 442-7422</p>
              <p>+1 (354) 322-5434</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
