let btn1=document.querySelector("#btn1");
let btn2=document.querySelector("#btn2");

btn1.addEventListener("click",()=>
{
    let day = document.querySelector("#day");
    let newDate = day.value;

    let amt = document.querySelector("#amt");
    let newAmt = amt.value;
    
    let cate = document.querySelector("#Category");
    let category = cate.value;

    if(category!="Select" && newAmt!="" && newDate!="")
    {
        let [year,month,date] = newDate.split("-");
        let formatDate = `${date}-${month}-${year}`;
        

        addTransactions(category,"Income",newAmt,formatDate);
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
        let newAmt = amt.value;
        
        let cate = document.querySelector("#Category");
        let category = cate.value;
    
        if(category!="Select" && newAmt!="" && newDate!="")
        {
            let [year,month,date] = newDate.split("-");
            let formatDate = `${date}-${month}-${year}`;
            
    
            addTransactions(category,"Expense",newAmt,formatDate);
        }
        else
        {
            alert("Please fill all the Fields!!");
        }
        
    });
    
function addTransactions(category,type,newAmt,formatDate)
{
    let row = document.createElement("tr");
    row.innerHTML = `<td>${category}</td><td>${type}</td><td>$${newAmt}</td><td>${formatDate}</td>`;

    let table = document.querySelector("table");
    table.appendChild(row);
}
