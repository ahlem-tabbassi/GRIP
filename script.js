function sendMoney(){
   var enterName = document.getElementById("enterSName").value;
   var enterAmount = parseInt(document.getElementById("enterAmount").value);
var enterSName = document.getElementById("enterName").value;
 var findSenderBankAccount = enterSName + "BankBalance";
   var enterSAmount =parseInt(document.getElementById(findSenderBankAccount).innerHTML);
   if (enterAmount > enterSAmount) {
      alert("Insufficient Balance.")
   }
else {
      var findUserBankAccount = enterName + "BankBalance";
     
      var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;
      var myAccountBalance = parseInt(document.getElementById(findSenderBankAccount).innerHTML) - enterAmount;
      document.getElementById(findSenderBankAccount).innerHTML = myAccountBalance;
      document.getElementById(findUserBankAccount).innerHTML = finalAmount;
      alert(`Successful Transaction !!  
      $${enterAmount} is sent to ${enterName}@gmail.com.`)

      // transaction history 
      var createPTag = document.createElement("li");
      var textNode = document.createTextNode(`$ ${enterAmount} is sent from the sender with Email-id ${enterSName}@gmail.com
 to recepient with Email-id ${enterName}@gmail.com on ${Date()}.`);
      createPTag.appendChild(textNode);
      var element = document.getElementById("transaction-history-body");
      element.insertBefore(createPTag, element.firstChild);
   }
}
$(document).ready(function() {
   var table = $('#example').DataTable( {
       lengthChange: false,
       buttons: [ 'copy', 'excel', 'pdf', 'colvis' ]
   } );

   table.buttons().container()
       .appendTo( '#example_wrapper .col-md-6:eq(0)' );
} );
