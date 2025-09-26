import { motion } from 'framer-motion';
import { ArrowLeft, Construction, ExternalLink } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface DocPageTemplateProps {
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  icon: React.ReactNode;
  comingSoon?: boolean;
  externalLink?: string;
}

export default function DocPageTemplate({ 
  title, 
  description, 
  difficulty, 
  icon, 
  comingSoon = true,
  externalLink 
}: DocPageTemplateProps) {
  const getDifficultyColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Advanced': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'Expert': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10 border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-purple-600 rounded-xl flex items-center justify-center">
                {icon}
              </div>
              <div>
                <h1 className="text-3xl font-bold text-foreground">{title}</h1>
                <p className="text-muted-foreground">{description}</p>
              </div>
              <Badge className={getDifficultyColor(difficulty)}>
                {difficulty}
              </Badge>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {comingSoon ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <Card className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20">
              <CardContent className="pt-12 pb-12">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Construction className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold mb-4">Coming Soon</h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  We're working hard to bring you comprehensive documentation for {title.toLowerCase()}. 
                  This section will include detailed guides, code examples, and best practices.
                </p>
                
                <div className="space-y-4 mb-8">
                  <h3 className="text-lg font-semibold">What to expect:</h3>
                  <ul className="text-muted-foreground space-y-2 max-w-md mx-auto">
                    <li>• Step-by-step implementation guides</li>
                    <li>• Code examples and snippets</li>
                    <li>• Best practices and tips</li>
                    <li>• Troubleshooting and FAQ</li>
                  </ul>
                </div>

                <div className="flex gap-4 justify-center">
                  {externalLink && (
                    <Button variant="outline" asChild>
                      <a href={externalLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        External Resources
                      </a>
                    </Button>
                  )}
                  <Link href="/create-blog">
                    <Button className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90">
                      Start Creating Content
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-slate dark:prose-invert max-w-none"
          >
            <p className="text-xl text-muted-foreground">
              Detailed documentation content would go here...
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
