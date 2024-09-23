// DONATION & HISTORY BTN
const donationBtn = document.getElementById('donationBtn');
const historyBtn = document.getElementById('historyBtn');

// DONATION AND HISTORY CARDS
const donateCards = document.getElementById('donate-cards');
const historyCards = document.getElementById('history-cards');

// DONATION
donationBtn.addEventListener('click', function(){
    donationBtn.classList.add('bg-btn-bg');
    historyBtn.classList.remove('bg-btn-bg');

    donateCards.classList.remove('hidden');
    historyCards.classList.add('hidden');
})

// HISTORY
historyBtn.addEventListener('click', function(){
    donationBtn.classList.remove('bg-btn-bg');
    historyBtn.classList.add('bg-btn-bg');

    donateCards.classList.add('hidden');
    historyCards.classList.remove('hidden')
})
