"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [status, setStatus] = useState({
    success: false,
    error: false,
    loading: false,
  });
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus({ success: false, error: false, loading: true });

    const formData = new FormData(form.current); // FormData instance for sending form data
    console.log("Form Data:", Object.fromEntries(formData)); // Log form data to debug

    try {
      const result = await emailjs.sendForm(
        "service_a04jg38", // Your EmailJS Service ID
        "template_npoiuds", // Your EmailJS Template ID
        form.current,
        "sD6gBccxnCKp6IhsE" // Your User ID
      );
      console.log("EmailJS Response:", result); // Log the response for debugging
      setStatus({ success: true, error: false, loading: false });
      form.current.reset();
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
          ref={form}
          className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24"
        >
          <span>Dear Tejas Shiwankar,</span>
          <textarea
            rows={6}
            className="bg-transparent border-b-2 border-b-black outline-none resize-none"
            name="user_message"
            placeholder="Write your message..."
            required
          />
          <span>Your mail address:</span>
          <input
            name="user_email"
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
