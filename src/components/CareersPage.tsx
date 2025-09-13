import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Users, 
  MapPin, 
  Clock, 
  DollarSign, 
  Briefcase,
  Heart,
  Zap,
  Shield,
  Coffee,
  Gamepad2,
  GraduationCap,
  Plane,
  Plus,
  Send,
  CheckCircle,
  Award,
  TrendingUp
} from 'lucide-react';

interface CareersPageProps {
  onPageChange: (page: string) => void;
}

export default function CareersPage({ onPageChange }: CareersPageProps) {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [applicationData, setApplicationData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    coverLetter: ''
  });

  const jobs = [
    {
      id: 1,
      title: "Senior Call Center Agent",
      department: "Operations",
      location: "Remote / New York",
      type: "Full-time",
      salary: "$45,000 - $55,000",
      experience: "2+ years",
      description: "Join our dynamic team as a Senior Call Center Agent and help deliver exceptional customer experiences. You'll handle inbound customer inquiries, provide technical support, and mentor junior team members.",
      requirements: [
        "2+ years of call center experience",
        "Excellent communication skills",
        "Customer service oriented mindset",
        "Basic computer proficiency",
        "High school diploma or equivalent"
      ],
      benefits: [
        "Competitive salary with performance bonuses",
        "Comprehensive health insurance",
        "Remote work flexibility",
        "Professional development opportunities",
        "Paid time off and holidays"
      ]
    },
    {
      id: 2,
      title: "Collections Specialist",
      department: "Collections",
      location: "Chicago, IL",
      type: "Full-time",
      salary: "$50,000 - $65,000",
      experience: "3+ years",
      description: "We're seeking an experienced Collections Specialist to join our growing team. You'll work with clients to resolve outstanding accounts while maintaining compliance with all regulations.",
      requirements: [
        "3+ years of collections experience",
        "Knowledge of FDCPA regulations",
        "Strong negotiation skills",
        "Attention to detail",
        "Bachelor's degree preferred"
      ],
      benefits: [
        "Competitive base salary plus commission",
        "Health, dental, and vision insurance",
        "401(k) with company matching",
        "Career advancement opportunities",
        "Continuing education support"
      ]
    },
    {
      id: 3,
      title: "Customer Success Manager",
      department: "Account Management",
      location: "Los Angeles, CA",
      type: "Full-time",
      salary: "$65,000 - $80,000",
      experience: "4+ years",
      description: "Drive customer satisfaction and retention as a Customer Success Manager. You'll work closely with enterprise clients to ensure they achieve their goals with our services.",
      requirements: [
        "4+ years in customer success or account management",
        "Experience with enterprise clients",
        "Strong analytical and communication skills",
        "CRM software proficiency",
        "Bachelor's degree required"
      ],
      benefits: [
        "Competitive salary with bonus potential",
        "Comprehensive benefits package",
        "Stock options",
        "Flexible work arrangements",
        "Professional development budget"
      ]
    },
    {
      id: 4,
      title: "Data Analyst",
      department: "Analytics",
      location: "Remote",
      type: "Full-time",
      salary: "$60,000 - $75,000",
      experience: "2+ years",
      description: "Join our analytics team to help drive data-driven decisions across the organization. You'll analyze call center metrics, collection performance, and client satisfaction data.",
      requirements: [
        "2+ years of data analysis experience",
        "Proficiency in SQL and Python",
        "Experience with data visualization tools",
        "Strong statistical analysis skills",
        "Bachelor's degree in related field"
      ],
      benefits: [
        "Competitive salary",
        "Remote work options",
        "Latest technology and tools",
        "Learning and development opportunities",
        "Collaborative team environment"
      ]
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision insurance plus wellness programs."
    },
    {
      icon: DollarSign,
      title: "Competitive Compensation",
      description: "Fair wages, performance bonuses, and stock options for eligible positions."
    },
    {
      icon: GraduationCap,
      title: "Learning & Development",
      description: "Continuous learning opportunities, training programs, and tuition reimbursement."
    },
    {
      icon: Coffee,
      title: "Work-Life Balance",
      description: "Flexible schedules, remote work options, and generous PTO policies."
    },
    {
      icon: Plane,
      title: "Time Off",
      description: "Paid vacation, sick leave, holidays, and sabbatical opportunities."
    },
    {
      icon: Gamepad2,
      title: "Fun Environment",
      description: "Team events, office perks, game rooms, and a positive company culture."
    }
  ];

  const culture = [
    {
      title: "Innovation First",
      description: "We embrace new technologies and creative solutions to stay ahead of the curve."
    },
    {
      title: "Team Collaboration",
      description: "Success comes from working together, sharing knowledge, and supporting each other."
    },
    {
      title: "Client Success",
      description: "Our clients' success drives everything we do, from strategy to execution."
    },
    {
      title: "Continuous Growth",
      description: "We invest in our people's growth and provide opportunities for career advancement."
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setApplicationData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle application submission
    console.log('Application submitted:', applicationData);
    // Reset form or show success message
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
                  <Users className="w-4 h-4 mr-2" />
                  Join Our Team
                </Badge>
                <h1 className="text-4xl md:text-6xl">
                  Build Your Career with
                  <span className="block gradient-text">
                    Industry Leaders
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Join a team of passionate professionals who are transforming customer operations 
                  and debt recovery. Grow your career with opportunities for advancement, learning, 
                  and making a real impact.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl gradient-text mb-2">200+</div>
                  <div className="text-sm text-muted-foreground">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl gradient-text mb-2">95%</div>
                  <div className="text-sm text-muted-foreground">Retention Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl gradient-text mb-2">4.8/5</div>
                  <div className="text-sm text-muted-foreground">Employee Rating</div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="relative">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1690264461712-d630b81890a4?auto=format&fit=crop&w=800&h=600&q=80"
                alt="Team collaboration office environment"
                className="rounded-3xl shadow-2xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl -z-10 transform rotate-6"></div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Company Culture */}
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
              <Heart className="w-4 h-4 mr-2" />
              Company Culture
            </Badge>
            <h2 className="text-3xl md:text-5xl mb-6">
              What Makes Us Different
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our culture is built on collaboration, innovation, and a commitment to excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {culture.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="glass-effect border-0 p-6 text-center h-full group hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <h3 className="text-lg mb-3 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Benefits Section */}
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
              <Award className="w-4 h-4 mr-2" />
              Benefits & Perks
            </Badge>
            <h2 className="text-3xl md:text-5xl mb-6">
              Why You'll Love Working Here
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We believe in taking care of our team with comprehensive benefits and a supportive work environment.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="glass-effect border-0 p-6 h-full group hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="w-14 h-14 mb-4 rounded-xl gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="w-7 h-7 text-white" />
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

      {/* Open Positions */}
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
              <Briefcase className="w-4 h-4 mr-2" />
              Open Positions
            </Badge>
            <h2 className="text-3xl md:text-5xl mb-6">
              Current Opportunities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find the perfect role that matches your skills and career goals.
            </p>
          </motion.div>

          <div className="grid gap-6 mb-16">
            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="glass-effect border-0 p-6 group hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-xl group-hover:text-primary transition-colors">
                            {job.title}
                          </h3>
                          <Badge variant="outline">{job.department}</Badge>
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{job.type}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <DollarSign className="w-4 h-4" />
                            <span>{job.salary}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <TrendingUp className="w-4 h-4" />
                            <span>{job.experience}</span>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground leading-relaxed">
                          {job.description}
                        </p>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-2">
                        <Button
                          variant="outline"
                          onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                          className="group-hover:border-primary/40"
                        >
                          {selectedJob === job.id ? 'Hide Details' : 'View Details'}
                        </Button>
                        <Button
                          className="gradient-primary"
                          onClick={() => {
                            setApplicationData(prev => ({ ...prev, position: job.title }));
                            document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
                          }}
                        >
                          Apply Now
                        </Button>
                      </div>
                    </div>
                    
                    {selectedJob === job.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-6 pt-6 border-t border-border/10"
                      >
                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <h4 className="text-lg mb-4">Requirements</h4>
                            <ul className="space-y-2">
                              {job.requirements.map((req, reqIndex) => (
                                <li key={reqIndex} className="flex items-start space-x-2">
                                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-sm">{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-lg mb-4">Benefits</h4>
                            <ul className="space-y-2">
                              {job.benefits.map((benefit, benefitIndex) => (
                                <li key={benefitIndex} className="flex items-start space-x-2">
                                  <Plus className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                  <span className="text-sm">{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-20 relative overflow-hidden">
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
              <Send className="w-4 h-4 mr-2" />
              Apply Now
            </Badge>
            <h2 className="text-3xl md:text-5xl mb-6">
              Start Your Journey With Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to join our team? Submit your application and we'll get back to you within 48 hours.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="max-w-2xl mx-auto">
            <Card className="glass-effect border-0 p-8">
              <CardContent className="p-0">
                <form onSubmit={handleSubmitApplication} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={applicationData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={applicationData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={applicationData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="(555) 123-4567"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="position">Position of Interest</Label>
                      <Input
                        id="position"
                        value={applicationData.position}
                        onChange={(e) => handleInputChange('position', e.target.value)}
                        placeholder="Position title"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">Years of Experience</Label>
                    <Input
                      id="experience"
                      value={applicationData.experience}
                      onChange={(e) => handleInputChange('experience', e.target.value)}
                      placeholder="e.g., 3 years in customer service"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="coverLetter">Cover Letter</Label>
                    <Textarea
                      id="coverLetter"
                      value={applicationData.coverLetter}
                      onChange={(e) => handleInputChange('coverLetter', e.target.value)}
                      placeholder="Tell us why you're interested in this position and what makes you a great fit..."
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
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}