const userName = prompt("Salom, ismingiz nima?")
const X =  Number (prompt ("ozingizda qancha pul borligini kiriting! (sumda)"));
const sumDollar = 750*10896.61;
const sumEuro = 120*12247.79;
const costs = Math.round (Number (sumDollar+sumEuro));

if ( X>=costs ) {
    alert (`Sizda mablag' yetarli, Oq yo'l ${userName}`);
} else if (X<costs) {
    alert (`${userName}, sizda mablag' yetarli emas, ozgina sabr qilish kerak bo'lar ekan`);
} else {
    alert (`${userName}, siz faqat son kiritishingiz kerak edi`);
}

console.log(typeof X);