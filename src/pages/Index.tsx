import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [priceRange, setPriceRange] = useState([0, 1000000]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const equipment = [
    { id: 1, name: 'Экскаватор гусеничный JCB JS220', category: 'excavators', price: 8500000, power: '160 л.с.', weight: '22 т', image: '🏗️' },
    { id: 2, name: 'Бульдозер Caterpillar D6T', category: 'bulldozers', price: 12000000, power: '215 л.с.', weight: '20 т', image: '🚜' },
    { id: 4, name: 'Компрессор Atlas Copco XATS 156', category: 'compressors', price: 850000, pressure: '14 бар', capacity: '15.6 м³/мин', image: '⚙️' },
    { id: 5, name: 'Сварочный аппарат KEMPPI FastMig X 450', category: 'welding', price: 320000, current: '450 А', type: 'MIG/MAG', image: '🔧' },
    { id: 6, name: 'Бетономешалка Лебедянь СБР-260', category: 'concrete', price: 180000, volume: '260 л', power: '1.5 кВт', image: '🛠️' },
    { id: 7, name: 'Виброплита BOMAG BPR 35/60D', category: 'compaction', price: 420000, weight: '350 кг', power: '5.5 л.с.', image: '⚒️' },
    { id: 8, name: 'Генератор Cummins C550 D5', category: 'generators', price: 2800000, power: '550 кВА', fuel: 'дизель', image: '⚡' },
  ];

  const metalProducts = [
    { id: 1, name: 'Металлоконструкции для ангаров', description: 'Изготовление под заказ', image: '🏭' },
    { id: 2, name: 'Лестничные марши и ограждения', description: 'Сварка, порошковая покраска', image: '🪜' },
    { id: 3, name: 'Резервуары и емкости', description: 'От 1 до 100 м³', image: '🛢️' },
    { id: 4, name: 'Металлические двери и ворота', description: 'Противопожарные, антивандальные', image: '🚪' },
  ];

  const categories = [
    { value: 'all', label: 'Все категории', icon: 'Grid3x3' },
    { value: 'excavators', label: 'Экскаваторы', icon: 'Truck' },
    { value: 'bulldozers', label: 'Бульдозеры', icon: 'Construction' },
    { value: 'cranes', label: 'Краны', icon: 'Construction' },
    { value: 'compressors', label: 'Компрессоры', icon: 'Wind' },
    { value: 'welding', label: 'Сварочное оборудование', icon: 'Wrench' },
    { value: 'concrete', label: 'Бетономешалки', icon: 'Container' },
    { value: 'compaction', label: 'Трамбовки', icon: 'HardHat' },
    { value: 'generators', label: 'Генераторы', icon: 'Zap' },
  ];

  const filteredEquipment = equipment.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesPrice = item.price >= priceRange[0] && item.price <= priceRange[1];
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesPrice && matchesSearch;
  });

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="text-3xl">🏗️</div>
              <div>
                <h1 className="text-xl font-bold text-primary">KS72.ru</h1>
                <p className="text-xs text-muted-foreground">Автокраны и спецтехника</p>
              </div>
            </div>
            <div className="hidden md:flex gap-6">
              {['home', 'catalog', 'metal', 'about', 'portfolio', 'delivery', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'catalog' && 'Каталог'}
                  {section === 'metal' && 'Металлоизделия'}
                  {section === 'about' && 'О компании'}
                  {section === 'portfolio' && 'Портфолио'}
                  {section === 'delivery' && 'Доставка'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </div>
            <Button className="hover-scale">
              <Icon name="Phone" size={18} className="mr-2" />
              Заказать звонок
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-background"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6 text-base px-6 py-2" variant="secondary">
              <Icon name="Award" size={18} className="mr-2" />
              Официальный сайт автокранов КС-72
            </Badge>
            <h2 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Автокраны КС-72
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Продажа, аренда и сервисное обслуживание автокранов КС-72. Официальный дилер с полным спектром услуг по спецтехнике.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg hover-scale" onClick={() => scrollToSection('catalog')}>
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Перейти в каталог
              </Button>
              <Button size="lg" variant="outline" className="text-lg hover-scale" onClick={() => scrollToSection('contacts')}>
                <Icon name="MessageSquare" size={20} className="mr-2" />
                Получить консультацию
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-5xl mx-auto">
            {[
              { icon: 'CheckCircle', title: 'Гарантия качества', desc: 'Сертифицированное оборудование' },
              { icon: 'Truck', title: 'Доставка по РФ', desc: 'Логистика по всей стране' },
              { icon: 'Headphones', title: 'Сервис 24/7', desc: 'Техподдержка и обслуживание' },
            ].map((item, i) => (
              <Card key={i} className="hover-scale border-2 hover:border-primary/50 transition-all">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <Icon name={item.icon as any} size={24} className="text-primary" />
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="outline">
              <Icon name="Box" size={16} className="mr-2" />
              Каталог оборудования
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Строительная техника и оборудование</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Более 500 единиц техники от ведущих мировых производителей
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-6 mb-8">
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Filter" size={20} />
                  Фильтры
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-3 block">Категория</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat.value} value={cat.value}>
                          {cat.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-3 block">Поиск</label>
                  <div className="relative">
                    <Icon name="Search" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      placeholder="Название модели..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-3 block">
                    Цена: {priceRange[0].toLocaleString()} - {priceRange[1].toLocaleString()} ₽
                  </label>
                  <Slider
                    min={0}
                    max={20000000}
                    step={100000}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="mt-4"
                  />
                </div>

                <Button variant="outline" className="w-full" onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                  setPriceRange([0, 20000000]);
                }}>
                  <Icon name="RotateCcw" size={18} className="mr-2" />
                  Сбросить фильтры
                </Button>
              </CardContent>
            </Card>

            <div className="lg:col-span-3">
              <div className="mb-4 flex justify-between items-center">
                <p className="text-sm text-muted-foreground">
                  Найдено: <span className="font-semibold text-foreground">{filteredEquipment.length}</span> позиций
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {filteredEquipment.map((item) => (
                  <Card key={item.id} className="hover-scale overflow-hidden group">
                    <CardHeader className="pb-3">
                      <div className="text-6xl mb-4 transition-transform group-hover:scale-110">{item.image}</div>
                      <CardTitle className="text-xl">{item.name}</CardTitle>
                      <CardDescription>
                        <Badge variant="secondary" className="mt-2">
                          {categories.find(c => c.value === item.category)?.label}
                        </Badge>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 mb-4 text-sm">
                        {item.power && (
                          <div className="flex items-center gap-2">
                            <Icon name="Zap" size={16} className="text-primary" />
                            <span>Мощность: {item.power}</span>
                          </div>
                        )}
                        {item.weight && (
                          <div className="flex items-center gap-2">
                            <Icon name="Weight" size={16} className="text-primary" />
                            <span>Вес: {item.weight}</span>
                          </div>
                        )}
                        {item.capacity && (
                          <div className="flex items-center gap-2">
                            <Icon name="Package" size={16} className="text-primary" />
                            <span>{item.capacity}</span>
                          </div>
                        )}
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-2xl font-bold text-primary">{item.price.toLocaleString()} ₽</p>
                        </div>
                        <Button className="hover-scale">
                          <Icon name="ShoppingCart" size={18} className="mr-2" />
                          Купить
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="metal" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="outline">
              <Icon name="Factory" size={16} className="mr-2" />
              Производство
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Производство металлоизделий</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Собственное производство металлоконструкций любой сложности
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metalProducts.map((product) => (
              <Card key={product.id} className="hover-scale group">
                <CardHeader>
                  <div className="text-5xl mb-3 transition-transform group-hover:scale-110">{product.image}</div>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    <Icon name="FileText" size={18} className="mr-2" />
                    Запросить расчет
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4" variant="outline">
                <Icon name="Building" size={16} className="mr-2" />
                О компании
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">KS72.ru</h2>
            </div>
            
            <Card>
              <CardContent className="pt-6">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg mb-4">
                    Компания KS72.ru специализируется на автокранах КС-72 с 2010 года. 
                    Мы являемся официальным дилером и предоставляем полный спектр услуг: продажа новых и б/у кранов, аренда с экипажем, сервисное обслуживание и ремонт.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6 my-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">14+</div>
                      <div className="text-muted-foreground">лет на рынке</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-secondary mb-2">80+</div>
                      <div className="text-muted-foreground">автокранов КС-72</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                      <div className="text-muted-foreground">довольных клиентов</div>
                    </div>
                  </div>
                  <p className="text-lg">
                    В нашем автопарке представлены все модификации КС-72: от базовых моделей до полноприводных версий с различной длиной стрелы. 
                    Также предлагаем краны других производителей: Liebherr, Grove, Terex. Предоставляем услуги аренды с опытными крановщиками, 
                    выполняем техническое обслуживание, капитальный ремонт и модернизацию кранов.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="outline">
              <Icon name="Briefcase" size={16} className="mr-2" />
              Портфолио
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши проекты</h2>
            <p className="text-muted-foreground text-lg">Реализованные объекты по всей России</p>
          </div>
          
          <Tabs defaultValue="construction" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="construction">Строительство</TabsTrigger>
              <TabsTrigger value="metal">Металлоконструкции</TabsTrigger>
              <TabsTrigger value="service">Сервис</TabsTrigger>
            </TabsList>
            <TabsContent value="construction" className="mt-6">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: 'ЖК "Современник"', desc: 'Поставка экскаваторов и кранов, 2023', location: 'Москва' },
                  { title: 'Торговый центр "Галактика"', desc: 'Комплексное оснащение стройплощадки, 2023', location: 'Санкт-Петербург' },
                ].map((project, i) => (
                  <Card key={i} className="hover-scale">
                    <CardHeader>
                      <div className="text-4xl mb-3">🏗️</div>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.desc}</CardDescription>
                      <Badge variant="secondary" className="w-fit mt-2">
                        <Icon name="MapPin" size={14} className="mr-1" />
                        {project.location}
                      </Badge>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="metal" className="mt-6">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: 'Ангар для логистики', desc: 'Металлокаркас 2000 м², 2023', location: 'Казань' },
                  { title: 'Пожарная лестница', desc: 'Изготовление и монтаж, 2024', location: 'Екатеринбург' },
                ].map((project, i) => (
                  <Card key={i} className="hover-scale">
                    <CardHeader>
                      <div className="text-4xl mb-3">🏭</div>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.desc}</CardDescription>
                      <Badge variant="secondary" className="w-fit mt-2">
                        <Icon name="MapPin" size={14} className="mr-1" />
                        {project.location}
                      </Badge>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="service" className="mt-6">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: 'Сервис экскаватора JCB', desc: 'Капитальный ремонт, 2024', location: 'Новосибирск' },
                  { title: 'ТО автокрана Liebherr', desc: 'Плановое обслуживание парка из 5 кранов, 2024', location: 'Краснодар' },
                ].map((project, i) => (
                  <Card key={i} className="hover-scale">
                    <CardHeader>
                      <div className="text-4xl mb-3">🔧</div>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.desc}</CardDescription>
                      <Badge variant="secondary" className="w-fit mt-2">
                        <Icon name="MapPin" size={14} className="mr-1" />
                        {project.location}
                      </Badge>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="delivery" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4" variant="outline">
                <Icon name="Truck" size={16} className="mr-2" />
                Доставка
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Доставка по всей России</h2>
              <p className="text-muted-foreground text-lg">Собственная логистика и проверенные партнеры</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <Icon name="MapPin" size={32} className="text-primary mb-3" />
                  <CardTitle>География доставки</CardTitle>
                  <CardDescription>
                    Осуществляем доставку во все регионы РФ. Работаем с проверенными транспортными компаниями.
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <Card>
                <CardHeader>
                  <Icon name="Clock" size={32} className="text-primary mb-3" />
                  <CardTitle>Сроки доставки</CardTitle>
                  <CardDescription>
                    Москва и МО: 1-3 дня. Регионы: 5-14 дней в зависимости от удаленности и габаритов груза.
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <Card>
                <CardHeader>
                  <Icon name="Shield" size={32} className="text-primary mb-3" />
                  <CardTitle>Страхование груза</CardTitle>
                  <CardDescription>
                    Все грузы застрахованы. Несем полную ответственность за сохранность техники при транспортировке.
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <Card>
                <CardHeader>
                  <Icon name="Package" size={32} className="text-primary mb-3" />
                  <CardTitle>Упаковка</CardTitle>
                  <CardDescription>
                    Профессиональная упаковка и крепление оборудования. Соблюдаем все нормы транспортировки.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4" variant="outline">
                <Icon name="Phone" size={16} className="mr-2" />
                Контакты
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-muted-foreground text-lg">Ответим на все вопросы и поможем с выбором</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Контактная информация</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" size={20} className="text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Телефон</p>
                      <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                      <p className="text-muted-foreground">+7 (800) 555-35-35</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Icon name="Mail" size={20} className="text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-muted-foreground">info@ks72.ru</p>
                      <p className="text-muted-foreground">sales@ks72.ru</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" size={20} className="text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Адрес</p>
                      <p className="text-muted-foreground">г. Москва, ул. Промышленная, д. 15, стр. 2</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" size={20} className="text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Режим работы</p>
                      <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                      <p className="text-muted-foreground">Сб-Вс: выходной</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Оставьте заявку</CardTitle>
                  <CardDescription>Мы свяжемся с вами в ближайшее время</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <Input placeholder="Ваше имя" />
                    </div>
                    <div>
                      <Input placeholder="Телефон" type="tel" />
                    </div>
                    <div>
                      <Input placeholder="Email" type="email" />
                    </div>
                    <div>
                      <Input placeholder="Интересующее оборудование" />
                    </div>
                    <Button className="w-full hover-scale">
                      <Icon name="Send" size={18} className="mr-2" />
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="text-3xl">🏗️</div>
                <div>
                  <h3 className="font-bold text-lg">KS72.ru</h3>
                  <p className="text-xs text-slate-400">С 2010 года</p>
                </div>
              </div>
              <p className="text-sm text-slate-400">
                Официальный дилер автокранов КС-72 и спецтехники
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="hover:text-white transition-colors cursor-pointer">Экскаваторы</li>
                <li className="hover:text-white transition-colors cursor-pointer">Краны</li>
                <li className="hover:text-white transition-colors cursor-pointer">Бульдозеры</li>
                <li className="hover:text-white transition-colors cursor-pointer">Все категории</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="hover:text-white transition-colors cursor-pointer">О нас</li>
                <li className="hover:text-white transition-colors cursor-pointer">Портфолио</li>
                <li className="hover:text-white transition-colors cursor-pointer">Доставка</li>
                <li className="hover:text-white transition-colors cursor-pointer">Контакты</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>+7 (495) 123-45-67</li>
                <li>info@ks72.ru</li>
                <li>Москва, ул. Промышленная, 15</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
            <p>© 2024 KS72.ru | Автокраны КС-72 и спецтехника. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;