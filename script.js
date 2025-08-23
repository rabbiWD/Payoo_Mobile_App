// login button functionality
document.getElementById("loginButton").addEventListener("click",function(e){
    e.preventDefault()
    // console.log("login button clicked");
    const mobileNumber = 12345678920
    const pinNumber = 2234

    const mobileNumberValue = parseInt( document.getElementById("mobile-number").value)

    // const mobileNumberValue = document.getElementById("mobile-number").value
    // const mobileNumberValueConverted = parseInt(mobileNumberValue)
    const pinNumberValue = parseInt(document.getElementById("pin-number").value)
    // const pinNumberValueConverted = parseInt(pinNumberValue)

    console.log(mobileNumberValue, pinNumberValue);

    if(mobileNumberValue === mobileNumber && pinNumberValue === pinNumber){
        // console.log("all value match");
        window.location.href ="./main.html"
    }else{
        console.log("invalid credentials");
    }
})