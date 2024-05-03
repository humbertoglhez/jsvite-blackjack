/**
 *  Esta funcion permite tomar una carta
 * @param {Array<string>} deck es un arreglo de strings
 * @returns {String} retorna la cara del deck
 */
export const pedirCarta = (deck) => {
	if (!deck || deck.length === 0) {
		throw 'No hay cartas en el deck';
	}
	const carta = deck.pop();
	return carta;
};
