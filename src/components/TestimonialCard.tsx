import { Star } from "lucide-react";

interface TestimonialCardProps {
  image: string;
  alt: string;
  rating?: number;
  content?: string;
}

const TestimonialCard = ({ image, alt, rating = 5, content }: TestimonialCardProps) => {
  return (
    <div className="card-premium group overflow-hidden">
      <div className="relative overflow-hidden rounded-2xl mb-6">
        <img 
          src={image} 
          alt={alt}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>
      
      {content && (
        <div className="mb-4">
          <p className="text-muted-foreground italic">"{content}"</p>
        </div>
      )}
      
      <div className="flex items-center justify-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-5 h-5 ${i < rating ? 'text-warning fill-warning' : 'text-muted-foreground'}`} 
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;