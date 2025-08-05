import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Address',
      content: '2502 Mount Moriah Suite H231 PMB 1062 Memphis, Tennessee, USA'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      content: '(731) 236-0535'
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      content: 'info@morphylab.com'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Business Hours',
      content: 'Monday - Friday: 9:00 AM - 6:00 PM'
    }
  ];

  return (
    <div className="bg-gray-50 p-8 rounded-lg">
      <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
      <div className="space-y-6">
        {contactDetails.map((detail, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="text-orange-500">{detail.icon}</div>
            <div>
              <h4 className="font-medium text-gray-900">{detail.title}</h4>
              <p className="text-gray-600">{detail.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}