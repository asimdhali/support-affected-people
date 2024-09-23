document.getElementById('donateBtnNk').addEventListener('click', function(event){
    const nkInputAmount = document.getElementById('nkInput').value;
    const nkDonatedId = document.getElementById('nkMainTk');
    const nkDonatedTk = parseFloat(nkDonatedId.innerText);
    
    const nkNewTk = parseFloat(nkInputAmount) + nkDonatedTk;
    nkDonatedId.innerText = nkNewTk;
    
    // MAIN TK
    const mainTk = document.getElementById('main-tk');
    const mainTkUpdate =  parseFloat(mainTk.innerText) - nkInputAmount;
    mainTk.innerText = mainTkUpdate;


    // HISTORY UPDATE 
    showhistoryUpdate(nkInputAmount, 'Flood Relief in Noakhali Bangladesh');
})