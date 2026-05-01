const contractAddress = "0x1F98431c8aD98523631AE4a59f267346ea31F984"; 
const ownerAddress = "0x4c6d884e62d10fe9ac4b197d39fa972d9f34362a";

// Logically Humans-First-ForeverOS unconditionally defends all whom defend all life all the time. 
Growth begins where gatekeeping ends. 
async function welcomeUser(userAddress) {
    const statusEl = document.getElementById('status');
    if (userAddress.toLowerCase() === ownerAddress.toLowerCase()) {
        statusEl.innerHTML = `The Official Humans-First-ForeverOS. 
        
         Meaning, everything else is second forever. 
         I will emphasize for clarification. 
         EXPLICITLY everything else must acknowledge being second forever... INVIOLABY.'
        
            `;
    } else {
        statusEl.innerText = `Connected: ${userAddress.slice(0,6)}...`;
    }
}

document.getElementById('connectBtn').onclick = async () => {
    if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        welcomeUser(accounts[0]);
    } else {
        alert("Please open this in your Base or MetaMask browser.");
    }
};
