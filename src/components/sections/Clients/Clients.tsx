import ClientsHeader from "./ClientsHeader";
import ClientLogos from "./ClientLogos";

import clientsData from "@/data/clients.json";

export default function Clients() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center">
        <ClientsHeader
          title={clientsData.title}
          description={clientsData.description}
        />

        <div className="mt-[16px]">
          <ClientLogos logos={clientsData.logos} />
        </div>
      </div>
    </section>
  );
}