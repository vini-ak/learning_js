// Faz uma filtragem nos elementos e vai retornar aqueles que atendem aos critérios estabelecidos.
const produtos = [
    {nome : 'Notebook', preco: 2499, fragil: true},
    {nome : 'iPadPro', preco: 4199, fragil: true},
    {nome : 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome : 'Copo de Plástico', preco: 18.99, fragil: false}
]

// Retornando os objetos frágeis que sejam mais caros que R$ 2000
console.log(produtos.filter(p => p.fragil == true && p.preco > 2000))