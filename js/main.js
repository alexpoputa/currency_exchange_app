
// VARIABLES

// default rate
let base = "EUR";

// buttons
const mainBtn = document.querySelector(".currency-btn");
const modalBtn = document.querySelector(".add-btn");
let removeBtn;

// main
let main = document.querySelector(".container");
let currentDate = document.querySelector(".current-date").innerHTML = new Date().toJSON().slice(0,10).replace(/-/g,'/');
let currencyContainer = document.querySelector(".currency-container");
let currencyCard;
let currencyInput;
let activeInputValue;
let activeAbv;

// modal
let modal = document.querySelector(".modal-container");
let currencyModal = document.querySelector(".currency-modal");
let modalCard;
let overlay = document.querySelector(".modal-overlay");

// containers
let selectedCurrencies = [];
let activeCards = [];

// main page button
// show modal and hide the main page
// then populate the modal and highlight already selected cards
mainBtn.addEventListener("click", () => {
    modal.style.display = "block";
    main.style.display = "none";
    currencyModal.innerHTML = '';
    selectedCurrencies = [];
    populateModal();
    checkModalActive();
    activeModal();
})

// modal button functionality
// show main page and hide the modal
modalBtn.addEventListener("click", () => {
    currencyContainer.innerHTML = '';
    main.style.display = "block";
    populateMain();
    modal.style.display = "none";
    removeCard();
})

// exit modal on external click
overlay.addEventListener("click", () => {
    main.style.display = "block";
    modal.style.display = "none";
});

// function to create an element and add class to it
const createElementWithClass = (type, className) => {
    const element = document.createElement(type);
    element.className = className;
    return element;
}



// MODAL

// populate modal with currency cards of each country available
const populateModal = () => {
    for(let [abv, country] of Object.entries(symbolsObj)){
        const lowerAbv = abv.toLowerCase();
        const card = createElementWithClass("div","modal-card");
        const flagImg = createElementWithClass("div",`modal-flag currency-flag currency-flag-${lowerAbv}`);
        const pAbv = createElementWithClass("p","modal-abv");
        pAbv.innerHTML = `${abv} - ${country}`;
        card.appendChild(flagImg);
        card.appendChild(pAbv);
        currencyModal.appendChild(card);

        modalCard = document.querySelectorAll(".modal-card");
    }
}

// check selected cards from main page and highlight them when modal opens
const checkModalActive = () => {
    currencyCard = document.querySelectorAll(".currency-card");
    activeCards = [];

    Array.from(currencyCard).forEach(card => {
        let cardAbv = card.querySelector(".currency-abv").innerHTML;
        cardAbv = cardAbv.substring(0, cardAbv.indexOf("-")).trim();
        activeCards.push(cardAbv);
    })

    Array.from(modalCard).forEach(card => {
        let modalCardAbv = card.querySelector(".modal-abv").innerHTML;
        modalCardAbv = modalCardAbv.substring(0, modalCardAbv.indexOf("-")).trim();
        
       if(activeCards.indexOf(modalCardAbv) > -1){
        card.classList.add("active");
       };
    })
}

// add/remove active class of modal elements on click and highlight them
const activeModal = () => {
    Array.from(modalCard).forEach(card => {
        card.addEventListener("click", function(){
            if(this.classList.contains("active")){
                this.classList.remove("active");
            }else {
                this.classList.add("active");
            }
        })
    })
}

// for each active modal card add its currency abbreviation to selectedCurrencies array 
const addAbv = () => {
    Array.from(modalCard).forEach(card => {
        if(card.classList.contains("active")){
            const abv = card.querySelector(".modal-abv");
            selectedCurrencies.push(abv.innerHTML);
        }
    })
}




// MAIN PAGE

// create cards for each abbreviation element in the selectedCurrencies array
// and set the value of each card to correspond with its currency
const createCard = () => {
    selectedCurrencies.forEach(v =>{

        const abv = v.substring(0, v.indexOf("-")).trim();
        const lowerAbv = abv.toLowerCase();

        const cCard = createElementWithClass("div","currency-card");
        const removeBtn = createElementWithClass("button","remove-btn");
        const col1 = createElementWithClass("div","currency-col currency-col1");
        const currencyFlag = createElementWithClass("div",`currency-flag currency-flag-${lowerAbv}`);
        const currencyIcon = createElementWithClass("span", "currency-icon");
        const cInput = createElementWithClass("input", "currency-input");
        const col2 = createElementWithClass("div","currency-col2");
        const abvP = createElementWithClass("p", "currency-abv");
        const currencyConversion = createElementWithClass("p", "currency-conversion");

        removeBtn.innerHTML = "X";
        currencyIcon.innerHTML = currencyIcons[abv];
        cInput.setAttribute("type","text");
        cInput.setAttribute("value","0");
        abvP.innerHTML = `${v}`;

        col1.appendChild(currencyFlag);
        col1.appendChild(currencyIcon);
        col1.appendChild(cInput);

        col2.appendChild(abvP);
        col2.appendChild(currencyConversion);


        cCard.appendChild(removeBtn);
        cCard.appendChild(col1);
        cCard.appendChild(col2);

        currencyContainer.appendChild(cCard);

        currencyInput = document.querySelectorAll(".currency-input");
        currencyCard = document.querySelectorAll(".currency-card");

    })
}

// set the actual conversion rate for each card from main
const setConversion = () => {
    Array.from(currencyCard).forEach(card => {
        let currency = card.querySelector(".currency-abv").innerHTML;
        let conversion = card.querySelector(".currency-conversion");
        let abv = currency.substring(0, currency.indexOf("-"));
        conversion.innerHTML = `1 <span class="conv">${base}</span> = <span class="conv-num">${new Intl.NumberFormat().format(rates[abv.trim()])}</span> <span class="abv">${abv}</span>`;
    })
}

// remove button that deletes the card
const removeCard = () => {
    removeBtn = document.querySelectorAll(".remove-btn");
    Array.from(removeBtn).forEach(button => {
        button.addEventListener("click", function(){
            this.parentElement.remove();
        })
    })
}

// set currency card active
const setActive = () => {
    Array.from(currencyCard).forEach(card => {
        card.addEventListener("click", function(){

            Array.from(currencyCard).forEach((el) => el.classList.remove('active'));
            
            if(!this.classList.contains("active")){
                this.classList.add("active");
                activeAbv = this.querySelector(".abv").innerHTML;
                // base = activeAbv;
                // fetchRates(base);
                // setConversion();
            }else if(this.classList.contains("active")){
                this.classList.remove("active");
            }
            
        })
    })
}

// when user adds a value to input
// assign the value from the input to a variable
// set the active card's input value to that variable and also the parameter of updateInputs function
const onInputChange = () => {
    Array.from(currencyCard).forEach(card => {
        card.addEventListener("click", function(){
            const input = card.querySelector(".currency-input");

            clearInputs();

            input.addEventListener("keyup", function(){
                activeInputValue = this.value;
                if(this.value.length === 0){
                    this.setAttribute("value", 0);
                    updateInputs(0);
                }else {
                    this.setAttribute("value",activeInputValue);
                    updateInputs(activeInputValue);
                }
            })

        })
    })
}

// select each card which is not active and its inputs
// update those inputs value to be equal to the active card's input value( activeInputValue ) * each inactive card's conversion value ( convNum )
const updateInputs = (activeInputVal) => {
    Array.from(currencyCard).forEach(card => {
        const input = card.querySelector(".currency-input");
        let convNum = card.querySelector(".conv-num").innerHTML;
            convNum = Number(convNum.replace(/\D+/g, ''));
        
        if(!card.classList.contains("active")){
            input.value = new Intl.NumberFormat().format(activeInputVal * convNum);
            input.setAttribute("value", new Intl.NumberFormat().format(activeInputVal * convNum));
        }
    })
}

// on input click, clear its value
const clearInputs = () => {
    Array.from(currencyCard).forEach(card => {
        const input = card.querySelector(".currency-input");
        if(card.classList.contains("active")){
            input.value = '';
            input.setAttribute("value", '');
        }
    })
}

// populate main cards with elements after modal close, if any currency was selected 
const populateMain = () => {
    addAbv();
    createCard();
    setConversion();
    setActive();
    onInputChange();
}