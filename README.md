# Algorithms

### Binary Search

- Complexidade: O(log n)
- Explicação: A cada interação, o algoritmo verifica se o valor testado é maior ou menor que o valor alvo.
  Caso o valor testado seja maior que o alvo, o índice inicial é atualizado para o índice testado acrescido de um, pois o algoritmo sabe que todos os índices anteriores, incluindo o índice atual, não contêm o valor buscado.
  Da mesma forma, se o valor testado for menor que o alvo, o índice final é ajustado para o índice testado menos um, descartando os elementos posteriores, já que também não podem conter o valor desejado.

---
