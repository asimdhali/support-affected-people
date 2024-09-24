// DONATION & HISTORY BTN
const donationBtn = document.getElementById('donationBtn');
const historyBtn = document.getElementById('historyBtn');

// DONATION AND HISTORY CARDS
const donateCards = document.getElementById('donate-cards');
const historyCards = document.getElementById('historyContainer');
const footer2 = document.getElementById('footerid');

// DONATION
donationBtn.addEventListener('click', function(){
    donationBtn.classList.add('bg-btn-bg', 'text-main-txt', 'font-bold');
    historyBtn.classList.remove('bg-btn-bg','font-semibold');
    historyBtn.classList.add('text-coin-txt', 'font-medium')

    donateCards.classList.remove('hidden');
    historyCards.classList.add('hidden');
    footer2.classList.remove('hidden')
})

// HISTORY
historyBtn.addEventListener('click', function(){
    donationBtn.classList.remove('bg-btn-bg');
    donationBtn.classList.add('text-coin-txt', 'font-medium')
    historyBtn.classList.add('bg-btn-bg','text-main-txt','font-semibold');

    donateCards.classList.add('hidden');
    historyCards.classList.remove('hidden');
    footer2.classList.add('hidden');
})
