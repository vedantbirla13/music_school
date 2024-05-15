"use client"

import React, { FormEvent, useState } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

const Contact = () => {

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log('Submitted:', { email, message });
    };
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative">
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />

        <div className="max-w-2xl mx-auto p-4 relative z-10">
        <h1 className="text-5xl text-center font-bold">Contact Us</h1>
        <p className="  text-neutral-500 max-w-lg mx-auto my-4 text-sm mb-8 text-center">
          {" "}
          We&apos;re here to help with any questions about our courses,
          programs, or events. Reach out and let us know how we can assist you
          in your musical journey.
        </p>

      <form action="" onSubmit={handleSubmit} className="space-y-4 mt-4 ">
        <input
          type="text"
          value={email}
          placeholder="Your email address"
          className="rounded-lg w-full border border-neutral-800 focus:ring-2 focus:ring-teal-500 p-4 bg-neutral-950 placeholder:text-neutral-700"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          name=""
          id=""
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your message"
          className="rounded-lg w-full border border-neutral-800 focus:ring-2 focus:ring-teal-500 p-4 bg-neutral-950 placeholder:text-neutral-700"
          required
        ></textarea>
        <button
          type="submit"
          className="px-6 py-3 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
        >
          Send message
        </button>
      </form>
      </div>

    </div>
  );
};

export default Contact;
