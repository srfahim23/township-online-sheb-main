import React from 'react';
import logo from '../../assets/footer.png';
import { FaFacebook, FaInstagram, FaLinkedin, FaReact, FaTwitter } from 'react-icons/fa';
import { IoCallSharp } from 'react-icons/io5';
import { FaLocationDot } from 'react-icons/fa6';

const SocialIcon = ({ href, Icon, label, hoverColor }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className={`hover:${hoverColor} transition-colors duration-200`}
  >
    <Icon className="text-white" />
  </a>
);

const OfficeInfo = ({ offices }) => (
  <ul className="text-sm space-y-2 mt-11 -ml-24">
    {offices.map((office, index) => (
      <li key={index}>
        <strong>{office.title}:</strong> {office.address}
      </li>
    ))}
  </ul>
);

const DeveloperInfo = ({ developers }) => (
  <ul className="text-sm space-y-4">
    {developers.map((dev, index) => (
      <li key={index} className="space-y-2">
        <strong>{dev.name}</strong> <span className="flex items-center gap-1">(<FaReact /> {dev.role})</span>
        <span className="flex items-center gap-1"><FaLocationDot /> {dev.location}</span>
        <span className="flex items-center gap-1"><IoCallSharp /> {dev.contact}</span>
      </li>
    ))}
  </ul>
);

const Footer = () => {
  const offices = [
    { title: "Corporate Office", address: "Rupayan Trade Centre (Level-17), Bangla Motor, Dhaka" },
    { title: "Head Office", address: "Razzak Plaza (Level-3), Boikali, Khulna" },
    { title: "Uttara Branch", address: "House-88 (Level-3), Boikali, Khulna" },
  ];

  const developers = [
    { name: "Sheikh Shaadi", role: "React Developer", location: "Madaripur, 7900", contact: "01956686338" },
    { name: "Sheik Ave Rajun", role: "Founder, Township Online Seba", location: "Khulna, 9000", contact: "" },
    { name: "FAHIM FAYSAL", role: "FrontEnd Developer, Township Online Seba", location: "Sirajganj, 6720", contact: "019990565081" },
  ];

  return (
    <footer className="bg-[#1c2937] text-white py-10">
      <div className="container mx-auto px-5">
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <img src={logo} alt="Footer Logo" className="mb-4" />
            <p className="text-sm ml-2">
              সারা বাংলাদেশে বিস্তৃত দক্ষতা অর্জনের মাধ্যমে নিজেকে গড়ার অন্যতোম ট্রেনিং ইনস্টিটিউট ফিউচার আইটি।
            </p>
            <div className="mt-4 flex space-x-4">
              <SocialIcon href="#" Icon={FaFacebook} label="Facebook" hoverColor="text-blue-600" />
              <SocialIcon href="#" Icon={FaInstagram} label="Instagram" hoverColor="text-pink-600" />
              <SocialIcon href="#" Icon={FaLinkedin} label="LinkedIn" hoverColor="text-blue-700" />
              <SocialIcon href="#" Icon={FaTwitter} label="Twitter" hoverColor="text-blue-400" />
              <SocialIcon href="#" Icon={IoCallSharp} label="Call" hoverColor="text-blue-400" />
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:ml-24 hidden md:flex">
            <h3 className="text-lg font-semibold mb-4">যোগাযোগ</h3>
            <OfficeInfo offices={offices} />
          </div>

          {/* Developer Info */}
          <div className="md:ml-24">
            <h3 className="text-lg font-semibold mb-4">Developer Information</h3>
            <DeveloperInfo developers={developers} />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs">
          <p>Copyright &copy; 2025 Township Online Seba. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
