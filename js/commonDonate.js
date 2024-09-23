// COMMON FUNCTION FOR ALL "DONATE NOW", "MAIN TK", "FLOOD & QUOTA TK UPDATE"
function donateNowAllEffect(inputidP, cardTotalIdP, placeP){
    const inputID = document.getElementById(inputidP);
    const cardTotalID = document.getElementById(cardTotalIdP);
    const mainTkID = document.getElementById('main-tk');

    const inputAmount = parseFloat(inputID.value);
    const cardDonatedTK= parseFloat(cardTotalID.innerText);
    const mainTK = parseFloat(mainTkID.innerText);

    if(inputAmount <= 0 || inputAmount === '' || isNaN(inputAmount)){
        alert('Invalid Donation Amount');
        return;
    } else if(mainTK <= 0 || inputAmount > mainTK){
        alert('Please check your main balance');
        return;
    } else{
        const cardNewAmount = inputAmount + cardDonatedTK;
        cardTotalID.innerText = cardNewAmount;

        // MAIN TK UPDATE
        const mainTkUpdate = mainTK - inputAmount;
        mainTkID.innerText = mainTkUpdate;

        // HISTORY UPDATE
        showhistoryUpdate(inputAmount, placeP);

        // SHOW MODAL
        document.getElementById('showModal').showModal()

        // NULL AFTER CLICKED
        document.getElementById(inputidP).value = '';
    }
}