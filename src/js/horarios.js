const $horarioPais1 = document.querySelector('#horario-pais-1')
const $horarioPais2 = document.querySelector('#horario-pais-2')

export function cambiarHorario() {
  const horarioArgentina = new Date()
    .toLocaleTimeString('es-AR', {timeZone:'America/Argentina/Buenos_Aires', hour: '2-digit', minute: '2-digit'})
  const horarioPortugal = new Date()
    .toLocaleTimeString('es-AR', {timeZone:'Europe/Lisbon', hour: '2-digit', minute: '2-digit'})

  $horarioPais1.textContent = horarioArgentina
  $horarioPais2.textContent = horarioPortugal
}