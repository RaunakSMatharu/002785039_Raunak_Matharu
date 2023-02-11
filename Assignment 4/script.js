
var log = document.getElementById('phoneNumber');
var event_EmailID = document.getElementById('emailId');
var event_ZipCode = document.getElementById('zipcode');
var event_drinks = document.getElementById('selc_drinks');
var checkBox_Add = document.getElementById('valdrinks');
const selected = new Array();
var selectedSource = "";
var additionalComments = "N/A";




log.addEventListener('change', phonenumber);

event_EmailID.addEventListener('change', ValidateEmail);
event_ZipCode.addEventListener('change', isUSAZipCode);
event_drinks.addEventListener('change', drinksAdd);


function phonenumber(e) {
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (!(log.value.match(phoneno))) {
       
        document.getElementById("valValidphoneNumber").style.display = "unset"
        document.getElementById("valphoneNumber").style.display = "none"
        document.getElementById("submitBtn").disabled = true;
      
    } else {
        document.getElementById("valValidphoneNumber").style.display = "none"
        document.getElementById("submitBtn").disabled = false;
    }
}

function ValidateEmail(e) {
		
    if (/@northeastern.com\s*$/.test(event_EmailID.value)) {
        document.getElementById("valValidemailID").style.display = "none"
        document.getElementById("submitBtn").disabled = false;
        
    }
    else {
        document.getElementById("valValidemailID").style.display = "unset"
        document.getElementById("valemailId").style.display = "none"
        document.getElementById("submitBtn").disabled = true;
    }

}

function isUSAZipCode(e) {
    if (/^\d{5}(-\d{4})?$/.test(event_ZipCode.value)) {
        document.getElementById("valValizipcode").style.display = "none"
        document.getElementById("submitBtn").disabled = false;

    } else {
        document.getElementById("valValizipcode").style.display = "unset"
        document.getElementById("valzipcode").style.display = "none"
        document.getElementById("submitBtn").disabled = true;
    }
}

function drinksAdd(e) {
    

    var selectedDocuments = document.getElementsByClassName("div_Drinks");

    if (selectedDocuments.length == 4) {
        selectedDocuments[0].remove();
        selectedDocuments[0].remove();
        selectedDocuments[0].remove();
        selectedDocuments[0].remove();
    }

    var selectedDocuments1 = document.getElementsByClassName("div_DrinksComments");
    if (selectedDocuments.length == 8) {
        selectedDocuments1[0].remove();
        selectedDocuments1[0].remove();
        selectedDocuments1[0].remove();
        selectedDocuments1[0].remove();
    }
    clearBoxes();

    if (this.value != "default") {
        
        var checkBx_drink = `<br class="div_Drinks"><br class="div_Drinks"><label for='checkBoxDrinks' class='div_Drinks'>Pay 1$ for large ` + this.value + `:</label><input onClick="addDrinkComment(this)" id="checkBoxDrinks"class="div_Drinks" type='checkbox' name="drinks" value="` + this.value + `" />`
        checkBox_Add.insertAdjacentHTML("afterend", checkBx_drink);

    }
}


function clearBoxes() {
    var selectedDocuments = document.getElementsByClassName("div_Drinks");
    if (selectedDocuments.length == 4) {
        selectedDocuments[0].remove();
        selectedDocuments[0].remove();
        selectedDocuments[0].remove();
        selectedDocuments[0].remove();
    }
    var selectedDocuments1 = document.getElementsByClassName("div_DrinksComments");
   
    if (selectedDocuments1.length == 4) {
        selectedDocuments1[0].remove();
        selectedDocuments1[0].remove();
        selectedDocuments1[0].remove();
        selectedDocuments1[0].remove();
    }
}

function addDrinkComment(test) {

    if (test.checked) {
       

        var event_DrinkChkbxSelect = document.getElementById('checkBoxDrinks');
        var checkBx_drink = `<br class="div_DrinksComments"><br class="div_DrinksComments"><label for='checkBoxDrinks' class='div_DrinksComments'>Any Additional customisations*:</label><textarea class="div_DrinksComments" name="textAdditonalComments" id="commentsforDrinks" placeholder="Your comments" rows="5" cols="25"></textarea><p Class="Validation" id="valtextAdditonalComments">Enter comments</p>`
      
        event_DrinkChkbxSelect.insertAdjacentHTML("afterend", checkBx_drink);
    }
    else {
        var selectedDocuments = document.getElementsByClassName("div_DrinksComments");
        if (selectedDocuments.length > 0) {
            selectedDocuments[0].remove();
            selectedDocuments[0].remove();
            selectedDocuments[0].remove();
            selectedDocuments[0].remove();
        }
        document.getElementById("valtextAdditonalComments").style.display = "none"
        additionalComments = "N/A";
    }

}


function validate() {

    //alert("OnClick");
    document.getElementsByTagName("input")
    var inpCol = document.getElementsByTagName("input")
    var txtArea = document.getElementsByTagName("textarea")
    var checkedRadio = false;
    var checkedBox = false;

    var isValid = true;
    const isValidArray = [];

    var validationTags = document.getElementsByClassName("Validation")
    
    for (let i = 0; i < validationTags.length; i++) {
        validationTags[i].style.display = "none"

    }

    for (let index = 0; index < inpCol.length - 1; ++index) {
        console.log(inpCol[index].type);


        switch (inpCol[index].type) {
            
            case "text":
                if (inpCol[index].value == '') {
                    isValid = false
                    break;
                }
            
        }


        if (!isValid) {
            if(inpCol[index].name != "streetAddress2"){
            isValidArray[index] = "val" + inpCol[index].name;
            }
        }
        isValid = true;
    }

    for (let index = 0; index < txtArea.length; index++) {

        if (txtArea[index].value == '') {
            isValidArray.push("val" + txtArea[index].name)
        }
    }
    var T = document.getElementById("selc_drinks");

    if (T.options[T.selectedIndex].value == "default") {

        isValidArray.push("val" + T.name)
    }

    var i = 0;
    var radioBTN = document.getElementsByName("title")
    for (let index = 0; index < radioBTN.length; ++index) {

        if (radioBTN[index].checked == true) {

            break;
        }
        else {
            i++
        }

    }
    if (i == 3) {

        isValidArray.push("valtitle");
    }

    i = 0;
    var checkBX = document.getElementsByName("source")
    for (let index = 0; index < checkBX.length; ++index) {

        if (checkBX[index].checked == true) {

            break;
        }
        else {
            i++
        }

    }
    if (i == 3) {

        isValidArray.push("valsource");
    }


    for (let index = 0; index < isValidArray.length; ++index) {

        if (isValidArray[index] != null) {
            document.getElementById(isValidArray[index]).style.display = "unset"
        }

    }


   
    if (isValidArray.length == 0) {
    

        document.getElementById("div_myTable").style.display = "unset"
        var getTable = document.getElementById("myTable")

        additionalComments = "N/A";
        if (document.getElementById("checkBoxDrinks").checked == true) {
            if (document.getElementById("commentsforDrinks").value != null) {
                additionalComments = document.getElementById("commentsforDrinks").value;
            }
        }
        else {
            additionalComments = 'N/A';
        }



        var orderDetails = `<tr>
      <td>`+ document.querySelector('input[name="title"]:checked').value + `</td>
      <td>`+ document.getElementById("firstName").value + `</td>
      <td>`+ document.getElementById("lastName").value + `</td>
      <td>`+ document.getElementById("emailId").value + `</td>
      <td>`+ document.getElementById("phoneNumber").value + `</td>
      <td>`+ document.getElementById("streetAddress1").value + `</td>
      <td>`+ document.getElementById("streetAddress2").value + `</td>
      <td>`+ document.getElementById("city").value + `</td>
      <td>`+ document.getElementById("state").value + `</td>
      <td>`+ document.getElementById("zipcode").value + `</td>
      <td>`+ selectedSource + `</td>
      <td>`+ T.options[T.selectedIndex].value + `</td>
      <td>` + additionalComments + `</td>	
      <td>` + document.getElementById("comments").value + `</td>		  
    </tr>`

      
        var rowAdd = getTable.insertRow(1);
        
        getTable.rows[1].innerHTML = orderDetails;
     
        resetFUNC();


    }


}

function selectedCkhs(e) {
    selectedSource = "";
    if (e.checked) {
        //selected = selected + e.value + ","
        selected.push(e.value);
    } else {
        var index = selected.indexOf(e.value);
        if (index > -1) {
            selected.splice(index, 1);
        }
    }
    selected.forEach(element => {
        selectedSource = selectedSource + element + ","
    });



}

function tableShow() {

    var getTable = document.getElementById("myTable")
    var orderDetails = `<tr>
      <td>`+ document.getElementsByName("title").value + `</td>
      <td>`+ document.getElementById("firstName").value + `</td>
      <td>`+ document.getElementById("lastName").value + `</td>
      <td>`+ document.getElementById("emailId").value + `</td>
      <td>`+ document.getElementById("phoneNumber").value + `</td>
      <td>`+ document.getElementById("streetAddress1").value + `</td>
      <td>`+ document.getElementById("streetAddress2").value + `</td>
      <td>`+ document.getElementById("city").value + `</td>
      <td>`+ document.getElementById("state").value + `</td>
      <td>`+ document.getElementById("firstName").value + `</td>
      <td>`+ document.getElementById("zipcode").value + `</td>
      <td>`+ document.getElementById("event_drinks").value + `</td>	
      <td>`+ document.getElementById("firstName").value + `</td>		  
    </tr>`

    getTable.childNodes[0].insertAdjacentHTML("afterend",);


}

function resetFUNC() {
   
    document.getElementById("firstName").value = ""
    document.getElementById("lastName").value = ""
    document.getElementById("emailId").value = ""
    document.getElementById("phoneNumber").value = ""
    document.getElementById("streetAddress1").value = ""
    document.getElementById("streetAddress2").value = ""
    document.getElementById("city").value = ""
    document.getElementById("state").value = ""
    document.getElementById("zipcode").value = ""
    document.getElementById("comments").value = ""
    var txtArea = document.getElementsByTagName("textarea")

    for (let index = 0; index < txtArea.length; index++) {

        txtArea[index].value = "";
    }

    var radioBTN = document.getElementsByName("title")
    for (let index = 0; index < radioBTN.length; ++index) {
        radioBTN [index].checked = false;
    }
    var checkBX = document.getElementsByName("source")
    for (let index = 0; index < checkBX.length; ++index) {
        checkBX[index].checked = false;
    }

    clearBoxes();
    

}

