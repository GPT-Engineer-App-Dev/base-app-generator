import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">MyApp</div>
        <div className="space-x-4">
          <Link to="/">
            <Button variant="ghost" className="text-white">Home</Button>
          </Link>
          <Link to="/about">
            <Button variant="ghost" className="text-white">About</Button>
          </Link>
          <Link to="/contact">
            <Button variant="ghost" className="text-white">Contact</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;