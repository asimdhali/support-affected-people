// COMMON FUNCTION FOR ALL "DONATE NOW", "MAIN TK", "FLOOD & QUOTA TK UPDATE"
function donateNowAllEffect(inputidP, cardTotalIdP, placeP){
    // Catch parameter where this funciton is called
    const inputID = document.getElementById(inputidP);
    const cardTotalID = document.getElementById(cardTotalIdP);
    const mainTkID = document.getElementById('main-tk');

    const inputAmount = inputID.value;
    const cardDonatedTK= parseFloat(cardTotalID.innerText);
    const mainTK = parseFloat(mainTkID.innerText);

    // Conditions
    if(inputAmount <= 0 || inputAmount === '' || isNaN(inputAmount)){
        alert('Invalid Input Amount');
        return;
    } else if(mainTK <= 0 || inputAmount > mainTK){
        alert('Please check your main balance');
        return;
    } else{
        // CARDTK UPDATE
        const cardNewAmount = parseFloat(inputAmount) + cardDonatedTK;
        cardTotalID.innerText = cardNewAmount;

        // MAIN TK UPDATE
        const mainTkUpdate = mainTK - parseFloat(inputAmount);
        mainTkID.innerText = mainTkUpdate;

        // History update function call
        showhistoryUpdate(inputAmount, placeP);

        // SHOW MODAL
        document.getElementById('showModal').showModal()

        // NULL AFTER CLICKED
        document.getElementById(inputidP).value = '';
    }
}