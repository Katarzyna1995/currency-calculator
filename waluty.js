console.log("Witam serdecznie, wszystkich :). Dziękuje za skorzystanie z przelicznika walutowego :). Ten kod jest już w repozytorium Git.");

let formElement = document.querySelector(".form");
let valueElement = document.querySelector(".form__field1");
let currency = document.querySelector(".form__field2");
let currency1 = document.querySelector(".form__field3");
let currency2 = document.querySelector(".form__field4");
let currency3 = document.querySelector(".form__field5");
let amountElement = document.querySelector(".amount");
let amountElement1 = document.querySelector(".amount1");
let amountElement2 = document.querySelector(".amount2");
let amountElement3 = document.querySelector(".amount3");


formElement.addEventListener("submit", (e) => {
    e.preventDefault();

    let value = valueElement.value

        switch (currency.value) {

            case "PLN":
                PLN = value*1;
                currency2.innerText=1.000.toFixed(2)
                break;

            case "EUR":
                PLN = value*4.7013;
                currency2.innerText=4.7013;
                break;
                
            case "GBP":
                PLN = value*5.5752;
                currency2.innerText=5.5752;
                break;

            case "USD":
                PLN = value*4.6127;
                currency2.innerText=4.6127;
                break;

            case "CAD":
                PLN = value*3.5734;
                currency2.innerText=3.5734;
                break;

            case "CLP":
                PLN = value*0.005;
                currency2.innerText=0.005;
                break;

            case "AUD":
                PLN = value*3.2101;
                currency2.innerText=3.2101;
                break;

            case "CZK":
                PLN = value*0.1916;
                currency2.innerText=0.1916;
                break;
                
            case "UAH":
                PLN = value*0.1258;
                currency2.innerText=0.1258;
                break;

            case "NZD":
                PLN = value*2.8878;
                currency2.innerText=2.8878;
                break;
            
            default:
                PLN = value*4.8137;
                currency2.innerText=4.8137;
        }

        switch (currency1.value) {

            case "PLN":
                kwota = PLN/1
                currency3.innerText=1.000.toFixed(2)
                amountElement.innerText = value;
                amountElement1.innerText = currency.value;
                amountElement2.innerText = kwota.toFixed(2);
                amountElement3.innerText = currency1.value;
                break;

            case "EUR":
                kwota = PLN/4.7013;
                currency3.innerText=4.7013;
                amountElement.innerText = value;
                amountElement1.innerText = currency.value;
                amountElement2.innerText = kwota.toFixed(2);
                amountElement3.innerText = currency1.value;
                break;

            case "GBP":
                kwota = PLN/5.5752;
                currency3.innerText=5.5752;
                amountElement.innerText = value;
                amountElement1.innerText = currency.value;
                amountElement2.innerText = kwota.toFixed(2);
                amountElement3.innerText = currency1.value;
                break;

            case "USD":
                kwota = PLN/4.6127;
                currency3.innerText=4.6127;
                amountElement.innerText = value;
                amountElement1.innerText = currency.value;
                amountElement2.innerText = kwota.toFixed(2);
                amountElement3.innerText = currency1.value;
                break;

            case "CAD":
                kwota = PLN/3.5734;
                currency3.innerText=3.5734;
                amountElement.innerText = value;
                amountElement1.innerText = currency.value;
                amountElement2.innerText = kwota.toFixed(2);
                amountElement3.innerText = currency1.value;
                break;

            case "CLP":
                kwota = PLN/0.005;
                currency3.innerText=0.005;
                amountElement.innerText = value;
                amountElement1.innerText = currency.value;
                amountElement2.innerText = kwota.toFixed(2);
                amountElement3.innerText = currency1.value;
                break;

            case "CLP":
                kwota = PLN/3.2101;
                currency3.innerText=3.2101;
                amountElement.innerText = value;
                amountElement1.innerText = currency.value;
                amountElement2.innerText = kwota.toFixed(2);
                amountElement3.innerText = currency1.value;
                break;

            case "CZK":
                kwota = PLN/0.1916;
                currency3.innerText=0.1916;
                amountElement.innerText = value;
                amountElement1.innerText = currency.value;
                amountElement2.innerText = kwota.toFixed(2);
                amountElement3.innerText = currency1.value;
                break;

            case "UAH":
                kwota = PLN/0.1258;
                currency3.innerText=0.1258;
                amountElement.innerText = value;
                amountElement1.innerText = currency.value;
                amountElement2.innerText = kwota.toFixed(2);
                amountElement3.innerText = currency1.value;
                break;

            case "NZD":
                kwota = PLN/2.8878;
                currency3.innerText=2.8878;
                amountElement.innerText = value;
                amountElement1.innerText = currency.value;
                amountElement2.innerText = kwota.toFixed(2);
                amountElement3.innerText = currency1.value;
                break;
            
            default:
                kwota = PLN/4.8137;
                currency3.innerText=4.8137;
                amountElement.innerText = value;
                amountElement1.innerText = currency.value;
                amountElement2.innerText = kwota.toFixed(2);
                amountElement3.innerText = currency1.value;
                break;             
        }

});




