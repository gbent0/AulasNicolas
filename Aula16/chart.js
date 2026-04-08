const vendas = [
  { id: 1, produto: "Notebook", categoria: "Eletrônicos", preco: 3500, quantidade: 2, cliente: "Ana", cidade: "Curitiba", data: "2025-01-10" },
  { id: 2, produto: "Celular", categoria: "Eletrônicos", preco: 2000, quantidade: 1, cliente: "Carlos", cidade: "São Paulo", data: "2025-01-12" },
  { id: 3, produto: "Camiseta", categoria: "Roupas", preco: 80, quantidade: 3, cliente: "João", cidade: "Curitiba", data: "2025-01-15" },
  { id: 4, produto: "Calça", categoria: "Roupas", preco: 120, quantidade: 2, cliente: "Maria", cidade: "Rio de Janeiro", data: "2025-01-20" },
  { id: 5, produto: "Tênis", categoria: "Calçados", preco: 300, quantidade: 1, cliente: "Ana", cidade: "Curitiba", data: "2025-02-01" },
  { id: 6, produto: "Fone", categoria: "Eletrônicos", preco: 150, quantidade: 4, cliente: "Pedro", cidade: "Belo Horizonte", data: "2025-02-03" },
  { id: 7, produto: "Relógio", categoria: "Acessórios", preco: 500, quantidade: 1, cliente: "Lucas", cidade: "São Paulo", data: "2025-02-10" },
  { id: 8, produto: "Mochila", categoria: "Acessórios", preco: 200, quantidade: 2, cliente: "Fernanda", cidade: "Curitiba", data: "2025-02-15" },
  { id: 9, produto: "Tablet", categoria: "Eletrônicos", preco: 1800, quantidade: 1, cliente: "Carlos", cidade: "São Paulo", data: "2025-02-18" },
  { id: 10, produto: "Jaqueta", categoria: "Roupas", preco: 250, quantidade: 1, cliente: "Ana", cidade: "Curitiba", data: "2025-03-01" },
  { id: 11, produto: "Sandália", categoria: "Calçados", preco: 120, quantidade: 2, cliente: "Juliana", cidade: "Salvador", data: "2025-03-03" },
  { id: 12, produto: "Boné", categoria: "Acessórios", preco: 70, quantidade: 3, cliente: "Pedro", cidade: "Belo Horizonte", data: "2025-03-05" },
  { id: 13, produto: "Monitor", categoria: "Eletrônicos", preco: 900, quantidade: 1, cliente: "Lucas", cidade: "São Paulo", data: "2025-03-10" },
  { id: 14, produto: "Teclado", categoria: "Eletrônicos", preco: 250, quantidade: 2, cliente: "Fernanda", cidade: "Curitiba", data: "2025-03-12" },
  { id: 15, produto: "Mouse", categoria: "Eletrônicos", preco: 100, quantidade: 3, cliente: "João", cidade: "Curitiba", data: "2025-03-15" }
];


const faturamentoTotal = vendas.reduce((acc, v) => acc + (v.preco * v.quantidade), 0);


const porCategoria = vendas.reduce((acc, v) => {
  acc[v.categoria] = acc[v.categoria] || { faturamento: 0, quantidade: 0 };
  acc[v.categoria].faturamento += v.preco * v.quantidade;
  acc[v.categoria].quantidade += v.quantidade;
  return acc;
}, {});

const porCidade = vendas.reduce((acc, v) => {
  acc[v.cidade] = acc[v.cidade] || { faturamento: 0, pedidos: 0 };
  acc[v.cidade].faturamento += v.preco * v.quantidade;
  acc[v.cidade].pedidos += 1;
  return acc;
}, {});

const ctxBar = {
  type: 'bar',
  data: {
    labels: Object.keys(porCategoria),
    datasets: [
      {
        label: 'Faturamento (R$)',
        data: Object.values(porCategoria).map(c => c.faturamento),
        backgroundColor: 'rgba(54, 162, 235, 0.6)'
      },
      {
        label: 'Quantidade Total',
        data: Object.values(porCategoria).map(c => c.quantidade),
        backgroundColor: 'rgba(255, 99, 132, 0.6)'
      }
    ]
  }
};

const ctxPieCidade = {
  type: 'pie',
  data: {
    labels: Object.keys(porCidade),
    datasets: [{
      label: 'Número de Pedidos',
      data: Object.values(porCidade).map(c => c.pedidos),
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF']
    }]
  }
};

const porMes = vendas.reduce((acc, v) => {
  const mes = v.data.substring(0, 7); // Pega "2025-01"
  acc[mes] = (acc[mes] || 0) + (v.preco * v.quantidade);
  return acc;
}, {});

// Configuração
const ctxMes = {
  type: 'line', // Linha costuma ser melhor para tempo
  data: {
    labels: Object.keys(porMes),
    datasets: [{
      label: 'Evolução de Vendas',
      data: Object.values(porMes),
      borderColor: '#2ecc71'
    }]
  }
};