import ContactForm from "@/components/input/ContactForm";
import React from "react";

const ContactPage = () => {
  return (
    <section className="py-12 dark:bg-zinc-800 h-full">
      <div className="max-w-4xl mx-auto max-lg:px-5">
        <h2 className=" mb-2">Send your message!</h2>
        <p className="text-lg dark:text-slate-200 max-w-xl">
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p>
        <div className="mt-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
