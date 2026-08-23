import { createContext, useContext, useState, PropsWithChildren, useCallback } from "react";
import { translations, Lang } from "../config";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  config: typeof translations.en;
};

const LanguageContext = createContext<Ctx | null>(null);

const getInitial = (): Lang => {
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "en" || saved === "ru") return saved;
  } catch {
    /* ignore */
  }
  return "en";
};

export const LanguageProvider = ({ children }: PropsWithChildren) => {
  const [lang, setLangState] = useState<Lang>(getInitial);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("lang", l);
    } catch {
      /* ignore */
    }
  }, []);

  const toggle = useCallback(() => {
    setLang(lang === "en" ? "ru" : "en");
  }, [lang, setLang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, config: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = (): Ctx => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
};

// convenience: just the content object
export const useConfig = () => useLang().config;
