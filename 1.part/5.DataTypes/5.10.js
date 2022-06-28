// 1
let user = {
  name: "John",
  years: 30,
};

let { name, years: age, isAdmin = false } = user;

alert(name); // John
alert(age); // 30
alert(isAdmin); // false

// 2
function topSalary(obj){
    let resolt = Object.entries(obj).sort((a,b) => b[1]-a[1] );
    return resolt[0]?.[0] || null
    }
