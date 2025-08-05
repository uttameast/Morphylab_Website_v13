import React, { useState, useRef } from 'react';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import FormField from './FormField';

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;
    
    setStatus('sending');
    
    try {
      const templateParams = {
        from_name: form.current.user_name.value,
        from_email: form.current.user_email.value,
        phone_number: form.current.user_phone.value,
        organization: form.current.user_organization.value,
        subject: form.current.subject.value,
        message: form.current.message.value
      };

      console.log('Sending contact form:', templateParams);

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      setStatus('success');
      form.current.reset();
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      console.error('Failed to send email:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <form ref={form} onSubmit={handleSubmit} className="space-y-6">
      {status === 'success' && (
        <div className="bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded">
          Message sent successfully! We'll get back to you soon.
        </div>
      )}
      
      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
          Failed to send message. Please try again or contact us directly at info@morphylab.com
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          id="user_name"
          name="user_name"
          label="Full Name"
          type="text"
          placeholder="John Doe"
          required
        />
        
        <FormField
          id="user_organization"
          name="user_organization"
          label="Organization"
          type="text"
          placeholder="Company Name"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          id="user_email"
          name="user_email"
          label="Email Address"
          type="email"
          placeholder="john@example.com"
          required
        />

        <FormField
          id="user_phone"
          name="user_phone"
          label="Phone Number"
          type="tel"
          placeholder="(555) 123-4567"
          pattern="[\d\s\(\)-]+"
          required
        />
      </div>

      <FormField
        id="subject"
        name="subject"
        label="Subject Line"
        type="text"
        placeholder="How can we help you?"
        required
      />

      <FormField
        id="message"
        name="message"
        label="Your Message"
        type="textarea"
        placeholder="Tell us more about your data archival needs..."
        required
        rows={4}
      />

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full flex items-center justify-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition-colors disabled:opacity-50"
      >
        <Send className="h-5 w-5" />
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}