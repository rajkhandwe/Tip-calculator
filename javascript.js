let btn = document.getElementById('btn');
btn.addEventListener('click', function() {
    let billAmount = document.getElementById('billAmount').value;
    let tip = document.getElementById('tip').value;

    let tipAmount = document.getElementById('tip-amount').value = billAmount / tip;
    document.getElementById('total-bill').value = parseInt(billAmount) + parseFloat(tipAmount);
    
})