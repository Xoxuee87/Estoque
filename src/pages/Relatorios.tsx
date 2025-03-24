import Layout from '../components/Layout';
import { ChartBarIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { relatorios } from '../data/mockData';

export default function Relatorios() {
  return (
    <Layout>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-gold to-gold-dark bg-clip-text text-transparent">
              Relatórios
            </h1>
            <p className="text-gray-400 mt-1">Análise detalhada do seu estoque</p>
          </div>
          <button className="btn-secondary">
            <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
            Exportar Relatório
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatorios.map((relatorio, index) => (
            <div key={index} className="card group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gold">{relatorio.periodo}</h3>
                  <div className="p-2 rounded-lg bg-gold/10 group-hover:bg-gold/20 transition-colors duration-300">
                    <ChartBarIcon className="h-6 w-6 text-gold" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-400">Total de Entradas</p>
                    <p className="text-2xl font-bold text-green-400">{relatorio.totalEntradas}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Total de Saídas</p>
                    <p className="text-2xl font-bold text-red-400">{relatorio.totalSaidas}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Valor Total</p>
                    <p className="text-2xl font-bold text-gold">R$ {relatorio.valorTotal.toFixed(2)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-2">Bebidas Mais Movimentadas</p>
                    <div className="space-y-2">
                      {relatorio.bebidasMaisMovimentadas.map((bebida, idx) => (
                        <div key={idx} className="flex items-center justify-between text-sm">
                          <span>{bebida.nome}</span>
                          <span className="text-gray-400">{bebida.quantidade} unidades</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
} 