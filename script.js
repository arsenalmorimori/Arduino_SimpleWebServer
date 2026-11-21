console.log("BACKEND Connected");

const redButton = document.querySelector(".red");
const blueButton = document.querySelector(".blue");
const greenButton = document.querySelector(".green");
const yellowButton = document.querySelector(".yellow");
const prompt_wrapper = document.querySelector(".prompt_wrapper");
var query = "Hello!";
var queryColor;

// ----------------- RED -----------------
redButton.addEventListener("click", function (){ 
    redButton.classList.toggle("active");
    console.log("pressed");
    queryColor = "RED";

    if(query == "Hello!"){
        query = queryColor + " PIN: READY!";
        prompt_wrapper.innerHTML = `<p>${query}</p>`;
    }else{
        if(redButton.classList.contains("active")){
            fetch("http://192.168.4.1/redON");
            query = queryColor + " PIN: Online!";
            prompt_wrapper.insertAdjacentHTML("afterbegin", `<p>${query}</p>`)
        }else{
            fetch("http://192.168.4.1/redOFF");
            query = queryColor + " PIN: Offline!";
            prompt_wrapper.insertAdjacentHTML("afterbegin", `<p>${query}</p>`)    
        }
    }   
});


// ----------------- BLUE -----------------
blueButton.addEventListener("click", function (){ 
    blueButton.classList.toggle("active");
    console.log("pressed");
    queryColor = "BLUE";

    if(query == "Hello!"){
        query = queryColor + " PIN: READY!";
        prompt_wrapper.innerHTML = `<p>${query}</p>`;
    }else{
        if(blueButton.classList.contains("active")){
            fetch("http://192.168.4.1/blueON");
            query = queryColor + " PIN: Online!";
            prompt_wrapper.insertAdjacentHTML("afterbegin", `<p>${query}</p>`)
        }else{
            fetch("http://192.168.4.1/blueOFF");
            query = queryColor + " PIN: Offline!";
            prompt_wrapper.insertAdjacentHTML("afterbegin", `<p>${query}</p>`)    
        }
    }   
});


// ----------------- GREEN -----------------
greenButton.addEventListener("click", function (){ 
    greenButton.classList.toggle("active");
    console.log("pressed");
    queryColor = "GREEN";

    if(query == "Hello!"){
        query = queryColor + " PIN: READY!";
        prompt_wrapper.innerHTML = `<p>${query}</p>`;
    }else{
        if(greenButton.classList.contains("active")){
            fetch("http://192.168.4.1/greenON");
            query = queryColor + " PIN: Online!";
            prompt_wrapper.insertAdjacentHTML("afterbegin", `<p>${query}</p>`)
        }else{
            fetch("http://192.168.4.1/greenOFF");
            query = queryColor + " PIN: Offline!";
            prompt_wrapper.insertAdjacentHTML("afterbegin", `<p>${query}</p>`)    
        }
    }   
});


// ----------------- YELLOW -----------------
yellowButton.addEventListener("click", function (){ 
    yellowButton.classList.toggle("active");
    console.log("pressed");
    queryColor = "YELLOW";

    if(query == "Hello!"){
        query = queryColor + " PIN: READY!";
        prompt_wrapper.innerHTML = `<p>${query}</p>`;
    }else{
        if(yellowButton.classList.contains("active")){
            fetch("http://192.168.4.1/yellowON");
            query = queryColor + " PIN: Online!";
            prompt_wrapper.insertAdjacentHTML("afterbegin", `<p>${query}</p>`)
        }else{
            fetch("http://192.168.4.1/yellowOFF");
            query = queryColor + " PIN: Offline!";
            prompt_wrapper.insertAdjacentHTML("afterbegin", `<p>${query}</p>`)    
        }
    }   
});



