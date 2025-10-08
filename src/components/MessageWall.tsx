import React, { useState } from 'react';
import { Heart, Star, Send, MessageCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface Message {
  id: number;
  name: string;
  message: string;
  timestamp: Date;
}

const MessageWall = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      name: "Gadha",
      message: "Happy Birthday, Butki! 🎉\nYou're the laughter in my chaos, the calm in my mess, and the heart of every good moment.\nStay real, stay crazy, stay you.\nWishing you all the happiness you unknowingly give to everyone else — and more.\n\nWith all my heart, always. 💛",
      timestamp: new Date()
    },
    {
      id: 2,
      name: "Tanya",
      message: "Happy birthday, Vishakha! 🎉 You're an amazing friend and an incredible person. I'm so lucky to have you in my life. Here's to another year of fun, laughter, and making memories together! May your day be filled with love, cake, and all your favorite things. I hope your year ahead is filled with happiness and adventure. Love you, bestie! 💕",
      timestamp: new Date()
    },
    {
      id: 3,
      name: "Ruchi",
      message: "Wishing you a very happy birthday behena! May this special day bring you joy, relaxation, and a chance to recharge. May your birthday be filled with celebration and cheer. 🎉",
      timestamp: new Date()
    },
    {
      id: 4,
      name: "Maa",
      message: "Happy birthday to my sweet daughter! As you celebrate another year of life, I want you to know how much you mean to me. You're my sunshine, my joy, and my everything. I'm so grateful for the laughter, tears, and memories we've shared. I hope your birthday is filled with love, happiness, and all your favorite things. May this year bring you growth, success, and fulfillment. I love you more than words can say! ❤️",
      timestamp: new Date()
    },
    {
      id: 5,
      name: "Palak",
      message: "Happy brithday vishaka God's give you everything you want.",
      timestamp: new Date()
    },
    {
      id: 6,
      name: "Shabnam",
      message: "Happy Birthday, Vishakha! On this special day, I want to remind you how truly amazing you are. Your kindness, strength, and positivity inspire everyone around you. I hope this new chapter of your life brings you endless happiness, exciting opportunities, and the courage to chase all your dreams. May every moment be filled with laughter, love, and unforgettable memories. Remember, no matter where life takes you, you have so many people who believe in you and cherish you. Have a fantastic birthday and a wonderful year ahead!",
      timestamp: new Date()
    },
    {
      id: 7,
      name: "Mohini",
      message: "Happy birthday Vishaka 🍫🍫🥰🥰",
      timestamp: new Date()
    }
  ]);
  
  const [newName, setNewName] = useState('');
  const [newMessage, setNewMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newName.trim() && newMessage.trim()) {
      const message: Message = {
        id: Date.now(),
        name: newName.trim(),
        message: newMessage.trim(),
        timestamp: new Date()
      };
      setMessages([message, ...messages]);
      setNewName('');
      setNewMessage('');
    }
  };

  return (
    <section className="py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 relative">
          <MessageCircle className="absolute -top-4 left-1/2 transform -translate-x-16 text-primary floating-heart" size={28} />
          <Star className="absolute -top-2 left-1/2 transform translate-x-16 text-accent sparkle" size={24} />
          
          <h2 className="text-5xl font-fredoka font-bold text-gradient mb-4">
            Birthday Wishes Wall
          </h2>
          <p className="text-xl text-foreground/70 font-quicksand">
            Leave your special birthday message for Butki! 💌
          </p>
        </div>

        {/* Add new message form */}
        <Card className="p-8 mb-12 magical-glow bg-white/95 backdrop-blur-sm rounded-3xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                placeholder="Your name..."
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="text-lg rounded-2xl border-2 border-primary/20 focus:border-primary"
              />
            </div>
            <div>
              <Textarea
                placeholder="Write your birthday wishes for Butki..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="text-lg rounded-2xl border-2 border-primary/20 focus:border-primary min-h-[120px] resize-none"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full rounded-2xl text-lg font-fredoka font-medium py-3 hover:scale-105 transition-all duration-300"
              disabled={!newName.trim() || !newMessage.trim()}
            >
              <Send size={20} className="mr-2" />
              Send Birthday Wishes! 🎉
            </Button>
          </form>
        </Card>

        {/* Messages display */}
        <div className="space-y-6">
          {messages.map((message) => (
            <Card 
              key={message.id} 
              className="p-6 magical-glow bg-white/90 backdrop-blur-sm rounded-3xl hover:scale-105 transition-all duration-300 relative"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Heart className="text-primary" size={20} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-fredoka font-semibold text-lg text-primary">
                      {message.name}
                    </h4>
                    <Star className="text-accent sparkle" size={16} />
                  </div>
                  <p className="text-foreground/80 font-quicksand leading-relaxed">
                    {message.message}
                  </p>
                </div>
              </div>
              <Heart className="absolute top-4 right-4 text-accent/50 floating-heart" size={18} />
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg font-quicksand text-foreground/60 italic">
            "Surrounded by love from everyone who cares about you!" 💕
          </p>
        </div>
      </div>
    </section>
  );
};

export default MessageWall;