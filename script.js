let maximum = parseInt(prompt("Maksimum sayı giriniz: "));
while (!maximum) {
  maximum = parseInt(console.log("Lütfen geçerli bir numara giriniz!!"));
}
const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = prompt(
  "İlk tahmininizi giriniz: ('Oyundan çıkmak için q tuşuna basınız!')"
);
let deneme = 1;

while (parseInt(guess) !== targetNum) {
  if (guess === "q") break;
  guess = parseInt(guess);
  if (guess > targetNum) {
    guess = prompt("Çok yüksek ! Yeni bir tahmin girin.");
    deneme++;
  } else if (guess < targetNum) {
    guess = prompt("Çok düşük ! Yeni bir tahmin girin.");
    deneme++;
  } else {
    guess = prompt("Geçersiz bir tahmin girdiniz!!");
  }
}
if (guess === "q") {
  console.log("Oyundan çıktın!!");
} else {
  console.log("Tebrikler! Kazandın.");
  console.log(`Doğru bildin! ${deneme}. denemende oldu.`);
}
