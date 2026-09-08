const createSettings = (userpreferences) =>{
  return{
    theme: null,
    Notification: null,
    volume: null,
  }
};


const userpreference = createSettings();

console.log(userpreference.theme ?? "Dark");
console.log(userpreference.Notification ?? true);
console.log(userpreference.volume ?? 50);
