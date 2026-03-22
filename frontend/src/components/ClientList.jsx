function ClientList({ clients, onSelect }) {
  return (
    <div className="w-1/4 bg-white border-r p-5 shadow-sm">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">
        Clients
      </h2>

      <div className="space-y-3">
        {clients.map((client) => (
          <div
            key={client._id}
            onClick={() => onSelect(client)}
            className="p-3 rounded-xl cursor-pointer bg-gray-50 hover:bg-blue-50 hover:shadow transition-all duration-200"
          >
            <p className="font-medium text-gray-800">
              {client.company_name}
            </p>
            <p className="text-sm text-gray-500">
              {client.country}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClientList;