import { getAliases } from '../src/index.js';

test('includes the original full name', () => {
  let list = getAliases("William Randolph Hearst");
  expect(list).toContain("william randolph hearst");
});

test('abbreviates tussenvoegsels', () => {
  let list = getAliases("Jan Jacob Van Den Heiden");
  expect(list).toContain("jan jacob vd heiden");
});

test('Does not transpose a single name', () => {
  let list = getAliases("Dave");
  expect(list).not.toContain(", Dave");
  expect(list).not.toContain(", dave");
});

test('Joseph to Joe', () => {
  let list = getAliases("joseph biden");
  expect(list).toContain("joe biden");
});
test('Joe to Joseph', () => {
  let list = getAliases("joe biden");
  expect(list).toContain("joseph biden");
});
test('Mike to Michael', () => {
  let list = getAliases("mike");
  expect(list).toContain("michael");
});
test('Mikey to Michael', () => {
  let list = getAliases("mikey");
  expect(list).toContain("michael");
});
test('Michael to Mike', () => {
  let list = getAliases("michael");
  expect(list).toContain("mike");
});
test('Dave to David', () => {
  let list = getAliases("dave biden");
  expect(list).toContain("david biden");
});
