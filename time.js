export function getHoraActual() {
    const ahora = new Date();
    const hh = String(ahora.getHours()).padStart(2, '0');
    const mm = String(ahora.getMinutes()).padStart(2, '0');
    const ss = String(ahora.getSeconds()).padStart(2, '0');
    return `${hh}:${mm}:${ss}`;
}
  
export function getFechaCompleta() {
    const ahora = new Date();

    const opciones = {
      weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
      hour: '2-digit', minute: '2-digit', second: '2-digit'
    };
    return ahora.toLocaleDateString('es-AR', opciones);
}