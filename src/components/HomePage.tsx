import React from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Phone, 
  CreditCard, 
  Users, 
  Shield, 
  Clock, 
  TrendingUp, 
  Star, 
  CheckCircle,
  ArrowRight,
  Zap,
  Globe,
  Award
} from 'lucide-react';

interface HomePageProps {
  onPageChange: (page: string) => void;
}

export default function HomePage({ onPageChange }: HomePageProps) {
  const services = [
    {
      icon: Phone,
      title: "Call Center Solutions",
      description: "24/7 professional call handling with advanced technology and trained specialists.",
      features: ["Inbound/Outbound Services", "Multi-language Support", "CRM Integration", "Real-time Analytics"]
    },
    {
      icon: CreditCard,
      title: "Bank Collections",
      description: "Compliant and effective debt recovery services with proven results.",
      features: ["FDCPA Compliant", "Payment Processing", "Skip Tracing", "Settlement Negotiations"]
    }
  ];

  const stats = [
    { number: "10M+", label: "Calls Handled", icon: Phone },
    { number: "98%", label: "Client Satisfaction", icon: Star },
    { number: "24/7", label: "Availability", icon: Clock },
    { number: "500+", label: "Happy Clients", icon: Users }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "First National Bank",
      role: "Operations Director",
      content: "CallCenter Pro transformed our debt recovery process. Their professional approach and compliance expertise delivered exceptional results.",
      rating: 5,
      avatar: "professional woman"
    },
    {
      name: "Michael Chen",
      company: "TechCorp Solutions",
      role: "Customer Service Manager",
      content: "Outstanding call center services with cutting-edge technology. Response times improved by 300% since partnering with them.",
      rating: 5,
      avatar: "professional man"
    },
    {
      name: "Emily Rodriguez",
      company: "Metro Credit Union",
      role: "VP Collections",
      content: "Their bank collections expertise is unmatched. Compliant, efficient, and results-driven. Highly recommended.",
      rating: 5,
      avatar: "professional woman executive"
    }
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
    <div className="min-h-screen bg-mesh">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <motion.div
          className="container mx-auto px-4 relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Badge className="gradient-primary text-white px-4 py-2 mb-4">
                    <Zap className="w-4 h-4 mr-2" />
                    Trusted by 500+ Companies
                  </Badge>
                </motion.div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl tracking-tight">
                  <span className="block">Transform Your</span>
                  <span className="block bg-gradient-to-r from-primary via-blue-500 to-accent bg-clip-text text-transparent" style={{
                    background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #0ea5e9 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>
                    Customer Operations
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                  Professional call center solutions and compliant bank collections services 
                  powered by cutting-edge technology and expert teams.
                </p>
              </div>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                variants={itemVariants}
              >
                <Button 
                  size="lg" 
                  className="gradient-primary hover:shadow-xl hover:shadow-primary/25 hover:scale-105 transition-all duration-300 group"
                  onClick={() => onPageChange('contact')}
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="glass-effect border-primary/20 hover:border-primary/40 hover:bg-primary/5"
                  onClick={() => onPageChange('services')}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  View Services
                </Button>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-muted-foreground">FDCPA Compliant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-blue-500" />
                  <span className="text-sm text-muted-foreground">SOC 2 Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-yellow-500" />
                  <span className="text-sm text-muted-foreground">Industry Leader</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="relative"
            >
              <div className="relative z-10">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&h=600&q=80"
                  alt="Modern call center workspace"
                  className="rounded-3xl shadow-2xl w-full animate-float"
                />
                <motion.div
                  className="absolute -bottom-6 -left-6 glass-effect p-6 rounded-2xl border border-white/20"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Live Support Available</span>
                  </div>
                </motion.div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl -z-10 transform rotate-6"></div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <motion.div
          className="container mx-auto px-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <Card className="glass-effect border-0 p-6 hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-0">
                    <motion.div
                      className="w-16 h-16 mx-auto mb-4 rounded-2xl gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <stat.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <div className="text-3xl md:text-4xl mb-2 gradient-text">
                      {stat.number}
                    </div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
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
              <Globe className="w-4 h-4 mr-2" />
              Our Services
            </Badge>
            <h2 className="text-3xl md:text-5xl mb-6">
              Comprehensive Solutions for
              <span className="block gradient-text">
                Modern Businesses
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From advanced call center operations to compliant debt recovery, 
              we deliver results that drive your business forward.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="glass-effect border-0 p-8 h-full group hover:shadow-2xl transition-all duration-500">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 mb-6 rounded-2xl gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl mb-4 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      variant="outline" 
                      className="group-hover:bg-primary group-hover:text-white transition-all duration-300"
                      onClick={() => onPageChange('services')}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
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
              <Star className="w-4 h-4 mr-2" />
              Client Success Stories
            </Badge>
            <h2 className="text-3xl md:text-5xl mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how we've transformed customer operations for businesses across various industries.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="glass-effect border-0 p-6 h-full">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                      "{testimonial.content}"
                    </blockquote>
                    <div className="flex items-center space-x-4">
                      <ImageWithFallback 
                        src={`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&h=64&q=80`}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-medium">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.role}, {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <motion.div
          className="container mx-auto px-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <Card className="glass-effect border-0 p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 gradient-primary opacity-10" />
              <CardContent className="p-0 relative z-10">
                <h2 className="text-3xl md:text-5xl mb-6">
                  Ready to Transform Your
                  <span className="block gradient-text">
                    Customer Operations?
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Join hundreds of companies that trust CallCenter Pro for their 
                  call center and collections needs. Get started today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="gradient-primary hover:shadow-xl hover:shadow-primary/25 hover:scale-105 transition-all duration-300"
                    onClick={() => onPageChange('contact')}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Schedule Consultation
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="glass-effect border-primary/20 hover:border-primary/40"
                    onClick={() => onPageChange('services')}
                  >
                    View All Services
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}