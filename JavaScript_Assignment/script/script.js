function validate(){
    var textOne = document.getElementById("text1").value;
    if(textOne.trim() == "")
    {
        document.getElementById("user1").innerHTML = "InValid Username";
        document.getElementById("user1").style.visibility = "visible";
        document.getElementById("user1").style.color="red";
    }else
    {
        document.getElementById("user1").innerHTML = "Valid Username";
        document.getElementById("user1").style.visibility = "visible";
        document.getElementById("user1").style.color="green";                 
    }
   
    var textTwo = document.getElementById("text2").value;
    if(textTwo.trim() == "")
    {

        document.getElementById("user2").innerHTML = "InValid Father's Name";
        document.getElementById("user2").style.visibility = "visible";
        document.getElementById("user2").style.color="red";        
    }else
    {
        document.getElementById("user2").innerHTML = "Valid Father's Name";
        document.getElementById("user2").style.visibility = "visible";
        document.getElementById("user2").style.color="green";                    
    }   
    var textThree = document.getElementById("text3").value;
    var regex3 = /^([a-z 0-9\.-]+)@([a-z 0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
    if(regex3.test(textThree))
    {
        document.getElementById("user3").innerHTML = "Valid Email";
        document.getElementById("user3").style.visibility = "visible";
        document.getElementById("user3").style.color="green";
    }
    else{
        document.getElementById("user3").innerHTML = "InValid Email";
        document.getElementById("user3").style.visibility = "visible";
        document.getElementById("user3").style.color="red";
    }


    var textFour = document.getElementById("text4").value;
    var regex4 = /^[1-31][1-12][\d]{4}$/;
    if(regex4.test(textFour))
    {
        document.getElementById("user4").innerHTML = "Valid DOB";
        document.getElementById("user4").style.visibility = "visible";
        document.getElementById("user4").style.color="green";
    }
    else
    {
        document.getElementById("user4").innerHTML = "InValid DOB";
        document.getElementById("user4").style.visibility = "visible";
        document.getElementById("user4").style.color="red";
    }


    var textFive = document.getElementById("text5").value;
    var regex5 = /^[6-9]\d{9}$/;
    if(regex5.test(textFive))
    {
        document.getElementById("user5").innerHTML = "Valid Mob Num";
        document.getElementById("user5").style.visibility = "visible";
        document.getElementById("user5").style.color="green";                   
    }
    else
    {
        document.getElementById("user5").innerHTML = "InValid Mob Num";
        document.getElementById("user5").style.visibility = "visible";
        document.getElementById("user5").style.color="red";
    }


    var textSix = document.getElementById("text6").value;
    if(textSix.trim() == "")
    {
        document.getElementById("user6").innerHTML = "InValid Address Line 1";
        document.getElementById("user6").style.visibility = "visible";
        document.getElementById("user6").style.color="red";
    }else
    {
        document.getElementById("user6").innerHTML = "Valid  Address Line 1";
        document.getElementById("user6").style.visibility = "visible";
        document.getElementById("user6").style.color="green";                    
    }
  

    var textSeven = document.getElementById("text7").value;
    if(textSeven.trim() == "")
    {
        document.getElementById("user7").innerHTML = "InValid  Address Line 2";
        document.getElementById("user7").style.visibility = "visible";
        document.getElementById("user7").style.color="red";
    }else
    {
        document.getElementById("user7").innerHTML = "Valid  Address Line 2";
        document.getElementById("user7").style.visibility = "visible";
        document.getElementById("user7").style.color="green";                   
    }


    var textEight = document.getElementById("text8").value;
    if(textEight.trim() == "")
    {
        document.getElementById("user8").innerHTML = "InValid City";
        document.getElementById("user8").style.visibility = "visible";
        document.getElementById("user8").style.color="red";
    }else
    {
        document.getElementById("user8").innerHTML = "Valid City";
        document.getElementById("user8").style.visibility = "visible";
        document.getElementById("user8").style.color="green";                    
    }


    var textNine = document.getElementById("text9").value;
    var regex9 = /^[Tamilnadu Kerala Karnataka]$/;
    if(regex9.test(textNine))
    {
        document.getElementById("user9").innerHTML = "";
        document.getElementById("user9").style.visibility = "visible";
        document.getElementById("user9").style.color="green";                   
    }
    else
    {
        document.getElementById("user9").innerHTML = "";
        document.getElementById("user9").style.visibility = "visible";
        document.getElementById("user9").style.color="red";
    }


    var textTen = document.getElementById("text10").value;
    var regex10 = /^[\d]{6}$/;
    if(regex10.test(textTen))
    {
        document.getElementById("user10").innerHTML = "Valid Zipcode";
        document.getElementById("user10").style.visibility = "visible";
        document.getElementById("user10").style.color="green";                   
    }
    else
    {
        document.getElementById("user10").innerHTML = "InValid Zipcode";
        document.getElementById("user10").style.visibility = "visible";
        document.getElementById("user10").style.color="red";
    }


    var textEleven = document.getElementById("text11").value;
    if(textEleven.trim() == "")
    {
        document.getElementById("user10").innerHTML = "Valid Address Line 1";
        document.getElementById("user10").style.visibility = "visible";
        document.getElementById("user10").style.color="green";
    }else
    {
        document.getElementById("user10").innerHTML = "InValid Address Line 1";
        document.getElementById("user10").style.visibility = "visible";
        document.getElementById("user10").style.color="red";                    
    }


    var textTwelve = document.getElementById("text12").value;
    if(textTwelve.trim() == "")
    {
        document.getElementById("user10").innerHTML = "InValid Address Line 2";
        document.getElementById("user10").style.visibility = "visible";
        document.getElementById("user10").style.color="red";
    }else
    {
        document.getElementById("user10").innerHTML = "Valid Address Line 2";
        document.getElementById("user10").style.visibility = "visible";
        document.getElementById("user10").style.color="green";
    }


    var textThirteen = document.getElementById("text13").value;
    if(textThirteen.trim() == "")
    {
        document.getElementById("user10").innerHTML = "InValid City";
        document.getElementById("user10").style.visibility = "visible";
        document.getElementById("user10").style.color="red";
    }else
    {
        document.getElementById("user10").innerHTML = "Valid City";
        document.getElementById("user10").style.visibility = "visible";
        document.getElementById("user10").style.color="green";
    }                        


    var textFourteen = document.getElementById("text14").value;
    var regex14 = /^[Tamilnadu Kerala Karnataka]$/;
    if(regex14.test(textThirteen))
    {
        document.getElementById("user14").innerHTML = "";
        document.getElementById("user14").style.visibility = "visible";
        document.getElementById("user14").style.color="green";                   
    }
    else
    {
        document.getElementById("user14").innerHTML = "";
        document.getElementById("user14").style.visibility = "visible";
        document.getElementById("user14").style.color="red";
    }


    var textFifteen = document.getElementById("text15").value;
    var regex15 = /^[\d]{6}$/;
    if(regex15.test(textFifteen))
    {
        document.getElementById("user15").innerHTML = "Valid Zipcode";
        document.getElementById("user15").style.visibility = "visible";
        document.getElementById("user15").style.color="green";                   
    }
    else
    {
        document.getElementById("user15").innerHTML = "InValid Zipcode";
        document.getElementById("user15").style.visibility = "visible";
        document.getElementById("user15").style.color="red";
    } 

}
