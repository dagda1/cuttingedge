import { get } from './get';

const simpleObject = { a: { b: 2 } };
const complexObject = { a: [{ b: { c: 3 } }] };

describe('get', () => {
  test.each`
    subject                                     | expected     | message
    ${get(simpleObject, 'a.b')}                 | ${2}         | ${'simple object access'}
    ${get(complexObject, 'a[0].b.c')}           | ${3}         | ${'get array property'}
    ${get(complexObject, ['a', '0', 'b', 'c'])} | ${3}         | ${'array path syntax'}
    ${get(simpleObject, 'a.b.c', 'default')}    | ${'default'} | ${'default value simple'}
    ${get(complexObject, 'a.b.c', 'default')}   | ${'default'} | ${'default value complex'}
    ${get(complexObject, null as any)}          | ${undefined} | ${'can parse an empty string'}
  `('subject:$subject is $expected, //$message', ({ subject, expected }) => {
    expect(subject).toBe(expected);
  });
});

describe('get translations', () => {
  const translations = {
    About: {
      heading: 'About Disclosure Scotland',
    },
    Accessibility: {
      heading: 'Accessibility',
    },
    Address: {
      anchorManual: 'Enter address manually',
      anchorPostcodeFinder: 'Postcode lookup',
      town: 'City/town',
      townIsInvalid: 'Enter a valid town or city',
      townIsRequired: 'Enter a town or city',
    },
    No: 'No',
    Yes: 'Yes',
  };

  test.each`
    subject                                        | expected                       | message
    ${get(translations, 'About.heading')}          | ${'About Disclosure Scotland'} | ${'nested object'}
    ${get(translations, 'No')}                     | ${'No'}                        | ${'top level object'}
    ${get(translations, 'Address.townIsRequired')} | ${'Enter a town or city'}      | ${'last property'}
  `('subject:$subject is $expected, //$message', ({ subject, expected }) => {
    expect(subject).toBe(expected);
  });
});
