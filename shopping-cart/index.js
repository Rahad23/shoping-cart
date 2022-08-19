
function getPrice(phonePrice){
    const phoneHtml = document.getElementById(phonePrice);
    const phoneInnerText = phoneHtml.innerText;
    const replaceNumber = parseInt(phoneInnerText);

    return replaceNumber;
}

function updateNumber(inIncris, inputId, FixedPrice, FixedPriceId){
    const phoneId = document.getElementById(inputId);
    const phoneIdValue = phoneId.value;
    const phoneIdConvartNumber = parseInt(phoneIdValue);
    
    let phoneIdIncrement;
    
    if(inIncris === true){

        phoneIdIncrement = phoneIdConvartNumber + 1;
        const totalPrice = phoneIdIncrement * FixedPrice;
        const getPriceId = document.getElementById(FixedPriceId);
        getPriceId.innerText = totalPrice;

    }else if(inIncris === false){

        const minusBtn = document.getElementById('phoneCoverMinus');
        const munusBtn2 = document.getElementById('phoneCoverMinus');

        if(phoneIdConvartNumber > 0){
            
        phoneIdIncrement = phoneIdConvartNumber - 1;
        const totalPrice = phoneIdIncrement * FixedPrice;
        const getPriceId = document.getElementById(FixedPriceId);
        getPriceId.innerText = totalPrice;
        minusBtn.removeAttribute('disabled');
        munusBtn2.removeAttribute('disabled');
        }else{

            minusBtn.setAttribute('disabled');
            munusBtn2.setAttribute('disabled');
        }
        
        console.log(phoneIdConvartNumber);

    }



    phoneId.value = phoneIdIncrement;

}

function setTotalPrice(){
    const getTotalPhonePrice = document.getElementById('phonePrice');
    const getTotalPhonePriceInnerText = getTotalPhonePrice.innerText;
    const convartNumber = parseInt(getTotalPhonePriceInnerText);

    const getTotalCoverPrice = document.getElementById('phoneCoverPrice');
    const getTotalCoverPriceInnerText = getTotalCoverPrice.innerText;
    const convartNumberText = parseInt(getTotalCoverPriceInnerText);

    const totalMoney = convartNumber + convartNumberText;
    const getSubtotalHtml = document.getElementById('subtotal');
    const getSubtotalInnerText = getSubtotalHtml.innerText;
    const convartTotalPriceNumber = parseInt(getSubtotalInnerText);
    getSubtotalHtml.innerText = totalMoney;

    // Calculate Tax
    const totalTax = (totalMoney * 0.1).toFixed(2);
    const convartTotalTaxNumber = parseFloat(totalTax);
    const taxHtmlId = document.getElementById('TotalTax');
    taxHtmlId.innerText = totalTax;

    const paymentAmount = totalMoney + convartTotalTaxNumber;
    
    const getPaymentHtml = document.getElementById('payment');
    getPaymentHtml.innerText = paymentAmount;
    
}


document.getElementById('phonePlus').addEventListener('click', function(){
    updateNumber(true, 'phoneid', 1219, 'phonePrice');
    setTotalPrice();
 });

 document.getElementById('phoneMinus').addEventListener('click', function(){
    updateNumber(false, 'phoneid', 1219, 'phonePrice');
    setTotalPrice();
 });

 document.getElementById('phoneCoverPlus').addEventListener('click', function(){
    updateNumber(true, 'phoneCoverInput', 59, 'phoneCoverPrice');
    setTotalPrice();
 });

 document.getElementById('phoneCoverMinus').addEventListener('click', function(){
    updateNumber(false, 'phoneCoverInput', 59, 'phoneCoverPrice');
    setTotalPrice();
 });
 
 
