import ClientsHeader from "./ClientsHeader";
import ClientLogos from "./ClientLogos";

import clientsData from "@/data/clients.json";

export default function Clients() {
  return (
    <section className="w-full bg-white mb-[40px] px-5 sm:px-8 lg:px-0">
  
      <div className="flex w-full flex-col items-center">
        <ClientsHeader
          title={clientsData.title}
          description={clientsData.description}
        />
      </div>


      <div className="mt-[16px] flex w-full justify-center">
        <ClientLogos logos={clientsData.logos} />
      </div>
    </section>
  );
}