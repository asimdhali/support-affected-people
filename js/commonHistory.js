// COMMON FOR THREE CARDS (NOAKHALI, FENI & QUTOA)
function showhistoryUpdate(amount, place){
    const currentDate = new Date();
    const historyDiv = document.createElement('div');
    historyDiv.innerHTML = `
        <div class="border rounded-xl p-8 mb-6">
            <div class="flex text-main-txt font-semibold text-xl mb-2">
            ${amount} Taka is Donated for ${place}
        </div>
        <div>Date: ${currentDate.toString()}</div>
        </div>
    `;
    document.getElementById('historyContainer').appendChild(historyDiv);
}