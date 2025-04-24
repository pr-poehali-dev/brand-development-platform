import { Users, Briefcase, Eye, Award } from "lucide-react";

const features = [
  {
    name: "Для клиентов",
    description: "Подберите своего специалиста и контролируйте каждый этап создания бренда.",
    icon: Eye,
  },
  {
    name: "Для специалистов",
    description: "Получите опыт работы в команде, выбирайте проекты и повышайте профессиональные навыки.",
    icon: Users,
  },
  {
    name: "Формирование команд",
    description: "Специалисты могут формировать или вступать в команды для работы над проектами.",
    icon: Briefcase,
  },
]

const FeaturesSection = () => {
  return (
    <div className="py-16 bg-dali-light overflow-hidden lg:py-24">
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="relative">
          <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-dali-dark sm:text-4xl font-playfair">
            Платформа для создания уникальных брендов
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
            DA\LI соединяет клиентов и специалистов для совместной работы над брендами с полной прозрачностью процесса
          </p>
        </div>

        <div className="relative mt-12 lg:mt-16 lg:grid lg:grid-cols-3 lg:gap-8 lg:items-start">
          {features.map((feature) => (
            <div key={feature.name} className="mt-10 lg:mt-0 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-dali-primary text-white mx-auto">
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <div className="mt-5 text-center">
                <h3 className="text-lg leading-6 font-medium text-dali-dark font-playfair">{feature.name}</h3>
                <p className="mt-2 text-base text-gray-500">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
