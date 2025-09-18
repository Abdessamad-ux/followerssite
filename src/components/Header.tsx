import { Shield, Star, Users, Zap } from "lucide-react";

const Header = () => {
  return (
    <header className="relative overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20" />
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 20% 80%, hsl(var(--primary) / 0.1) 0%, transparent 50%)',
      }} />
      
      <div className="relative max-w-7xl mx-auto px-4 py-20">
        {/* Trust indicators */}
        <div className="flex justify-center items-center gap-8 mb-12 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-success" />
            <span>100% Safe & Secure</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-warning" />
            <span>Instant Delivery</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-accent" />
            <span>50,000+ Happy Customers</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-warning" />
            <span>4.9/5 Rating</span>
          </div>
        </div>

        {/* Main header content */}
        <div className="text-center">
          <div className="floating mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient-primary">Social Followers</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Premium Instagram & TikTok Services
            </p>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-gradient-primary">
              Boost Your Social Media Presence Today!
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Whether you're a personal user, influencer, creator, or business - we help you grow 
              your audience with high-quality, real followers who engage with your content.
            </p>
          </div>

          {/* Security badges */}
          <div className="flex justify-center items-center gap-6 opacity-60">
            <div className="flex items-center gap-2 text-sm">
              <Shield className="w-5 h-5" />
              <span>SSL Protection</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span>💳</span>
              <span>PayPal Secured</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span>🔒</span>
              <span>Money Back Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;