import { 
  TrendingUp, 
  Globe, 
  Search, 
  Target, 
  Code, 
  Share2, 
  MapPin 
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function ServicesSection() {
  const services = [
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies that integrate multiple channels to maximize your online presence and drive business growth.',
      color: 'text-chart-1'
    },
    {
      icon: Globe,
      title: 'Website Development',
      description: 'Modern, responsive websites built with the latest technologies, optimized for performance, user experience, and conversions.',
      color: 'text-chart-2'
    },
    {
      icon: Search,
      title: 'SEO',
      description: 'Advanced search engine optimization to improve your rankings, increase organic traffic, and establish long-term visibility.',
      color: 'text-chart-3'
    },
    {
      icon: Target,
      title: 'Google Ads',
      description: 'Strategic Google Ads campaigns with precise targeting, compelling ad copy, and continuous optimization for maximum ROI.',
      color: 'text-chart-4'
    },
    {
      icon: Code,
      title: 'Tag Manager',
      description: 'Expert implementation and management of Google Tag Manager for accurate tracking, analytics, and marketing automation.',
      color: 'text-chart-5'
    },
    {
      icon: Share2,
      title: 'Meta Ads',
      description: 'High-performing Facebook and Instagram advertising campaigns designed to reach your ideal audience and drive conversions.',
      color: 'text-chart-1'
    },
    {
      icon: MapPin,
      title: 'Local Ads',
      description: 'Targeted local advertising strategies to dominate your geographic market and attract nearby customers to your business.',
      color: 'text-chart-2'
    }
  ];

  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="font-display text-foreground">Services</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Comprehensive digital marketing solutions designed to elevate your brand, 
              reach your target audience, and achieve measurable business results.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-soft transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/30"
              >
                <CardHeader>
                  <div className={`w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors ${service.color}`}>
                    <service.icon className="w-7 h-7" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center pt-8">
            <p className="text-lg text-muted-foreground mb-6">
              Ready to take your digital presence to the next level?
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg text-lg font-medium px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-soft hover:shadow-glow"
            >
              Let's Discuss Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

