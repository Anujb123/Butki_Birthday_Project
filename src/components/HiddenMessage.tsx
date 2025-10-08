import React, { useState } from 'react';
import { Heart, Star, Lock, Key, Sparkles, Gift } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
const HiddenMessage = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [answer, setAnswer] = useState('');
  const [showHint, setShowHint] = useState(false);
  const correctAnswer = "butki"; // The riddle answer

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (answer.toLowerCase().trim() === correctAnswer) {
      setIsUnlocked(true);
    } else {
      setShowHint(true);
      setTimeout(() => setShowHint(false), 3000);
    }
  };
  if (isUnlocked) {
    return <section className="py-20 px-8 min-h-screen birthday-gradient flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center relative">
          {/* Celebration effects */}
          <Heart className="absolute -top-8 left-1/4 text-primary floating-heart" size={40} />
          <Star className="absolute -top-4 right-1/4 text-accent sparkle" size={35} />
          <Sparkles className="absolute top-20 left-1/8 text-secondary floating-heart" size={30} />
          <Gift className="absolute top-32 right-1/8 text-primary sparkle" size={28} />
          
          <Card className="p-12 magical-glow bg-white/95 backdrop-blur-sm rounded-3xl relative overflow-hidden">
            {/* Floating hearts inside card */}
            <Heart className="absolute top-8 right-8 text-primary/30 floating-heart" size={24} />
            <Star className="absolute bottom-8 left-8 text-accent/30 sparkle" size={20} />
            
            <div className="relative z-10">
              <div className="text-6xl mb-8">🎁✨💖</div>
              
              <h1 className="text-5xl font-fredoka font-bold text-gradient mb-8">
                My Dearest Butki...
              </h1>
              
              <div className="space-y-6 text-lg font-quicksand text-foreground/80 leading-relaxed max-w-3xl mx-auto">
                <p>You unlocked the secret! Just like how you always find a way to unlock joy and happiness in every fight we did and every problem we faced. 🗝️✨</p>
                
                <p>Today isn't just about celebrating another year of your amazing life - it's about celebrating for  the incredible person you are and the beautiful bond we share.</p>
                
                <p>You are listener in the tough times, the reason of my happiness, my everything, and my source of endless laughter. Life is infinitely better with you in it! 🌟</p>
                
                <p className="text-xl font-medium text-primary">Thank you for being exactly who you are - absolutely real and pure! 💖</p>
                
                <p>Here's to another year of amazing adventures, silly inside jokes, late-night conversations, and fights that will last a lifetime!</p>
                
                <div className="text-2xl font-fredoka font-bold text-gradient mt-8">Happy Birthday, my cute, sweet Butki! 🎂🎉</div>
                
                <p className="text-lg italic text-foreground/60 mt-6">
                  May this new year bring you all the happiness, love, and magical moments your heart desires! ✨
                </p>
              </div>
              
              <div className="mt-12 text-center">
                <div className="inline-flex items-center gap-2 text-xl font-fredoka text-primary">
                  <Heart size={24} className="floating-heart" />
                  Forever your friend
                  <Heart size={24} className="floating-heart" />
                </div>
                <p className="text-2xl font-fredoka font-bold text-gradient mt-2">
                  Gadha 💖
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>;
  }
  return <section className="py-20 px-8 min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="max-w-2xl mx-auto text-center relative">
        <Lock className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-primary floating-heart" size={48} />
        
        <Card className="p-12 magical-glow bg-white/95 backdrop-blur-sm rounded-3xl">
          <div className="space-y-8">
            <div className="text-5xl">🔐💝</div>
            
            <h2 className="text-4xl font-fredoka font-bold text-gradient">
              Secret Birthday Message
            </h2>
            
            <p className="text-lg font-quicksand text-foreground/80 leading-relaxed">
              There's a special message waiting for you! Solve this riddle to unlock it:
            </p>
            
            <Card className="p-6 bg-accent/20 rounded-2xl">
              <p className="text-xl font-fredoka font-medium text-foreground italic leading-relaxed">
                "I'm the nickname that makes you smile,<br />
                Sweet and short, said with style.<br />
                When Gadha calls you by this name,<br />
                Your heart and mine feel just the same." 💕
              </p>
            </Card>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <Key className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary" size={20} />
                <Input type="text" placeholder="Your answer..." value={answer} onChange={e => setAnswer(e.target.value)} className="pl-12 text-lg rounded-2xl border-2 border-primary/20 focus:border-primary text-center" />
              </div>
              
              <Button type="submit" className="w-full rounded-2xl text-lg font-fredoka font-medium py-3 hover:scale-105 transition-all duration-300">
                Unlock the Message! ✨
              </Button>
            </form>
            
            {showHint && <Card className="p-4 bg-secondary/20 rounded-2xl animate-bounce">
                <p className="text-primary font-quicksand">
                  💡 Hint: It's what I call you with all my love! 
                </p>
              </Card>}
            
            <div className="flex items-center justify-center gap-2 text-sm text-foreground/60">
              <Star className="sparkle" size={16} />
              <span>Think about our special bond...</span>
              <Star className="sparkle" size={16} />
            </div>
          </div>
        </Card>
      </div>
    </section>;
};
export default HiddenMessage;