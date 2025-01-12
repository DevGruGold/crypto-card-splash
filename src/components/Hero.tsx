import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Your Crypto,
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {" "}
              Everywhere
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
            Transform your crypto into everyday spending power with our seamless debit card. Shop online, in stores, and withdraw cash worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Get Your Card
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="animate-card-float">
            <Card className="w-[300px] h-[180px] md:w-[400px] md:h-[240px] mx-auto bg-gradient-to-r from-[#FFE29F] via-[#FFA99F] to-[#FF719A] p-6 flex flex-col justify-between transform rotate-12">
              <div className="flex justify-between items-start">
                <div className="text-white font-bold">CryptoCard</div>
                <div className="w-12 h-12 rounded-full bg-white/20" />
              </div>
              <div className="text-white/90 font-mono">
                **** **** **** 1234
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};