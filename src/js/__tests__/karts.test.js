import Karts from '../karts';

test('MaestroCard', () => {
    const result = Karts("6761058594070785");

    expect(result).toBe(".MaestroCard");
});

test('JCBCard', () => {
    const result = Karts("3536722356837860");

    expect(result).toBe(".JCBCard");
});

test('DiscoverCard', () => {
    const result = Karts("6011089719783141");

    expect(result).toBe(".DiscoverCard");
});
test('AmexCard', () => {
    const result = Karts("346734230587658");

    expect(result).toBe(".AmexCard");
});