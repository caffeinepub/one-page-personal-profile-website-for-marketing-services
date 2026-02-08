import { Award, Target, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutSection() {
  const highlights = [
    {
      icon: Target,
      title: 'Strategic Approach',
      description: 'Data-driven strategies tailored to your unique business goals and target audience'
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Track record of delivering measurable growth and ROI for clients across industries'
    },
    {
      icon: Award,
      title: 'Expert Knowledge',
      description: 'Certified professional with deep expertise in modern digital marketing platforms'
    }
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/30">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="font-display text-foreground">About Me</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate digital marketing professional dedicated to helping businesses thrive in the digital landscape. 
              With expertise spanning SEO, paid advertising, and web development, I deliver comprehensive solutions that drive real results.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-soft">
                <CardContent className="pt-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <highlight.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{highlight.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="bg-card border-2 rounded-lg p-8 md:p-12 shadow-soft">
            <div className="max-w-3xl mx-auto space-y-6">
              <h3 className="text-2xl font-display text-center">Why Work With Me?</h3>
              <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p>Comprehensive digital marketing expertise across multiple platforms and channels</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p>Focus on measurable outcomes and transparent reporting</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p>Personalized strategies designed for your specific business needs</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p>Continuous optimization and adaptation to market trends</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

