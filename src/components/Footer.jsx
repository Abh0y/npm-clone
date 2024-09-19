import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-200 p-4 mt-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} npm clone. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;