import i18next from "i18next";
import { getStorage } from "minimal-shared/utils";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next, I18nextProvider as Provider } from "react-i18next";
import { fallbackLng, i18nOptions } from "./locales-config";
import CommonAr from "./langs/ar/common.json";
import CommonEn from "./langs/en/common.json";
// ----------------------------------------------------------------------

/**
 * [1] localStorage
 * Auto detection:
 * const lng = getStorage('i18nextLng')
 */
const lng = getStorage("i18nextLng", fallbackLng) as string;

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    ...i18nOptions(lng),
    resources: {
      en: {
        common: CommonEn,
      },
      ar: {
        common: CommonAr,
      },
    },
    detection: { caches: ["localStorage"] },
  });

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export function I18nProvider({ children }: Props) {
  return <Provider i18n={i18next}>{children}</Provider>;
}

export function getCurrentLang() {
  return i18next.language;
}

type AvailableLangTextObj = {
  en?: string;
  ar?: string;
};

export function getCurrentLangText(
  obj: AvailableLangTextObj,
  options?: {
    fallbackLng?: keyof AvailableLangTextObj;
    customFallbackText?: AvailableLangTextObj;
  }
) {
  const currentLang = getCurrentLang() as keyof AvailableLangTextObj;

  if (obj[currentLang]) {
    return obj[currentLang];
  }

  if (options?.customFallbackText) {
    return options.customFallbackText[currentLang];
  }

  if (fallbackLng && obj[fallbackLng]) {
    return obj[fallbackLng];
  }

  //fallback to en
  if (obj.en) {
    return obj.en;
  }

  return "";
}

export const tFn = i18next.t.bind(i18next);
