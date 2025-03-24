import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LockClosedIcon } from '@heroicons/react/24/outline';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementará a lógica de autenticação
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black p-4">
      <div className="card w-full max-w-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent"></div>
        <div className="relative">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-gold/10 border border-gold/20">
                <LockClosedIcon className="h-12 w-12 text-gold" />
              </div>
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-gold to-gold-dark bg-clip-text text-transparent">
              Bem-vindo
            </h2>
            <p className="text-gray-400 mt-2">Faça login para acessar o sistema</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field w-full"
                placeholder="seu@email.com"
                required
              />
            </div>

            <div>
              <label htmlFor="senha" className="block text-sm font-medium text-gray-300 mb-1">
                Senha
              </label>
              <input
                type="password"
                id="senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="input-field w-full"
                placeholder="••••••••"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-gold focus:ring-gold border-gray-700 rounded bg-gray-800/50"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                  Lembrar-me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="text-gold hover:text-gold-light transition-colors duration-300">
                  Esqueceu a senha?
                </a>
              </div>
            </div>

            <button type="submit" className="btn-primary w-full">
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
} 