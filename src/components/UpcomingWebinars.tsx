"use client";

import Link from "next/link";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";

const UpcomingWebinars = () => {


  const cardData = [
    {
      title: "Mastering Music Production in Ableton Live",
      description:
        "Join us for an in-depth webinar on mastering music production techniques using Ableton Live. Learn from industry experts and take your productions to the next level.",
      host: "Music Academy",
      isFeatured: true,
    },
    {
      title: "Introduction to Jazz Piano Improvisation",
      description:
        "Discover the fundamentals of jazz piano improvisation in this informative webinar. Explore chord voicings, improvisation techniques, and more.",
      host: "Jazz Institute",
      isFeatured: true,
    },
    {
      title: "Exploring World Music Traditions",
      description:
        "Embark on a musical journey around the world in this captivating webinar. Learn about different music traditions, instruments, and cultural influences.",
      host: "Global Music Society",
      isFeatured: false,
    },
    {
      title: "Songwriting Masterclass with Grammy-Winning Artists",
      description:
        "Unlock the secrets of songwriting in this exclusive masterclass featuring Grammy-winning artists. Gain valuable insights and inspiration for your songwriting journey.",
      host: "Songwriters Guild",
      isFeatured: true,
    },
    {
      title: "The Art of Sound Design in Film Scoring",
      description:
        "Delve into the fascinating world of sound design in film scoring. Learn how to create immersive soundscapes and enhance storytelling through sound.",
      host: "Film Music Academy",
      isFeatured: false,
    },
    {
      title: "Building a Successful Career in the Music Industry",
      description:
        "Get valuable career advice and insights from industry professionals in this insightful webinar. Learn how to navigate the music industry and achieve your goals.",
      host: "Music Industry Forum",
      isFeatured: true,
    },
    {
        "title": "Music Theory Essentials: Understanding Chord Progressions",
        "description": "Join us for an essential webinar on understanding chord progressions in music theory. Learn how to analyze and create chord progressions that enhance your compositions.",
        "host": "Music Theory Academy",
        "isFeatured": true
      },
      {
        "title": "The Future of Music Streaming Platforms",
        "description": "Explore the future of music streaming platforms in this forward-thinking webinar. Discover emerging trends, technologies, and strategies shaping the music streaming landscape.",
        "host": "MusicTech Innovations",
        "isFeatured": true
      }
  ];

  const featuredwebinar = cardData.filter((webinar:any) => webinar.isFeatured)

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            Featured Webinars
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance your musical journey
          </p>
        </div>
        <div className="mt-10">
          <div className="max-w-5xl mx-auto px-8">
            <HoverEffect
              items={featuredwebinar.map((item) => ({
                title: item.title,
                description: item.description,
                host: item.host,
                link: "/",
              }))}
            />
          </div>
        </div>

        <div className="mt-10 text-center ">
          <Link href={"/"}>
            <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              </span>
              <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                <span>{`View all Webinars`}</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M10.75 8.75L14.25 12L10.75 15.25"
                  ></path>
                </svg>
              </div>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpcomingWebinars;
