import Layout from '../components/Layout';
import { 
  CubeIcon, 
  ArrowTrendingUpIcon, 
  ArrowTrendingDownIcon,
  ExclamationTriangleIcon,
  ArrowsRightLeftIcon,
  ChartBarIcon,
  ArrowDownTrayIcon
} from '@heroicons/react/24/outline';
import { bebidas, movimentacoes } from '../data/mockData';

export default function Dashboard() {
  // Calculando totais
  const totalBebidas = bebidas.reduce((acc, bebida) => acc + bebida.quantidade, 0);
  const entradasHoje = movimentacoes
    .filter(m => m.tipo === 'entrada' && new Date(m.data).toDateString() === new Date().toDateString())
    .reduce((acc, m) => acc + m.quantidade, 0);
  const saidasHoje = movimentacoes
    .filter(m => m.tipo === 'saida' && new Date(m.data).toDateString() === new Date().toDateString())
    .reduce((acc, m) => acc + m.quantidade, 0);

  // Bebidas com estoque baixo
  const bebidasEstoqueBaixo = bebidas.filter(bebida => bebida.quantidade <= bebida.quantidadeMinima);

  // Últimas movimentações
  const ultimasMovimentacoes = movimentacoes
    .sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime())
    .slice(0, 3);

  return (
    <Layout>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-gold to-gold-dark bg-clip-text text-transparent">
              Dashboard
            </h1>
            <p className="text-gray-400 mt-1">Visão geral do seu estoque</p>
          </div>
          <div className="flex space-x-3">
            <button className="btn-secondary">
              <ChartBarIcon className="h-5 w-5 mr-2" />
              Relatório Diário
            </button>
            <button className="btn-secondary">
              <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
              Exportar Dados
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gold">Total de Bebidas</h3>
                <div className="p-2 rounded-lg bg-gold/10 group-hover:bg-gold/20 transition-colors duration-300">
                  <CubeIcon className="h-6 w-6 text-gold" />
                </div>
              </div>
              <div className="flex items-baseline">
                <p className="text-3xl font-bold">{totalBebidas}</p>
                <span className="ml-2 text-sm text-green-400 flex items-center">
                  <ArrowTrendingUpIcon className="h-4 w-4 mr-1" />
                  {((totalBebidas / 1000) * 100).toFixed(1)}% do estoque
                </span>
              </div>
            </div>
          </div>
          
          <div className="card group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gold">Entradas Hoje</h3>
                <div className="p-2 rounded-lg bg-gold/10 group-hover:bg-gold/20 transition-colors duration-300">
                  <ArrowTrendingUpIcon className="h-6 w-6 text-gold" />
                </div>
              </div>
              <div className="flex items-baseline">
                <p className="text-3xl font-bold">{entradasHoje}</p>
                <span className="ml-2 text-sm text-green-400 flex items-center">
                  <ArrowTrendingUpIcon className="h-4 w-4 mr-1" />
                  {((entradasHoje / 100) * 100).toFixed(1)}% da meta
                </span>
              </div>
            </div>
          </div>
          
          <div className="card group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gold">Saídas Hoje</h3>
                <div className="p-2 rounded-lg bg-gold/10 group-hover:bg-gold/20 transition-colors duration-300">
                  <ArrowTrendingDownIcon className="h-6 w-6 text-gold" />
                </div>
              </div>
              <div className="flex items-baseline">
                <p className="text-3xl font-bold">{saidasHoje}</p>
                <span className="ml-2 text-sm text-red-400 flex items-center">
                  <ArrowTrendingDownIcon className="h-4 w-4 mr-1" />
                  {((saidasHoje / 50) * 100).toFixed(1)}% da meta
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="card relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gold">Alertas de Estoque Baixo</h2>
                <div className="p-2 rounded-lg bg-red-500/10">
                  <ExclamationTriangleIcon className="h-6 w-6 text-red-400" />
                </div>
              </div>
              <div className="space-y-3">
                {bebidasEstoqueBaixo.map(bebida => (
                  <div key={bebida.id} className="flex items-center justify-between p-3 bg-red-500/5 rounded-xl border border-red-500/10 hover:border-red-500/20 transition-colors duration-300">
                    <div className="flex items-center">
                      <div className="h-2 w-2 bg-red-400 rounded-full mr-3"></div>
                      <span>{bebida.nome}</span>
                    </div>
                    <span className="text-red-400">{bebida.quantidade} unidades restantes</span>
                  </div>
                ))}
                {bebidasEstoqueBaixo.length === 0 && (
                  <p className="text-gray-400 text-center py-4">Nenhum alerta de estoque baixo</p>
                )}
              </div>
            </div>
          </div>

          <div className="card relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent"></div>
            <div className="relative">
              <h2 className="text-xl font-semibold text-gold mb-4">Últimas Movimentações</h2>
              <div className="space-y-3">
                {ultimasMovimentacoes.map(mov => (
                  <div key={mov.id} className="flex items-center justify-between p-3 bg-gray-800/30 rounded-xl border border-gray-700/30 hover:border-gray-600/30 transition-colors duration-300">
                    <div className="flex items-center">
                      <div className={`p-2 rounded-lg mr-3 ${
                        mov.tipo === 'entrada' ? 'bg-green-500/10' :
                        mov.tipo === 'saida' ? 'bg-red-500/10' :
                        'bg-yellow-500/10'
                      }`}>
                        {mov.tipo === 'entrada' ? (
                          <ArrowTrendingUpIcon className="h-5 w-5 text-green-400" />
                        ) : mov.tipo === 'saida' ? (
                          <ArrowTrendingDownIcon className="h-5 w-5 text-red-400" />
                        ) : (
                          <ArrowsRightLeftIcon className="h-5 w-5 text-yellow-400" />
                        )}
                      </div>
                      <div>
                        <span className="block text-sm font-medium">
                          {mov.tipo === 'entrada' ? 'Entrada' :
                           mov.tipo === 'saida' ? 'Saída' :
                           'Transferência'} - {mov.bebida}
                        </span>
                        <span className="text-xs text-gray-400">
                          {new Date(mov.data).toLocaleString('pt-BR')}
                        </span>
                      </div>
                    </div>
                    <span className={`${
                      mov.tipo === 'entrada' ? 'text-green-400' :
                      mov.tipo === 'saida' ? 'text-red-400' :
                      'text-yellow-400'
                    }`}>
                      {mov.tipo === 'entrada' ? '+' : '-'}{mov.quantidade} unidades
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 