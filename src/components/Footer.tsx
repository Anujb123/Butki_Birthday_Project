import React from 'react';
import { Heart, Star } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-8 bg-gradient-to-r from-primary/10 to-accent/10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Star className="text-accent sparkle" size={20} />
          <Heart className="text-primary floating-heart" size={24} />
          <Star className="text-accent sparkle" size={20} />
        </div>
        
        <p className="text-lg font-fredoka font-medium text-gradient mb-2">
          Made with love by Gadha 💖
        </p>
        
        <p className="text-sm font-quicksand text-foreground/60 italic">
          "Friendship is the only cement that will ever hold the world together" ✨
        </p>
        
        <div className="flex items-center justify-center gap-2 mt-4">
          <Heart className="text-primary/50 floating-heart" size={16} />
          <span className="text-xs font-quicksand text-foreground/50">
            Happy Birthday, Butki! {new Date().getFullYear()}
          </span>
          <Heart className="text-primary/50 floating-heart" size={16} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;