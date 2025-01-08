let btn1=document.querySelector("#btn1");
let btn2=document.querySelector("#btn2");
let btn3=document.querySelector("#btn3");
let balance=0;

btn1.addEventListener("click",()=>
{
    let day = document.querySelector("#day");
    let newDate = day.value;

    let amt = document.querySelector("#amt");
    let newAmt = parseFloat(amt.value);
    
    let cate = document.querySelector("#Category");
    let category = cate.value;

    if(category!="Select" && newAmt!="" && newDate!="")
    {
        let [year,month,date] = newDate.split("-");
        let formatDate = `${date}-${month}-${year}`;
        balance += (newAmt);

        addTransactions(category,"Income",newAmt,formatDate);
        trackBalance(balance);
    }
    else
    {
        alert("Please fill all the Fields!!");
    }
    
});

btn2.addEventListener("click",()=>
    {
        let day = document.querySelector("#day");
        let newDate = day.value;
    
        let amt = document.querySelector("#amt");
        let newAmt = parseFloat(amt.value);
        
        let cate = document.querySelector("#Category");
        let category = cate.value;
    
        if(category!="Select" && newAmt!="" && newDate!="")
        {
            let [year,month,date] = newDate.split("-");
            let formatDate = `${date}-${month}-${year}`;
            balance-= newAmt;
    
            addTransactions(category,"Expense",newAmt,formatDate);
            trackBalance(balance);
        }
        else
        {
            alert("Please fill all the Fields!!");
        }
        
    });

btn3.addEventListener("click",()=>
{
    let day = document.querySelector("#day");
    day.value = "";
    
    let amt = document.querySelector("#amt");
    amt.value = "";
        
    let cate = document.querySelector("#Category");
    cate.value = "Select";
});
function addTransactions(category,type,newAmt,formatDate)
{
    let row = document.createElement("tr");
    if(type == "Income")
    {row.innerHTML = `<td>${category}</td><td>${type}</td><td>$${newAmt}</td><td>${formatDate}</td><td><button class="cross">X</button></td>`;}
    else
    {row.innerHTML = `<td>${category}</td><td>${type}</td><td>($${newAmt})</td><td>${formatDate}</td><td><button class="cross">X</button></td>`;}

    let table = document.querySelector("table");
    table.appendChild(row);

}

function trackBalance(balance)
{
    let setBalance = document.querySelector(".balance h2");
    if(balance >=0)
    {
        setBalance.innerHTML = `$${balance}`;
    }
    else
    {
        balance -= (2*balance);
        setBalance.innerHTML = `($${balance})`;
    }
}
