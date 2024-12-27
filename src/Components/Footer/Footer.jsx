import React from 'react';
import logo from '../../assets/footer.png'
import { FaFacebook, FaInstagram, FaLinkedin, FaReact, FaTwitter } from 'react-icons/fa';
import { IoCallSharp } from 'react-icons/io5';
import { FaLocationDot } from 'react-icons/fa6';
const Footer = () => {
  return (
    <footer className="bg-[#1c2937] text-white py-10">
      <div className="container mx-auto px-5">
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Logo and Description */}
          <div>
            <img src={logo} alt="Logo" className="mb-4" />
            <p className="text-sm ml-2">
              সারা বাংলাদেশে বিস্তৃত দক্ষতা অর্জনের মাধ্যমে নিজেকে গড়ার অন্যতোম ট্রেনিং ইনস্টিটিউট ফিউচার আইটি।
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-orange-500">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-orange-500">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="text-orange-500">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-orange-500">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-orange-500">
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className='md:ml-24 hidden md:flex '>
            <h3 className="text-lg font-semibold mb-4">যোগাযোগ</h3>
            <ul className="text-sm space-y-2 mt-11 -ml-24">
              <li>
                <strong>Corporate Office:</strong> Rupayan Trade Centre (Level-17) <br /> Bangla Motor, Dhaka
              </li>
              <li>
                <strong>Head Office:</strong> Razzak Plaza (Level-3) <br /> Boikali, Khulna
              </li>
              <li>
                <strong>Uttara Branch:</strong> House - 88 (Level-3) <br /> Boikali, Khulna
              </li>
            </ul>
          </div>

          {/* Other Links */}
          <div className='md:ml-24'>
            <h3 className="text-lg font-semibold mb-4">Developer Information</h3>
            <ul className="text-sm space-y-2">
              <li className='space-y-2'>
                
                <strong>Sheikh Shaadi</strong>  <span className='flex items-center gap-1'>(<FaReact />React Developer) </span> <span className='flex items-center gap-1'><FaLocationDot /> Madaripur, 7900</span><span className='flex items-center gap-1'><IoCallSharp /> 01956686338</span>

              </li>
              <li>
                <strong>Sheik Ave Rajun</strong>  (Founder Township Online Seba) <br /> Khulna, 9000
              </li>
              <p>Contact Us</p>
              <div className="flex space-x-4 text-xl md:text-2xl">
                <a
                  href="https://www.facebook.com/shaikalverajunbd"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebook className="rounded-full text-white hover:text-blue-600 transition-colors duration-200" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-white hover:text-pink-600 transition-colors duration-200" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-white hover:text-blue-700 transition-colors duration-200" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <FaTwitter className="text-white hover:text-blue-400 transition-colors duration-200" />
                </a>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <IoCallSharp className="text-white hover:text-blue-400 transition-colors duration-200" />
                </a>
              </div>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs">
          <p>Copyright © 2025 Township Online Seba. All right reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
