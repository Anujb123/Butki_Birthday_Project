import React, { useState } from 'react';
import { Heart, Star, Sparkles } from 'lucide-react';
import { Card } from '@/components/ui/card';

const LoveList = () => {
  const [revealedItems, setRevealedItems] = useState<Set<number>>(new Set());

  const loveItems = [
    "Loves how you embraces your natural self, yet shines with confidence and grace, like the moon with its honest flaws.",
    "The way you breaks societal expectations just by smiling, walking unapologetically as herself.",
    "Admires that you doesn't pretend, doesn't ask empty questions, doesn't try to impress — she just is, and that's more than enough.",
    "cherishes how your presence completes my day — like sugar in tea, like laughter in silence — your absence makes things feel incomplete.",
    "loves how I can talk to you about anything — raw, real, stupid, serious — without judgment, without hesitation.",
    "I finds even your frustration endearing — one \"Oye gadhe\" from her and the world feels lighter again.",
    "I Deeply values how you believes in me — not with motivational quotes, but with quiet trust that I can, and will.",
    "I sees in you a fierce potential — the ability to turn setbacks into strength, to turn pain into strength, chaos into calm.",
    "Above all, I treasures you as my irreplaceable best friend — someone whose presence feels like home, and whose bond is written in stars, not just memories.",
    "The way you believe in dreams and make them feel possible, your incredible strength and resilience through everything."
  ];

  const handleReveal = (index: number) => {
    setRevealedItems(prev => new Set([...prev, index]));
  };

  return (
    <section className="py-20 px-8 bg-gradient-to-br from-secondary/20 to-accent/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 relative">
          <Sparkles className="absolute -top-6 left-1/2 transform -translate-x-20 text-primary floating-heart" size={28} />
          <Star className="absolute -top-2 left-1/2 transform translate-x-20 text-accent sparkle" size={24} />
          
          <h2 className="text-5xl font-fredoka font-bold text-gradient mb-4">
            10 Things I Love About You
          </h2>
          <p className="text-xl text-foreground/70 font-quicksand">
            Click each card to reveal what makes you so special! 💖
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {loveItems.map((item, index) => (
            <Card 
              key={index}
              className={`relative p-6 cursor-pointer transition-all duration-500 rounded-3xl ${
                revealedItems.has(index) 
                  ? 'magical-glow bg-white/95 backdrop-blur-sm hover:scale-105' 
                  : 'bg-primary/20 hover:bg-primary/30 hover:scale-105'
              }`}
              onClick={() => handleReveal(index)}
            >
              <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-fredoka font-bold ${
                  revealedItems.has(index) ? 'bg-primary' : 'bg-muted'
                }`}>
                  {index + 1}
                </div>
                
                <div className="flex-1">
                  {revealedItems.has(index) ? (
                    <p className="text-lg font-quicksand text-foreground leading-relaxed">
                      {item}
                    </p>
                  ) : (
                    <div className="flex items-center gap-2 text-primary">
                      <Heart size={18} className="floating-heart" />
                      <span className="text-lg font-quicksand font-medium">
                        Click to reveal...
                      </span>
                      <Heart size={18} className="floating-heart" />
                    </div>
                  )}
                </div>
              </div>
              
              {revealedItems.has(index) && (
                <Star className="absolute top-4 right-4 text-accent sparkle" size={20} />
              )}
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-xl font-fredoka text-primary">
            And that's just the beginning... there are countless more reasons! 🌟
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoveList;