import { Check, ExternalLink, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PriceCardProps {
  title: string;
  price: string;
  features: string[];
  paypalLink: string;
  icon: React.ReactNode;
  popular?: boolean;
  variant?: 'instagram' | 'tiktok';
  description?: string;
}

const PriceCard = ({ 
  title, 
  price, 
  features, 
  paypalLink, 
  icon, 
  popular = false,
  variant = 'instagram',
  description 
}: PriceCardProps) => {
  const cardClasses = variant === 'tiktok' 
    ? "card-premium border-tiktok/30 hover:border-tiktok/60" 
    : "card-premium";
    
  const buttonClasses = variant === 'tiktok' 
    ? "btn-tiktok w-full text-white" 
    : "btn-premium w-full text-white";

  return (
    <div className={`${cardClasses} ${popular ? 'ring-2 ring-primary scale-105' : ''} group`}>
      {/* Popular badge */}
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div className="bg-gradient-to-r from-primary to-secondary px-4 py-1 rounded-full text-sm font-semibold text-white">
            MOST POPULAR
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className={`p-3 rounded-2xl ${variant === 'tiktok' ? 'bg-tiktok/20' : 'bg-primary/20'}`}>
          {icon}
        </div>
        <div>
          <h3 className={`text-xl font-semibold ${variant === 'tiktok' ? 'text-gradient-tiktok' : 'text-gradient-primary'}`}>
            {title}
          </h3>
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>
      </div>

      {/* Price */}
      <div className="mb-6">
        <div className={`text-3xl font-bold ${variant === 'tiktok' ? 'text-tiktok' : 'text-primary'}`}>
          {price}
        </div>
      </div>

      {/* Features */}
      {features.length > 0 && (
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
              <span className="text-muted-foreground leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Trust indicators */}
      <div className="flex items-center gap-4 mb-6 text-xs text-muted-foreground">
        <div className="flex items-center gap-1">
          <Zap className="w-3 h-3 text-warning" />
          <span>Instant</span>
        </div>
        <div className="flex items-center gap-1">
          <Shield className="w-3 h-3 text-success" />
          <span>Safe</span>
        </div>
        <div className="flex items-center gap-1">
          <span>⭐</span>
          <span>4.9/5</span>
        </div>
      </div>

      {/* CTA Button */}
      <Button asChild className={buttonClasses}>
        <a href={paypalLink} target="_blank" rel="noopener noreferrer">
          <span>Buy Now - Secure Payment</span>
          <ExternalLink className="w-4 h-4 ml-2" />
        </a>
      </Button>

      {/* Payment security */}
      <div className="mt-4 text-center">
        <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <span>🔒</span>
          <span>Secured by PayPal</span>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;