import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from '../common/Logo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTechDropdownOpen, setIsTechDropdownOpen] = useState(false);
  const [isSolutionsDropdownOpen, setIsSolutionsDropdownOpen] = useState(false);
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const solutionsDropdownRef = useRef<HTMLDivElement>(null);
  const resourcesDropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const solutionsTimeoutRef = useRef<NodeJS.Timeout>();
  const resourcesTimeoutRef = useRef<NodeJS.Timeout>();
  const location = useLocation();

  const techDropdownItems = [
    { name: 'AI Analytics', href: '/technology/ai-analytics' },
    { name: 'Cloud Technology', href: '/technology/cloud' },
    { name: 'Data Security', href: '/technology/security' }
  ];

  const solutionsDropdownItems = [
    [
      { name: 'AI Data Analytics', href: '/solutions/analytics' },
      { name: 'Data Archival', href: '/solutions/archival' },
      { name: 'Data Migration', href: '/solutions/migration' },
      { name: 'Data Backup', href: '/solutions/backup' },
      { name: 'Disaster Recovery', href: '/solutions/recovery' }
    ],
    [
      { 
        name: 'Industries',
        href: '/solutions/industries',
        subItems: [
          { name: 'Healthcare', href: '/industries/healthcare' },
          { name: 'Finance', href: '/industries/finance' },
          { name: 'Legal', href: '/industries/legal' },
          { name: 'Education', href: '/industries/education' },
          { name: 'Government', href: '/industries/government' },
          { name: 'Insurance', href: '/industries/insurance' }
        ]
      }
    ]
  ];

  const resourcesDropdownItems = [
    { name: 'Case Studies', href: '/resources/case-studies' },
    { name: 'Blog', href: '/resources/blog' }
  ];

  const navigation = [
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  const handleMouseEnter = (dropdown: 'tech' | 'solutions' | 'resources') => {
    if (dropdown === 'tech') {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setIsTechDropdownOpen(true);
    } else if (dropdown === 'solutions') {
      if (solutionsTimeoutRef.current) clearTimeout(solutionsTimeoutRef.current);
      setIsSolutionsDropdownOpen(true);
    } else if (dropdown === 'resources') {
      if (resourcesTimeoutRef.current) clearTimeout(resourcesTimeoutRef.current);
      setIsResourcesDropdownOpen(true);
    }
  };

  const handleMouseLeave = (dropdown: 'tech' | 'solutions' | 'resources') => {
    if (dropdown === 'tech') {
      timeoutRef.current = setTimeout(() => setIsTechDropdownOpen(false), 150);
    } else if (dropdown === 'solutions') {
      solutionsTimeoutRef.current = setTimeout(() => setIsSolutionsDropdownOpen(false), 150);
    } else if (dropdown === 'resources') {
      resourcesTimeoutRef.current = setTimeout(() => setIsResourcesDropdownOpen(false), 150);
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (solutionsTimeoutRef.current) clearTimeout(solutionsTimeoutRef.current);
      if (resourcesTimeoutRef.current) clearTimeout(resourcesTimeoutRef.current);
    };
  }, []);

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="hover:opacity-90 transition-opacity">
            <Logo isLink={false} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Solutions Dropdown */}
            <div 
              ref={solutionsDropdownRef}
              className="relative"
              onMouseEnter={() => handleMouseEnter('solutions')}
              onMouseLeave={() => handleMouseLeave('solutions')}
            >
              <button className="flex items-center text-gray-600 hover:text-purple-600 transition-colors">
                Solutions
                <ChevronDown className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${
                  isSolutionsDropdownOpen ? 'rotate-180' : ''
                }`} />
              </button>
              <div className={`absolute left-0 mt-2 w-[480px] bg-white rounded-md shadow-lg py-1 transform transition-all duration-200 ${
                isSolutionsDropdownOpen
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}>
                <div className="grid grid-cols-2 gap-4 p-4">
                  {/* Left Column - Solutions */}
                  <div>
                    {solutionsDropdownItems[0].map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors rounded-md"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  
                  {/* Right Column - Industries */}
                  <div>
                    {solutionsDropdownItems[1].map((item) => (
                      <div key={item.name}>
                        <div className="px-4 py-2 text-sm font-medium text-gray-700">
                          {item.name}
                        </div>
                        {item.subItems && (
                          <div className="ml-4 border-l border-gray-200">
                            {item.subItems.map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem.href}
                                className="block px-4 py-1.5 text-sm text-gray-600 hover:text-purple-600 transition-colors"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Technology Dropdown */}
            <div 
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => handleMouseEnter('tech')}
              onMouseLeave={() => handleMouseLeave('tech')}
            >
              <button className="flex items-center text-gray-600 hover:text-purple-600 transition-colors">
                Technology
                <ChevronDown className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${
                  isTechDropdownOpen ? 'rotate-180' : ''
                }`} />
              </button>
              <div className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 transform transition-all duration-200 ${
                isTechDropdownOpen
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}>
                {techDropdownItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Resources Dropdown */}
            <div 
              ref={resourcesDropdownRef}
              className="relative"
              onMouseEnter={() => handleMouseEnter('resources')}
              onMouseLeave={() => handleMouseLeave('resources')}
            >
              <button className="flex items-center text-gray-600 hover:text-purple-600 transition-colors">
                Resources
                <ChevronDown className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${
                  isResourcesDropdownOpen ? 'rotate-180' : ''
                }`} />
              </button>
              <div className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 transform transition-all duration-200 ${
                isResourcesDropdownOpen
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}>
                {resourcesDropdownItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/request-demo"
              className={`${
                location.pathname === '/request-demo'
                  ? 'bg-orange-500'
                  : 'bg-purple-600 hover:bg-purple-700'
              } text-white px-4 py-2 rounded-md transition-colors`}
            >
              Request Demo
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Solutions Section */}
              <div className="space-y-1">
                <div className="px-3 py-2 text-gray-600 font-medium">Solutions</div>
                {solutionsDropdownItems[0].map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-3 py-2 pl-6 text-gray-600 hover:text-purple-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                {solutionsDropdownItems[1].map((item) => (
                  <div key={item.name}>
                    <div className="px-3 py-2 pl-6 text-gray-600 font-medium">
                      {item.name}
                    </div>
                    {item.subItems && (
                      <div className="pl-9 space-y-1">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block text-sm text-gray-600 hover:text-purple-600 transition-colors py-1.5"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Technology Section */}
              <div className="space-y-1">
                <div className="px-3 py-2 text-gray-600 font-medium">Technology</div>
                {techDropdownItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-3 py-2 pl-6 text-gray-600 hover:text-purple-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Resources Section */}
              <div className="space-y-1">
                <div className="px-3 py-2 text-gray-600 font-medium">Resources</div>
                {resourcesDropdownItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-3 py-2 pl-6 text-gray-600 hover:text-purple-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-2 text-gray-600 hover:text-purple-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/request-demo"
                className="block px-3 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Request Demo
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}