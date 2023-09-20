document.getElementById('btn-submit').addEventListener('click',function(){
    console.log('submit button clicked');
    const emailField=document.getElementById('emailfield');
    const email=emailField.value;
    //console.log(email);
    const passwordField=document.getElementById('passwordfield');
    const password=passwordField.value;
    console.log(email,password);
    if(email=='mahamudanishat@gmail.com' && password=='omarfaruk'){
    window.location.href='bank.html';
    }
    else{
        alert('Tomi bank er password vhule giso tomar sathe backup');
    }
})