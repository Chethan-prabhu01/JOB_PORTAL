import React from 'react';
import Navbar from '../components_lite/Navbar';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaThreads } from 'react-icons/fa6';
import portalImg from './jobportalimage.png';


const Creator = () => {
  return (
    <div>
      <Navbar />

      <div className="flex flex-col items-center justify-center min-h-screen max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center w-full">
          {/* Image Section */}
          <div className="flex justify-center">
            <img src={portalImg} alt="Job Portal Overview" className="h-80 object-cover rounded-lg shadow-md" />
          </div>

          {/* Text Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">About the Job Portal</h2>
            <p className="text-gray-700 mb-4">
              The Job Portal is a full-stack web application designed to connect job seekers with recruiters through an intuitive and feature-rich platform. Built using the MERN stack (MongoDB, Express, React, Node.js), it simplifies the job application and hiring process.
            </p>
            <p className="text-gray-700 mb-4">
              Job seekers can create profiles, upload resumes, and apply for jobs posted by companies. Recruiters can register, post job listings, and manage applications. Real-time communication, role-based dashboards, resume downloads, and secure authentication are all integrated into the platform.
            </p>
            <p className="text-gray-700">
              The portal supports meaningful career navigation and guidance by streamlining recruitment processes, enhancing user experience, and bridging the gap between talent and opportunity.
            </p>
          </div>
        </div>
      </div>

      <hr className="w-full border-gray-300 my-6" />

      <div className="text-center p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold text-blue-600 mb-2">For Job Seekers</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Create and manage profiles</li>
              <li>Upload and download resumes</li>
              <li>Apply to job listings in real-time</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold text-blue-600 mb-2">For Recruiters</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Post job openings</li>
              <li>Track applications</li>
              <li>Manage hiring pipeline efficiently</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold text-blue-600 mb-2">Platform Benefits</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Seamless UI/UX</li>
              <li>Secure login and data protection</li>
              <li>Mobile-responsive and fast</li>
            </ul>
          </div>
        </div>
      </div>
            {/* Connect With Us Section */}
      <div className="bg-gray-100 py-10 mt-10">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Connect With Us</h2>
        <div className="flex justify-center gap-6">
          <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-2xl hover:text-blue-800 transition">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer" className="text-pink-500 text-2xl hover:text-pink-700 transition">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-700 text-2xl hover:text-blue-900 transition">
            <FaLinkedinIn />
          </a>
          <a href="https://www.threads.net/@yourpage" target="_blank" rel="noopener noreferrer" className="text-black text-2xl hover:text-gray-700 transition">
            <FaThreads />
          </a>
        </div>
      </div>


    </div>
    
  );
};

export default Creator;