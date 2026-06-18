import { createContext, useContext, useEffect, type ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";
import { t as translate, type DictKey, type Locale } from "./dictionary";

const LocaleContext = createContext<Locale>("es");

export function LocaleProvider({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const locale: Locale = pathname === "/en" || pathname.startsWith("/en/") ? "en" : "es";
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
    }
  }, [locale]);
  return <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>;
}

export const useLocale = () => useContext(LocaleContext);
export const useT = () => {
  const locale = useLocale();
  return (key: DictKey) => translate(key, locale);
};
