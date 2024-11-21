import React from 'react';
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import backgroundImage from '../assest/contact3.jpeg'; 

function ContactPage() {
  const teamMembers = [
    {
      name: 'Yash Goel',
      email: 'yashgoelbsr@gmail.com',
      phone: '9837588454',
      imageUrl: '/assest/yash.jpg.jpeg',
      instagramUrl: 'https://www.instagram.com/yashgoel_31/',
      linkedinUrl: 'https://www.linkedin.com/in/yash-goel-11a455303/',
      gmailUrl: 'mailto:yashgoelbsr@gmail.com'
      
    },
    {
      name: 'Ananya Srivastava',
      email: 'ananyasrivastava402@gmail.com',
      phone: '9555730915',
      imageUrl: '/assest/ananya.jpg.jpeg',
      instagramUrl: 'https://www.instagram.com/__ananya_sri/',
      linkedinUrl: 'https://www.linkedin.com/in/ananya-srivastava-764238245',
      gmailUrl: 'mailto:ananyasrivastava402@gmail.com'
    },
    {
      name: 'Aradhya Thakur',
      email: 'aradhyathakur690@gmail.com',
      phone: '8081926284',
      imageUrl: '/assest/aradhya.jpg.jpeg',
      instagramUrl: 'https://www.instagram.com/aradhyathakur7240/',
      linkedinUrl: 'https://www.linkedin.com/in/aradhya-thakur-530708249/',
      gmailUrl: 'mailto:aradhyathakur690@gmail.com'
    },
    {
      name: 'Ayush Raj',
      email: 'ayushraj4820@gmail.com',
      phone: '7870064448',
      imageUrl: '/assest/aradhya.jpg.jpeg',
      instagramUrl: ' ',
      linkedinUrl: 'https://www.linkedin.com/in/ayush-raj-386886249/',
      gmailUrl: 'mailto:ayushraj4820@gmail.com'
    },
  ];

  return (
    <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="container mx-auto py-8">
        <h1 className="text-7xl font-bold mb-12 text-green-700">OUR TEAM</h1>
        {/* grid system to have 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="relative">
              <div
                className="bg-cover bg-center rounded-lg shadow-md p-6 transition duration-300 transform hover:shadow-lg"
                style={{ backgroundImage: `url(${member.imageUrl})`, minHeight: '300px' }}
              >
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-green-400 bg-opacity-75">
                  <h2 className="text-xl font-semibold mb-2 text-white">{member.name}</h2>
                  <p className="text-gray-200 mb-2">{member.email}</p>
                  <p className="text-gray-200 mb-2">{member.phone}</p>
                  <div className="flex gap-2">
                    <a href={member.instagramUrl} target="_blank" rel="noopener noreferrer"><FaInstagram className="text-white" /></a>
                    <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-white" /></a>
                    <a href={member.gmailUrl}><FaEnvelope className="text-white" /></a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
