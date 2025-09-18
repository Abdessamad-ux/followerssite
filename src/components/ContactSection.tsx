import { MessageCircle, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary">
            Need Help? We're Here for You
          </h2>
          <p className="text-xl text-muted-foreground">
            Contact our friendly support team
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card-premium text-center group">
            <div className="mb-6">
              <div className="inline-flex p-4 rounded-2xl bg-success/20 text-success">
                <MessageCircle className="w-8 h-8" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-4">WhatsApp</h3>
            <p className="text-muted-foreground mb-6">
              Got questions? Chat with us instantly
            </p>
            <Button asChild className="btn-premium w-full">
              <a href="https://wa.me/31637630250" target="_blank" rel="noopener noreferrer">
                Chat Now
              </a>
            </Button>
          </div>

          <div className="card-premium text-center group">
            <div className="mb-6">
              <div className="inline-flex p-4 rounded-2xl bg-primary/20 text-primary">
                <Instagram className="w-8 h-8" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-4">Instagram</h3>
            <p className="text-muted-foreground mb-6">
              Follow our official page for updates
            </p>
            <Button asChild className="btn-premium w-full">
              <a href="https://www.instagram.com/anezom.1/" target="_blank" rel="noopener noreferrer">
                Follow Us
              </a>
            </Button>
          </div>

          <div className="card-premium text-center group">
            <div className="mb-6">
              <div className="inline-flex p-4 rounded-2xl bg-accent/20 text-accent">
                <Mail className="w-8 h-8" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-4">Email</h3>
            <p className="text-muted-foreground mb-6">
              Send us a detailed message
            </p>
            <Button asChild className="btn-premium w-full">
              <a href="mailto:contact.abdessamade@gmail.com">
                Send Email
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;