import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react';
import Logo from '../common/Logo';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="scale-75 origin-left">
              <Logo className="mb-4" />
            </div>
            <p className="text-gray-400">
              Secure, reliable, and scalable data archival solutions for your business.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/solutions/archival" className="text-gray-400 hover:text-white">Data Archival</Link></li>
              <li><Link to="/solutions/migration" className="text-gray-400 hover:text-white">Data Migration</Link></li>
              <li><Link to="/solutions/backup" className="text-gray-400 hover:text-white">Data Backup</Link></li>
              <li><Link to="/solutions/analytics" className="text-gray-400 hover:text-white">Data Analytics</Link></li>
              <li><Link to="/solutions/recovery" className="text-gray-400 hover:text-white">Disaster Recovery</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Industries</h3>
            <ul className="space-y-2">
              <li><Link to="/industries/healthcare" className="text-gray-400 hover:text-white">Healthcare</Link></li>
              <li><Link to="/industries/finance" className="text-gray-400 hover:text-white">Finance</Link></li>
              <li><Link to="/industries/legal" className="text-gray-400 hover:text-white">Legal</Link></li>
              <li><Link to="/industries/education" className="text-gray-400 hover:text-white">Education</Link></li>
              <li><Link to="/industries/government" className="text-gray-400 hover:text-white">Government</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>2502 Mount Moriah Suite H231 PMB 1062</li>
              <li>Memphis, Tennessee, USA</li>
              <li>Phone: (731) 236-0535</li>
              <li>Email: info@morphylab.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} MorphyLab. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}