const wrapperDiv = document.getElementById("wrapper");


// BUTTON to send post request
const btn = document.querySelector("button");

const getPerson = async () => {
    
    const request = await fetch("https://karim-ds-hw.herokuapp.com/person",{
        method : "GET",
        headers : {
            "Content-type" : "application/json"
        }
    });

    const response = await request.json();
    if(request.status == 200) {
        wrapperDiv.classList.remove("spinner-border");
        const ulElements = document.createElement("ul");
        for(let key in response) { // key of every obejct of the api response
            const liElement = document.createElement("li");
            if(key == "name") {
                liElement.innerText = `Your name is ${response.name}`;
            }

            if(key == "age") {
                liElement.innerText = `You are ${response.age} old`;                
            }

            if(key == "religion") {
                liElement.innerText = `Your religion is ${response.religion}`;
            }

            if(key == "education") {
                liElement.innerText = `Your education is ${response.education == null ? "none" : response.education}`;
            };
            ulElements.appendChild(liElement);
        };
        wrapperDiv.appendChild(ulElements);
    }
}

const handleBtnClick = async () => {

    const request = await fetch("https://karim-ds-hw.herokuapp.com/person/add", {
        method : "POST",
        headers : {
            "content-type" : "application/json"
        },
        body : JSON.stringify(
            {
                name : "Karim",
                age : 20
            }
        )
    });
    const response = await request.json();
    console.log("RESPONSE ",response);
};

btn.addEventListener("click",handleBtnClick)

getPerson();
