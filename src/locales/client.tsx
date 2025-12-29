'use client';

import { createI18nClient } from 'next-international/client';
import { ReactNode } from 'react';

export const { useI18n, useScopedI18n, I18nProvider, useChangeLocale, useCurrentLocale, I18nProviderClient } = createI18nClient({
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
