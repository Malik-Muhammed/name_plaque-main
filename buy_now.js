/***************************************************************
|======================DEFINING VARIABLES======================|
|    ⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇   |
****************************************************************/
const buyBtn = document.querySelector(".buy-submit");
const wrapper = document.querySelector(".wrapper");
const priceContainer = document.querySelector(".priceContainer")

/***************************************************************
|======================CREATING NEW ELEMENTS===================|
|    ⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇   |
****************************************************************/

const messageBox = document.createElement("div")
messageBox.className = "messageBox"
wrapper.appendChild(messageBox);

const btn = document.createElement("button");
const textNode = document.createTextNode("Reset");
btn.appendChild(textNode);
priceContainer.appendChild(btn)

btn.style.display="none";



const buyNow = ()=>{
    
    btn.style.display="block";

    if  (userInput.value === "") {
        messageBox.innerHTML = `<p>🙄Please, input some text.</p>`
       
    }

    else if ((userInput.value === "YOUR NAME") || (userInput.value === "your name")) {
        messageBox.innerHTML =`<p>😏Please, input your own text .</p>`

    }

    else if (userInput.value.length > 15) {
      messageBox.innerHTML =`<p>🤣Number of texts a plaque can contain exceeded!</p>`

    }

    else {
        messageBox.innerHTML =`<p>📨Plaque samples would be sent to your mail for selection</p>`

    }

 
}

buyBtn.addEventListener("click", buyNow)

btn.addEventListener("click" , function(){
    userInput.value = "";
    userLeterPreview.textContent =  "YOUR NAME";
    userPricePreview.textContent = "$0"
    messageBox.innerHTML=``;
    btn.style.display="none";
})



