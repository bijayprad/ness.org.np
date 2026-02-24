import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">About</h3>
          <p className="text-gray-700">
Nepal Statistical Society (NeSS) is a professional, non-profit organization of statisticians in Nepal 
dedicated to promoting the development, application, and advancement of statistics through research, 
collaboration, training, and academic activities.
          </p>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Follow Us</h3>
          <div className="flex space-x-6">
            <a href="https://www.facebook.com/Nepalstatsociety" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              <FaFacebook className="text-3xl" />
            </a>
            <a href="https://x.com/NepalSS2013" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
              <FaTwitter className="text-3xl" />
            </a>
            <a href="https://www.instagram.com/nepalstatisticalsociety/" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
              <FaInstagram className="text-3xl" />
            </a>
            <a href="https://www.linkedin.com/in/nepal-statistical-society-4b1a373b2/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
              <FaLinkedin className="text-3xl" />
            </a>
          </div>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Contact</h3>
          <ul className="space-y-2 text-gray-700">
            <li>Email: <a href="mailto:info@example.com" className="hover:underline">nepalstatisticalsociety@gmail.com</a></li>
            <li>Phone: <a href="tel:+1234567890" className="hover:underline"></a></li>
            <li>Samakhushi, Kathmandu, Nepal</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 mt-8">
        &copy; {new Date().getFullYear()} SIRT. All rights reserved.
      </div>
    </footer>
  );
}

