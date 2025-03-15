import React from 'react'

function Footer() {
  return (
    <footer className=" py-10 w-[95%] xl:w-[66%] mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo + Thông tin */}
        <div>
          <h2 className="text-2xl font-bold">☕ Coffee House</h2>
          <p className="text-gray-600 mt-3">Nơi thưởng thức hương vị cà phê đậm đà.</p>
        </div>

        {/* Menu */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Menu</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Menu</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">About</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact</a></li>
          </ul>
        </div>

        {/* Mạng xã hội */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">🔵 Facebook</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">📷 Instagram</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">🐦 Twitter</a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-600 mt-6 text-center pt-4">
        © 2025 Le Chi Nghia. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer