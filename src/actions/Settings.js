// Currencies
export const CURRENCY_safebtc = 'safebtc'
export const CURRENCY_safebtcz = 'safebtcz'
export const CURRENCY_safeltc = 'safeltc'

export const CURRENCIES = [
  CURRENCY_safebtc,
  CURRENCY_safebtcz,
  CURRENCY_safeltc
]

// Languages
export const LANG_AFRIKAANS = 'Afrikaans'
export const LANG_CHINESE = 'Chinese'
export const LANG_DUTCH = 'Dutch'
export const LANG_ENGLISH = 'English'
export const LANG_FILIPINO = 'Filipino'
export const LANG_FINNISH = 'Finnish'
export const LANG_FRENCH = 'French'
export const LANG_GERMAN = 'German'
export const LANG_INDONESIAN = 'Indonesian'
export const LANG_ITALIAN = 'Italian'
export const LANG_NORWEGIAN = 'Norwegian'
export const LANG_PORTUGUESE = 'Portuguese'
export const LANG_RUSSIAN = 'Russian'
export const LANG_UKRAINE = 'Ukraine'
export const LANG_SERBIAN = 'Serbian'
export const LANG_SPANISH = 'Spanish'
export const LANG_SWEDISH = 'Swedish'

export const LANGUAGES = [
  LANG_AFRIKAANS,
  LANG_CHINESE,
  LANG_DUTCH,
  LANG_ENGLISH,
  LANG_FILIPINO,
  LANG_FINNISH,
  LANG_FRENCH,
  LANG_GERMAN,
  LANG_INDONESIAN,
  LANG_ITALIAN,
  LANG_NORWEGIAN,
  LANG_PORTUGUESE,
  LANG_RUSSIAN,
  LANG_UKRAINE,
  LANG_SERBIAN,
  LANG_SPANISH,
  LANG_SWEDISH
]

// Actions
export const SET_LANGUAGE = 'SET_LANGUAGE'
export const SET_CURRENCY = 'SET_CURRENCY'
export const SET_INSIGHT_API = 'SET_INSIGHT_API'
export const SET_WALLET_PIN = 'SET_WALLET_PIN'

export function setWalletPin (pin) {
  return {
    type: SET_WALLET_PIN,
    pin
  }
}

export function setLanguage (language) {
  return {
    type: SET_LANGUAGE,
    language
  }
}

export function setCurrency (currency) {
  return {
    type: SET_CURRENCY,
    currency
  }
}

export function setInsightAPI (insightAPI) {
  return {
    type: SET_INSIGHT_API,
    insightAPI
  }
}
