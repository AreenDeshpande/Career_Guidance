import React from 'react';
import { Navbar, NavItem } from '@/components/ui/navbar';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md p-4">
      <Navbar>
        <div className="flex items-center justify-between w-full">
          <a href="/" className="text-xl font-bold">
            Career Navigator
          </a>
          <nav className="flex space-x-6">
            <NavItem href="/courses">Courses</NavItem>
            <NavItem href="/quizzes">Quizzes</NavItem>
            <NavItem href="/research">Research Papers</NavItem>
            <NavItem href="/analysis">Performance Analysis</NavItem>
            <NavItem href="/coding">Coding Environment</NavItem>
          </nav>
          <div className="flex items-center space-x-4">
            <input 
              type="text" 
              placeholder="Search..." 
              className="p-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <Button variant="ghost">
              <Search className="text-white w-5 h-5" />
            </Button>
            <Button href="/login" variant="secondary">
              Login
            </Button>
          </div>
        </div>
      </Navbar>
    </header>
  );
};

export default Header;
