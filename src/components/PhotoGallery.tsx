import React from 'react';
import { Heart, Star, Camera } from 'lucide-react';
import { Card } from '@/components/ui/card';
const PhotoGallery = () => {
  const photos = [
    { src: "/lovable-uploads/da7d4012-c03c-43f1-b93d-4729e7ac747a.png", caption: "Looking absolutely stunning! ✨" },
    { src: "/lovable-uploads/39083c0b-ff9a-4cc6-89bd-564bce7421f5.png", caption: "Professional and gorgeous as always! 💙" },
    { src: "/lovable-uploads/99b54db1-a38b-4ab1-a5e1-4d6ec74963dc.png", caption: "Collection of smiley faces! 📸" },
    { src: "/lovable-uploads/2538cf4b-fb6a-489d-956c-1b2da55d463b.png", caption: "Eyes that shine with confidence and grace. 💕" },
    { src: "/lovable-uploads/7900c65e-b3e2-432e-bf62-989a2ed3a4a5.png", caption: "Ye Chand se roshan chehre! 🌟" },
    { src: "/lovable-uploads/63d5b87b-20ca-4901-a1b5-b7cd1acb43e6.png", caption: "Your sweetest smiles captured! 😊" },
    { src: "/lovable-uploads/e8ac2276-641e-4d7f-837d-edf36a07a717.png", caption: "That contagious laugh we all love! 😄" },
    { src: "/lovable-uploads/cb52ac01-8ad5-42bf-b929-e77c222f5514.png", caption: "Squad goals with these beautiful souls! 👯‍♀️" },
    { src: "/lovable-uploads/53bd7a84-e96f-4852-92be-c7e9ade377bd.png", caption: "Elegance in every pose! 💙" },
    { src: "/lovable-uploads/b091b70b-9516-423c-a635-80edbeb2b0ce.png", caption: "Natural beauty that shines bright! ✨" }
  ];

  return (
    <section className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 relative">
          <Heart className="absolute -top-4 left-1/2 transform -translate-x-16 text-primary floating-heart" size={24} />
          <Star className="absolute -top-2 left-1/2 transform translate-x-16 text-accent sparkle" size={20} />
          
          <h2 className="text-5xl font-fredoka font-bold text-gradient mb-4">
            Gorgeous Faces and Lovely Smiles
          </h2>
          <p className="text-xl text-foreground/70 font-quicksand flex items-center justify-center gap-2">
            <Camera size={24} />
            Every picture shows the grace, confidence and love
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden rounded-3xl magical-glow hover:scale-105 transition-all duration-500 bg-white/95 backdrop-blur-sm"
            >
              <div className="overflow-hidden">
                <img 
                  src={photo.src} 
                  alt={`Memory ${index + 1}`}
                  className="w-full h-auto object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <p className="text-center text-lg font-quicksand text-foreground/80 flex items-center justify-center gap-2">
                  <Heart size={18} className="text-primary" />
                  {photo.caption}
                  <Heart size={18} className="text-primary" />
                </p>
              </div>
              
              {/* Floating decorations on hover */}
              <Star className="absolute top-4 right-4 text-accent opacity-0 group-hover:opacity-100 sparkle transition-opacity duration-300" size={20} />
              <Heart className="absolute bottom-4 left-4 text-primary opacity-0 group-hover:opacity-100 floating-heart transition-opacity duration-300" size={18} />
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg font-quicksand text-foreground/60 italic">
            "Life is better with friends like you by my side" 💕
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;