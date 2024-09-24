// MD SCREEN
const blogBtn = document.getElementById('blogBtn');
const homeBtn = document.getElementById('homeBtn');

// SM DROPDOWN
const blogBtnsm = document.getElementById('blogBtnsm');
const homeBtnsm = document.getElementById('homeBtnsm');

const donateHistory = document.getElementById('don-his');
const mainSection = document.getElementById('main-section');
const faqsSection = document.getElementById('faqs-section');

// BLOGBTN ACTIVITY
blogBtn.addEventListener('click', function(){
    blogBtn.classList.add('hidden');
    homeBtn.classList.remove('hidden');

    donateHistory.classList.add('hidden');
    mainSection.classList.add('hidden');

    faqsSection.classList.remove('hidden')
});

// HOMEBTN ACTIVITY
homeBtn.addEventListener('click', function(){
    blogBtn.classList.remove('hidden');
    homeBtn.classList.add('hidden');

    donateHistory.classList.remove('hidden');
    mainSection.classList.remove('hidden');
    faqsSection.classList.add('hidden');
})

// BLOGBTNsm
blogBtnsm.addEventListener('click', function(){
    blogBtnsm.classList.add('bg-btn-bg');
    homeBtnsm.classList.remove('bg-btn-bg');

    donateHistory.classList.add('hidden');
    mainSection.classList.add('hidden');

    faqsSection.classList.remove('hidden')
})

// HOMEBTNsm
homeBtnsm.addEventListener('click', function(){
    homeBtnsm.classList.add('bg-btn-bg');
    blogBtnsm.classList.remove('bg-btn-bg');

    donateHistory.classList.remove('hidden');
    mainSection.classList.remove('hidden');
    faqsSection.classList.add('hidden');
})