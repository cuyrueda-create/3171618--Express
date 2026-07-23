const verificarLogs = (logsArray, ipBuscada) => {
  // Obtén el total de logs con .length
  const totalLogs = logsArray.length;

  // Revisa si la IP existe con .includes()
  const existe = logsArray.includes(ipBuscada);

  return {
    totalLogs,
    existe
  };
};

const ipsServidor = ["192.168.1.1", "10.0.0.5", "172.16.0.1", "192.168.1.100"];
console.log("Resultado Auditoría:", verificarLogs(ipsServidor, "10.0.0.5"));
