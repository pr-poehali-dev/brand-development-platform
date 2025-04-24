import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Clock, Users, FileText, Star, Filter } from "lucide-react";

const briefs = [
  {
    id: 1,
    title: "Ребрендинг кофейни",
    description: "Необходимо разработать новый визуальный стиль для сети кофеен с десятилетней историей",
    status: "Открыт",
    budget: "100 000 ₽",
    date: "14.06.2023",
    complexity: "Средняя",
    specialists: ["Графический дизайнер", "Брендинг-стратег"],
    applications: 7
  },
  {
    id: 2,
    title: "Логотип для IT-стартапа",
    description: "Разработка современного минималистичного логотипа для финтех-компании",
    status: "Открыт",
    budget: "50 000 ₽",
    date: "20.06.2023",
    complexity: "Легкая",
    specialists: ["Графический дизайнер"],
    applications: 12
  },
  {
    id: 3,
    title: "Фирменный стиль для строительной компании",
    description: "Полный брендбук, включая логотип, цветовую схему, типографику и корпоративные материалы",
    status: "Открыт",
    budget: "250 000 ₽",
    date: "05.07.2023",
    complexity: "Сложная",
    specialists: ["Графический дизайнер", "Брендинг-стратег", "Иллюстратор"],
    applications: 4
  },
  {
    id: 4,
    title: "Дизайн упаковки продуктовой линейки",
    description: "Разработка дизайна упаковки для линейки органических продуктов",
    status: "Открыт",
    budget: "150 000 ₽",
    date: "12.07.2023",
    complexity: "Средняя",
    specialists: ["Дизайнер упаковки", "Иллюстратор"],
    applications: 9
  },
  {
    id: 5,
    title: "Визуальная идентификация для фестиваля",
    description: "Создание уникального стиля для ежегодного музыкального фестиваля",
    status: "В процессе",
    budget: "180 000 ₽",
    date: "28.05.2023",
    complexity: "Сложная",
    specialists: ["Графический дизайнер", "Иллюстратор", "Моушн-дизайнер"],
    applications: 15
  }
];

const myBriefs = [
  {
    id: 101,
    title: "Брендбук для юридической фирмы",
    description: "Разработка логотипа и фирменного стиля для компании, специализирующейся на коммерческом праве",
    status: "На рассмотрении",
    created: "02.06.2023",
    responses: 5
  },
  {
    id: 102,
    title: "Редизайн мобильного приложения",
    description: "Обновление интерфейса и стиля приложения для доставки продуктов",
    status: "В работе",
    created: "15.05.2023",
    responses: 8,
    progress: 65
  }
];

const BriefCard = ({ brief }: { brief: any }) => (
  <Card className="hover:shadow-md transition-shadow">
    <CardHeader>
      <div className="flex justify-between items-start">
        <CardTitle className="text-xl font-playfair">{brief.title}</CardTitle>
        <Badge variant={brief.status === "Открыт" ? "default" : brief.status === "В процессе" ? "secondary" : "outline"}>
          {brief.status}
        </Badge>
      </div>
      <CardDescription className="mt-2">{brief.description}</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Бюджет:</span>
          <span className="font-medium">{brief.budget}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Дата публикации:</span>
          <span>{brief.date}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Сложность:</span>
          <span>{brief.complexity}</span>
        </div>
        <div className="flex flex-wrap gap-1 mt-3">
          {brief.specialists.map((spec: string, index: number) => (
            <Badge key={index} variant="outline" className="text-xs">
              {spec}
            </Badge>
          ))}
        </div>
      </div>
    </CardContent>
    <CardFooter className="flex justify-between border-t pt-4">
      <div className="flex items-center text-sm text-gray-500">
        <Users size={16} className="mr-1" /> {brief.applications} заявок
      </div>
      <Button>Подробнее</Button>
    </CardFooter>
  </Card>
);

const MyBriefCard = ({ brief }: { brief: any }) => (
  <Card className="hover:shadow-md transition-shadow">
    <CardHeader>
      <div className="flex justify-between items-start">
        <CardTitle className="text-xl font-playfair">{brief.title}</CardTitle>
        <Badge variant={brief.status === "На рассмотрении" ? "outline" : "secondary"}>
          {brief.status}
        </Badge>
      </div>
      <CardDescription className="mt-2">{brief.description}</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Дата создания:</span>
          <span>{brief.created}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Получено откликов:</span>
          <span className="font-medium">{brief.responses}</span>
        </div>
        {brief.progress && (
          <div className="space-y-1.5">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Прогресс выполнения:</span>
              <span>{brief.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-dali-primary h-2 rounded-full" style={{ width: `${brief.progress}%` }}></div>
            </div>
          </div>
        )}
      </div>
    </CardContent>
    <CardFooter className="flex justify-end border-t pt-4">
      <Button>Управление</Button>
    </CardFooter>
  </Card>
);

const Briefs = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow pt-20">
        <section className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-4">Брифы проектов</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Выберите интересный проект или создайте свой бриф для поиска специалистов
              </p>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-between items-center flex-wrap gap-4 mb-6">
                <TabsList>
                  <TabsTrigger value="all">Все брифы</TabsTrigger>
                  <TabsTrigger value="my">Мои брифы</TabsTrigger>
                  <TabsTrigger value="saved">Сохраненные</TabsTrigger>
                </TabsList>
                
                <div className="flex items-center space-x-2">
                  <Button variant="outline" className="flex items-center">
                    <Filter size={16} className="mr-2" /> Фильтры
                  </Button>
                  <Button className="bg-dali-primary hover:bg-dali-secondary">
                    Создать бриф
                  </Button>
                </div>
              </div>

              <TabsContent value="all" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {briefs.map((brief) => (
                    <BriefCard key={brief.id} brief={brief} />
                  ))}
                </div>
                <div className="mt-10 text-center">
                  <Button variant="outline">Загрузить еще</Button>
                </div>
              </TabsContent>

              <TabsContent value="my">
                {myBriefs.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {myBriefs.map((brief) => (
                      <MyBriefCard key={brief.id} brief={brief} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <FileText size={48} className="mx-auto text-gray-400 mb-4" />
                    <h3 className="text-xl font-medium text-gray-900 mb-2">У вас пока нет брифов</h3>
                    <p className="text-gray-500 mb-6">Создайте свой первый бриф, чтобы найти специалистов для вашего проекта</p>
                    <Button>Создать бриф</Button>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="saved">
                <div className="text-center py-12">
                  <Star size={48} className="mx-auto text-gray-400 mb-4" />
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Сохраненные брифы</h3>
                  <p className="text-gray-500 mb-6">Здесь будут отображаться брифы, которые вы сохранили</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-4">Как работать с брифами</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Ознакомьтесь с процессом создания и работы над проектами в нашей системе
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText size={28} className="text-dali-primary" />
                  </div>
                  <CardTitle className="font-playfair">Создайте бриф</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Опишите ваш проект, укажите бюджет, сроки и требования к специалистам. Чем подробнее будет бриф, тем точнее будут отклики.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users size={28} className="text-dali-primary" />
                  </div>
                  <CardTitle className="font-playfair">Выберите специалистов</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Просмотрите отклики, изучите портфолио специалистов и соберите команду для вашего проекта на основе их опыта и стиля.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock size={28} className="text-dali-primary" />
                  </div>
                  <CardTitle className="font-playfair">Контролируйте процесс</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Отслеживайте прогресс выполнения, вносите комментарии и корректировки на каждом этапе разработки вашего проекта.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Briefs;
