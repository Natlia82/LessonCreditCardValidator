import valid from '../validate';

test('valid', () => {
    const result = valid("6304448265776071");

    expect(result).toBe(true);
});

test('not valid', () => {
    const result = valid("111");

    expect(result).toBe(false);
});