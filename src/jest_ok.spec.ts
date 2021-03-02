const callback = async (): Promise<string> => {
  return 'ok';
};

test('should be ok', () => {
  expect(2 + 2).toBe(4);
});

test('should be return ok', async () => {
  expect(await callback()).toBe('ok');
});
