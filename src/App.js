import React from "react";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import SectionTwo from "./components/SectionTwo";
import Features from "./components/Features";
import FeaturesContainer from "./components/FeatureContainer";
import Testimonial from "./components/Testimonial";
import FaqQueSection from "./components/FaqQueSection";
import StillHaveQuestions from "./components/StillHaveQuestions"

import BlogPostCard from "./components/BlogPostCard"
import FreeTrialSection from "./components/FreeTrialSection"
import BlogSection from "./components/BlogSection";
import FooterNavigation from "./components/FooterNavigation";
import Footer from "./components/Footer";
import BlogContainer from "./components/BlogContainer";

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Section />
      </div>
      <div>
        <SectionTwo />
      </div>
      <div>
        <Features />
      </div>
      
      <div>
        <Testimonial/>
      </div>
      <div>
        <FeaturesContainer />
      </div>
      <div>
        <FaqQueSection />
      </div>
      <div>
        <StillHaveQuestions />
      </div>
      <div><BlogSection /></div>
      <div>
        <BlogContainer/>
      </div>
      <div>
        <FreeTrialSection />
      </div>
      <div>
        <FooterNavigation />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
