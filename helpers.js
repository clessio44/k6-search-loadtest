export function logDebug(msg) {
    if (__ENV.DEBUG === 'true') {
      console.log(`DEBUG: ${msg}`);
    }
  }
  
  export function gerarDataAleatoria(diasAdiante = 30) {
    const hoje = new Date();
    hoje.setDate(hoje.getDate() + Math.floor(Math.random() * diasAdiante));
    return hoje.toISOString().split('T')[0]; // Formato YYYY-MM-DD
  }
  
  /**
   * Gera data final a partir da data inicial (string 'YYYY-MM-DD') somando 'dias'
   */
  export function gerarDataFim(dataInicio, dias = 2) {
    const dt = new Date(dataInicio);
    dt.setDate(dt.getDate() + dias);
    return dt.toISOString().split('T')[0];
  }
  
  export function escolherOrigemDestino() {
    const aeroporto = ['GRU', 'SDU', 'BSB', 'POA', 'CNF', 'GIG'];
    const origem = aeroporto[Math.floor(Math.random() * aeroporto.length)];
    let destino;
    do {
      destino = aeroporto[Math.floor(Math.random() * aeroporto.length)];
    } while (destino === origem);
    return { origem, destino };
  }
  