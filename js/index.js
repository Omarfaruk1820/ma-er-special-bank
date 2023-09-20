document.getElementById('btn-deposit').addEventListener('click',function(){
    console.log('please nishat clicked');
    const depositField=document.getElementById('deposit-field');
    const depositFieldString=depositField.value;
    depositAmount= parseFloat(depositFieldString);
    console.log(depositAmount);

    const depositTotalElement= document.getElementById('total-deposit');
    const depositTotalString=depositTotalElement.innerText;
    const depositTotal=parseFloat(depositTotalString);
    //console.log(depositTotalString);
    const currentDepositTotal=depositTotal+depositAmount;
    depositTotalElement.innerText=currentDepositTotal;

    const BalanceTotalElement=document.getElementById('balance total');
    const previousdepositTotalBalanceString=BalanceTotalElement.innerText;
    const depositotalbalance=parseFloat(previousdepositTotalBalanceString);
    const currentBalanceTotal=depositotalbalance+depositAmount;
    BalanceTotalElement.innerText=currentBalanceTotal;
    


    depositField.value='';
})