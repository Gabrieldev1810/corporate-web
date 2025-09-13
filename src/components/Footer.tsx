import React from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
  Shield,
  Award,
  CheckCircle
} from 'lucide-react';

interface FooterProps {
  onPageChange: (page: string) => void;
}

export default function Footer({ onPageChange }: FooterProps) {
  const footerSections = [
    {
      title: "Services",
      links: [
        { label: "Call Center Solutions", page: "services" },
        { label: "Bank Collections", page: "services" },
        { label: "Customer Support", page: "services" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", page: "about" },
        { label: "Careers", page: "careers" },
        { label: "Contact", page: "contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Industry Insights", page: "blog" },
        { label: "Case Studies", page: "blog" },
        { label: "Help Center", page: "contact" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  const certifications = [
    { icon: Shield, text: "SOC 2 Certified" },
    { icon: CheckCircle, text: "FDCPA Compliant" },
    { icon: Award, text: "Industry Leader" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 border-t border-border/10">
      {/* Main Footer Content */}
      <motion.div
        className="container mx-auto px-4 py-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                <Phone className="w-4 h-4 text-white" />
              </div>
              <div>
                <h2 className="text-lg">CallCenter Pro</h2>
                <p className="text-xs text-muted-foreground">Collections & Solutions</p>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground leading-relaxed">
              Leading provider of professional call center solutions and compliant debt collection services.
            </p>

            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="w-3 h-3 text-primary" />
                <span className="text-xs">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3 h-3 text-primary" />
                <span className="text-xs">contact@callcenterpro.com</span>
              </div>
            </div>

            {/* Certifications */}
            <div className="flex items-center space-x-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center space-x-1">
                  <cert.icon className="w-3 h-3 text-green-500" />
                  <span className="text-xs text-muted-foreground">{cert.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div key={sectionIndex} variants={itemVariants}>
              <h3 className="text-sm font-medium mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button
                      onClick={() => onPageChange(link.page)}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Social Links & Stats */}
        <motion.div 
          variants={itemVariants}
          className="mt-8 pt-8 border-t border-border/10 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div className="flex items-center space-x-4">
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-8 h-8 rounded-lg glass-effect flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-3 h-3" />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="text-center">
              <div className="text-lg gradient-text">500+</div>
              <div className="text-xs text-muted-foreground">Clients</div>
            </div>
            <div className="text-center">
              <div className="text-lg gradient-text">10M+</div>
              <div className="text-xs text-muted-foreground">Calls</div>
            </div>
            <div className="text-center">
              <div className="text-lg gradient-text">24/7</div>
              <div className="text-xs text-muted-foreground">Support</div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="border-t border-border/10 bg-background/50 backdrop-blur-sm">
        <motion.div
          className="container mx-auto px-4 py-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            variants={itemVariants}
            className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-muted-foreground"
          >
            <div className="flex flex-col md:flex-row items-center gap-3">
              <span>© 2024 CallCenter Pro. All rights reserved.</span>
              <div className="flex items-center space-x-3">
                <button className="hover:text-primary transition-colors">Privacy</button>
                <span>•</span>
                <button className="hover:text-primary transition-colors">Terms</button>
                <span>•</span>
                <button className="hover:text-primary transition-colors">Cookies</button>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Globe className="w-3 h-3 text-muted-foreground" />
              <span>United States</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}