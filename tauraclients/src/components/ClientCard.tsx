import { Client } from "../types";

interface ClientCardProps {
    client: Client;
    onClick: () => void;
}

const ClientCard = ({ client, onClick}: ClientCardProps) => {
    return (
        <div
            onClick={onClick}
            className='border rounded-lg p-4 shadow-sm hover:bg-gray-50 hover:shadow-md transition-all duration-200 cursor-pointer'
        >
        <h3 className="text-xl font-bold text-gray-900">{client.name}</h3>
        <div className="mt-2 space-y-1">
            <p className="text-sm text-gray-700">
                <span className="font-semibold">E-mail:</span> {client.email}
            </p>
            <p className="text-sm text-gray-700">
                <span className="font-semibold">Empresa: </span> {client.company}
            </p>
        </div>

        </div>
    )
};

export default ClientCard;