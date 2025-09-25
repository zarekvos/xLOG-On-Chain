import { motion } from 'framer-motion';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { BlogPost } from '@shared/schema';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  BarChart, 
  TrendingUp, 
  Users, 
  Eye, 
  Heart, 
  MessageCircle,
  DollarSign,
  Award,
  Calendar,
  Target,
  Zap,
  Crown,
  Star,
  Rocket,
  PenTool,
  Settings,
  Share2,
  Download
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart as RechartsBar, Bar } from 'recharts';

export function CreatorDashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState<'7d' | '30d' | '90d' | '1y'>('30d');

  // Fetch real user posts data
  const { data: userPosts = [], isLoading: postsLoading } = useQuery<BlogPost[]>({
    queryKey: ['/api/blog-posts'], // In real app, this would be filtered by current user
  });

  const { data: realAnalyticsData = [], isLoading: analyticsLoading } = useQuery({
    queryKey: ['/api/analytics/creator', selectedPeriod],
  });

  // Fallback analytics data for display
  const fallbackAnalyticsData = [
    { date: '2024-01-01', views: 1200, likes: 89, comments: 34, earnings: 45 },
    { date: '2024-01-02', views: 1567, likes: 134, comments: 67, earnings: 78 },
    { date: '2024-01-03', views: 2100, likes: 156, comments: 89, earnings: 102 },
    { date: '2024-01-04', views: 1890, likes: 142, comments: 76, earnings: 89 },
    { date: '2024-01-05', views: 2450, likes: 198, comments: 123, earnings: 134 },
    { date: '2024-01-06', views: 3200, likes: 287, comments: 156, earnings: 203 },
    { date: '2024-01-07', views: 2800, likes: 234, comments: 134, earnings: 167 },
  ];

  // Use real analytics or fallback
  const displayAnalyticsData = realAnalyticsData.length > 0 ? realAnalyticsData : fallbackAnalyticsData;

  // Use real posts data or fallback
  const displayPosts = userPosts.slice(0, 5); // Top 5 posts

  const fallbackTopPosts = [
    {
      id: '1',
      title: 'The Future of Cross-Chain DeFi Protocols',
      views: 15400,
      likes: 892,
      comments: 127,
      shares: 234,
      earnings: 245,
      publishedAt: '2024-01-15',
      status: 'trending',
      category: 'DeFi'
    },
    {
      id: '2',
      title: 'Building Sustainable GameFi Economies',
      views: 12300,
      likes: 634,
      comments: 89,
      shares: 156,
      earnings: 189,
      publishedAt: '2024-01-12',
      status: 'popular',
      category: 'Gaming'
    },
    {
      id: '3',
      title: 'Zero-Knowledge Proofs Explained Simply',
      views: 9800,
      likes: 445,
      comments: 67,
      shares: 123,
      earnings: 134,
      publishedAt: '2024-01-10',
      status: 'featured',
      category: 'Technology'
    }
  ];

  const achievements = [
    {
      id: '1',
      title: 'Rising Star',
      description: 'Reached 10K total views',
      icon: Star,
      color: 'from-yellow-400 to-orange-500',
      earned: true,
      earnedAt: '2024-01-15'
    },
    {
      id: '2',
      title: 'Community Builder',
      description: 'Received 1000+ comments',
      icon: Users,
      color: 'from-blue-400 to-cyan-500',
      earned: true,
      earnedAt: '2024-01-10'
    },
    {
      id: '3',
      title: 'Top Creator',
      description: 'Featured post on homepage',
      icon: Crown,
      color: 'from-purple-400 to-pink-500',
      earned: true,
      earnedAt: '2024-01-08'
    },
    {
      id: '4',
      title: 'Viral Content',
      description: 'Post reached 50K views',
      icon: Rocket,
      color: 'from-green-400 to-emerald-500',
      earned: false,
      progress: 31 // 31% towards goal
    }
  ];

  // Calculate real stats from posts data
  const creatorStats = userPosts.length > 0 ? {
    totalViews: userPosts.reduce((sum, post) => sum + (post.views || 0), 0),
    totalLikes: userPosts.reduce((sum, post) => sum + (post.likes || 0), 0),
    totalComments: userPosts.reduce((sum, post) => sum + (post.comments || 0), 0),
    totalFollowers: 2891, // This would come from user profile API
    totalEarnings: 1456, // This would come from monetization API
    postsPublished: userPosts.length,
    averageReadTime: userPosts.reduce((sum, post) => sum + (post.readingTime || 0), 0) / userPosts.length,
    engagementRate: userPosts.length > 0 ? (userPosts.reduce((sum, post) => sum + (post.likes || 0) + (post.comments || 0), 0) / userPosts.reduce((sum, post) => sum + (post.views || 0), 0)) * 100 : 0
  } : {
    // Fallback stats when no real data
    totalViews: 125400,
    totalLikes: 8943,
    totalComments: 1234,
    totalFollowers: 2891,
    totalEarnings: 1456,
    postsPublished: 47,
    averageReadTime: 6.2,
    engagementRate: 12.4
  };

  const recentActivity = [
    { type: 'like', content: 'Someone liked your post "DeFi Protocols"', time: '2 min ago' },
    { type: 'comment', content: 'New comment on "GameFi Economics"', time: '15 min ago' },
    { type: 'follow', content: '5 new followers this hour', time: '1 hour ago' },
    { type: 'earning', content: 'Earned 12 USDC from post views', time: '2 hours ago' },
    { type: 'feature', content: 'Your post was featured on homepage', time: '1 day ago' }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'trending':
        return <Badge className="bg-orange-500 text-white"><TrendingUp className="w-3 h-3 mr-1" />Trending</Badge>;
      case 'popular':
        return <Badge className="bg-blue-500 text-white"><Zap className="w-3 h-3 mr-1" />Popular</Badge>;
      case 'featured':
        return <Badge className="bg-purple-500 text-white"><Star className="w-3 h-3 mr-1" />Featured</Badge>;
      default:
        return <Badge variant="outline">Published</Badge>;
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      {/* Header */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Creator 
          <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"> Dashboard</span>
        </h1>
        <p className="text-xl text-muted-foreground">
          Advanced analytics and insights to grow your content
        </p>
      </motion.div>

      {/* Quick Stats */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-0">
          <CardContent className="p-6 text-center">
            <Eye className="w-8 h-8 text-blue-500 mx-auto mb-3" />
            <div className="text-2xl font-bold text-foreground">{creatorStats.totalViews.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">Total Views</div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-0">
          <CardContent className="p-6 text-center">
            <Heart className="w-8 h-8 text-green-500 mx-auto mb-3" />
            <div className="text-2xl font-bold text-foreground">{creatorStats.totalLikes.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">Total Likes</div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-0">
          <CardContent className="p-6 text-center">
            <Users className="w-8 h-8 text-purple-500 mx-auto mb-3" />
            <div className="text-2xl font-bold text-foreground">{creatorStats.totalFollowers.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">Followers</div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20 border-0">
          <CardContent className="p-6 text-center">
            <DollarSign className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
            <div className="text-2xl font-bold text-foreground">${creatorStats.totalEarnings}</div>
            <div className="text-sm text-muted-foreground">Total Earned</div>
          </CardContent>
        </Card>
      </motion.div>

      <Tabs defaultValue="analytics" className="space-y-8">
        <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-4 bg-muted/30 p-1 rounded-2xl">
          <TabsTrigger value="analytics" className="rounded-xl" data-testid="tab-analytics">
            <BarChart className="w-4 h-4 mr-2" />
            Analytics
          </TabsTrigger>
          <TabsTrigger value="content" className="rounded-xl" data-testid="tab-content">
            <PenTool className="w-4 h-4 mr-2" />
            Content
          </TabsTrigger>
          <TabsTrigger value="achievements" className="rounded-xl" data-testid="tab-achievements">
            <Award className="w-4 h-4 mr-2" />
            Achievements
          </TabsTrigger>
          <TabsTrigger value="monetization" className="rounded-xl" data-testid="tab-monetization">
            <DollarSign className="w-4 h-4 mr-2" />
            Monetization
          </TabsTrigger>
        </TabsList>

        {/* Analytics Tab */}
        <TabsContent value="analytics" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Period Selector */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Performance Analytics</h2>
              <div className="flex space-x-2">
                {(['7d', '30d', '90d', '1y'] as const).map((period) => (
                  <Button
                    key={period}
                    variant={selectedPeriod === period ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedPeriod(period)}
                    data-testid={`period-${period}`}
                  >
                    {period === '7d' ? '7 Days' : 
                     period === '30d' ? '30 Days' : 
                     period === '90d' ? '90 Days' : '1 Year'}
                  </Button>
                ))}
              </div>
            </div>

            {/* Charts */}
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Eye className="w-5 h-5 mr-2" />
                    Views Over Time
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={displayAnalyticsData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Area type="monotone" dataKey="views" stroke="#8B5CF6" fill="url(#gradient)" />
                      <defs>
                        <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.1}/>
                        </linearGradient>
                      </defs>
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <DollarSign className="w-5 h-5 mr-2" />
                    Earnings Progress
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <RechartsBar data={displayAnalyticsData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="earnings" fill="#10B981" />
                    </RechartsBar>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Engagement Metrics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Engagement Metrics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-500 mb-2">{creatorStats.engagementRate}%</div>
                    <div className="text-sm text-muted-foreground">Engagement Rate</div>
                    <Progress value={creatorStats.engagementRate} className="mt-2" />
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-500 mb-2">{creatorStats.averageReadTime}</div>
                    <div className="text-sm text-muted-foreground">Avg. Read Time (min)</div>
                    <Progress value={creatorStats.averageReadTime * 10} className="mt-2" />
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-500 mb-2">{creatorStats.postsPublished}</div>
                    <div className="text-sm text-muted-foreground">Posts Published</div>
                    <Progress value={Math.min(creatorStats.postsPublished * 2, 100)} className="mt-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        {/* Content Tab */}
        <TabsContent value="content" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Top Performing Content</h2>
              <Button data-testid="button-new-post">
                <PenTool className="w-4 h-4 mr-2" />
                New Post
              </Button>
            </div>

            <div className="space-y-4">
              {(displayPosts.length > 0 ? displayPosts : fallbackTopPosts).map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            {getStatusBadge(post.status)}
                            <Badge variant="outline">{post.category}</Badge>
                          </div>
                          <h3 className="text-lg font-bold text-foreground mb-2">{post.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            Published on {new Date(post.publishedAt).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Share2 className="w-4 h-4 mr-2" />
                            Share
                          </Button>
                          <Button variant="outline" size="sm">
                            <Settings className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                        <div>
                          <div className="text-xl font-bold text-blue-500">{post.views.toLocaleString()}</div>
                          <div className="text-xs text-muted-foreground">Views</div>
                        </div>
                        <div>
                          <div className="text-xl font-bold text-green-500">{post.likes}</div>
                          <div className="text-xs text-muted-foreground">Likes</div>
                        </div>
                        <div>
                          <div className="text-xl font-bold text-purple-500">{post.comments}</div>
                          <div className="text-xs text-muted-foreground">Comments</div>
                        </div>
                        <div>
                          <div className="text-xl font-bold text-orange-500">{post.shares}</div>
                          <div className="text-xs text-muted-foreground">Shares</div>
                        </div>
                        <div>
                          <div className="text-xl font-bold text-yellow-500">${post.earnings}</div>
                          <div className="text-xs text-muted-foreground">Earned</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </TabsContent>

        {/* Achievements Tab */}
        <TabsContent value="achievements" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-6">Your Achievements</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className={`${achievement.earned ? 'bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20 border-yellow-200' : 'bg-muted/30'} transition-all duration-300 hover:scale-105`}>
                    <CardContent className="p-6 text-center">
                      <div className={`w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-2xl flex items-center justify-center mx-auto mb-4 ${!achievement.earned && 'grayscale opacity-50'}`}>
                        <achievement.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-lg font-bold text-foreground mb-2">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{achievement.description}</p>
                      
                      {achievement.earned ? (
                        <Badge className="bg-green-500 text-white">
                          <Star className="w-3 h-3 mr-1" />
                          Earned {new Date(achievement.earnedAt!).toLocaleDateString()}
                        </Badge>
                      ) : (
                        <div className="space-y-2">
                          <Progress value={achievement.progress} className="w-full" />
                          <Badge variant="outline">{achievement.progress}% Complete</Badge>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </TabsContent>

        {/* Monetization Tab */}
        <TabsContent value="monetization" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-6">Monetization Hub</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <DollarSign className="w-5 h-5 mr-2 text-green-500" />
                    Total Earnings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-500 mb-2">${creatorStats.totalEarnings}</div>
                  <div className="text-sm text-muted-foreground mb-4">This month</div>
                  <Button className="w-full" data-testid="button-withdraw">
                    <Download className="w-4 h-4 mr-2" />
                    Withdraw
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="w-5 h-5 mr-2" />
                    Monthly Goal
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-foreground mb-2">$2,000</div>
                  <div className="text-sm text-muted-foreground mb-4">72.8% achieved</div>
                  <Progress value={72.8} className="mb-4" />
                  <div className="text-xs text-muted-foreground">$544 to go</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2" />
                    Growth Rate
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-500 mb-2">+34%</div>
                  <div className="text-sm text-muted-foreground mb-4">vs last month</div>
                  <Badge className="bg-green-500 text-white">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    Growing
                  </Badge>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-muted/30">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        activity.type === 'like' ? 'bg-red-100 text-red-500' :
                        activity.type === 'comment' ? 'bg-blue-100 text-blue-500' :
                        activity.type === 'follow' ? 'bg-green-100 text-green-500' :
                        activity.type === 'earning' ? 'bg-yellow-100 text-yellow-500' :
                        'bg-purple-100 text-purple-500'
                      }`}>
                        {activity.type === 'like' && <Heart className="w-4 h-4" />}
                        {activity.type === 'comment' && <MessageCircle className="w-4 h-4" />}
                        {activity.type === 'follow' && <Users className="w-4 h-4" />}
                        {activity.type === 'earning' && <DollarSign className="w-4 h-4" />}
                        {activity.type === 'feature' && <Star className="w-4 h-4" />}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-foreground">{activity.content}</p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  );
}