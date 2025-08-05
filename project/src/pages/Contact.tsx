import React from 'react';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import HeaderText from '../components/common/HeaderText';

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-16">
      <HeaderText
        title="Get in Touch"
        subtitle="Have questions? We're here to help you secure your data."
        className="mb-12"
      />
      <div className="grid md:grid-cols-2 gap-12">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
}