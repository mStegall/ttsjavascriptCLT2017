function gratuity(billAmount){
    throw new Error("NO STOP!");
    return billAmount * .2
}

function totalWithGrat(billAmount){
    return gratuity(billAmount) + billAmount;
}

console.log("Your total with tip is $", (() => totalWithGrat(50))())