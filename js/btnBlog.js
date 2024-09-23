const blogBtn = document.getElementById('blogBtn');
const homeBtn = document.getElementById('homeBtn');

const donateHistory = document.getElementById('don-his');
const mainSection = document.getElementById('main-section');
const faqsSection = document.getElementById('faqs-section');

blogBtn.addEventListener('click', function(){
    blogBtn.classList.add('hidden');
    homeBtn.classList.remove('hidden');

    donateHistory.classList.add('hidden');
    mainSection.classList.add('hidden');

    faqsSection.classList.remove('hidden')
});

homeBtn.addEventListener('click', function(){
    blogBtn.classList.remove('hidden');
    homeBtn.classList.add('hidden');

    donateHistory.classList.remove('hidden');
    mainSection.classList.remove('hidden');
    faqsSection.classList.add('hidden');
})