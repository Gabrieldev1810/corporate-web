import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  Calendar,
  MessageSquare,
  Users,
  Globe,
  CheckCircle,
  ArrowRight,
  Building,
  Headphones,
  Shield
} from 'lucide-react';

interface ContactPageProps {
  onPageChange: (page: string) => void;
}

export default function ContactPage({ onPageChange }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
    contactMethod: '',
    timeline: ''
  });

  const offices = [
    {
      city: "New York",
      address: "123 Business Plaza, Suite 500",
      zipCode: "New York, NY 10001",
      phone: "+1 (555) 123-4567",
      email: "ny@callcenterpro.com",
      hours: "Mon-Fri: 8:00 AM - 8:00 PM EST"
    },
    {
      city: "Chicago",
      address: "456 Corporate Drive, Floor 12",
      zipCode: "Chicago, IL 60601",
      phone: "+1 (555) 234-5678",
      email: "chicago@callcenterpro.com",
      hours: "Mon-Fri: 7:00 AM - 7:00 PM CST"
    },
    {
      city: "Los Angeles",
      address: "789 Innovation Center, Building A",
      zipCode: "Los Angeles, CA 90210",
      phone: "+1 (555) 345-6789",
      email: "la@callcenterpro.com",
      hours: "Mon-Fri: 6:00 AM - 6:00 PM PST"
    }
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak with our experts immediately",
      contact: "+1 (555) 123-4567",
      available: "24/7 Support Available"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Get detailed responses within 2 hours",
      contact: "contact@callcenterpro.com",
      available: "Response within 2 hours"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Real-time assistance with our team",
      contact: "Start Chat",
      available: "Available 24/7"
    },
    {
      icon: Calendar,
      title: "Schedule Meeting",
      description: "Book a consultation at your convenience",
      contact: "Book Now",
      available: "Flexible scheduling"
    }
  ];

  const faqs = [
    {
      question: "What industries do you serve?",
      answer: "We serve banking, telecommunications, healthcare, e-commerce, and many other industries with specialized solutions."
    },
    {
      question: "How quickly can you start services?",
      answer: "We can typically begin services within 2-4 weeks, depending on the complexity and scope of your requirements."
    },
    {
      question: "Do you offer 24/7 support?",
      answer: "Yes, we provide 24/7 customer support and call center services to ensure your business never misses an opportunity."
    },
    {
      question: "Are your services FDCPA compliant?",
      answer: "Absolutely. All our collection services are fully compliant with FDCPA, TCPA, and other relevant regulations."
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

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
    <div className="min-h-screen bg-mesh pt-24">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <motion.div
          className="container mx-auto px-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-4">
                <Badge className="gradient-primary text-white px-4 py-2">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Get In Touch
                </Badge>
                <h1 className="text-4xl md:text-6xl">
                  Let's Transform Your
                  <span className="block gradient-text">
                    Customer Operations
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Ready to take your customer service and collections to the next level? 
                  Our experts are standing by to discuss your specific needs and create 
                  a customized solution.
                </p>
              </div>
              
              <div className="space-y-4">
                {contactMethods.slice(0, 2).map((method, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-4 p-4 glass-effect rounded-xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                      <method.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium">{method.title}</h3>
                      <p className="text-sm text-muted-foreground">{method.contact}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="relative">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1600339346882-5df07221e4ec?auto=format&fit=crop&w=800&h=600&q=80"
                alt="Modern office building"
                className="rounded-3xl shadow-2xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl -z-10 transform -rotate-6"></div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Contact Form */}
      <section className="py-20 relative">
        <motion.div
          className="container mx-auto px-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <Badge className="gradient-primary text-white px-4 py-2 mb-4">
              <Send className="w-4 h-4 mr-2" />
              Contact Form
            </Badge>
            <h2 className="text-3xl md:text-5xl mb-6">
              Get a Custom Quote
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tell us about your needs and we'll provide a tailored solution with transparent pricing.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <Card className="glass-effect border-0 p-8">
                <CardContent className="p-0">
                  <form onSubmit={handleSubmitForm} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="your@company.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          placeholder="Your company"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="service">Service Interest</Label>
                        <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="call-center">Call Center Solutions</SelectItem>
                            <SelectItem value="collections">Bank Collections</SelectItem>
                            <SelectItem value="both">Both Services</SelectItem>
                            <SelectItem value="consultation">General Consultation</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="timeline">Timeline</Label>
                        <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="When do you need this?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="immediate">Immediate (Within 30 days)</SelectItem>
                            <SelectItem value="short">1-3 months</SelectItem>
                            <SelectItem value="medium">3-6 months</SelectItem>
                            <SelectItem value="long">6+ months</SelectItem>
                            <SelectItem value="planning">Just planning ahead</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Project Details *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Tell us about your specific needs, current challenges, and what you hope to achieve..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full gradient-primary hover:shadow-xl hover:shadow-primary/25 hover:scale-105 transition-all duration-300"
                      size="lg"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      We'll respond within 2 hours during business hours
                    </p>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Methods & Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Quick Contact */}
              <Card className="glass-effect border-0 p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl mb-6">Quick Contact Options</h3>
                  <div className="space-y-4">
                    {contactMethods.map((method, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center justify-between p-4 rounded-xl hover:bg-accent/50 transition-colors group cursor-pointer"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <method.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h4 className="font-medium group-hover:text-primary transition-colors">
                              {method.title}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {method.available}
                            </p>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card className="glass-effect border-0 p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl mb-6 flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-primary" />
                    Business Hours
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="text-muted-foreground">8:00 AM - 8:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="text-muted-foreground">9:00 AM - 5:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="text-muted-foreground">Emergency Support Only</span>
                    </div>
                    <div className="pt-3 border-t border-border/10">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm text-green-600">24/7 Emergency Support Available</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Why Choose Us */}
              <Card className="glass-effect border-0 p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl mb-6">Why Choose CallCenter Pro</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Proven Results</h4>
                        <p className="text-sm text-muted-foreground">25-40% higher recovery rates than industry average</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Shield className="w-5 h-5 text-blue-500 mt-0.5" />
                      <div>
                        <h4 className="font-medium">100% Compliant</h4>
                        <p className="text-sm text-muted-foreground">Full compliance with all regulations</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Headphones className="w-5 h-5 text-purple-500 mt-0.5" />
                      <div>
                        <h4 className="font-medium">24/7 Support</h4>
                        <p className="text-sm text-muted-foreground">Round-the-clock availability</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Users className="w-5 h-5 text-orange-500 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Expert Team</h4>
                        <p className="text-sm text-muted-foreground">500+ experienced professionals</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Office Locations */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <motion.div
          className="container mx-auto px-4 relative z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <Badge className="gradient-primary text-white px-4 py-2 mb-4">
              <Building className="w-4 h-4 mr-2" />
              Office Locations
            </Badge>
            <h2 className="text-3xl md:text-5xl mb-6">
              Visit Our Offices
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We have offices across major business centers to serve you better.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="glass-effect border-0 p-6 h-full text-center group hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Building className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl mb-4 group-hover:text-primary transition-colors">
                      {office.city}
                    </h3>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <div className="flex items-start justify-center space-x-2">
                        <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <div className="text-center">
                          <div>{office.address}</div>
                          <div>{office.zipCode}</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <Phone className="w-4 h-4 flex-shrink-0" />
                        <span>{office.phone}</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <Mail className="w-4 h-4 flex-shrink-0" />
                        <span>{office.email}</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <Clock className="w-4 h-4 flex-shrink-0" />
                        <span>{office.hours}</span>
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="mt-6 group-hover:bg-primary group-hover:text-white transition-all duration-300"
                    >
                      Get Directions
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative">
        <motion.div
          className="container mx-auto px-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <Badge className="gradient-primary text-white px-4 py-2 mb-4">
              <MessageSquare className="w-4 h-4 mr-2" />
              Frequently Asked Questions
            </Badge>
            <h2 className="text-3xl md:text-5xl mb-6">
              Quick Answers
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find answers to common questions about our services and processes.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="mb-6"
              >
                <Card className="glass-effect border-0 p-6 group hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <h3 className="text-lg mb-3 group-hover:text-primary transition-colors">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Still have questions? We're here to help.
            </p>
            <Button 
              variant="outline" 
              className="glass-effect border-primary/20 hover:border-primary/40"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Support
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}