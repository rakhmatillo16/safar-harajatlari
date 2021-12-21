const userName = prompt("Salom, ismingiz nima?")
const X =  Number (prompt ("ozingizda qancha pul borligini kiriting! (sumda)"));
const sumDollar = 750*10896.61;
const sumEuro = 120*12247.79;
const costs = Math.round (Number (sumDollar+sumEuro));

if ( X>=costs ) {
    alert (`Oq yo'l ${userName}`);
} else {
    alert (`${userName}, ozgina sabr qilish kerak bo'lar ekan`);
}