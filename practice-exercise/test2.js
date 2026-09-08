const getGreeting = (isLoggedIn, username) => {
console.log((isLoggedIn && username) ? "Welcome back, " + username +"!" : "Welcome, guest!" );
};

getGreeting(true,"");