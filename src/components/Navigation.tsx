import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Moon, Sun, Menu, Phone, Mail } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

export default function Navigation({ currentPage, onPageChange, darkMode, onToggleDarkMode }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'careers', label: 'Careers' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (page: string) => {
    onPageChange(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-effect backdrop-blur-xl' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-lg text-foreground">CallCenter Pro</h1>
              <p className="text-xs text-muted-foreground">Collections & Solutions</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-2 transition-colors ${
                  currentPage === item.id
                    ? 'text-primary'
                    : 'text-foreground hover:text-primary'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                {currentPage === item.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                    layoutId="activeTab"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={onToggleDarkMode}
              className="rounded-full"
            >
              <motion.div
                animate={{ rotate: darkMode ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </motion.div>
            </Button>

            <div className="hidden md:flex items-center space-x-2">
              <Button 
                variant="outline" 
                className="glass-effect border-primary/20 hover:border-primary/40"
                onClick={() => handleNavClick('contact')}
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact Us
              </Button>
              <Button 
                className="gradient-primary hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                onClick={() => handleNavClick('contact')}
              >
                <Phone className="w-4 h-4 mr-2" />
                Get Quote
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] glass-effect border-l border-border/10">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <motion.button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`text-left p-4 rounded-xl transition-all ${
                        currentPage === item.id
                          ? 'bg-primary/10 text-primary border border-primary/20'
                          : 'text-foreground hover:bg-accent/50'
                      }`}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.label}
                    </motion.button>
                  ))}
                  <div className="pt-4 space-y-3">
                    <Button 
                      variant="outline" 
                      className="w-full glass-effect"
                      onClick={() => handleNavClick('contact')}
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Contact Us
                    </Button>
                    <Button 
                      className="w-full gradient-primary"
                      onClick={() => handleNavClick('contact')}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Get Quote
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}