import { pedirCarta, valorCarta } from './';
import { crearCartaHTML } from './crear-carta-html';
/**
 *  turno computadora
 * @param {Number} puntosMinimos puntos minimos a pasar
 * @param {HTMLElement} puntosHTML coloca los puntos dentro dle HTML
 * @param {HTMLElement} divCartasComputadora coloca la imagen de la carta en el HTML
 * @param {Array<String>} deck requiere el deck para sacar la carta
 */
export const turnoComputadora = (
	puntosMinimos,
	puntosHTML,
	divCartasComputadora,
	deck = [],
) => {
	if (!puntosMinimos) throw new Error('Puntos minimos son necesarios');
	if (!puntosHTML) throw new Error('Argumento puntosHTML es necesarios');
	if (!deck) throw new Error('El Deck es necesario');

	let puntosComputadora = 0;
	do {
		const carta = pedirCarta(deck);

		puntosComputadora = puntosComputadora + valorCarta(carta);
		puntosHTML.innerText = puntosComputadora;

		const imgCarta = crearCartaHTML(carta);
		divCartasComputadora.append(imgCarta);

		if (puntosMinimos > 21) {
			break;
		}
	} while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

	setTimeout(() => {
		if (puntosComputadora === puntosMinimos) {
			alert('Nadie gana :(');
		} else if (puntosMinimos > 21) {
			alert('Computadora gana');
		} else if (puntosComputadora > 21) {
			alert('Jugador Gana');
		} else {
			alert('Computadora Gana');
		}
	}, 100);
};
