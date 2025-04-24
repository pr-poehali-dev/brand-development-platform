import { Button } from "@/components/ui/button";

const HeroBanner = () => {
  return (
    <div className="relative bg-dali-dark pt-24 pb-20 px-4 sm:px-6 lg:pt-32 lg:pb-28 lg:px-8">
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl font-playfair">
            <span className="block">Разработка бренда</span>
            <span className="block text-dali-primary">с индивидуальным подходом</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Платформа для создания уникальных брендов, где клиенты подбирают своего специалиста, 
            а профессионалы развивают навыки и работают в команде.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <Button className="bg-dali-primary text-white hover:bg-dali-secondary px-8 py-3 rounded-md text-base font-medium">
              Создать бриф
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-dali-dark px-8 py-3 rounded-md text-base font-medium">
              Найти специалиста
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
