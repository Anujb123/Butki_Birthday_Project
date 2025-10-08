import React, { useState } from 'react';
import { Heart, Star, BookOpen } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const PoemAndNotes = () => {
  const [activeTab, setActiveTab] = useState<'hindi' | 'notes'>('hindi');
  const [activePoem, setActivePoem] = useState(0);

  const hindiPoems = [
    {
      title: "चाँद सी",
      verses: [
        "मुझे चाँद देखना पसंद है",
        "उसे चाँद सा दिखना पसंद है,",
        "वो भी अपने दाग नही छुपाती",
        "आँखों में काजल, माथे पर बिंदी नही लगाती",
        "होठों को उन्ही के हाल पर छोड़ देती है,",
        "मुश्कुरके समाज के सारे बाँध तोड़ देती है,",
        "उसे कोन सिखाए सजना सवर्णां!!",
        "उसे कोन सिखाए सजना सवर्णां,",
        "बदल ना जाये इस दुनिया का हाल वरना,",
        "मै खुश हूँ !!",
        "मै खुश हूँ,",
        "कि वो आईने से अपना हाल नही पूछती,",
        "ये - वो",
        "हाँ - नही",
        "बेफिज़ूल सवाल नही पूछती,",
        "सोचो अगर वो काजल लगाले!!",
        "सोचो अगर वो काजल लगाले,",
        "एक दफा बस उल्जे बाल सुलझाले,",
        "ये जमाना अपना रुख न बदल दे,",
        "हर कोई उसके साथ न चलदे,",
        "ये हवाएँ रुक न जाए, उसे देखने को कहीं",
        "मैने देखा है जबसे",
        "मै हूँ वहीं..."
      ]
    },
    {
      title: "तेरे साथ",
      verses: [
        "Tu gussa hai, thoda sa rooth gayi hai",
        "Naraz hai tu, kuch keh bhi nahi rahi hai",
        "",
        "Tere bina toh kuch acha nhi hai lekin",
        "Tere saath har pal bohot khubsurat lagta hai",
        "",
        "Tu hai pyari, thodi ziddi, thoda gussa bhi hai",
        "Par us gusse ke peeche ek kahin ek yaar chhupa hai",
        "",
        "Haan mai tujhe bohot pareshan kar hoon",
        "Par tu muskuraaye, bas yahi toh chahta hoon",
        "",
        "Main bohot natak bhi karta hoon",
        "Par har waqt teri fikr bhi toh karta hoon",
        "",
        "Main tujhe baandhna nahi chahta",
        "Sirf saath chalna chahta hoon",
        "Har dukh se bachake",
        "Har khushi mein tere saath hansna chahta hoon",
        "",
        "Teri tension ka tujhse pehle ilaaj banna chahta hoon",
        "Har thakan mein tera aaraam banna chahta hoon",
        "",
        "Tere saath guzare pal sapne se lagte hain",
        "Bin terese baat kare toh jaise pure din bhi adhoore se lagte hain",
        "",
        "Teri ek muskaan se pura din khilta hai",
        "Tu agr ruthi ho naraz ho toh pura din dil bechain rehta hai",
        "",
        "Tujhse dur hone se drr lagta hai",
        "Bas ek baar muskura de, Wapas baat kar le",
        "Kyunki tu ruthti hai toh, Khushi jaise kho si jaati hai"
      ]
    },
    {
      title: "मेरी बुटकी",
      verses: [
        "मेरी बुटकी — मेरी सबसे खास दोस्त",
        "",
        "हर दिन की शुरुआत तेरे बिना अधूरी लगती है,",
        "तेरी एक हँसी से ही तो मेरी सुबह पूरी लगती है।",
        "लड़ते हैं, झगड़ते हैं — पर तू ही है जिससे सबसे ज़्यादा बात करनी है,",
        "तेरे बिना तो दिन जैसे चाय बिना शक्कर सी लगती है।",
        "",
        "तू है वो , जिससे हर बात कह सकूं बेझिझक,",
        "तेरी हर हाँ-ना में भी मिलती है मुझे सुकून की झलक।",
        "कभी तू नाराज़ होती है, तो दिल थोड़ा सा गुमसुम हो जाता है,",
        "पर तेरी एक \"ओये गधे \" से सब कुछ फिर से मुस्कुरा जाता है।",
        "",
        "तेरा साथ है जैसे किसी कहानी की सबसे प्यारी लाइन,",
        "तेरे भरोसे से ही तो लगता है कि हर चीज़ होगी मुमकिन, हर बार, हर टाइम।",
        "तू कर सकती है सब कुछ — तुझमें है वो ताक़त,",
        "जो गिरते हुए पल को भी बना दे एक हिम्मत की बात।",
        "",
        "तेरी दोस्ती है मेरी सबसे प्यारी चीज़,",
        "जिसका कोई विकल्प नहीं — न कल था, न आज है |",
        "बुटकी, तेरे जैसी दोस्त मिलना किस्मत की बात है,",
        "और मुझे ये किस्मत हर दिन तुझमें नज़र आती है।"
      ]
    }
  ];

  const notes = [
    {
      title: "Ayeinve Rusya na kr",
      content: "Tumko toh uchal kr aasman chulena chahiyeh,\nMar tum toh yun udass bethi ho,\nTum toh kabhi kisise km nhi ho,\nPhr tum kyun yun udass bethi ho,\nTumko toh uchal kr aasaman chilena chahiyeh.."
    },
    {
      title: "Girl who doesn't need adornment to shine",
      content: "I've always loved watching the moon—but I never knew I'd meet someone who carries the same quiet beauty, the same fearless flaws. You don't hide your scars; you wear them with grace. You don't follow the world's rules of how to be—you redefine them.\nYour simplicity is powerful, your silence is comforting, and your presence… it changes the rhythm of everything around. You don't need kajal to make your eyes speak, or words to make your heart understood.\nSince I've seen you, I've stayed—right there, still, in awe."
    },
    {
      title: "One who holds my peace in her smile",
      content: "I know you're upset, a little distant, maybe even silent—but even in your silence, I feel everything.\nWithout you, the days lose their color. But with you, every moment feels like it belongs to something beautiful.\n\nYou're stubborn, yes. You get angry too. But behind all that, I know there's someone who deeply cares, someone who's mine.\nI tease you, I annoy you, but it's only because your smile means more to me than words can say.\n\nI don't want to control you, just walk beside you.\nThrough every storm, every joy—I just want to be there.\nTo be your calm when you're overwhelmed, your comfort when you're tired.\n\nThe moments we share feel like dreams.\nAnd the days without your voice feel painfully incomplete.\n\nSo if you're upset, just smile once again… talk to me once again.\nBecause when you're not okay—nothing feels right."
    },
    {
      title: "My Most Precious Friend",
      content: "Every day feels brighter with just your smile.\nWe fight, we tease, but there's no one I'd rather talk to.\nYour presence brings peace, your words bring comfort,\nAnd even your \"Oye gadhe\" can fix the worst of days.\n\nYou're strong, real, and irreplaceable.\nHaving you as my friend feels like the luckiest thing in my life — every single day."
    }
  ];

  return (
    <section className="py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 relative">
          <BookOpen className="absolute -top-4 left-1/2 transform -translate-x-16 text-primary floating-heart" size={24} />
          <Star className="absolute -top-2 left-1/2 transform translate-x-16 text-accent sparkle" size={20} />
          
          <h2 className="text-5xl font-fredoka font-bold text-gradient mb-4">
            Poems & Sweet Notes
          </h2>
          <p className="text-xl text-foreground/70 font-quicksand">
            Written from the heart, just for you 💌
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button
            variant={activeTab === 'hindi' ? 'default' : 'outline'}
            onClick={() => setActiveTab('hindi')}
            className="rounded-full px-8 py-3 font-quicksand font-medium transition-all duration-300"
          >
            <Heart className="mr-2" size={20} />
            Hindi Poems
          </Button>
          
          <Button
            variant={activeTab === 'notes' ? 'default' : 'outline'}
            onClick={() => setActiveTab('notes')}
            className="rounded-full px-8 py-3 font-quicksand font-medium transition-all duration-300"
          >
            <Star className="mr-2" size={20} />
            Sweet Notes
          </Button>
        </div>

        {activeTab === 'hindi' && (
          <div className="space-y-8">
            <div className="flex justify-center gap-2 mb-8">
              {hindiPoems.map((_, index) => (
                <Button
                  key={index}
                  variant={activePoem === index ? 'default' : 'outline'}
                  onClick={() => setActivePoem(index)}
                  className="rounded-full px-6 py-2 font-quicksand font-medium transition-all duration-300"
                  size="sm"
                >
                  {index + 1}
                </Button>
              ))}
            </div>
            
            <Card className="max-w-4xl mx-auto p-8 magical-glow bg-white/95 backdrop-blur-sm">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-fredoka font-bold text-gradient mb-2">
                  {hindiPoems[activePoem].title}
                </h3>
              </div>
              
              <div className="space-y-2 text-center">
                {hindiPoems[activePoem].verses.map((verse, index) => (
                  <p key={index} className="text-lg font-quicksand text-foreground/80 leading-relaxed">
                    {verse}
                  </p>
                ))}
              </div>
              
              <div className="flex justify-center mt-8">
                <Heart className="text-primary floating-heart" size={24} />
              </div>
            </Card>
          </div>
        )}

        {activeTab === 'notes' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {notes.map((note, index) => (
              <Card 
                key={index}
                className="p-8 magical-glow bg-white/95 backdrop-blur-sm hover:scale-105 transition-all duration-500 group"
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <Heart className="text-primary" size={24} />
                    </div>
                    <h4 className="text-2xl font-fredoka font-bold text-gradient">
                      {note.title}
                    </h4>
                  </div>
                  
                  <p className="text-lg font-quicksand text-foreground/80 leading-relaxed">
                    {note.content}
                  </p>
                </div>
                
                <Star className="absolute top-4 right-4 text-accent/50 opacity-0 group-hover:opacity-100 sparkle transition-opacity duration-300" size={20} />
              </Card>
            ))}
          </div>
        )}

        <div className="text-center mt-16">
          <p className="text-lg font-quicksand text-foreground/60 italic">
            "Every word written with love and friendship in mind" 💕
          </p>
        </div>
      </div>
    </section>
  );
};

export default PoemAndNotes;