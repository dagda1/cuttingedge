/* eslint-disable @typescript-eslint/no-unused-vars */
import { set } from './set';

describe('get translations', () => {
  const translations: any = {};

  test.each`
    setter                                                                 | selector                             | expected                               | message
    ${set(translations, 'No', 'No')}                                       | ${translations.No}                   | ${'No'}                                | ${'top level object'}
    ${set(translations, 'About.heading', 'About Disclosure Scotland')}     | ${translations.About.heading}        | ${'About Disclosure Scotland'}         | ${'nested'}
    ${set(translations, 'Address.townIsRequired', 'Enter a town or city')} | ${'Enter a town or city'}            | ${translations.Address.townIsRequired} | ${'last property'}
    ${set(translations, 'Address.fook.message', 'x')}                      | ${translations.Address.fook.message} | ${'x'}                                 | ${'3rd level nesting'}
  `('subject:$subject is $expected, //$message', ({ _, selector, expected }) => {
    expect(selector).toBe(expected);
  });
});
