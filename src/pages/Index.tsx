import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Item {
  id: number;
  name: string;
  category: string;
  location: string;
  coordinates: { lat: number; lng: number };
  image: string;
  lastSeen: string;
}

const Index = () => {
  const [activeTab, setActiveTab] = useState<'map' | 'catalog' | 'profile'>('map');
  const [searchQuery, setSearchQuery] = useState('');
  
  const [items] = useState<Item[]>([
    {
      id: 1,
      name: 'Ноутбук MacBook Pro',
      category: 'Электроника',
      location: 'Офис, стол 12',
      coordinates: { lat: 55.7558, lng: 37.6173 },
      image: '/placeholder.svg',
      lastSeen: '2 часа назад'
    },
    {
      id: 2,
      name: 'Зимняя куртка',
      category: 'Одежда',
      location: 'Дом, гардероб',
      coordinates: { lat: 55.7522, lng: 37.6156 },
      image: '/placeholder.svg',
      lastSeen: '1 день назад'
    },
    {
      id: 3,
      name: 'Ключи от машины',
      category: 'Аксессуары',
      location: 'Дом, прихожая',
      coordinates: { lat: 55.7530, lng: 37.6180 },
      image: '/placeholder.svg',
      lastSeen: '30 минут назад'
    },
    {
      id: 4,
      name: 'Умные часы',
      category: 'Электроника',
      location: 'Спортзал',
      coordinates: { lat: 55.7545, lng: 37.6200 },
      image: '/placeholder.svg',
      lastSeen: '5 часов назад'
    },
    {
      id: 5,
      name: 'Рюкзак Nike',
      category: 'Аксессуары',
      location: 'Машина',
      coordinates: { lat: 55.7560, lng: 37.6150 },
      image: '/placeholder.svg',
      lastSeen: '15 минут назад'
    },
    {
      id: 6,
      name: 'Наушники AirPods',
      category: 'Электроника',
      location: 'Офис, переговорная',
      coordinates: { lat: 55.7555, lng: 37.6175 },
      image: '/placeholder.svg',
      lastSeen: '1 час назад'
    }
  ]);

  const categories = [
    { name: 'Все', icon: 'Grid3x3', count: items.length },
    { name: 'Электроника', icon: 'Laptop', count: items.filter(i => i.category === 'Электроника').length },
    { name: 'Одежда', icon: 'Shirt', count: items.filter(i => i.category === 'Одежда').length },
    { name: 'Аксессуары', icon: 'Watch', count: items.filter(i => i.category === 'Аксессуары').length }
  ];

  const filteredItems = searchQuery
    ? items.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.location.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : items;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0E27] via-[#1a1f3a] to-[#0A0E27] text-white">
      <div className="relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLCAyNDAsIDI1NSwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
        
        <div className="relative z-10">
          <header className="p-6 glass-effect border-b border-white/10">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center glow-effect animate-glow-pulse">
                  <Icon name="Package" size={24} />
                </div>
                <div>
                  <h1 className="text-2xl font-heading font-bold">StorageHub</h1>
                  <p className="text-xs text-muted-foreground">Умное хранение вещей</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="hover:bg-white/10">
                  <Icon name="Bell" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-white/10">
                  <Icon name="Settings" size={20} />
                </Button>
              </div>
            </div>
          </header>

          <main className="max-w-7xl mx-auto p-6 space-y-6">
            <div className="glass-effect rounded-3xl p-6 space-y-4 animate-fade-in">
              <div className="relative">
                <Icon name="Search" size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Поиск вещей по названию, категории или месту..."
                  className="pl-12 bg-white/5 border-white/10 h-14 text-lg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="flex gap-3 overflow-x-auto pb-2">
                {categories.map((cat, idx) => (
                  <Button
                    key={cat.name}
                    variant="outline"
                    className="glass-effect border-white/20 hover:border-primary hover:bg-primary/10 whitespace-nowrap animate-scale-in"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <Icon name={cat.icon as any} size={18} />
                    <span>{cat.name}</span>
                    <Badge variant="secondary" className="ml-2">{cat.count}</Badge>
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card className="glass-effect border-white/10 p-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-heading font-bold flex items-center gap-2">
                      <Icon name="Map" size={24} className="text-primary" />
                      Интерактивная карта
                    </h2>
                    <Button variant="outline" size="sm" className="border-white/20">
                      <Icon name="Maximize2" size={16} />
                      Развернуть
                    </Button>
                  </div>
                  
                  <div className="relative h-[400px] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl overflow-hidden border border-white/10">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-full h-full">
                        {items.map((item, idx) => {
                          const randomX = 10 + (idx * 15) % 70;
                          const randomY = 10 + (idx * 20) % 70;
                          return (
                            <div
                              key={item.id}
                              className="absolute cursor-pointer group"
                              style={{ left: `${randomX}%`, top: `${randomY}%` }}
                            >
                              <div className="relative">
                                <div className="w-3 h-3 bg-primary rounded-full glow-effect animate-glow-pulse"></div>
                                <div className="absolute inset-0 w-8 h-8 bg-primary/20 rounded-full -translate-x-1/3 -translate-y-1/3 animate-ping"></div>
                                
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                  <div className="glass-effect border border-white/20 rounded-xl p-3 whitespace-nowrap">
                                    <p className="font-semibold text-sm">{item.name}</p>
                                    <p className="text-xs text-muted-foreground">{item.location}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    
                    <div className="absolute top-4 right-4 flex flex-col gap-2">
                      <Button size="icon" variant="secondary" className="glass-effect border-white/20">
                        <Icon name="Plus" size={18} />
                      </Button>
                      <Button size="icon" variant="secondary" className="glass-effect border-white/20">
                        <Icon name="Minus" size={18} />
                      </Button>
                      <Button size="icon" variant="secondary" className="glass-effect border-white/20">
                        <Icon name="Locate" size={18} />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse"></div>
                      <span>Отслеживается в реальном времени</span>
                    </div>
                    <Button variant="link" className="text-primary">
                      <Icon name="MapPin" size={16} />
                      Добавить новую точку
                    </Button>
                  </div>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="glass-effect border-white/10 p-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                  <h3 className="text-xl font-heading font-bold mb-4 flex items-center gap-2">
                    <Icon name="TrendingUp" size={20} className="text-secondary" />
                    Статистика
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 glass-effect rounded-xl">
                      <div>
                        <p className="text-sm text-muted-foreground">Всего вещей</p>
                        <p className="text-3xl font-heading font-bold text-primary">{items.length}</p>
                      </div>
                      <Icon name="Package" size={40} className="text-primary/30" />
                    </div>
                    
                    <div className="flex items-center justify-between p-4 glass-effect rounded-xl">
                      <div>
                        <p className="text-sm text-muted-foreground">Активных меток</p>
                        <p className="text-3xl font-heading font-bold text-secondary">{items.length}</p>
                      </div>
                      <Icon name="MapPin" size={40} className="text-secondary/30" />
                    </div>
                    
                    <div className="flex items-center justify-between p-4 glass-effect rounded-xl">
                      <div>
                        <p className="text-sm text-muted-foreground">Категорий</p>
                        <p className="text-3xl font-heading font-bold text-primary">3</p>
                      </div>
                      <Icon name="Grid3x3" size={40} className="text-primary/30" />
                    </div>
                  </div>
                </Card>

                <Card className="glass-effect border-white/10 p-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  <h3 className="text-xl font-heading font-bold mb-4 flex items-center gap-2">
                    <Icon name="Clock" size={20} className="text-secondary" />
                    Последние обновления
                  </h3>
                  <div className="space-y-3">
                    {items.slice(0, 3).map((item) => (
                      <div key={item.id} className="flex items-center gap-3 p-3 glass-effect rounded-xl hover:bg-white/10 transition-colors cursor-pointer">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center">
                          <Icon name="Package" size={18} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-sm truncate">{item.name}</p>
                          <p className="text-xs text-muted-foreground">{item.lastSeen}</p>
                        </div>
                        <Icon name="ChevronRight" size={16} className="text-muted-foreground" />
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>

            <Card className="glass-effect border-white/10 p-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-heading font-bold flex items-center gap-2">
                  <Icon name="Package" size={24} className="text-primary" />
                  Каталог вещей
                  <Badge variant="secondary" className="ml-2">{filteredItems.length}</Badge>
                </h2>
                <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 glow-effect">
                  <Icon name="Plus" size={18} />
                  Добавить вещь
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredItems.map((item, idx) => (
                  <Card
                    key={item.id}
                    className="glass-effect border-white/10 p-4 hover:border-primary/50 transition-all cursor-pointer group animate-scale-in"
                    style={{ animationDelay: `${idx * 0.05}s` }}
                  >
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl mb-3 flex items-center justify-center overflow-hidden">
                      <Icon name="Package" size={40} className="text-white/50" />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-start justify-between">
                        <h3 className="font-heading font-semibold group-hover:text-primary transition-colors">{item.name}</h3>
                        <Badge variant="outline" className="border-primary/50 text-primary text-xs">
                          {item.category}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="MapPin" size={14} className="text-primary" />
                        <span className="truncate">{item.location}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Icon name="Clock" size={12} />
                        <span>{item.lastSeen}</span>
                      </div>
                      
                      <div className="flex gap-2 pt-2">
                        <Button size="sm" variant="outline" className="flex-1 border-white/20 hover:border-primary hover:bg-primary/10">
                          <Icon name="Navigation" size={14} />
                          Показать
                        </Button>
                        <Button size="sm" variant="outline" className="border-white/20 hover:border-primary hover:bg-primary/10">
                          <Icon name="MoreVertical" size={14} />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
          </main>

          <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 glass-effect border border-white/10 rounded-3xl p-3 glow-effect">
            <div className="flex gap-2">
              <Button
                variant={activeTab === 'map' ? 'default' : 'ghost'}
                className={activeTab === 'map' ? 'bg-gradient-to-r from-primary to-secondary glow-effect' : 'hover:bg-white/10'}
                onClick={() => setActiveTab('map')}
              >
                <Icon name="Map" size={20} />
                <span className="hidden sm:inline">Карта</span>
              </Button>
              <Button
                variant={activeTab === 'catalog' ? 'default' : 'ghost'}
                className={activeTab === 'catalog' ? 'bg-gradient-to-r from-primary to-secondary glow-effect' : 'hover:bg-white/10'}
                onClick={() => setActiveTab('catalog')}
              >
                <Icon name="Grid3x3" size={20} />
                <span className="hidden sm:inline">Каталог</span>
              </Button>
              <Button
                variant={activeTab === 'profile' ? 'default' : 'ghost'}
                className={activeTab === 'profile' ? 'bg-gradient-to-r from-primary to-secondary glow-effect' : 'hover:bg-white/10'}
                onClick={() => setActiveTab('profile')}
              >
                <Icon name="User" size={20} />
                <span className="hidden sm:inline">Профиль</span>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Index;
