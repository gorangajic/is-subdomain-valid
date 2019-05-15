const isSubdomainValid = require('./');

const valid = [
    'test',
    'something-something',
    '123test',
    'awesome-subdomain',
    'SuBsubsub',
    'coca-cola',
    'pepsi',
    'otl',
    'otl-ventures',
];

const invalid = [
    'with space',
    'something.something',
    '#qw3',
    'letter@3',
    'me2!9',
    'S<>ee',
    'Trala/la',
    'dot.dot.dot',
    ' something',
    'something ',
    '+e',
    'e+',
    'e3%',
];

valid.forEach((subdomain) => {
    it(`should mark \`${subdomain}\` as valid`, () => {
        expect(isSubdomainValid(subdomain)).toBe(true);
    });
});

invalid.forEach((subdomain) => {
    it(`should mark \`${subdomain}\` as invalid`, () => {
        expect(isSubdomainValid(subdomain)).toBe(false);
    });
});
