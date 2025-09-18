import { Award, Clock, Shield, Users, Headphones, DollarSign } from "lucide-react";

const benefits = [
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Instant Delivery",
    description: "Your followers start arriving within minutes after purchase. No waiting!"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "100% Safe",
    description: "Our methods are completely safe and won't get your account banned."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "High Quality Followers",
    description: "We deliver real high-quality followers with profile pictures and activity."
  },
  {
    icon: <Headphones className="w-8 h-8" />,
    title: "24/7 Support",
    description: "Our customer support team is available 24/7 to help you."
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Secure Payment",
    description: "All payments are processed securely with PayPal encryption."
  },
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: "Money Back Guarantee",
    description: "Not satisfied? We offer a 30-day money back guarantee."
  }
];

const TrustSection = () => {
  return (
    <section className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary">
            Why Choose Us?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of satisfied customers who trust us for their social media growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="card-premium text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 flex justify-center">
                <div className="p-4 rounded-2xl bg-primary/20 text-primary group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gradient-primary">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🔒</span>
              <span>SSL Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">💳</span>
              <span>PayPal Protected</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              <span>4.9/5 Stars</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">👥</span>
              <span>50,000+ Customers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;