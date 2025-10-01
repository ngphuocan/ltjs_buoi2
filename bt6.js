let productName, totalPrice, DISCOUNT_RATE;
(productName = "Áo"), (unitPrice = 200000), (quantity = 3);
DISCOUNT_RATE = 0.1;
totalPrice = unitPrice * quantity * (1 - DISCOUNT_RATE);
console.log(
  "Sản phẩm: " +
    productName +
    ", Số lượng: " +
    quantity +
    ", Tổng giá: " +
    totalPrice +
    " VND"
);
ss