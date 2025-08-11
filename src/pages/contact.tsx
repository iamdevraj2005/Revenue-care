import React from "react";
import ContactSection from "@/components/ContactSection"; // if @ alias works

// Agar @ alias work na kare toh use this:
// import ContactSection from "../components/ContactSection";

const ContactPage = () => {
  return (
    <main>
      <ContactSection />
    </main>
  );
};

export default ContactPage;
