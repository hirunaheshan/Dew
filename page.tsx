'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ArrowDown, Heart, Sparkles, Gift, Stars, X, Flower2, Camera } from 'lucide-react';
const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
const photo = (path: string) => `${base}${path}`;
const photos = [
 {src:'/photos/look-white.jpg',alt:'Dewmi in a beautiful white dress',note:'Your beautiful smile, my favourite detail ♡',className:'photo-tall'},
 {src:'/photos/look-pink.jpg',alt:'Dewmi in a soft pink dress',note:'A little pink, a lot of magic ✨',className:'photo-tall'},
 {src:'/photos/look-casual.jpg',alt:'Dewmi in a casual outfit',note:'Pretty without even trying',className:'photo-wide'},
 {src:'/photos/together-selfie.jpg',alt:'A happy selfie together',note:'One frame, a thousand feelings',className:'photo-wide'},
 {src:'/photos/bus-selfie.jpg',alt:'A memory together beside a bus',note:'Every little adventure matters',className:'photo-wide'},
 {src:'/photos/together-portrait.jpg',alt:'A portrait together',note:'My favourite kind of picture: us',className:'photo-tall'},
];
const wishes = [
 'May your days be filled with genuine happiness, peaceful moments, and endless reasons to smile.',
 'May every dream you carry in your heart find its way to you, one beautiful step at a time.',
 'May this new chapter bring you exciting adventures, good health, success, and all the love you deserve.',
 'And whatever life brings, never forget how precious and special you are. Keep shining, Dewmi. ♡',
];
export default function Home() {
 const [opened,setOpened]=useState(false);
 const [lightbox,setLightbox]=useState<string|null>(null);
 const [hearts,setHearts]=useState<{left:number;delay:number;size:number}[]>([]);
 const [showFinal,setShowFinal]=useState(false);
 useEffect(()=>{setHearts(Array.from({length:22},(_,i)=>({left:(i*37+8)%100,delay:(i%8)*1.1,size:12+(i%4)*7})));},[]);
 const reveal=()=>{setOpened(true);window.setTimeout(()=>document.getElementById('letter')?.scrollIntoView({behavior:'smooth'}),180);};
 return <main>
  <div className="grain" aria-hidden="true"/>
  <div className="floating-hearts" aria-hidden="true">{hearts.map((h,i)=><Heart key={i} className="float-heart" fill="currentColor" style={{left:`${h.left}%`,animationDelay:`${h.delay}s`,width:h.size,height:h.size}}/>)}</div>
  <section className="hero">
   <div className="hero-glow"/>
   <div className="eyebrow"><Sparkles size={14}/> A LITTLE SURPRISE MADE JUST FOR DEWMI <Sparkles size={14}/></div>
   <p className="script intro">To the girl who makes life brighter...</p>
   <h1>Dewmi<span>♡</span></h1>
   <p className="hero-sub">Today is your day. A little celebration of your smile, your heart, and all the beautiful things that make you <em>you.</em></p>
   <div className="hero-photo-wrap"><div className="hero-photo-frame"><Image src={photo('/photos/together-portrait.jpg')} alt="A favourite photo together" fill priority sizes="(max-width: 700px) 82vw, 420px"/></div><span className="photo-sticker sticker-one">♡</span><span className="photo-sticker sticker-two"><Stars size={23}/></span></div>
   <p className="hero-caption script">A thousand little reasons to celebrate you</p>
   <button className="scroll-cue" onClick={()=>document.getElementById('memories')?.scrollIntoView({behavior:'smooth'})} aria-label="Scroll to memories"><ArrowDown size={18}/></button>
  </section>
  <section className="intro-section" id="memories">
   <div className="section-kicker"><Camera size={14}/> OUR LITTLE MEMORY LANE</div>
   <h2>Some moments,<br/><span className="script">a thousand feelings.</span></h2>
   <p className="section-copy">Dewmi, these are more than photographs. They are little pieces of time I can come back to whenever I want to smile. Tap any picture to see it bigger. ♡</p>
   <div className="gallery">{photos.map((item,i)=><button className={`gallery-card ${item.className} card-${i+1}`} key={item.src} onClick={()=>setLightbox(item.src)} aria-label={`Open photo: ${item.alt}`}><div className="gallery-image"><Image src={photo(item.src)} alt={item.alt} fill sizes="(max-width: 700px) 85vw, 35vw"/></div><span className="gallery-note">{item.note}</span></button>)}</div>
  </section>
  <section className="wish-section"><div className="wish-inner">
   <div className="section-kicker"><Flower2 size={14}/> A WISH FOR YOUR NEW YEAR</div><Gift className="gift-icon" size={31} strokeWidth={1.3}/>
   <h2>More joy.<br/><span className="script">More magic. More Dewmi.</span></h2>
   <div className="wish-list">{wishes.map((wish,i)=><div className="wish-line" key={wish}><span>0{i+1}</span><p>{wish}</p></div>)}</div>
   <p className="script final-wish">You deserve every beautiful thing life has to offer. ♡</p>
  </div></section>
  <section className="letter-section" id="letter"><div className="letter-card">
   <div className="letter-top"><span>A LITTLE LETTER, JUST FOR YOU</span><Heart size={17} fill="currentColor"/></div>
   {!opened?<button className="envelope-button" onClick={reveal}><div className="envelope"><div className="envelope-flap"/><div className="envelope-heart"><Heart fill="currentColor" size={30}/></div></div><span className="open-text">Dewmi, tap to open your letter</span></button>:
    <div className="revealed-letter"><p className="script dear">My dear Dewmi,</p>
     <p>Happy Birthday! ❤️ I wanted to make something a little different for you — a small place filled with some of our memories and a few words from my heart.</p>
     <p>Thank you for being you. For the smiles, the laughs, the little moments, and the memories that become special simply because I got to share them with you. Even the simplest days feel a little more beautiful when you are part of them.</p>
     <p>On your special day, I wish you a life full of happiness, good health, success, and dreams coming true. I hope you always find a reason to smile, even on the difficult days. Never stop being the lovely person you are.</p>
     <p className="script signature">Happy Birthday, Dewmi. You are truly special. ♡</p>
     <button className="replay-button" onClick={()=>setShowFinal(!showFinal)}>{showFinal?'Hide one last surprise':'One last little surprise'}</button>
     {showFinal&&<p className="script final-note">If I could wrap one thing as your gift, it would be a year full of beautiful moments. Keep smiling, birthday girl. ✨</p>}
    </div>}
  </div></section>
  <footer className="footer"><Heart fill="currentColor" size={15}/><p>Made with love, especially for Dewmi.</p><span className="script">Today, tomorrow, and all the lovely days ahead ✨</span></footer>
  {lightbox&&<div className="lightbox" onClick={()=>setLightbox(null)} role="dialog" aria-modal="true" aria-label="Photo preview"><button className="lightbox-close" onClick={()=>setLightbox(null)} aria-label="Close photo"><X/></button><div className="lightbox-image" onClick={e=>e.stopPropagation()}><Image src={photo(lightbox)} alt="Memory enlarged" fill sizes="90vw"/></div></div>}
 </main>;
}
