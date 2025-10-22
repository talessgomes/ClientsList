'use client';
import { useEffect, useState } from "react";
import ClientCard from "@/components/ClientCard";
import SearchBar from "@/components/SearchBar";
import { Client } from "@/types";
import clientsData from "@/data/clients.json";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function Home() {

  const [searchQuery, setSearchQuery] = useState('');

  const [selectedClient, setSelectedClient] = useState<Client | null>(null);

  const [clients, setClients] = useState<Client[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setClients(clientsData.clients);
      setIsLoading(false);
    }, 1500)
  }, []);

  const filteredClients = clients.filter((client) =>
    client.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
  );

  const handleClientClick = (client: Client) => {
    if(selectedClient && selectedClient.id === client.id) {
      setSelectedClient(null);
    } else {
      setSelectedClient(client);
    }
  }

  return (
    <main className="container mx-auto p-4 md:p-8 border rounded-lg 
    bg-blue-100 md:mt-12 dark:bg-gray-900
    dark:border-gray-700
    md:mt-12
    "
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8
                      text-gray-900 dark:text-gray-100
                      ">
                        Lista de Clientes</h1>

        <SearchBar
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {selectedClient&& (
          <div className="text-center border-2 border-blue-500 rounded-lg p-6 mb-8 bg-blue-50 shadow-lg
          dark:border-gray-800 dark:border-blue-700">
            <h2 className="text-2xl font-bold mb-4 dark:text-gray-100"> { selectedClient.name }</h2>
              <div className="space-y-2
                              dark:text-gray-200">
                <p className="break-words"><span className="font-semibold"> {selectedClient.email} </span></p>
                <p className="break-words"><span className="font-semibold"> {selectedClient.phone} </span></p>
                <p className="break-words"><span className="font-semibold"> {selectedClient.company} </span></p>
              </div>
          </div>
        )}

        {isLoading ? (
          <LoadingSpinner/>
        ) : filteredClients.length > 0 ?(
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredClients.map((client) => (
              <ClientCard
               key={client.id}
               client={client}
               onClick={() => handleClientClick(client)}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-8">
            Nenhum cliente encontrado com esse nome
          </p>
        )}
      </div>
    </main>
  );
}
