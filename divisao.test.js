const divisao = require("./divisao");

test('Divisão de 10 / 2 deve ser igual a 5', () => {
    expect(divisao(10,2)).toBe(5)
})

test('Divisão de 9 / 3 deve ser igual a 3', () => {
    expect(divisao(9,3)).toBe(3)
})

test('Divisão de -9 / -3 deve ser igual a 3', () => {
    expect(divisao(-9,-3)).toBe(3)
})

test('Divisão de -9 / 3 deve ser igual a -3', () => {
    expect(divisao(-9,3)).toBe(-3)
})

test('Divisão de 9 / -3 deve ser igual a -3', () => {
    expect(divisao(9,-3)).toBe(-3)
})

test('Divisão de 1 / 0 deve ser igual a Não pode dividir por 0', () => {
    expect(divisao(1,0)).toBe('Não pode ser dividido por 0')
})