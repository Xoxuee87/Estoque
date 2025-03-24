export interface Bebida {
  id: number;
  nome: string;
  quantidade: number;
  quantidadeMinima: number;
  preco: number;
  categoria: string;
}

export interface Movimentacao {
  id: number;
  tipo: 'entrada' | 'saida' | 'transferencia';
  bebida: string;
  quantidade: number;
  data: string;
  origem?: string;
  destino?: string;
  fornecedor?: string;
}

export interface Relatorio {
  periodo: string;
  totalEntradas: number;
  totalSaidas: number;
  valorTotal: number;
  bebidasMaisMovimentadas: {
    nome: string;
    quantidade: number;
  }[];
}

export const bebidas: Bebida[] = [
  { id: 1, nome: 'Coca-Cola 2L', quantidade: 50, quantidadeMinima: 20, preco: 8.50, categoria: 'Refrigerantes' },
  { id: 2, nome: 'Pepsi 600ml', quantidade: 75, quantidadeMinima: 30, preco: 4.50, categoria: 'Refrigerantes' },
  { id: 3, nome: 'Água Mineral 500ml', quantidade: 100, quantidadeMinima: 40, preco: 2.50, categoria: 'Águas' },
  { id: 4, nome: 'Água Mineral 1L', quantidade: 60, quantidadeMinima: 25, preco: 3.50, categoria: 'Águas' },
  { id: 5, nome: 'Suco de Laranja 1L', quantidade: 15, quantidadeMinima: 20, preco: 12.50, categoria: 'Sucos' },
  { id: 6, nome: 'Cerveja 600ml', quantidade: 120, quantidadeMinima: 50, preco: 6.50, categoria: 'Cervejas' },
];

export const movimentacoes: Movimentacao[] = [
  {
    id: 1,
    tipo: 'entrada',
    bebida: 'Coca-Cola 2L',
    quantidade: 20,
    data: '2024-03-20T10:30:00',
    fornecedor: 'Distribuidora ABC'
  },
  {
    id: 2,
    tipo: 'saida',
    bebida: 'Pepsi 600ml',
    quantidade: 15,
    data: '2024-03-20T11:15:00'
  },
  {
    id: 3,
    tipo: 'transferencia',
    bebida: 'Água Mineral 500ml',
    quantidade: 30,
    data: '2024-03-20T12:00:00',
    origem: 'Almoxarifado',
    destino: 'Bar'
  },
  {
    id: 4,
    tipo: 'entrada',
    bebida: 'Cerveja 600ml',
    quantidade: 50,
    data: '2024-03-20T13:45:00',
    fornecedor: 'Distribuidora XYZ'
  },
  {
    id: 5,
    tipo: 'saida',
    bebida: 'Suco de Laranja 1L',
    quantidade: 8,
    data: '2024-03-20T14:30:00'
  }
];

export const relatorios: Relatorio[] = [
  {
    periodo: 'Hoje',
    totalEntradas: 70,
    totalSaidas: 23,
    valorTotal: 875.50,
    bebidasMaisMovimentadas: [
      { nome: 'Coca-Cola 2L', quantidade: 25 },
      { nome: 'Pepsi 600ml', quantidade: 20 },
      { nome: 'Água Mineral 500ml', quantidade: 15 }
    ]
  },
  {
    periodo: 'Esta Semana',
    totalEntradas: 250,
    totalSaidas: 180,
    valorTotal: 3125.75,
    bebidasMaisMovimentadas: [
      { nome: 'Cerveja 600ml', quantidade: 100 },
      { nome: 'Coca-Cola 2L', quantidade: 80 },
      { nome: 'Pepsi 600ml', quantidade: 60 }
    ]
  },
  {
    periodo: 'Este Mês',
    totalEntradas: 1000,
    totalSaidas: 850,
    valorTotal: 12500.25,
    bebidasMaisMovimentadas: [
      { nome: 'Cerveja 600ml', quantidade: 400 },
      { nome: 'Coca-Cola 2L', quantidade: 300 },
      { nome: 'Pepsi 600ml', quantidade: 250 }
    ]
  }
]; 