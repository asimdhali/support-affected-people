document.getElementById('donateBtnNk').addEventListener('click', function(event){
    
    const nkInput = document.getElementById('nkInput');
    const nkDonatedId = document.getElementById('nkMainTk');
    const mainTk = document.getElementById('main-tk');

    const nkInputAmount = parseFloat(nkInput.value)
    const nkDonatedTk = parseFloat(nkDonatedId.innerText);
    const mainTkNum = parseFloat(mainTk.innerText)

    // NOT NEGATIVE, NaN AND NULL
    if(nkInputAmount <= 0 || nkInputAmount === '' || isNaN(nkInputAmount)){
        alert('Invalid Donation Amount');
        return
    } else if(mainTkNum <= 0 || nkInputAmount > mainTkNum){
        alert('Please check your main balance')
        return
    } else{
        const nkNewTk = nkInputAmount + nkDonatedTk;
        nkDonatedId.innerText = nkNewTk;
        
        // MAIN TK
        const mainTkUpdate =  mainTkNum - nkInputAmount;
        mainTk.innerText = mainTkUpdate;

        // HISTORY UPDATE 
        showhistoryUpdate(nkInputAmount, 'Flood Relief in Noakhali Bangladesh');

        document.getElementById('nkInput').value = '';
    }
})