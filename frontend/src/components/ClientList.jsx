function ClientList({ clients, onSelect }) {
  return (
    <div className="w-72 bg-gray-900 border-r border-gray-800 p-5 overflow-y-auto">
      <h2 className="text-lg font-semibold mb-6 text-gray-300 tracking-wide">
        Clients
      </h2>

      <div className="space-y-2 ">
        {clients.map((client) => (
          <div
            key={client._id}
            onClick={() => onSelect(client)}
            className="p-3 rounded-lg cursor-pointer bg-gray-900 hover:bg-gray-800 text-gray-200 border border-gray-700 hover:border-gray-700  hover:shadow transition-all duration-200"
          >
            <p className="font-medium text-gray-100 ">
              {client.company_name}
            </p>
            <p className="text-xs text-gray-500">
              {client.country}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClientList;