'use client';
import { useState } from "react";
import ClientCard from "@/components/ClientCard";
import SearchBar from "@/components/SearchBar";
import { Client } from "@/types";
import clientsData from "@/data/clients.json";

export default function Home() {

  const [searchQuery, setSearchQuery] = useState('');

  const [selectedClient, setSelectedClient] = useState<Client | null>(null);

  const clients = clientsData.clients;

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
    <main className="contaner  w-1/2 mx-auto p-4 m-25 md:p-8  border rounded-lg bg-blue-100 ">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Lista de Clientes</h1>
        
        <SearchBar
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {selectedClient&& (
          <div className="text-center border-2 border-blue-500 rounded-lg p-6 mb-8 bg-blue-50 shadow-lg">
            <h2 className="text-2xl font-bold mb-4"> { selectedClient.name }</h2>
              <div className="space-y-2">
                <p><span className="font-semibold"> {selectedClient.email} </span></p>
                <p><span className="font-semibold"> {selectedClient.phone} </span></p>
                <p><span className="font-semibold"> {selectedClient.company} </span></p>
              </div>
          </div>
        )}

        {filteredClients.length > 0 ?(
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
            Nenhum cliente encontrado com esse nome;
          </p>
        )}
      </div>
    </main>
  );
}
