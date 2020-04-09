// import { translate } from '../../translations/config/i18nConfig';

beforeEach(() => {
  jest.resetModules();
});

describe('Translation', () => {
  it('Catalan location', () => {
    jest.mock('expo-localization', () => ({
      locales: ['ca-Es'],
      isRTL: false,
    }));
    /* eslint-disable global-require */
    const tr = require('../translations/config/i18nConfig');
    /* eslint-enable global-require */
    expect(tr.translate('test')).toBe('Bon dia!');
  });

  it('Spanish location', () => {
    jest.mock('expo-localization', () => ({
      locales: ['es-Es'],
      isRTL: false,
    }));
    /* eslint-disable global-require */
    const tr = require('../translations/config/i18nConfig');
    /* eslint-enable global-require */
    expect(tr.translate('test')).toBe('Buenos dias!');
  });

  it('English location', () => {
    jest.mock('expo-localization', () => ({
      locales: ['en-En'],
      isRTL: false,
    }));
    /* eslint-disable global-require */
    const tr = require('../translations/config/i18nConfig');
    /* eslint-enable global-require */
    expect(tr.translate('test')).toBe('Good Morning!');
  });

  it('Fallback location', () => {
    jest.mock('expo-localization', () => ({
      locales: ['ar-Es'],
      isRTL: false,
    }));
    /* eslint-disable global-require */
    const tr = require('../translations/config/i18nConfig');
    /* eslint-enable global-require */
    expect(tr.translate('test')).toBe('Good Morning!');
  });

  it('Empty location', () => {
    jest.unmock('expo-localization');
    /* eslint-disable global-require */
    const tr = require('../translations/config/i18nConfig');
    /* eslint-enable global-require */
    expect(tr.translate('test')).toBe('Good Morning!');
  });
});
