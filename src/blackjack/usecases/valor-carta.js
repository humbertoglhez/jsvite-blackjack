/**
 *  Obtener el valor del string de Carta
 * @param {<string>} carta Recibe la carta sacada del deck
 * @returns
 */
export const valorCarta = (carta) => {
	const valor = carta.substring(0, carta.length - 1);
	return isNaN(valor) ? (valor === 'A' ? 11 : 10) : valor * 1;
};
