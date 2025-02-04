"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import dotenv from "dotenv";
require("dotenv").config();

const ContactPage = () => {
  const [status, setStatus] = useState({
    success: false,
    error: false,
    loading: false,
  });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const sendEmail = async (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Tejas Shiwankar",
      message: message,
    };
    try {
      emailjs
        .send(
          "service_hhxnweg",
          "template_npoiuds",
          templateParams,
          "sD6gBccxnCKp6IhsE"
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
      setStatus({ success: true, error: false, loading: false });
    } catch (error) {
      console.error("EmailJS Error:", error); // Log the error
      setStatus({ success: false, error: true, loading: false });
    }
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <div>
            {"Say Hello".split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24"
        >
          <span>Dear Tejas Shiwankar,</span>
          <textarea
            rows={3}
            className="bg-transparent border-b-2 border-b-black outline-none resize-none"
            name="user_message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message..."
            required
          />{" "}
          <span>Your Name:</span>
          <input
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="name"
            className="bg-transparent border-b-2 border-b-black outline-none"
            placeholder="example@example.com"
            required
          />
          <span>Your mail address:</span>
          <input
            name="user_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="bg-transparent border-b-2 border-b-black outline-none"
            placeholder="example@example.com"
            required
          />
          <span>Regards</span>
          <button
            className="bg-purple-200 rounded font-semibold text-gray-600 p-4"
            disabled={status.loading}
          >
            {status.loading ? "Sending..." : "Send"}
          </button>
          {status.success && (
            <span className="text-green-600 font-semibold">
              Your message has been sent successfully!
            </span>
          )}
          {status.error && (
            <span className="text-red-600 font-semibold">
              Something went wrong! Please try again.
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
