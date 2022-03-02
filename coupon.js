function ApplyCoupon() {
  const coupon = document.getElementById("coupon");
  const prod = document.getElementById("product");
  const final = document.getElementById("discounted");
  let discount = coupon.value;
  let product = prod.value;
  let converted = product.replace(" ", "_");
  const dict = {
    Ipad: "2000",
    Smart_Watch: "200",
    Iphone_13: "1000",
    Tablet: "600",
  }
  for (i in dict) {
    if (converted == i) {
      const disc = 100 - discount;
      const finalPrice = (dict[i] * disc) / 100;
      final.innerHTML = "Your product cost $" + dict[i] + " And with the coupon of %" + discount + " is now $" + finalPrice;
    }
  }
}
