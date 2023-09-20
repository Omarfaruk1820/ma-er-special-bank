document.getElementById('btn-withdraw').addEventListener('click',function(){
    //console.log('clicked omar faruk');
    const withdrawFiled=document.getElementById('withdraw-field');
    const withdrawFiledString= withdrawFiled.value;
    const newwithdraw=parseFloat(withdrawFiledString);
    //console.log(newwithdraw);
    withdrawFiled.value='';
    if(isNaN(newwithdraw)){
        alert('Please Provide a Valid Number');
        return;
    }

    const withdrawTotalElement=document.getElementById('total-withdraw');
    const withdrawTotalString=withdrawTotalElement.innerText;
    const withdrawTotal=parseFloat(withdrawTotalString);
    


    const BalanceTotalElement=document.getElementById('balance total');
    const withdrawTotalBalanceString=BalanceTotalElement.innerText;
    const withdrawTotalBalance=parseFloat(withdrawTotalBalanceString);
    if(newwithdraw > withdrawTotalBalance){
        alert('My mother said Amar  kase akon  ato taka nai ')
        return;

    }
    const currentwithdrawTotal=withdrawTotal+newwithdraw;
    withdrawTotalElement.innerText=currentwithdrawTotal;

    const currentwithdrawTotalBalance=withdrawTotalBalance-newwithdraw;
    BalanceTotalElement.innerText=currentwithdrawTotalBalance;


    


    

})