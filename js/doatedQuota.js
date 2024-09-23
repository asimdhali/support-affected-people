document.getElementById('donateBtnQta').addEventListener('click', function(event){
    const qtaInputAmount = document.getElementById('qtaInput').value;
    const qtaDonatedId = document.getElementById('qtaMainTk');
    const mainTk = document.getElementById('main-tk');
    const qtaDonatedTk = parseFloat(qtaDonatedId.innerText);

    const qtaNewTk = parseFloat(qtaInputAmount) + qtaDonatedTk;
    qtaDonatedId.innerText = qtaNewTk;

    // MAIN TK
    const mainTkUpdate =  parseFloat(mainTk.innerText) - qtaInputAmount;
    mainTk.innerText = mainTkUpdate;

    // HISTORY UPDATE
    showhistoryUpdate(qtaInputAmount, 'Qutoa Movement')

    // SHOW MODAL
    document.getElementById('showModal').showModal()

    // NULL AFTER CLICKED
    document.getElementById('nkInput').value = '';
})