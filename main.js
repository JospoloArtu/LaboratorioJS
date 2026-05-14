// ── main.js ──
import iva, { currency, descuento } from "./helpers.js"; //importa el currency y el descuento
console.log(iva(100));                // 18
console.log(currency(99.9));          // "BsD 99.90"
console.log(descuento(100, 20));      // 80