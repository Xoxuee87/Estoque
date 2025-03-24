import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  HomeIcon, 
  ArrowTrendingUpIcon, 
  ArrowTrendingDownIcon, 
  ArrowsRightLeftIcon,
  ChartBarIcon,
  ArrowLeftOnRectangleIcon
} from '@heroicons/react/24/outline';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-gray-800 min-h-screen p-6">
          <div className="mb-8">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-gold to-gold-dark bg-clip-text text-transparent">
              Sistema de Estoque
            </h1>
          </div>
          <nav className="space-y-2">
            <Link
              to="/dashboard"
              className={`flex items-center px-4 py-3 rounded-lg transition-colors duration-200 ${
                isActive('/dashboard')
                  ? 'bg-gold/10 text-gold'
                  : 'text-gray-400 hover:text-gold hover:bg-gray-700/50'
              }`}
            >
              <HomeIcon className="h-5 w-5 mr-3" />
              Dashboard
            </Link>
            <Link
              to="/entrada"
              className={`flex items-center px-4 py-3 rounded-lg transition-colors duration-200 ${
                isActive('/entrada')
                  ? 'bg-gold/10 text-gold'
                  : 'text-gray-400 hover:text-gold hover:bg-gray-700/50'
              }`}
            >
              <ArrowTrendingUpIcon className="h-5 w-5 mr-3" />
              Entrada
            </Link>
            <Link
              to="/saida"
              className={`flex items-center px-4 py-3 rounded-lg transition-colors duration-200 ${
                isActive('/saida')
                  ? 'bg-gold/10 text-gold'
                  : 'text-gray-400 hover:text-gold hover:bg-gray-700/50'
              }`}
            >
              <ArrowTrendingDownIcon className="h-5 w-5 mr-3" />
              Saída
            </Link>
            <Link
              to="/transferencias"
              className={`flex items-center px-4 py-3 rounded-lg transition-colors duration-200 ${
                isActive('/transferencias')
                  ? 'bg-gold/10 text-gold'
                  : 'text-gray-400 hover:text-gold hover:bg-gray-700/50'
              }`}
            >
              <ArrowsRightLeftIcon className="h-5 w-5 mr-3" />
              Transferências
            </Link>
            <Link
              to="/relatorios"
              className={`flex items-center px-4 py-3 rounded-lg transition-colors duration-200 ${
                isActive('/relatorios')
                  ? 'bg-gold/10 text-gold'
                  : 'text-gray-400 hover:text-gold hover:bg-gray-700/50'
              }`}
            >
              <ChartBarIcon className="h-5 w-5 mr-3" />
              Relatórios
            </Link>
          </nav>
          <div className="absolute bottom-6 left-6 right-6">
            <button className="flex items-center w-full px-4 py-3 text-gray-400 hover:text-red-400 hover:bg-gray-700/50 rounded-lg transition-colors duration-200">
              <ArrowLeftOnRectangleIcon className="h-5 w-5 mr-3" />
              Sair
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {children}
        </div>
      </div>
    </div>
  );
} 