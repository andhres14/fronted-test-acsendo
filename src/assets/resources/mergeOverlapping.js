/**
 * Metodo encargado de unir elementos superpuestos y retornar matriz resultante (no superpuestos)
 * @param items array objetos (elementos del problema)
 * @returns {*[]} Array de items no superpuestos
 */
const mergeOverlappings = items => {
  // ordenamos el array de objetos por la propiedad startPx
  items.sort((a, b) => a.startPx - b.startPx);
  const mergedItems = [items[0]];
  for (let i = 1; i < items.length; i++) {
    const { startPx, endPx } = items[i];
    let prevItem = mergedItems[mergedItems.length - 1];
    // si el rango actual se superpone al anterior se actualizamos el rango anterior
    if (prevItem.endPx >= startPx) {
      // si se superpone al anterior actualizamos el rango anterior
      prevItem.endPx = Math.max(prevItem.endPx, endPx);
    } else {
      // en caso contrario lo agregamos a nuestra matriz resultante
      mergedItems.push(items[i]);
    }
  }
  return mergedItems;
};

const resp = mergeOverlappings([
  {startPx: 10, endPx: 30},
  {startPx: 55, endPx: 65},
  {startPx: 35, endPx: 50},
  {startPx: 20, endPx: 40},
  {startPx: 60, endPx: 70}
]);

console.log(resp);
