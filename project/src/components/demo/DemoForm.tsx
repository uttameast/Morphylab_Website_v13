import React, { useState, useRef } from 'react';
import { Calendar } from 'lucide-react';
import emailjs from '@emailjs/browser';
import FormField from '../contact/FormField';

export default function DemoForm() {
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
        team_size: form.current.team_size.value,
        preferred_date: form.current.preferred_date.value,
        preferred_time: form.current.preferred_time.value,
        timezone: form.current.timezone.value,
        message: form.current.message.value
      };

      console.log('Sending demo request:', templateParams);

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
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Schedule Your Demo</h2>
      <form ref={form} onSubmit={handleSubmit} className="space-y-6">
        {status === 'success' && (
          <div className="bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded">
            Demo request sent successfully! We'll get back to you soon to confirm your preferred time.
          </div>
        )}
        
        {status === 'error' && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
            Failed to send request. Please try again or contact us directly at info@morphylab.com
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
            label="Work Email"
            type="email"
            placeholder="john@company.com"
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
          id="team_size"
          name="team_size"
          label="Team Size"
          type="text"
          placeholder="e.g., 11-50 employees"
          required
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FormField
            id="preferred_date"
            name="preferred_date"
            label="Preferred Date"
            type="date"
            required
          />
          <FormField
            id="preferred_time"
            name="preferred_time"
            label="Preferred Time"
            type="time"
            required
          />
          <FormField
            id="timezone"
            name="timezone"
            label="Time Zone"
            type="select"
            required
          >
            <option value="">Select Time Zone</option>
            <option value="PT">Pacific Time (PT)</option>
            <option value="MT">Mountain Time (MT)</option>
            <option value="CT">Central Time (CT)</option>
            <option value="ET">Eastern Time (ET)</option>
            <option value="UTC">UTC</option>
            <option value="CET">Central European Time (CET)</option>
            <option value="CST">China Standard Time (CST)</option>
          </FormField>
        </div>

        <FormField
          id="message"
          name="message"
          label="What are your primary data archival needs?"
          type="textarea"
          placeholder="Tell us about your current challenges and requirements..."
          required
          rows={4}
        />

        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
        >
          <Calendar className="h-5 w-5" />
          {status === 'sending' ? 'Sending Request...' : 'Schedule Demo'}
        </button>
      </form>
    </div>
  );
}