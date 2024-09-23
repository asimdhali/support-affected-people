// COMMON FOR THREE CARDS (NOAKHALI, FENI & QUTOA)
function showhistoryUpdate(){
    const historyDiv = document.createElement('div');

    historyDiv.innerHTML = `
        <div class="border rounded-xl p-8 mb-6">
            <div class="flex text-main-txt font-semibold text-xl mb-2">
            <div id="hist-tk">3000</div><span>&nbsp;Taka is Donated for&nbsp;</span>
            <div id="hist-name">famine-2024 at Noakhali</div>
        </div>
            <div id="hist-date">Date : Tue Sep 17 2024 08:39:11 GMT +0600 (Bangladesh Standard Time)</div>
        </div>
    `;
}