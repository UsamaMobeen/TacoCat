//get user input 
function getValue(){

    // make sure the alert is invisible
    document.getElementById("alert").classList.add("invisible");
    //get user string from the page
    let userString = document.getElementById("userString").value;
    //check for palindrome
    let palindromeString = checkForPalindrome(userString);
    //display out message to the screen

    displayMessage(palindromeString);
}

//check for palindrome
function checkForPalindrome(userString){
    
  userString = userString.toLowerCase();
    let regex = /[^a-z0-9]/gi;
    userString = userString.replace(regex,"");

    let revString = [];
    let returnObj = {};

    for (let index = userString.length - 1; index >=0;index--)
    {
        revString+=userString[index];
    }

    if(revString == userString){
        returnObj.msg = "Well done! You entered a palindrome!";
    }else{
        returnObj.msg = "Sorry! You did not enter a palindrome!";

    }
    returnObj.reversed = revString;
    return returnObj;
}

//display a message to the user.
function displayMessage(palindromeString){
        
    document.getElementById("alertHeader").innerHTML = palindromeString.msg;
    document.getElementById("msg").innerHTML = `Your reversed phrase: ${palindromeString.reversed}.`;

    document.getElementById("alert").classList.remove("invisible");

}