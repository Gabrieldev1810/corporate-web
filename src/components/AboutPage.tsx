import React from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Users, 
  Target, 
  Eye, 
  Award, 
  TrendingUp, 
  Globe, 
  Shield, 
  Clock,
  CheckCircle,
  Calendar,
  Building,
  Zap
} from 'lucide-react';

interface AboutPageProps {
  onPageChange: (page: string) => void;
}

export default function AboutPage({ onPageChange }: AboutPageProps) {
  const values = [
    {
      icon: Shield,
      title: "Integrity & Compliance",
      description: "We operate with unwavering integrity, ensuring full compliance with all industry regulations and ethical standards."
    },
    {
      icon: Users,
      title: "Client-Centric Approach",
      description: "Our clients' success is our success. We tailor every solution to meet specific business needs and objectives."
    },
    {
      icon: Zap,
      title: "Innovation & Technology",
      description: "We leverage cutting-edge technology and innovative approaches to deliver superior results and experiences."
    },
    {
      icon: Award,
      title: "Excellence in Service",
      description: "We strive for excellence in every interaction, maintaining the highest standards of professional service."
    }
  ];

  const timeline = [
    {
      year: "2015",
      title: "Company Founded",
      description: "Started as a small call center with 5 employees and a vision to transform customer service.",
      milestone: "5 Employees"
    },
    {
      year: "2017",
      title: "First Major Contract",
      description: "Secured our first banking client, marking our entry into the financial services sector.",
      milestone: "50+ Clients"
    },
    {
      year: "2019",
      title: "Technology Innovation",
      description: "Launched our proprietary AI-powered call routing and analytics platform.",
      milestone: "1M+ Calls"
    },
    {
      year: "2021",
      title: "Market Expansion",
      description: "Expanded operations to serve clients across multiple states with 24/7 coverage.",
      milestone: "200+ Employees"
    },
    {
      year: "2023",
      title: "Industry Recognition",
      description: "Received multiple industry awards for excellence in customer service and compliance.",
      milestone: "500+ Clients"
    },
    {
      year: "2024",
      title: "Future Ready",
      description: "Launched next-generation AI and automation capabilities for enhanced efficiency.",
      milestone: "10M+ Calls"
    }
  ];

  const leadership = [
    {
      name: "Sarah Mitchell",
      role: "Chief Executive Officer",
      bio: "20+ years of experience in financial services and customer operations. Led multiple successful digital transformations.",
      image: "professional woman executive"
    },
    {
      name: "David Rodriguez",
      role: "Chief Technology Officer",
      bio: "Former tech executive from Fortune 500 companies. Expert in AI, automation, and scalable technology solutions.",
      image: "professional tech executive"
    },
    {
      name: "Jennifer Adams",
      role: "Chief Compliance Officer",
      bio: "Former federal regulator with deep expertise in FDCPA, TCPA, and financial services compliance.",
      image: "professional compliance officer"
    },
    {
      name: "Michael Thompson",
      role: "VP of Operations",
      bio: "15+ years in call center operations and process optimization. Specialist in quality assurance and team development.",
      image: "professional operations manager"
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-4">
                <Badge className="gradient-primary text-white px-4 py-2">
                  <Building className="w-4 h-4 mr-2" />
                  About CallCenter Pro
                </Badge>
                <h1 className="text-4xl md:text-6xl">
                  Transforming Customer
                  <span className="block gradient-text">
                    Operations Since 2015
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  We are a leading provider of call center solutions and bank collections services, 
                  trusted by over 500 companies worldwide to deliver exceptional customer experiences 
                  and compliant debt recovery solutions.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 glass-effect rounded-2xl">
                  <div className="text-3xl gradient-text mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div className="text-center p-4 glass-effect rounded-2xl">
                  <div className="text-3xl gradient-text mb-2">10M+</div>
                  <div className="text-sm text-muted-foreground">Calls Handled</div>
                </div>
                <div className="text-center p-4 glass-effect rounded-2xl">
                  <div className="text-3xl gradient-text mb-2">9</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center p-4 glass-effect rounded-2xl">
                  <div className="text-3xl gradient-text mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="relative">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1603202662706-62ead3176b8f?auto=format&fit=crop&w=800&h=600&q=80"
                alt="Professional business team meeting"
                className="rounded-3xl shadow-2xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl -z-10 transform -rotate-6"></div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 relative">
        <motion.div
          className="container mx-auto px-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <motion.div variants={itemVariants}>
              <Card className="glass-effect border-0 p-8 h-full text-center">
                <CardContent className="p-0">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl gradient-primary flex items-center justify-center">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl mb-4">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To deliver exceptional customer experiences and compliant debt recovery solutions 
                    through innovative technology, expert teams, and unwavering commitment to excellence.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="glass-effect border-0 p-8 h-full text-center">
                <CardContent className="p-0">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl gradient-primary flex items-center justify-center">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl mb-4">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To be the global leader in customer operations, setting industry standards for 
                    innovation, compliance, and client satisfaction across all service verticals.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="glass-effect border-0 p-8 h-full text-center">
                <CardContent className="p-0">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl gradient-primary flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl mb-4">Our Promise</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To provide transparent, reliable, and results-driven solutions that help our 
                    clients achieve their business objectives while maintaining the highest ethical standards.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Core Values */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <Badge className="gradient-primary text-white px-4 py-2 mb-4">
              <CheckCircle className="w-4 h-4 mr-2" />
              Our Core Values
            </Badge>
            <h2 className="text-3xl md:text-5xl mb-6">
              What Drives Us Forward
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our values guide every decision we make and every service we deliver.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="glass-effect border-0 p-6 h-full text-center group hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-xl gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg mb-3 group-hover:text-primary transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Company Timeline */}
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
              <Calendar className="w-4 h-4 mr-2" />
              Our Journey
            </Badge>
            <h2 className="text-3xl md:text-5xl mb-6">
              Timeline of Growth & Innovation
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From humble beginnings to industry leadership, here's how we've evolved to serve our clients better.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-accent hidden lg:block"></div>
            
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <Card className="glass-effect border-0 p-6 group hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="flex items-center mb-4">
                        <Badge className="gradient-primary text-white px-3 py-1 mr-4">
                          {item.year}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {item.milestone}
                        </Badge>
                      </div>
                      <h3 className="text-xl mb-3 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Leadership Team */}
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
              <Users className="w-4 h-4 mr-2" />
              Leadership Team
            </Badge>
            <h2 className="text-3xl md:text-5xl mb-6">
              Meet Our Executive Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our experienced leadership team brings decades of expertise in customer operations, 
              technology, and financial services.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="glass-effect border-0 p-6 text-center group hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="relative mb-6">
                      <ImageWithFallback 
                        src={`https://images.unsplash.com/photo-1584940120505-117038d90b05?auto=format&fit=crop&w=300&h=300&q=80`}
                        alt={leader.name}
                        className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 w-24 h-24 rounded-full mx-auto bg-gradient-to-tr from-primary/20 to-accent/20 group-hover:scale-125 transition-transform duration-300"></div>
                    </div>
                    <h3 className="text-lg mb-1 group-hover:text-primary transition-colors">
                      {leader.name}
                    </h3>
                    <p className="text-sm text-primary mb-4">{leader.role}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {leader.bio}
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
                  Ready to Partner with
                  <span className="block gradient-text">
                    Industry Leaders?
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Join the 500+ companies that trust CallCenter Pro for their customer operations. 
                  Let's discuss how we can help transform your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="gradient-primary hover:shadow-xl hover:shadow-primary/25 hover:scale-105 transition-all duration-300"
                    onClick={() => onPageChange('contact')}
                  >
                    Schedule a Meeting
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="glass-effect border-primary/20 hover:border-primary/40"
                    onClick={() => onPageChange('services')}
                  >
                    Explore Services
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