function calculate(event){
    event.preventDefault();
    let billValue = document.getElementById("billvalue").value
    let percentage = document.getElementById("percen").value

    let bill = parseFloat(billValue)
    let tip = parseFloat(percentage)

    let tipamount = (bill*tip)/100
    let totalAmount = bill + tipamount
    console.log(totalAmount)

    document.getElementById("TIP").value=tipamount
    document.getElementById("total").value=totalAmount

    document.getElementById("result").textContent=`Tip : ${tipamount} and TotalAmount : ${totalAmount}`

}


