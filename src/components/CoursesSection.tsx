import { BookOpen, DollarSign, TrendingUp, Users, Zap, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

const CoursesSection = () => {
  const learningCards = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Business Fundamentals",
      items: [
        "How this business model works (And why it still works in 2025)",
        "Finding reliable and cheap suppliers",
        "Pricing strategies for maximum profit"
      ]
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Website Creation",
      items: [
        "How to create a professional reselling website 100% FREE",
        "Our templates and step-by-step guides", 
        "Optimization for conversions"
      ]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Client Acquisition",
      items: [
        "Free traffic methods (Instagram, TikTok, Reddit, SEO)",
        "Paid traffic (Facebook/IG Ads, Google Ads, Influencers)",
        "Conversion optimization"
      ]
    }
  ];

  const coursePlans = [
    {
      name: "Starter",
      price: "$14.99",
      description: "one-time payment",
      features: [
        "Full E-Book Course",
        "Basic Setup Guide", 
        "Provider List",
        "Email Support"
      ],
      paypalLink: "https://www.paypal.com/ncp/payment/EW9TU59ENQ82A",
      popular: false
    },
    {
      name: "Premium",
      price: "$49.99", 
      description: "one-time payment",
      features: [
        "Everything in Starter",
        "Full Video Tutorials",
        "Live Call Record Support",
        "Advanced Traffic Methods",
        "Scaling Strategies",
        "Store Setup",
        "Branding Package"
      ],
      paypalLink: "https://www.paypal.com/ncp/payment/EG6B3JTDBSUGG",
      popular: true
    },
    {
      name: "VIP",
      price: "$149.99",
      description: "one-time payment", 
      features: [
        "Everything in Premium",
        "Full Store Setup",
        "Custom Domain Name",
        "Brand Name & Logo",
        "Instagram Page Setup",
        "Pre-loaded Products",
        "1-on-1 Strategy Call"
      ],
      paypalLink: "https://www.paypal.com/ncp/payment/CXZT9XTRGC9SJ",
      popular: false
    }
  ];

  return (
    <div className="py-20">
      {/* Ebook Section */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary">
              Start Your Online Business Today
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Want to make $100 a day reselling followers like I do? Learn to build a 
              profitable social media reselling business from scratch.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="card-premium">
                <img 
                  src="https://i.postimg.cc/zG13WxZJ/1749594663.png" 
                  alt="Social Media Reselling Ebook"
                  className="w-full rounded-2xl"
                />
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold mb-8 text-gradient-primary">
                You'll Learn How To:
              </h3>
              <ul className="space-y-4">
                {[
                  "Build a Free Professional Website with Payment Integration",
                  "Create High-Quality Professional Posts",
                  "Design Professional Posts Using Canva", 
                  "Develop a Professional Instagram Page to Attract Traffic",
                  "Generate Free Traffic Effectively",
                  "Access Paid Traffic Starting at $1",
                  "Find Affordable Services for Resale",
                  "Achieve 90% Profit Using Free Traffic"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Course Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-primary/10" />
        
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary">
              Social Media Reselling Masterclass
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              This comprehensive course covers everything you need to launch and scale 
              your social media reselling business
            </p>
          </div>

          {/* Learning Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {learningCards.map((card, index) => (
              <div key={index} className="card-premium">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/20 text-primary">
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                </div>
                <ul className="space-y-3">
                  {card.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Course Plans */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-gradient-primary">
              Choose Your Plan
            </h3>
            <p className="text-lg text-muted-foreground">
              Select the package that fits your needs and start your reselling business today
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coursePlans.map((plan, index) => (
              <div 
                key={index}
                className={`card-premium ${plan.popular ? 'ring-2 ring-primary scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-gradient-to-r from-primary to-secondary px-4 py-1 rounded-full text-sm font-semibold text-white flex items-center gap-1">
                      <Crown className="w-4 h-4" />
                      MOST POPULAR
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2 text-gradient-primary">
                    {plan.name}
                  </h3>
                  <div className="text-4xl font-bold text-primary mb-2">
                    {plan.price}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Zap className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button asChild className="btn-premium w-full">
                  <a href={plan.paypalLink} target="_blank" rel="noopener noreferrer">
                    <DollarSign className="w-4 h-4 mr-2" />
                    Get {plan.name}
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesSection;
