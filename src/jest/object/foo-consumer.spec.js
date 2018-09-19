import foo from './foo';
import useFoo from './foo-consumer';

jest.mock('./foo');

test('mock method on object', () => {
    foo.plusone.mockReturnValue(100);
    expect(useFoo(1)).toBe(100);
});