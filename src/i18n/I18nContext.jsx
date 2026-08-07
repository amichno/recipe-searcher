import React, { createContext, useContext, useMemo, useState } from "react";
import { translations, LOCALES } from "./translations";

const I18nContext = createContext(null);

function getByPath(obj, path) {
  return path
    .split(".")
    .reduce((acc, key) => (acc == null ? undefined : acc[key]), obj);
}

const FALLBACK_LOCALE = "en";

export function I18nProvider({ children, defaultLocale = FALLBACK_LOCALE }) {
  const [locale, setLocale] = useState(
    LOCALES.includes(defaultLocale) ? defaultLocale : FALLBACK_LOCALE
  );

  const t = useMemo(() => {
    return (path) => {
      const value =
        getByPath(translations[locale], path) ??
        getByPath(translations[FALLBACK_LOCALE], path);
      return value ?? path;
    };
  }, [locale]);

  const value = useMemo(
    () => ({ locale, setLocale, t, locales: LOCALES }),
    [locale, t]
  );

  return (
    <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return ctx;
}
