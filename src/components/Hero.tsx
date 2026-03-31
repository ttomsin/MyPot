import { useState, useRef, useEffect, ChangeEvent } from 'react';
import { Camera, Upload } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  const [image, setImage] = useState<string | null>('/profile.png');
  const [imageError, setImageError] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const savedImage = localStorage.getItem('portfolio-profile-image');
    if (savedImage) {
      setImage(savedImage);
      setImageError(false);
    }
  }, []);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setImage(base64String);
        setImageError(false);
        localStorage.setItem('portfolio-profile-image', base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="pt-32 pb-16 md:pt-48 md:pb-32 px-6 max-w-5xl mx-auto">
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-zinc-600 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for new opportunities
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 mb-6">
            Hi, I'm <span className="text-zinc-500">Oretan Thompson Bolaji</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 max-w-2xl leading-relaxed mb-8">
            Software developer specializing in backend engineering, artificial intelligence, mobile applications, and developer tools. Building practical solutions for real-world problems.
          </p>
          <div className="flex items-center justify-center md:justify-start gap-4">
            <a 
              href="#projects" 
              className="px-6 py-3 bg-zinc-900 text-white rounded-lg font-medium hover:bg-zinc-800 transition-colors"
            >
              View Projects
            </a>
            <a 
              href="https://github.com/ttomsin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-zinc-900 border border-zinc-200 rounded-lg font-medium hover:bg-zinc-50 transition-colors"
            >
              GitHub Profile
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative group"
        >
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-xl bg-zinc-100 relative">
            {image && !imageError ? (
              <img 
                src={image} 
                alt="Oretan Thompson Bolaji" 
                className="w-full h-full object-cover" 
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-zinc-400">
                <Camera className="w-12 h-12 mb-2 opacity-50" />
                <span className="text-sm font-medium">Upload Photo</span>
              </div>
            )}
            
            <div 
              className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer backdrop-blur-sm"
              onClick={() => fileInputRef.current?.click()}
            >
              <div className="flex flex-col items-center text-white">
                <Upload className="w-8 h-8 mb-2" />
                <span className="text-sm font-medium">{image ? 'Change Photo' : 'Upload Photo'}</span>
              </div>
            </div>
          </div>
          <input 
            type="file" 
            ref={fileInputRef}
            onChange={handleImageUpload}
            accept="image/*"
            className="hidden"
          />
        </motion.div>
      </div>
    </section>
  );
}
