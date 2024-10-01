function addDecimals(num) {
  return (Math.round(num * 100) / 100).toFixed(2);
}

// NOTE: the code below has been changed to fix an issue
// with type coercion of strings to numbers.
// Our addDecimals function expects a number and returns a string, so it is not
// correct to call it passing a string as the argument.

export function calcPrices(orderItems) {
  // Calculate the items price in whole number (pennies) to avoid issues with
  // floating point number calculations
  const itemsPrice = addDecimals(
    orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );

  // Calculate the shipping price
  const shippingPrice = addDecimals(itemsPrice > 100 ? 0 : 10);

  // Calculate the tax price
  const taxPrice = addDecimals(Number((0.15 * itemsPrice).toFixed(2)));

  // Calculate the total price
  const totalPrice =
    Number(itemsPrice) + Number(shippingPrice) + Number(taxPrice);

  // return prices as strings fixed to 2 decimal places
  return {
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice,
  };
}
