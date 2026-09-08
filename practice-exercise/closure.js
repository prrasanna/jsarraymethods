
function bankBalance() {

    let balance = 0;

    const getBalance = () => balance;

    const updateBalance = (amount) => {
        balance += amount;
    };

    return { getBalance, updateBalance };
}

const bank = bankBalance();

bank.updateBalance(1000);

console.log(bank.getBalance());

// balance = 5000;  // 👈 Outside-la direct-ah change panrom

//  console.log(bank.getBalance());

bank.updateBalance(5000);

console.log(bank.getBalance());