document.getElementById('donateBtnNk').addEventListener('click', function(event){
    const nkInputAmount = document.getElementById('nkInput').value;
    const nkDonatedId = document.getElementById('nkMainTk');
    const mainTk = document.getElementById('main-tk');
    const nkDonatedTk = parseFloat(nkDonatedId.innerText);

    const nkNewTk = parseFloat(nkInputAmount) + nkDonatedTk;
    nkDonatedId.innerText = nkNewTk;

    // MAIN TK
    const mainTkUpdate =  parseFloat(mainTk.innerText) - nkInputAmount;
    mainTk.innerText = mainTkUpdate;

})