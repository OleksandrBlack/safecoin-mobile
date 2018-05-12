// @flow
import type { TRANSLATION_OBJ } from '../types'

export const UKRAINE_TRANSLATION: TRANSLATION_OBJ = {
  General: {
    loading: 'завантаження...',
    address: 'Адрес',
    privateKey: 'Приватний ключ',
    cancel: 'Відмінити',
    fees: 'Комісія',
    version: 'Версія',
    in: 'Зайшло', // still sounds wrong but I've checked a lot of different BTC wallets and it's really bad everywhere.
    out: 'Пішло' // still sounds wrong but I've checked a lot of different BTC wallets and it's really bad everywhere.
  },
  MainPage: {
    title: 'SafeCoin Гаманець',
    value: 'На рахунку',
    send: 'Відправити',
    received: 'Отримано',
    sent: 'Надіслано',
    noTxFound: 'Не знайдена історія транзакцій.',
    noConnection: 'У зєднанні відмовлено.'
  },
  AddressInfoPage: {
    copyToClipboard: 'Копіювати адресу'
  },
  SendPage: {
    title: 'Відправити SAFE',
    payTo: 'Заплатити на',
    amountToPay: 'Сумма до оплати',
    balance: 'Баланс',
    networkFee: 'Комісія мережі',
    slowTx: 'Повільно',
    fastTx: 'Швидко',
    from: 'З адреси',
    toAddress: 'На адресу',
    amount: 'Кількість',
    max: 'Макс',
    send: 'Відправити',
    txSuccessful: 'Транзакція успішна! Натисніть сюди щоб переглянути транзакцію.',
    confirmSend: 'Так, Я хочу відправити SAFE',
    invalidAddress: 'Неправильна адреса. Поки підтримуються тільки прозорі адреси.',
    invalidAmount: 'Невірна сума.',
    invalidFee: 'Невірна комісія.',
    zeroAmount: 'Кількість SAFE повинно бути більше 0.',
    notEnoughSAFE: 'На гаманці недостатньо підтвердженого SAFE для транзакції.',
    noCameraPermissions: 'Камера не дозволена. Ви можете дозволити доступ до камери в налаштуваннях.'
  },
  TxDetailPage: {
    txid: 'Номер транзакції',
    blockhash: 'Хеш блоку',
    blockheight: 'Висота блоку',
    confirmations: 'Підтвердження'
  },
  SettingsPage: {
    title: 'Налаштування',
    language: 'Мова',
    currency: 'Валюта',
    secretPhrase: 'Показати секретну фразу',
    showPrivateKeys: 'Показати приватні ключі',
    recoverExistingWallet: 'Відновити існуючий гаманець',
    current: 'Зараз'
  },
  SecretPhrasePage: {
    title: 'Секретна фраза'
  },
  ShowPrivateKeyPage: {
    title: 'Приватні ключі'
  },
  RecoverExistingWalletPage: {
    title: 'Відновити існуючий гаманець',
    secretPhrase: 'Секретна фраза',
    textareaPlaceholder: 'секретна фраза. мін. 16 символів',
    confirmUnderstand: 'Я розумію що при відновленні гаманця поточний гаманець буде знищений',
    recover: 'Відновити'
  },
  AboutPage: {
    title: 'Про програму'
  },
  PinPage: {
    changePinTitle: 'Змінити PIN',
    newPinPageTitle: 'Налаштування SafeCoin Гаманця',
    verifyPinPageTitle: 'SafeCoin Гаманець підтвердження PIN',
    setupNewPin: 'Введіть новий PIN',
    reenterPin: 'Повторіть ваш PIN',
    pinsNotSimilar: 'Введені PIN-и не збігаються',
    invalidPin: 'Невірний PIN',
    enterYourPin: 'Введіть PIN'
  },
  ContactsPage: {
    contacts: 'Контакти',
    contactsName: 'Імя',
    contactsAddress: 'Адреса',
    noContactsFound: 'Контакти не знайдені.'
  }
}
