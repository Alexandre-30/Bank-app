function Ticket(){
alert("You will have to buy a ticket and enter the Ticket-Code")
}
function Distributor(){
    alert("Go to a distributor.Click on the EA BANK Option and enter the 5-digit-pin wich is 1510. Insert the money in the distributor. Once done, come back to the app")
}
function Check_Ticket(){
    document.getElementById("Output").innerHTML="Ticket accepted!!! How much would you like to deposit?";
}
function Deposit(){
    Amount= document.getElementById("Deposit").value;
    document.getElementById("Output2").innerHTML="Done!!! You have deposited $"+Amount;

}