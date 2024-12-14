'use client';

import * as React from 'react';
import {Grid, Box, Tooltip} from '@mui/material';
import Image from 'next/image';
import {ContactForm} from './contactForm';
import {ContactData} from '@/data/contactData';
import {ContactDataModel} from '@/models/contactDataModel';
import {motion} from 'framer-motion';

export function Contact() {
  return (
    <Box className="flex flex-col items-center justify-between px-8 py-16 md:py-32">
      <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        viewport={{once: true}}
        className="container max-w-6xl"
      >
        {/* Header Section */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}
          viewport={{once: true}}
          className="text-center mb-16"
        >
          <Box className="heading1 primary">Get In Touch</Box>
          <Box className="subtitle primary-dark max-w-2xl mx-auto">
            Let&apos;s make a connection
          </Box>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 0.2}}
          viewport={{once: true}}
          className="flex justify-center gap-6 mb-16"
        >
          {ContactData.map((contact: ContactDataModel) => (
            <motion.div
              key={contact.id}
              whileHover={{scale: 1.1}}
              whileTap={{scale: 0.9}}
            >
              <Tooltip title={contact.text} arrow>
                <a
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    block p-4
                    bg-white
                    rounded-full
                    shadow-lg hover:shadow-xl
                    transform hover:-translate-y-1
                    transition-all duration-300
                  "
                >
                  <Image
                    src={contact.pic}
                    alt={contact.text}
                    className="w-8 h-8"
                  />
                </a>
              </Tooltip>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{opacity: 0, scaleX: 0}}
          whileInView={{opacity: 1, scaleX: 1}}
          transition={{duration: 0.5}}
          viewport={{once: true}}
          className="flex items-center justify-center mb-16"
        >
          <div className="flex items-center gap-4 text-gray-400">
            <div className="h-[1px] w-16 bg-gray-300" />
            <span className="text-sm uppercase tracking-wider">
              or send a message
            </span>
            <div className="h-[1px] w-16 bg-gray-300" />
          </div>
        </motion.div>

        {/* Contact Form Section */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 0.4}}
          viewport={{once: true}}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <ContactForm />
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 0.6}}
          viewport={{once: true}}
          className="mt-16 text-center"
        >
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={4}>
              <div className="p-6 rounded-xl bg-white shadow-lg">
                <Box className="subtitle primary-dark font-bold mb-2">
                  Location
                </Box>
                <Box className="text-lg primary-text">Singapore</Box>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="p-6 rounded-xl bg-white shadow-lg">
                <Box className="subtitle primary-dark font-bold mb-2">
                  Email
                </Box>
                <Box className="text-lg primary-text">hkmpeh@gmail.com</Box>
              </div>
            </Grid>
          </Grid>
        </motion.div>
      </motion.div>
    </Box>
  );
}
