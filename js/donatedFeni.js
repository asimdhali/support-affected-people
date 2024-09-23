document.getElementById('doanteBtnFeni').addEventListener('click', function(event){
    const feniInputAmount = document.getElementById('feniInput').value;
    const feniDonatedId = document.getElementById('feniMainTk');
    const mainTk = document.getElementById('main-tk');
    const feniDonatedTk = parseFloat(feniDonatedId.innerText);

    const feniNewTk = parseFloat(feniInputAmount) + feniDonatedTk;
    feniDonatedId.innerText = feniNewTk;

    // MAIN TK
    const mainTkUpdate =  parseFloat(mainTk.innerText) - feniInputAmount;
    mainTk.innerText = mainTkUpdate;
    console.log('hello')
})