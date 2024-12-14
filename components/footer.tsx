'use client';

import {useState, useEffect} from 'react';
import {fetchLastUpdate} from '@/services/api/fetchLastUpdate';
import {GitHub, LinkedIn, Email} from '@mui/icons-material';
import {motion} from 'framer-motion';

export function Footer() {
  const [lastUpdated, updateLastUpdated] = useState(new Date());

  useEffect(() => {
    fetchLastUpdate().then(lastDate => {
      if (!lastDate) {
        return;
      }
      updateLastUpdated(new Date(lastDate));
    });
  }, []);

  const socialLinks = [
    {
      icon: <GitHub />,
      href: 'https://github.com/marcuspeh',
      label: 'GitHub',
    },
    {
      icon: <LinkedIn />,
      href: 'https://www.linkedin.com/in/marcus-peh/',
      label: 'LinkedIn',
    },
    {
      icon: <Email />,
      href: 'mailto:marcuspeh@gmail.com',
      label: 'Email',
    },
  ];

  return (
    <footer className="shadow-lg mt-auto">
      <div className="container mx-auto px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Copyright */}
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
            className="text-center md:text-left"
          >
            <p className="text-gray-600">
              &copy; {new Date().getFullYear()}, Marcus Peh
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.2}}
            className="flex justify-center space-x-4"
          >
            {socialLinks.map(link => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-gray-600 hover:text-primary transition-colors duration-300"
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Last Updated */}
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.4}}
            className="text-center md:text-right text-gray-600"
          >
            Last Updated: {lastUpdated.toDateString()}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
