import Image from "next/image";

import { LucideIcon, Monitor } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Content
import { dataForYouWhoWant } from "@/content";

const ForYou = () => {
  const items = dataForYouWhoWant;

  return (
    <Tabs defaultValue="1" className="flex w-full flex-col items-center gap-6">
      <TabsList className="flex w-max items-center justify-center gap-4 rounded-full p-2">
        {items.map((item) => (
          <TabsTrigger
            key={item.id}
            value={item.id.toString()}
            className="flex flex-1 items-center justify-center rounded-full p-2 md:gap-2 md:px-6"
          >
            <item.icon className="h-6 w-6 md:h-4 md:w-4" />
            <span className="hidden md:flex">{item.label}</span>
          </TabsTrigger>
        ))}
      </TabsList>

      {items.map((item) => (
        <TabsContent key={item.id} value={item.id.toString()}>
          <div className="flex flex-col gap-6 md:flex-row">
            <div className="w-full md:w-1/3">
              <Image
                src={`/${item.img}`}
                alt={item.title}
                width={400}
                height={300}
                className="h-auto w-full"
              />
            </div>
            <div className="gap-4 space-y-3 text-center text-sm md:w-2/3 md:text-start md:text-base">
              <h3 className="h3 font-display font-bold text-primary-foreground">
                {item.title}
              </h3>
              {item.desc.map((subitem) => {
                return <p key={subitem}>{subitem}</p>;
              })}
            </div>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default ForYou;
