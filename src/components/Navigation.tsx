import React, { useState } from 'react';
import { Heart, Camera, List, MessageCircle, Gift, Home, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  currentSection: string;
  onNavigate: (section: string) => void;
}

const Navigation = ({ currentSection, onNavigate }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { id: 'welcome', label: 'Home', icon: Home },
    { id: 'gallery', label: 'Smiles', icon: Camera },
    { id: 'love-list', label: '10 Things', icon: List },
    { id: 'poem', label: 'Poems', icon: Heart },
    { id: 'messages', label: 'Wishes', icon: MessageCircle },
    { id: 'secret', label: 'Secret', icon: Gift }
  ];

  const handleNavigate = (section: string) => {
    onNavigate(section);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-4">
      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <div className="bg-white/90 backdrop-blur-md rounded-full px-6 py-3 magical-glow mx-auto w-fit">
          <div className="flex items-center gap-2 lg:gap-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentSection === item.id;
              
              return (
                <Button
                  key={item.id}
                  variant="ghost"
                  size="sm"
                  onClick={() => onNavigate(item.id)}
                  className={`rounded-full font-quicksand font-medium transition-all duration-300 px-3 lg:px-4 ${
                    isActive 
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                      : 'text-foreground/70 hover:text-primary hover:bg-primary/10'
                  }`}
                >
                  <Icon size={16} className="mr-1 lg:mr-2" />
                  <span className="text-sm lg:text-base">{item.label}</span>
                  {isActive && <Heart size={12} className="ml-1 floating-heart" />}
                </Button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <div className="bg-white/90 backdrop-blur-md rounded-full magical-glow mx-auto w-fit">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-full p-3 font-quicksand font-medium transition-all duration-300"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
        
        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-md rounded-3xl p-4 magical-glow min-w-48">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentSection === item.id;
                
                return (
                  <Button
                    key={item.id}
                    variant="ghost"
                    size="sm"
                    onClick={() => handleNavigate(item.id)}
                    className={`rounded-full font-quicksand font-medium transition-all duration-300 justify-start ${
                      isActive 
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                        : 'text-foreground/70 hover:text-primary hover:bg-primary/10'
                    }`}
                  >
                    <Icon size={18} className="mr-3" />
                    {item.label}
                    {isActive && <Heart size={14} className="ml-auto floating-heart" />}
                  </Button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;