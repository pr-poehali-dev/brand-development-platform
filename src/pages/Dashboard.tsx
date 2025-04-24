import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress"; 
import { 
  Bell,
  User,
  FileText,
  Settings,
  MessageCircle,
  Clock,
  ChevronRight,
  Calendar,
  BarChart
} from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { useState } from "react";

// Моковые данные для демонстрации
const projects = [
  {
    id: 1,
    title: "Ребрендинг кофейни «Кофе & Книги»",
    client: "ООО «Литературные напитки»",
    status: "В процессе",
    startDate: "15.06.2023",
    deadline: "30.07.2023",
    progress: 65,
    stages: [
      { name: "Исследование", status: "Завершен", progress: 100 },
      { name: "Концепция", status: "Завершен", progress: 100 },
      { name: "Дизайн логотипа", status: "В процессе", progress: 80 },
      { name: "Фирменный стиль", status: "В процессе", progress: 45 },
      { name: "Брендбук", status: "Не начат", progress: 0 }
    ],
    team: [
      { name: "Анна Иванова", role: "Арт-директор" },
      { name: "Дмитрий Петров", role: "Графический дизайнер" },
      { name: "Елена Смирнова", role: "Брендинг-стратег" }
    ],
    unreadMessages: 3
  },
  {
    id: 2,
    title: "Редизайн упаковки «Эко Продукт»",
    client: "ИП Зеленов А.М.",
    status: "В процессе",
    startDate: "01.06.2023",
    deadline: "20.07.2023",
    progress: 40,
    stages: [
      { name: "Исследование", status: "Завершен", progress: 100 },
      { name: "Концепция", status: "Завершен", progress: 100 },
      { name: "Дизайн упаковки", status: "В процессе", progress: 60 },
      { name: "Подготовка макетов", status: "Не начат", progress: 0 },
      { name: "Финализация", status: "Не начат", progress: 0 }
    ],
    team: [
      { name: "Максим Соколов", role: "Дизайнер упаковки" },
      { name: "Ольга Никитина", role: "Иллюстратор" }
    ],
    unreadMessages: 0
  },
  {
    id: 3,
    title: "Логотип для IT-стартапа «CloudSync»",
    client: "CloudSync Technologies",
    status: "Завершен",
    startDate: "10.05.2023",
    deadline: "05.06.2023",
    progress: 100,
    stages: [
      { name: "Исследование", status: "Завершен", progress: 100 },
      { name: "Концепция", status: "Завершен", progress: 100 },
      { name: "Дизайн логотипа", status: "Завершен", progress: 100 },
      { name: "Финализация", status: "Завершен", progress: 100 }
    ],
    team: [
      { name: "Артем Волков", role: "Графический дизайнер" }
    ],
    unreadMessages: 0
  }
];

const notifications = [
  {
    id: 1,
    type: "message",
    project: "Ребрендинг кофейни «Кофе & Книги»",
    content: "Клиент оставил комментарий к логотипу",
    time: "1 час назад",
    read: false
  },
  {
    id: 2,
    type: "deadline",
    project: "Редизайн упаковки «Эко Продукт»",
    content: "Напоминание: до дедлайна осталось 5 дней",
    time: "3 часа назад",
    read: false
  },
  {
    id: 3,
    type: "stage",
    project: "Ребрендинг кофейни «Кофе & Книги»",
    content: "Этап «Концепция» утвержден клиентом",
    time: "вчера",
    read: true
  },
  {
    id: 4,
    type: "team",
    project: "Ребрендинг кофейни «Кофе & Книги»",
    content: "Елена Смирнова присоединилась к проекту",
    time: "2 дня назад",
    read: true
  }
];

const upcomingEvents = [
  {
    id: 1,
    title: "Встреча с клиентом",
    project: "Ребрендинг кофейни «Кофе & Книги»",
    date: "25 июня 2023",
    time: "14:00"
  },
  {
    id: 2,
    title: "Дедлайн по этапу «Дизайн упаковки»",
    project: "Редизайн упаковки «Эко Продукт»",
    date: "30 июня 2023",
    time: "18:00"
  },
  {
    id: 3,
    title: "Командное обсуждение концепции",
    project: "Ребрендинг кофейни «Кофе & Книги»",
    date: "22 июня 2023",
    time: "11:30"
  }
];

const ProjectCard = ({ project }: { project: any }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className="mb-6 overflow-hidden">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl font-playfair mb-1">{project.title}</CardTitle>
            <CardDescription>Клиент: {project.client}</CardDescription>
          </div>
          <Badge className={
            project.status === "Завершен" 
              ? "bg-green-100 text-green-800" 
              : project.status === "В процессе" 
              ? "bg-dali-primary/20 text-dali-primary"
              : "bg-gray-200 text-gray-800"
          }>
            {project.status}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="pb-3">
        <div className="flex justify-between text-sm mb-3">
          <span className="text-gray-500">Начало: {project.startDate}</span>
          <span className="text-gray-500">Дедлайн: {project.deadline}</span>
        </div>
        
        <div className="mb-2">
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium">Общий прогресс</span>
            <span className="text-sm">{project.progress}%</span>
          </div>
          <Progress value={project.progress} className="h-2" />
        </div>
        
        {expanded && (
          <div className="mt-4 space-y-4">
            <div>
              <h4 className="text-md font-medium mb-2">Этапы проекта</h4>
              <div className="space-y-3">
                {project.stages.map((stage: any, idx: number) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">{stage.name}</span>
                      <span className="text-xs">
                        <Badge variant="outline" className={
                          stage.status === "Завершен" 
                            ? "text-green-600 bg-green-50" 
                            : stage.status === "В процессе" 
                            ? "text-dali-primary bg-purple-50"
                            : "text-gray-500 bg-gray-50"
                        }>
                          {stage.status}
                        </Badge>
                      </span>
                    </div>
                    <Progress value={stage.progress} className="h-1.5" />
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-md font-medium mb-2">Команда проекта</h4>
              <div className="space-y-2">
                {project.team.map((member: any, idx: number) => (
                  <div key={idx} className="flex justify-between text-sm">
                    <span>{member.name}</span>
                    <span className="text-gray-500">{member.role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </CardContent>
      
      <CardFooter className="flex justify-between border-t pt-4">
        <Button 
          variant="ghost" 
          size="sm"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Свернуть" : "Подробнее"}
        </Button>
        
        <div className="flex space-x-2">
          {project.unreadMessages > 0 && (
            <Button variant="outline" size="sm" className="text-dali-primary">
              <MessageCircle size={16} className="mr-1" /> 
              {project.unreadMessages}
            </Button>
          )}
          
          <Button size="sm">
            Перейти к проекту
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

const NotificationItem = ({ notification }: { notification: any }) => {
  const getIcon = () => {
    switch (notification.type) {
      case "message":
        return <MessageCircle size={16} className="text-blue-500" />;
      case "deadline":
        return <Clock size={16} className="text-orange-500" />;
      case "stage":
        return <FileText size={16} className="text-green-500" />;
      case "team":
        return <User size={16} className="text-purple-500" />;
      default:
        return <Bell size={16} className="text-gray-500" />;
    }
  };

  return (
    <div className={`flex p-3 border-b ${notification.read ? "" : "bg-purple-50"}`}>
      <div className="mr-3 mt-0.5">
        {getIcon()}
      </div>
      <div className="flex-1">
        <div className="text-sm font-medium">{notification.project}</div>
        <div className="text-sm text-gray-600">{notification.content}</div>
        <div className="text-xs text-gray-500 mt-1">{notification.time}</div>
      </div>
      {!notification.read && (
        <div className="w-2 h-2 bg-dali-primary rounded-full mt-2"></div>
      )}
    </div>
  );
};

const EventCard = ({ event }: { event: any }) => (
  <div className="flex items-start p-3 border-b">
    <div className="mr-3 bg-purple-100 text-dali-primary p-2 rounded-md">
      <Calendar size={20} />
    </div>
    <div>
      <h4 className="text-sm font-medium">{event.title}</h4>
      <p className="text-xs text-gray-600">{event.project}</p>
      <div className="flex items-center text-xs text-gray-500 mt-1">
        <Clock size={12} className="mr-1" />
        {event.date}, {event.time}
      </div>
    </div>
  </div>
);

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow pt-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-playfair font-bold text-gray-900">Личный кабинет</h1>
              <p className="text-gray-600">Отслеживайте прогресс ваших проектов и управляйте задачами</p>
            </div>
            <Button variant="outline" className="flex items-center">
              <Settings size={16} className="mr-2" /> Настройки
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Основная область с проектами */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-2xl font-playfair">Мои проекты</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="active">
                    <TabsList className="mb-4">
                      <TabsTrigger value="active">Активные</TabsTrigger>
                      <TabsTrigger value="completed">Завершенные</TabsTrigger>
                      <TabsTrigger value="all">Все</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="active" className="mt-2">
                      {projects.filter(p => p.status === "В процессе").map(project => (
                        <ProjectCard key={project.id} project={project} />
                      ))}
                    </TabsContent>
                    
                    <TabsContent value="completed" className="mt-2">
                      {projects.filter(p => p.status === "Завершен").map(project => (
                        <ProjectCard key={project.id} project={project} />
                      ))}
                    </TabsContent>
                    
                    <TabsContent value="all" className="mt-2">
                      {projects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                      ))}
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-playfair">Статистика и аналитика</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <Card>
                      <CardContent className="pt-6">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-dali-primary">3</div>
                          <div className="text-sm text-gray-500">Активных проектов</div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-dali-primary">68%</div>
                          <div className="text-sm text-gray-500">Средний прогресс</div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-dali-primary">12</div>
                          <div className="text-sm text-gray-500">Дней до дедлайна</div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <Button variant="outline" className="w-full flex items-center justify-center">
                    <BarChart size={16} className="mr-2" /> 
                    Подробная аналитика
                    <ChevronRight size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Боковая панель */}
            <div className="space-y-6">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-xl font-playfair">Уведомления</CardTitle>
                    <Badge className="bg-dali-primary">
                      {notifications.filter(n => !n.read).length}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="max-h-[300px] overflow-y-auto">
                    {notifications.map(notification => (
                      <NotificationItem key={notification.id} notification={notification} />
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-2">
                  <Button variant="ghost" className="w-full text-dali-primary">
                    Показать все уведомления
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-playfair">Предстоящие события</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="max-h-[300px] overflow-y-auto">
                    {upcomingEvents.map(event => (
                      <EventCard key={event.id} event={event} />
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-2">
                  <Button variant="ghost" className="w-full text-dali-primary">
                    Все события
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-playfair">Быстрые действия</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <FileText size={16} className="mr-2" /> Создать новый бриф
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <MessageCircle size={16} className="mr-2" /> Сообщения
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <User size={16} className="mr-2" /> Мой профиль
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
