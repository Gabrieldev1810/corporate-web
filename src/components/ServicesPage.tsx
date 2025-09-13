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
  CheckCircle,
  ArrowRight,
  Headphones,
  BarChart3,
  MessageSquare,
  Globe,
  Zap,
  Award,
  FileText,
  Search,
  DollarSign,
  Target,
  Smartphone,
  Mail,
  Calendar,
  Building
} from 'lucide-react';

interface ServicesPageProps {
  onPageChange: (page: string) => void;
}

export default function ServicesPage({ onPageChange }: ServicesPageProps) {
  const callCenterServices = [
    {
      icon: Headphones,
      title: "Inbound Call Handling",
      description: "Professional customer service representatives handling your incoming calls 24/7.",
      features: ["Customer Support", "Order Processing", "Technical Help Desk", "Appointment Scheduling"]
    },
    {
      icon: Phone,
      title: "Outbound Campaign Management",
      description: "Strategic outbound calling campaigns to drive sales and customer engagement.",
      features: ["Lead Generation", "Sales Calls", "Customer Surveys", "Follow-up Campaigns"]
    },
    {
      icon: MessageSquare,
      title: "Omnichannel Support",
      description: "Seamless customer experience across phone, chat, email, and social media.",
      features: ["Live Chat Support", "Email Management", "Social Media Response", "SMS Support"]
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Real-time insights and detailed reporting to optimize your customer operations.",
      features: ["Call Analytics", "Performance Metrics", "Custom Dashboards", "ROI Tracking"]
    }
  ];

  const collectionServices = [
    {
      icon: CreditCard,
      title: "First-Party Collections",
      description: "Early-stage collection efforts to maximize recovery while preserving customer relationships.",
      features: ["30-90 Day Accounts", "Payment Plans", "Customer Retention", "Compliance Monitoring"]
    },
    {
      icon: FileText,
      title: "Third-Party Collections",
      description: "Professional debt recovery services for aged accounts with proven results.",
      features: ["90+ Day Accounts", "Legal Compliance", "Settlement Options", "Detailed Reporting"]
    },
    {
      icon: Search,
      title: "Skip Tracing Services",
      description: "Advanced technology and investigative techniques to locate hard-to-find debtors.",
      features: ["Data Mining", "Address Verification", "Contact Discovery", "Digital Forensics"]
    },
    {
      icon: DollarSign,
      title: "Payment Processing",
      description: "Secure payment collection and processing with multiple payment options.",
      features: ["Online Payments", "Phone Payments", "Payment Plans", "PCI Compliance"]
    }
  ];

  const industryExpertise = [
    {
      icon: Building,
      title: "Banking & Financial Services",
      description: "Specialized solutions for banks, credit unions, and financial institutions.",
      sectors: ["Commercial Banking", "Credit Cards", "Personal Loans", "Mortgages"]
    },
    {
      icon: Smartphone,
      title: "Telecommunications",
      description: "Customer service and collections for telecom and wireless providers.",
      sectors: ["Mobile Carriers", "Internet Providers", "Cable Companies", "VoIP Services"]
    },
    {
      icon: Target,
      title: "Healthcare",
      description: "HIPAA-compliant solutions for healthcare providers and medical billing.",
      sectors: ["Hospitals", "Medical Practices", "Insurance", "Medical Billing"]
    },
    {
      icon: Globe,
      title: "E-commerce & Retail",
      description: "Customer support and order management for online and retail businesses.",
      sectors: ["Online Stores", "Subscription Services", "Marketplace Sellers", "Retail Chains"]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Increased Recovery Rates",
      description: "Our proven strategies deliver 25-40% higher recovery rates than industry average.",
      metric: "40% Higher Recovery"
    },
    {
      icon: Clock,
      title: "Faster Response Times",
      description: "Average response time under 30 seconds with 24/7 availability.",
      metric: "<30 Sec Response"
    },
    {
      icon: Shield,
      title: "100% Compliance",
      description: "Full compliance with FDCPA, TCPA, and all relevant regulations.",
      metric: "Zero Violations"
    },
    {
      icon: Users,
      title: "Customer Satisfaction",
      description: "98% client satisfaction rate with dedicated account management.",
      metric: "98% Satisfaction"
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
    <div className="min-h-screen bg-mesh pt-24">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <motion.div
          className="container mx-auto px-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <Badge className="gradient-primary text-white px-4 py-2 mb-4">
              <Zap className="w-4 h-4 mr-2" />
              Our Services
            </Badge>
            <h1 className="text-4xl md:text-6xl mb-6">
              Comprehensive Solutions for
              <span className="block gradient-text">
                Modern Businesses
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From advanced call center operations to compliant debt recovery, we deliver 
              results-driven solutions that scale with your business needs.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="glass-effect border-0 p-8 text-center group hover:shadow-2xl transition-all duration-500">
              <CardContent className="p-0">
                <div className="w-20 h-20 mx-auto mb-6 rounded-3xl gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl mb-4">Call Center Solutions</h3>
                <p className="text-muted-foreground mb-6">
                  Professional customer service and sales support with cutting-edge technology.
                </p>
                <Button 
                  className="group-hover:bg-primary group-hover:text-white transition-all duration-300"
                  variant="outline"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-effect border-0 p-8 text-center group hover:shadow-2xl transition-all duration-500">
              <CardContent className="p-0">
                <div className="w-20 h-20 mx-auto mb-6 rounded-3xl gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <CreditCard className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl mb-4">Bank Collections</h3>
                <p className="text-muted-foreground mb-6">
                  Compliant debt recovery services with proven results and regulatory expertise.
                </p>
                <Button 
                  className="group-hover:bg-primary group-hover:text-white transition-all duration-300"
                  variant="outline"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </section>

      {/* Call Center Services */}
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
              <Headphones className="w-4 h-4 mr-2" />
              Call Center Services
            </Badge>
            <h2 className="text-3xl md:text-5xl mb-6">
              Advanced Customer Operations
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Scalable call center solutions powered by AI and managed by expert teams.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {callCenterServices.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="glass-effect border-0 p-8 h-full group hover:shadow-xl transition-all duration-500">
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
                      onClick={() => onPageChange('contact')}
                    >
                      Request Consultation
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="text-center">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1743004873139-5bc0e3d937d4?auto=format&fit=crop&w=1200&h=400&q=80"
              alt="Modern call center workspace"
              className="rounded-3xl shadow-2xl w-full max-w-4xl mx-auto"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Collections Services */}
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
              <CreditCard className="w-4 h-4 mr-2" />
              Collections Services
            </Badge>
            <h2 className="text-3xl md:text-5xl mb-6">
              Compliant Debt Recovery Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional debt recovery services that maximize results while maintaining compliance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {collectionServices.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="glass-effect border-0 p-8 h-full group hover:shadow-xl transition-all duration-500">
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
                      onClick={() => onPageChange('contact')}
                    >
                      Get Quote
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Industry Expertise */}
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
              <Award className="w-4 h-4 mr-2" />
              Industry Expertise
            </Badge>
            <h2 className="text-3xl md:text-5xl mb-6">
              Specialized Solutions by Industry
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Deep industry knowledge and specialized approaches for your specific sector.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industryExpertise.map((industry, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="glass-effect border-0 p-6 h-full text-center group hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-xl gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <industry.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg mb-3 group-hover:text-primary transition-colors">
                      {industry.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {industry.description}
                    </p>
                    <div className="space-y-2">
                      {industry.sectors.map((sector, sectorIndex) => (
                        <Badge key={sectorIndex} variant="outline" className="text-xs mr-1 mb-1">
                          {sector}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Benefits & Results */}
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
              <TrendingUp className="w-4 h-4 mr-2" />
              Proven Results
            </Badge>
            <h2 className="text-3xl md:text-5xl mb-6">
              Why Choose CallCenter Pro
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Measurable results that drive your business forward with industry-leading performance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="glass-effect border-0 p-6 text-center group hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-2xl mb-2 gradient-text">
                      {benefit.metric}
                    </div>
                    <h3 className="text-lg mb-3 group-hover:text-primary transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
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
                  Ready to Optimize Your
                  <span className="block gradient-text">
                    Customer Operations?
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Get a custom solution tailored to your business needs. Our experts are ready 
                  to discuss how we can help you achieve better results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="gradient-primary hover:shadow-xl hover:shadow-primary/25 hover:scale-105 transition-all duration-300"
                    onClick={() => onPageChange('contact')}
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule Consultation
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="glass-effect border-primary/20 hover:border-primary/40"
                    onClick={() => onPageChange('contact')}
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Request Quote
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