// using debugger to find the bug in the code
debugger
function calculateDiscountedPrice(quantity, pricePerItem) {
    let totalPrice = 0;
    debugger
    for (let i = 0; i < quantity; i++) {
        totalPrice += pricePerItem;
    }// found the bug in the let i = 1 which needed to start at 0

    if (quantity >= 10) {
        totalPrice *= 0.9;
    }

    return totalPrice;
}



module.exports = calculateDiscountedPrice;