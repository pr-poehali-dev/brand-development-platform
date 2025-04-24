import { FileText, Briefcase, Users, MessageCircle } from "lucide-react";

const steps = [
  {
    id: '01',
    name: 'Создание брифа',
    description: 'Клиент составляет бриф с подробным описанием проекта и требований к бренду',
    icon: FileText,
  },
  {
    id: '02',
    name: 'Подбор специалистов',
    description: 'Клиент выбирает специалистов для работы над проектом или специалисты откликаются на бриф',
    icon: Users,
  },
  {
    id: '03',
    name: 'Работа над проектом',
    description: 'Специалисты индивидуально или в команде разрабатывают бренд в соответствии с брифом',
    icon: Briefcase,
  },
  {
    id: '04',
    name: 'Контроль и коммуникация',
    description: 'Клиент наблюдает за процессом разработки, вносит изменения и комментирует проект',
    icon: MessageCircle,
  },
]

const ProcessSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-dali-primary font-semibold tracking-wide uppercase">Процесс</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl font-playfair">
            Как работает DA\LI
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Прозрачный и эффективный процесс разработки бренда от начала до конца
          </p>
        </div>

        <div className="mt-16">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {steps.map((step) => (
              <div key={step.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-dali-primary text-white">
                  <step.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="ml-16">
                  <div className="flex items-center">
                    <span className="text-xl font-bold text-dali-secondary mr-2">{step.id}</span>
                    <h3 className="text-lg leading-6 font-medium text-gray-900 font-playfair">{step.name}</h3>
                  </div>
                  <p className="mt-2 text-base text-gray-500">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
