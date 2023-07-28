import { getAliases } from '../src/index.js';

test('includes the original full name', () => {
  let list = getAliases("William Randolph Hearst");
  expect(list).toContain("William Randolph Hearst");
});

test('abbreviates tussenvoegsels', () => {
  let list = getAliases("Jan Jacob Van Den Heiden");
  expect(list).toContain("Jan Jacob vd Heiden");
});

test('Does not transpose a single name', () => {
  let list = getAliases("Dave");
  expect(list).not.toContain(", Dave");
});
