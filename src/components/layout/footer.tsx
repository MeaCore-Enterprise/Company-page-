'use client';

import { Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useI18n } from '@/locales/client';

export default function Footer() {
  const t = useI18n();

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center text-center">
          <a href="#" className="flex items-center justify-center gap-3 mb-6">
            <Image src="/logo.png" alt="MeaCore Icon" width={48} height={48} className="h-12 w-12 object-contain drop-shadow-sm" style={{ imageRendering: 'high-quality' }} />
            <span className="text-2xl font-extrabold tracking-tight text-foreground">MeaCore</span>
          </a>
          <p className="text-muted-foreground max-w-md mx-auto">
            {t('footer.tagline')}
          </p>
          <div className="flex items-center space-x-4 mt-6">
            <Button variant="ghost" size="icon" asChild>
              <a href="#" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/MeaCore-Enterprise" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="#" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
        
        <hr className="my-6 border-border" />
        <div className="flex justify-center items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}
