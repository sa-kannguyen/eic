import { Outlet, Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  BookOpen, 
  GraduationCap, 
  FileText, 
  TrendingUp,
  Menu,
  X,
  List,
  ChevronDown
} from 'lucide-react';
import { useState } from 'react';

export default function Layout() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [practiceMenuOpen, setPracticeMenuOpen] = useState(false);
  const [overviewMenuOpen, setOverviewMenuOpen] = useState(false);

  const navigation = [
    { 
      name: 'Tổng quan', 
      icon: Home,
      submenu: [
        { name: 'Dashboard', href: '/dashboard' },
        { name: 'Lộ trình học', href: '/learning-path' },
        { name: 'Lộ trình học tập', href: '/study-plans' },
        { name: 'Tips & Strategies', href: '/tips-strategies' },
      ]
    },
    { name: 'Từ vựng', href: '/vocabulary/beginner', icon: BookOpen },
    { name: 'Danh sách từ vựng', href: '/vocabulary-list', icon: List },
    { name: 'Ngữ pháp', href: '/grammar/beginner', icon: GraduationCap },
    { name: 'Danh sách ngữ pháp', href: '/grammar-list', icon: List },
    { 
      name: 'Luyện tập', 
      icon: FileText,
      submenu: [
        { name: 'Trang luyện tập', href: '/practice/beginner' },
        { name: 'Part 1 - Photographs', href: '/practice/part1/beginner' },
        { name: 'Part 5 - Ngữ pháp', href: '/practice/part5' },
        { name: 'Part 7 - Đọc hiểu', href: '/practice/part7' },
      ]
    },
    { name: 'Tiến độ', href: '/progress', icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <GraduationCap className="h-8 w-8 text-primary-600" />
              <h1 className="ml-2 text-xl font-bold text-gray-900">
                TOEIC Learning App
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                
                // Handle submenu items
                if (item.submenu) {
                  const isActive = item.submenu.some(sub => location.pathname === sub.href);
                  const isOverview = item.name === 'Tổng quan';
                  const menuOpen = isOverview ? overviewMenuOpen : practiceMenuOpen;
                  const setMenuOpen = isOverview ? setOverviewMenuOpen : setPracticeMenuOpen;
                  
                  return (
                    <div key={item.name} className="relative">
                      <button
                        onMouseEnter={() => setMenuOpen(true)}
                        onMouseLeave={() => setMenuOpen(false)}
                        className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                          isActive
                            ? 'bg-primary-50 text-primary-700'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <Icon className="h-4 w-4 mr-2" />
                        {item.name}
                        <ChevronDown className="h-4 w-4 ml-1" />
                      </button>
                      
                      {menuOpen && (
                        <div
                          onMouseEnter={() => setMenuOpen(true)}
                          onMouseLeave={() => setMenuOpen(false)}
                          className="absolute left-0 mt-1 w-56 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50"
                        >
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className={`block px-4 py-2 text-sm transition-colors ${
                                location.pathname === subItem.href
                                  ? 'bg-primary-50 text-primary-700'
                                  : 'text-gray-700 hover:bg-gray-100'
                              }`}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                
                // Handle regular items
                const isActive = item.href && location.pathname.startsWith(item.href.split('/')[1] === 'dashboard' ? '/dashboard' : `/${item.href.split('/')[1]}`);
                return (
                  <Link
                    key={item.name}
                    to={item.href!}
                    className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-primary-50 text-primary-700'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <nav className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                
                // Handle submenu items
                if (item.submenu) {
                  const isActive = item.submenu.some(sub => location.pathname === sub.href);
                  const isOverview = item.name === 'Tổng quan';
                  const menuOpen = isOverview ? overviewMenuOpen : practiceMenuOpen;
                  const setMenuOpen = isOverview ? setOverviewMenuOpen : setPracticeMenuOpen;
                  
                  return (
                    <div key={item.name}>
                      <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className={`flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium ${
                          isActive
                            ? 'bg-primary-50 text-primary-700'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <div className="flex items-center">
                          <Icon className="h-5 w-5 mr-3" />
                          {item.name}
                        </div>
                        <ChevronDown className={`h-4 w-4 transition-transform ${menuOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {menuOpen && (
                        <div className="ml-8 mt-1 space-y-1">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`block px-3 py-2 rounded-md text-sm ${
                                location.pathname === subItem.href
                                  ? 'bg-primary-50 text-primary-700'
                                  : 'text-gray-600 hover:bg-gray-100'
                              }`}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                
                // Handle regular items
                const isActive = item.href && location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href!}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center px-3 py-2 rounded-md text-base font-medium ${
                      isActive
                        ? 'bg-primary-50 text-primary-700'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="h-5 w-5 mr-3" />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-gray-500">
            © 2025 TOEIC Learning App - Học TOEIC hiệu quả, đạt mục tiêu 800 điểm
          </p>
        </div>
      </footer>
    </div>
  );
}
