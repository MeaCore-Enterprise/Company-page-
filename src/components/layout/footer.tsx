'use client';

import { Code, Github, Linkedin, Twitter, Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useI18n, useChangeLocale, useCurrentLocale } from '@/locales/client';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';


export default function Footer() {
  const t = useI18n();
  const changeLocale = useChangeLocale();
  const currentLocale = useCurrentLocale();

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center text-center">
          <a href="#" className="flex items-center gap-2 mb-4">
            <Code className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">MeaCore</span>
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
              <a href="#" aria-label="GitHub">
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
        <div className="flex justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} MeaCore Digital Solutions. {t('footer.rights')}</p>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <Languages className="h-4 w-4 mr-2" />
                {currentLocale.toUpperCase()}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => changeLocale('en')}>
                English
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => changeLocale('es')}>
                Español
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </footer>
  );
}
