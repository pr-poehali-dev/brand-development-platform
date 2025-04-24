import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Avatar } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Specialist {
  id: number;
  name: string;
  position: string;
  expertise: string[];
  projectsCount: number;
  rating: number;
  imageSrc: string;
}

const specialists: Specialist[] = [
  {
    id: 1,
    name: "Анна Иванова",
    position: "Арт-директор",
    expertise: ["Брендинг", "Логотипы", "Фирменный стиль"],
    projectsCount: 47,
    rating: 4.9,
    imageSrc: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Максим Петров",
    position: "Графический дизайнер",
    expertise: ["Упаковка", "Иллюстрации", "Типографика"],
    projectsCount: 32,
    rating: 4.7,
    imageSrc: "/placeholder.svg"
  },
  {
    id: 3,
    name: "Елена Смирнова",
    position: "UI/UX дизайнер",
    expertise: ["Веб-дизайн", "Мобильные приложения", "Прототипирование"],
    projectsCount: 28,
    rating: 4.8,
    imageSrc: "/placeholder.svg"
  },
  {
    id: 4,
    name: "Дмитрий Козлов",
    position: "3D визуализатор",
    expertise: ["Архитектурная визуализация", "Интерьеры", "Моделирование"],
    projectsCount: 24,
    rating: 4.6,
    imageSrc: "/placeholder.svg"
  },
  {
    id: 5,
    name: "Ольга Соколова",
    position: "Бренд-стратег",
    expertise: ["Стратегия", "Позиционирование", "Исследования"],
    projectsCount: 19,
    rating: 4.8,
    imageSrc: "/placeholder.svg"
  },
  {
    id: 6,
    name: "Алексей Волков",
    position: "Моушн-дизайнер",
    expertise: ["Анимация", "Видеодизайн", "2D/3D"],
    projectsCount: 22,
    rating: 4.7,
    imageSrc: "/placeholder.svg"
  }
];

const SpecialistCard = ({ specialist }: { specialist: Specialist }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16 border-2 border-dali-primary">
            <img src={specialist.imageSrc} alt={specialist.name} />
          </Avatar>
          <div>
            <CardTitle className="text-lg">{specialist.name}</CardTitle>
            <CardDescription>{specialist.position}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-3">
          {specialist.expertise.map((skill, index) => (
            <Badge key={index} variant="outline" className="bg-dali-light border-dali-primary text-dali-dark">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="bg-gray-50 flex justify-between">
        <div className="text-sm text-gray-600">
          Проектов: {specialist.projectsCount}
        </div>
        <div className="flex items-center">
          <span className="text-yellow-500 mr-1">★</span>
          <span className="text-sm font-medium">{specialist.rating}</span>
        </div>
      </CardFooter>
    </Card>
  );
};

const Specialists = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-playfair font-bold text-dali-dark mb-4">
              Наши специалисты
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              В DA\LI работают профессионалы с разными стилями, видением и уровнем навыков. 
              Выберите специалиста, который лучше всего подходит для реализации вашего проекта.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialists.map((specialist) => (
              <SpecialistCard key={specialist.id} specialist={specialist} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Specialists;
