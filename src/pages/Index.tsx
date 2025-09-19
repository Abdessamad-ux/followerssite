import { Instagram, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import PriceCard from "@/components/PriceCard";
import TestimonialCard from "@/components/TestimonialCard";
import TrustSection from "@/components/TrustSection";
import ContactSection from "@/components/ContactSection";
import CoursesSection from "@/components/CoursesSection";
import FAQ from "@/components/FAQ";

const Index = () => {
  const instagramPackages = [
    {
      title: "Instagram Followers",
      price: "500 Followers / $2.49",
      features: [
        "High-quality followers (accounts with profile pictures and active followers, not bots.)",
        "Instant delivery — followers arriving in 1 to 10 minutes.",
        "Make your account public"
      ],
      paypalLink: "https://www.paypal.com/ncp/payment/EW2NDVRHDSLKY",
      icon: <Instagram className="w-8 h-8 text-primary" />,
      variant: 'instagram' as const
    },
    {
      title: "Instagram Followers",
      price: "1k Followers + 100 Likes / $4.49",
      features: [],
      paypalLink: "https://www.paypal.com/ncp/payment/259E8GYTC629Q",
      icon: <Instagram className="w-8 h-8 text-primary" />,
      variant: 'instagram' as const
    },
    {
      title: "Instagram Followers",
      price: "2k Followers + 250 Likes / $7.49",
      features: [],
      paypalLink: "https://www.paypal.com/ncp/payment/G4FRLRJSLMTSA",
      icon: <Instagram className="w-8 h-8 text-primary" />,
      variant: 'instagram' as const,
      popular: true
    },
    {
      title: "Instagram Followers", 
      price: "5k Followers + 550 Likes / $19.49",
      features: [],
      paypalLink: "https://www.paypal.com/ncp/payment/VPWZLJUJGFQJA",
      icon: <Instagram className="w-8 h-8 text-primary" />,
      variant: 'instagram' as const
    }
  ];

  const tiktokPackages = [
    {
      title: "TikTok Followers",
      price: "500 Followers / $2.49",
      features: [
        "High-quality TikTok followers",
        "Fast delivery — starts within 5-15 minutes",
        "100% safe and secure"
      ],
      paypalLink: "https://www.paypal.com/ncp/payment/9PLM5BQ95GBWU",
      icon: <MessageCircle className="w-8 h-8 text-tiktok" />,
      variant: 'tiktok' as const
    },
    {
      title: "TikTok Followers",
      price: "1k Followers / $3.49",
      features: [],
      paypalLink: "https://www.paypal.com/ncp/payment/GVZKE5E8XAB26",
      icon: <MessageCircle className="w-8 h-8 text-tiktok" />,
      variant: 'tiktok' as const
    },
    {
      title: "TikTok Followers",
      price: "3k Followers / $7.49",
      features: [],
      paypalLink: "https://www.paypal.com/ncp/payment/EBECKVLX72KWY",
      icon: <MessageCircle className="w-8 h-8 text-tiktok" />,
      variant: 'tiktok' as const,
      popular: true
    },
    {
      title: "TikTok Followers",
      price: "5k Followers / $12.49",
      features: [],
      paypalLink: "https://www.paypal.com/ncp/payment/EVBCPHXTZ56CE",
      icon: <MessageCircle className="w-8 h-8 text-tiktok" />,
      variant: 'tiktok' as const
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header />

      <main className="max-w-7xl mx-auto px-4">
        {/* Instagram Section */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary">
              Instagram Followers
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Grow your Instagram presence with real active followers
            </p>
            
            {/* YouTube Video */}
            <div className="max-w-md mx-auto mb-8">
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.youtube.com/embed/qKzJBlCQ5KE"
                  title="Instagram Growth Video"
                  className="w-full h-[500px]"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {instagramPackages.map((pkg, index) => (
              <PriceCard
                key={index}
                title={pkg.title}
                price={pkg.price}
                features={pkg.features}
                paypalLink={pkg.paypalLink}
                icon={pkg.icon}
                variant={pkg.variant}
                popular={pkg.popular}
              />
            ))}
          </div>
        </section>

        {/* TikTok Section */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-tiktok">
              TikTok Followers
            </h2>
            <p className="text-xl text-muted-foreground">
              Boost your TikTok with authentic followers and engagement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tiktokPackages.map((pkg, index) => (
              <PriceCard
                key={index}
                title={pkg.title}
                price={pkg.price}
                features={pkg.features}
                paypalLink={pkg.paypalLink}
                icon={pkg.icon}
                variant={pkg.variant}
                popular={pkg.popular}
              />
            ))}
          </div>
        </section>

        {/* Results Section */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary">
              Real Results from Real Customers
            </h2>
            <p className="text-xl text-muted-foreground">
              See the incredible growth our customers achieve
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TestimonialCard
              image="https://i.postimg.cc/qRvGggcG/Screenshot-2025-08-04-203941.png"
              alt="Instagram Followers Results"
              rating={5}
            />
            <TestimonialCard
              image="https://i.postimg.cc/4355Jpcd/Screenshot-2025-08-04-203955.png"
              alt="Instagram Followers Delivery"
              rating={5}
            />
          </div>
        </section>

        {/* Courses Section */}
        <CoursesSection />

        {/* Trust Section */}
        <TrustSection />

        {/* Customer Testimonials */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary">
              What Our Customers Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of satisfied customers worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              image="https://i.postimg.cc/Gm3D1BqT/1.jpg"
              alt="Happy Customer"
              rating={5}
            />
            <TestimonialCard
              image="https://i.postimg.cc/rsJphj6n/2.jpg"
              alt="Satisfied Client"
              rating={5}
            />
            <TestimonialCard
              image="https://i.postimg.cc/XvCYM4Sy/3.jpg"
              alt="Verified Buyer"
              rating={5}
            />
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="relative overflow-hidden mt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
        <div className="relative max-w-7xl mx-auto px-4 py-16 text-center">
          <div className="mb-8">
            <h3 className="text-3xl font-bold mb-4 text-gradient-primary floating">
              Social Followers Pro
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Boost your social media presence with high-quality followers and engagement. 
              Trusted by over 50,000 customers worldwide.
            </p>
          </div>
          
          <div className="flex justify-center items-center gap-8 mb-8">
            <a 
              href="https://www.instagram.com/anezom.1/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:scale-110 transition-transform duration-300"
            >
              <Instagram className="w-8 h-8" />
            </a>
            <a 
              href="https://wa.me/31637630250" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-success hover:scale-110 transition-transform duration-300"
            >
              <MessageCircle className="w-8 h-8" />
            </a>
          </div>
          
          <div className="text-sm text-muted-foreground">
            <p>&copy; 2020 - 2025 Career Maestros. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
