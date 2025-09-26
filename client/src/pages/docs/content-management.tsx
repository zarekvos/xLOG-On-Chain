import { motion } from 'framer-motion';
import { ArrowLeft, FolderOpen, Tag, Search, Calendar, BarChart3, Edit, Trash2, Archive } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function ContentManagement() {
  const organizationFeatures = [
    {
      icon: Tag,
      title: 'Tags & Categories',
      description: 'Organize posts with tags and categories for easy discovery',
      features: [
        'Create custom tags for your content',
        'Use categories to group related posts',
        'Tag-based filtering and search',
        'Popular tags analytics'
      ]
    },
    {
      icon: Search,
      title: 'Search & Filter',
      description: 'Find your content quickly with powerful search tools',
      features: [
        'Full-text search across all posts',
        'Filter by date, tags, and status',
        'Sort by popularity, date, or engagement',
        'Advanced search operators'
      ]
    },
    {
      icon: Calendar,
      title: 'Publishing Schedule',
      description: 'Plan and schedule your content publishing',
      features: [
        'Schedule posts for future publishing',
        'Content calendar overview',
        'Draft management system',
        'Publishing reminders'
      ]
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Track your content performance and engagement',
      features: [
        'View count and engagement metrics',
        'Reader demographics and behavior',
        'Popular content identification',
        'Growth tracking over time'
      ]
    }
  ];

  const managementTasks = [
    {
      category: 'Content Creation',
      icon: Edit,
      color: 'from-blue-500 to-cyan-500',
      tasks: [
        { task: 'Create new blog post', difficulty: 'Easy', time: '15-60 min' },
        { task: 'Edit existing draft', difficulty: 'Easy', time: '5-30 min' },
        { task: 'Import content from other platforms', difficulty: 'Medium', time: '30-60 min' },
        { task: 'Bulk content operations', difficulty: 'Advanced', time: '60+ min' }
      ]
    },
    {
      category: 'Organization',
      icon: FolderOpen,
      color: 'from-green-500 to-emerald-500',
      tasks: [
        { task: 'Add tags to posts', difficulty: 'Easy', time: '2-5 min' },
        { task: 'Create content categories', difficulty: 'Easy', time: '5-10 min' },
        { task: 'Organize content library', difficulty: 'Medium', time: '30-60 min' },
        { task: 'Setup content workflows', difficulty: 'Advanced', time: '60+ min' }
      ]
    },
    {
      category: 'Maintenance',
      icon: Archive,
      color: 'from-purple-500 to-pink-500',
      tasks: [
        { task: 'Update post metadata', difficulty: 'Easy', time: '5-10 min' },
        { task: 'Archive old content', difficulty: 'Medium', time: '15-30 min' },
        { task: 'Content backup and export', difficulty: 'Medium', time: '30-60 min' },
        { task: 'Clean up unused tags', difficulty: 'Easy', time: '10-15 min' }
      ]
    }
  ];

  const bestPractices = [
    {
      title: 'Consistent Tagging',
      description: 'Use a consistent tagging system to make content easily discoverable',
      tips: [
        'Create a standard set of tags before you start',
        'Use 3-5 relevant tags per post',
        'Combine broad and specific tags',
        'Review and consolidate tags regularly'
      ]
    },
    {
      title: 'Content Planning',
      description: 'Plan your content strategy for better engagement',
      tips: [
        'Create an editorial calendar',
        'Balance different content types',
        'Plan seasonal and trending topics',
        'Maintain a consistent publishing schedule'
      ]
    },
    {
      title: 'Performance Tracking',
      description: 'Monitor your content performance to improve strategy',
      tips: [
        'Track key metrics regularly',
        'Identify your best-performing content',
        'Analyze reader engagement patterns',
        'Use insights to guide future content'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10 border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/docs">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Docs
            </Button>
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                <FolderOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-foreground">Content Management</h1>
                <p className="text-muted-foreground">Organize and manage your posts</p>
              </div>
              <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                Beginner
              </Badge>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-slate dark:prose-invert max-w-none mb-12"
        >
          <p className="text-xl text-muted-foreground">
            Effective content management is crucial for building and maintaining a successful blockchain blog. 
            Learn how to organize, track, and optimize your content for maximum impact.
          </p>
        </motion.div>

        {/* Features Overview */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">Content Management Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {organizationFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-primary to-purple-600 rounded-lg flex items-center justify-center">
                        <feature.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{feature.title}</CardTitle>
                        <CardDescription>{feature.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.features.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Management Tasks */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">Common Management Tasks</h2>
          
          <Tabs defaultValue="creation" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="creation">Content Creation</TabsTrigger>
              <TabsTrigger value="organization">Organization</TabsTrigger>
              <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
            </TabsList>
            
            {managementTasks.map((category, categoryIndex) => (
              <TabsContent key={categoryIndex} value={category.category.toLowerCase().replace(' ', '')}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                          <category.icon className="w-5 h-5 text-white" />
                        </div>
                        <CardTitle>{category.category}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {category.tasks.map((task, taskIndex) => (
                          <div key={taskIndex} className="flex items-center justify-between p-4 border rounded-lg">
                            <div className="flex-1">
                              <h4 className="font-medium">{task.task}</h4>
                              <div className="flex items-center gap-4 mt-2">
                                <Badge variant="outline" className="text-xs">
                                  {task.difficulty}
                                </Badge>
                                <span className="text-sm text-muted-foreground">{task.time}</span>
                              </div>
                            </div>
                            <Button variant="outline" size="sm">
                              Learn More
                            </Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        {/* Best Practices */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">Best Practices</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {bestPractices.map((practice, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{practice.title}</CardTitle>
                    <CardDescription>{practice.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {practice.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-primary/10 to-purple-500/10 border-primary/20">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-4">Start Managing Your Content</h3>
              <p className="text-muted-foreground mb-6">
                Ready to organize your blockchain blog content? Head to your dashboard to start implementing these strategies.
              </p>
              <div className="flex gap-4 justify-center">
                <Link href="/docs/multi-chain-publishing">
                  <Button variant="outline">
                    Next: Multi-Chain Publishing
                  </Button>
                </Link>
                <Link href="/dashboard">
                  <Button className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90">
                    <FolderOpen className="w-4 h-4 mr-2" />
                    Go to Dashboard
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
