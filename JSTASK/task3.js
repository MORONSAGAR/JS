function actualprice(costprice){
    const discountRate =0.20; //20%discount must convert into decimla form (20/100=0.20)
    const discountAmount =costprice*discountRate;
    const sellinfPrice = costprice-discountAmount;
    console.log(`Selling price after 20% discount: ₹${sellinfPrice}`);
}
actualprice(1000);