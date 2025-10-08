import React, { useEffect, useState } from 'react';
import { Heart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
interface WelcomePageProps {
  onEnter: () => void;
}
const WelcomePage = ({
  onEnter
}: WelcomePageProps) => {
  const [confetti, setConfetti] = useState<Array<{
    id: number;
    emoji: string;
    delay: number;
  }>>([]);
  useEffect(() => {
    // Generate confetti elements
    const confettiItems = [];
    const emojis = ['🎉', '🎂', '🎈', '🌟', '💖', '🎊'];
    for (let i = 0; i < 20; i++) {
      confettiItems.push({
        id: i,
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
        delay: Math.random() * 3
      });
    }
    setConfetti(confettiItems);
  }, []);
  return <div className="min-h-screen birthday-gradient flex items-center justify-center relative overflow-hidden">
      {/* Floating confetti */}
      {confetti.map(item => <div key={item.id} className="absolute confetti-animation text-2xl" style={{
      left: `${Math.random() * 100}%`,
      animationDelay: `${item.delay}s`,
      top: '-50px'
    }}>
          {item.emoji}
        </div>)}
      
      {/* Floating hearts and stars */}
      <Heart className="absolute top-20 left-20 text-primary floating-heart" size={30} />
      <Star className="absolute top-32 right-32 text-accent sparkle" size={25} />
      <Heart className="absolute bottom-40 left-40 text-secondary floating-heart" size={20} />
      <Star className="absolute bottom-20 right-20 text-primary sparkle" size={35} />
      <Heart className="absolute top-1/2 left-10 text-accent floating-heart" size={25} />
      <Star className="absolute top-1/3 right-10 text-secondary sparkle" size={30} />

      {/* Main content */}
      <div className="text-center z-10 px-8">
        <div className="magical-glow bg-white/90 rounded-3xl p-12 max-w-2xl mx-auto backdrop-blur-sm">
          <h1 className="text-6xl font-fredoka font-bold text-gradient mb-6 bounce-gentle">
            Happy Birthday, Butki! 
          </h1>
          <div className="text-2xl font-quicksand font-semibold text-primary mb-4">🎂 5 August 🎂</div>
          <div className="text-5xl mb-6">🎉🎂</div>
          <p className="text-xl text-foreground/80 font-quicksand mb-4 leading-relaxed italic">"The best days of your life are the ones that, in the end, you spent being truly yourself."</p>
          <p className="text-xl text-foreground/80 font-quicksand mb-8 leading-relaxed">Today is all about you, my amazing best friend ! Get ready for a magical birthday surprise filled with love, memories, and all your favorite things! ✨</p>
          <Button onClick={onEnter} className="px-8 py-4 text-lg font-fredoka font-medium rounded-full magical-glow hover:scale-105 transition-all duration-300" size="lg">
            Let's Celebrate! 🎊
          </Button>
        </div>
      </div>
    </div>;
};
export default WelcomePage;