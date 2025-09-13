import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Calendar, 
  Clock, 
  User, 
  Search,
  Filter,
  ArrowRight,
  BookOpen,
  TrendingUp,
  Zap,
  Globe,
  Shield,
  Target,
  Users,
  BarChart3
} from 'lucide-react';

interface BlogPageProps {
  onPageChange: (page: string) => void;
}

export default function BlogPage({ onPageChange }: BlogPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Posts', count: 24 },
    { id: 'industry-insights', label: 'Industry Insights', count: 8 },
    { id: 'technology', label: 'Technology', count: 6 },
    { id: 'compliance', label: 'Compliance', count: 5 },
    { id: 'customer-success', label: 'Customer Success', count: 5 }
  ];

  const featuredPost = {
    id: 1,
    title: "The Future of AI in Customer Service: 2025 Trends and Predictions",
    excerpt: "Explore how artificial intelligence is revolutionizing customer service operations and what it means for businesses in 2025 and beyond.",
    author: "Sarah Mitchell",
    authorRole: "CEO",
    date: "2024-12-10",
    readTime: "8 min read",
    category: "Technology",
    image: "AI customer service technology",
    featured: true
  };

  const blogPosts = [
    {
      id: 2,
      title: "FDCPA Compliance: Best Practices for Modern Collection Agencies",
      excerpt: "Stay compliant with the latest FDCPA regulations while maintaining effective collection strategies. Learn the do's and don'ts.",
      author: "Jennifer Adams",
      authorRole: "Chief Compliance Officer",
      date: "2024-12-08",
      readTime: "6 min read",
      category: "Compliance",
      image: "legal compliance documentation"
    },
    {
      id: 3,
      title: "5 Metrics Every Call Center Should Track in 2025",
      excerpt: "Discover the key performance indicators that drive success in modern call center operations and customer satisfaction.",
      author: "Michael Thompson",
      authorRole: "VP of Operations",
      date: "2024-12-05",
      readTime: "5 min read",
      category: "Industry Insights",
      image: "call center analytics dashboard"
    },
    {
      id: 4,
      title: "Customer Retention Strategies That Actually Work",
      excerpt: "Proven techniques to reduce churn, increase customer lifetime value, and build lasting relationships with your clients.",
      author: "David Rodriguez",
      authorRole: "CTO",
      date: "2024-12-03",
      readTime: "7 min read",
      category: "Customer Success",
      image: "customer success meeting"
    },
    {
      id: 5,
      title: "The ROI of Professional Debt Collection Services",
      excerpt: "Calculate the true return on investment when partnering with professional collection agencies versus in-house operations.",
      author: "Sarah Mitchell",
      authorRole: "CEO",
      date: "2024-12-01",
      readTime: "4 min read",
      category: "Industry Insights",
      image: "financial ROI calculation"
    },
    {
      id: 6,
      title: "Implementing Omnichannel Support: A Complete Guide",
      excerpt: "Step-by-step guide to creating seamless customer experiences across phone, chat, email, and social media channels.",
      author: "Michael Thompson",
      authorRole: "VP of Operations",
      date: "2024-11-28",
      readTime: "9 min read",
      category: "Technology",
      image: "omnichannel customer support"
    },
    {
      id: 7,
      title: "Building Trust in Collections: Ethical Practices That Work",
      excerpt: "How ethical collection practices not only ensure compliance but also improve recovery rates and customer relationships.",
      author: "Jennifer Adams",
      authorRole: "Chief Compliance Officer",
      date: "2024-11-25",
      readTime: "6 min read",
      category: "Compliance",
      image: "ethical business practices"
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || 
                           post.category.toLowerCase().replace(' ', '-') === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'technology': return Zap;
      case 'compliance': return Shield;
      case 'industry-insights': return TrendingUp;
      case 'customer-success': return Target;
      default: return BookOpen;
    }
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
          <motion.div variants={itemVariants} className="text-center mb-16">
            <Badge className="gradient-primary text-white px-4 py-2 mb-4">
              <BookOpen className="w-4 h-4 mr-2" />
              Industry Insights
            </Badge>
            <h1 className="text-4xl md:text-6xl mb-6">
              Latest News &
              <span className="block gradient-text">
                Industry Insights
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Stay ahead of the curve with expert insights, industry trends, and best practices 
              in customer service and debt collection.
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div variants={itemVariants} className="max-w-4xl mx-auto mb-16">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 glass-effect border-primary/20"
                />
              </div>
              <Button variant="outline" className="glass-effect">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm transition-all ${
                    selectedCategory === category.id
                      ? 'gradient-primary text-white'
                      : 'glass-effect hover:bg-primary/10 border border-border/20'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.label} ({category.count})
                </motion.button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Article */}
      <section className="py-20 relative">
        <motion.div
          className="container mx-auto px-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="mb-16">
            <Badge className="gradient-primary text-white px-4 py-2 mb-8">
              <TrendingUp className="w-4 h-4 mr-2" />
              Featured Article
            </Badge>
            
            <Card className="glass-effect border-0 overflow-hidden group hover:shadow-2xl transition-all duration-500">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1615216057273-cbef9ec5636a?auto=format&fit=crop&w=800&h=500&q=80"
                    alt={featuredPost.image}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <Badge className="absolute top-4 left-4 gradient-primary text-white">
                    Featured
                  </Badge>
                </div>
                
                <CardContent className="p-8 lg:p-12">
                  <Badge variant="outline" className="mb-4">
                    {featuredPost.category}
                  </Badge>
                  
                  <h2 className="text-2xl md:text-3xl mb-4 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="group-hover:bg-primary group-hover:text-white transition-all duration-300" variant="outline">
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 relative">
        <motion.div
          className="container mx-auto px-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl mb-6">
              Recent Articles
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert insights and practical advice from our team of industry professionals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => {
              const CategoryIcon = getCategoryIcon(post.category);
              return (
                <motion.div
                  key={post.id}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Card className="glass-effect border-0 overflow-hidden h-full group hover:shadow-xl transition-all duration-500">
                    <div className="relative overflow-hidden">
                      <ImageWithFallback 
                        src={`https://images.unsplash.com/photo-1615216057273-cbef9ec5636a?auto=format&fit=crop&w=400&h=250&q=80`}
                        alt={post.image}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      <Badge className="absolute top-3 left-3 glass-effect text-xs">
                        <CategoryIcon className="w-3 h-3 mr-1" />
                        {post.category}
                      </Badge>
                    </div>
                    
                    <CardContent className="p-6">
                      <h3 className="text-lg mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center space-x-1">
                            <User className="w-3 h-3" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-3 h-3" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="w-full group-hover:bg-primary group-hover:text-white transition-all duration-300"
                      >
                        Read More
                        <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {filteredPosts.length === 0 && (
            <motion.div variants={itemVariants} className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                No articles found matching your search criteria.
              </p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
              >
                Clear Filters
              </Button>
            </motion.div>
          )}

          {/* Load More */}
          {filteredPosts.length > 0 && (
            <motion.div variants={itemVariants} className="text-center mt-16">
              <Button 
                variant="outline" 
                size="lg"
                className="glass-effect border-primary/20 hover:border-primary/40"
              >
                Load More Articles
              </Button>
            </motion.div>
          )}
        </motion.div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <motion.div
          className="container mx-auto px-4 relative z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <Card className="glass-effect border-0 p-12 text-center relative overflow-hidden max-w-3xl mx-auto">
              <div className="absolute inset-0 gradient-primary opacity-10" />
              <CardContent className="p-0 relative z-10">
                <h2 className="text-3xl md:text-4xl mb-6">
                  Stay Updated with
                  <span className="block gradient-text">
                    Industry Insights
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Get the latest articles, industry trends, and expert insights delivered 
                  straight to your inbox every week.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <Input 
                    placeholder="Enter your email"
                    className="glass-effect"
                  />
                  <Button className="gradient-primary hover:shadow-xl hover:shadow-primary/25">
                    Subscribe
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Join 5,000+ professionals. Unsubscribe anytime.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}