'use client';

import { createI18nClient } from 'next-international/client';
import { useEffect } from 'react';

export const { useI18n, useScopedI18n, I18nProvider, useChangeLocale, useCurrentLocale } = createI18nClient({
  en: () => import('./en'),
  es: () => import('./es'),
});

export function useLocale() {
    const locale = useCurrentLocale();
    return locale;
}

export function useSetLocale() {
    const changeLocale = useChangeLocale();
    return changeLocale;
}

export function I18nClientProvider({ children }: { children: React.ReactNode }) {
    const setLocale = useSetLocale();

    useEffect(() => {
        const browserLang = navigator.language.split('-')[0];
        if (browserLang === 'es') {
            setLocale('es');
        } else {
            setLocale('en');
        }
    }, [setLocale]);

    return <>{children}</>;
}
