import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import Instructors from "@/components/Instructors";
import TestimonialsCards from "@/components/TestimonialsCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import HeroSection from "@/components/ui/HeroSection";
// import Image from "next/image";



export default function Home() {
  return (
    <div>
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        <HeroSection />
        <FeaturedCourses />
        <TestimonialsCards />
        <UpcomingWebinars />
        <Instructors />
        <Footer />

      </main>
    </div>
  );
}
