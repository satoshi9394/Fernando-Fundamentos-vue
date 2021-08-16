describe('Example component', () => {
  test('Debe de ser mayor a 10', () => {
    let valor = 9;
    valor = valor + 2;
    expect(valor).toBeGreaterThan(10);
  });
});