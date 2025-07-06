import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { XMRTInfoDialog } from "./XMRTInfoDialog";

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Your XMRT,
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {" "}
              Everywhere
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
            Experience privacy-first transactions with XMRT tokens on Sepolia testnet. Anonymous signup, decentralized identity, and seamless Web3 integration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Get XMRT Card
            </Button>
            <XMRTInfoDialog />
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="animate-card-float">
            <Card className="w-[300px] h-[180px] md:w-[400px] md:h-[240px] mx-auto bg-gradient-to-r from-primary via-primary/80 to-secondary p-6 flex flex-col justify-between transform rotate-12">
              <div className="flex justify-between items-start">
                <div className="text-white font-bold">XMRT Card</div>
                <div className="w-12 h-12 rounded-full bg-white/20" />
              </div>
              <div className="text-white/90 font-mono">
                **** **** **** XMRT
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};