import { useState } from 'react';
import Layout from '../components/Layout';
import { ArrowTrendingDownIcon } from '@heroicons/react/24/outline';

export default function Saida() {
  const [formData, setFormData] = useState({
    nome: '',
    quantidade: '',
    data: '',
    motivo: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementará a lógica de registro de saída
    console.log('Dados do formulário:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-2 rounded-lg bg-gold/10">
            <ArrowTrendingDownIcon className="h-8 w-8 text-gold" />
          </div>
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-gold to-gold-dark bg-clip-text text-transparent">
              Registrar Saída de Bebidas
            </h1>
            <p className="text-gray-400 mt-1">Registre a saída de bebidas do seu estoque</p>
          </div>
        </div>
        
        <div className="card relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent"></div>
          <div className="relative">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-gray-300 mb-1">
                  Nome da Bebida
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  className="input-field w-full"
                  placeholder="Ex: Coca-Cola 2L"
                  required
                />
              </div>

              <div>
                <label htmlFor="quantidade" className="block text-sm font-medium text-gray-300 mb-1">
                  Quantidade
                </label>
                <input
                  type="number"
                  id="quantidade"
                  name="quantidade"
                  value={formData.quantidade}
                  onChange={handleChange}
                  className="input-field w-full"
                  placeholder="0"
                  required
                  min="1"
                />
              </div>

              <div>
                <label htmlFor="data" className="block text-sm font-medium text-gray-300 mb-1">
                  Data de Saída
                </label>
                <input
                  type="datetime-local"
                  id="data"
                  name="data"
                  value={formData.data}
                  onChange={handleChange}
                  className="input-field w-full"
                  required
                />
              </div>

              <div>
                <label htmlFor="motivo" className="block text-sm font-medium text-gray-300 mb-1">
                  Motivo da Saída
                </label>
                <select
                  id="motivo"
                  name="motivo"
                  value={formData.motivo}
                  onChange={handleChange}
                  className="input-field w-full"
                  required
                >
                  <option value="">Selecione um motivo</option>
                  <option value="consumo">Consumo</option>
                  <option value="transferencia">Transferência</option>
                  <option value="descarte">Descarte</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div className="flex justify-end space-x-3">
                <button type="button" className="btn-secondary">
                  Cancelar
                </button>
                <button type="submit" className="btn-primary">
                  Registrar Saída
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
} 