const total = 100;
const ordered = 50;
if (total >= ordered) {
  console.log(`Заказ оформлен, с вами свяжется менеджер`);
} else {
  console.log(`На складе недостаточно товаров!`);
}

checkNumberOfGoods(30);
checkNumberOfGoods(80);
checkNumberOfGoods(130);

function checkNumberOfGoods(ordered) {
  if (total >= ordered) {
    console.log(`Заказ оформлен, с вами свяжется менеджер`);
  } else {
    console.log(`На складе недостаточно товаров!`);
  }
}
