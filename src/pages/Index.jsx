import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Bare-Bones App</h1>
        <p className="text-lg">This is a minimal web application setup.</p>
        <Link to="/about" className="text-blue-500 hover:underline mt-4 block">Learn more about this site</Link>
        <Link to="/contact" className="text-blue-500 hover:underline mt-4 block">Contact Us</Link>
      </div>
    </div>
  );
};

export default Index;