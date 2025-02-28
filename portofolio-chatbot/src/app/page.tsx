"use client";

import React from "react";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import ChatButton from "@/components/chat-button";
// import ChatBubble from "@/components/ChatBubble";

const Page: React.FC = () => {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <ChatButton />
      {/* <ChatBubble /> */}
    </>
  );
};

export default Page;
