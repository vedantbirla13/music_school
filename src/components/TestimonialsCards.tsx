import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "This course transformed my understanding of music. Highly recommended for anyone passionate about music theory!",
    name: "Emily Johnson",
    title: "Pianist and Composer",
  },
  {
    quote:
      "Singing for Beginners made me feel confident in my vocal abilities. Daniel Lee is an excellent instructor!",
    name: "Sophie Williams",
    title: "Aspiring Singer",
  },
  {
    quote:
      "I never thought I could produce my own music until I took this course. Sophia Martinez is a fantastic teacher!",
    name: "Maxwell Clark",
    title: "Music Producer",
  },
  {
    quote:
      "The Guitar Mastery course helped me take my guitar skills to the next level. Michael Smith is an amazing instructor!",
    name: "Ethan Thompson",
    title: "Guitarist",
  },
  {
    quote:
      "Electronic Music Production opened up a whole new world of creativity for me. Thanks to this course, I now feel confident in my production skills.",
    name: "Ava Miller",
    title: "Electronic Music Enthusiast",
  },
  {
    quote:
      "Advanced Music Theory challenged me in the best possible way. Rachel Garcia's teaching style is both engaging and informative.",
    name: "Oliver Brown",
    title: "Music Student",
  },
];

const TestimonialsCards = () => {
  return (
    <div className="h-[30rem] w-full dark:bg-black dark:bg-grid-white/[0.2] realtive flex flex-col items-center justify-center overflow-hidden">
      <h2 className=" text-3xl mb-10 font-extrabold text-center text-white sm:text-4xl z-10">
        Hear our Harmony: Voice of success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="slow"
        />
      </div>
    </div>
  );
};

export default TestimonialsCards;
