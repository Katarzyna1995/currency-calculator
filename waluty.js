{
 console.log("Hello warmly, everyone :). Thank you for using the currency converter :). This code is already in the Git repository.");

    function currency_calculator_first_stage(value, input_currencyElement) {

        const valueElement = document.querySelector(".form__field--value");
        value = valueElement.value

        switch (input_currencyElement.value) {

            case "PLN":
                return PLN_amount = value * PLN;

            case "EUR":
                return PLN_amount = value * EUR;

            case "GBP":
                return PLN_amount = value * GBP;

            case "USD":
                return PLN_amount = value * USD;

            case "CAD":
                return PLN_amount = value * CAD;

            case "CLP":
                return PLN_amount = value * CLP;

            case "AUD":
                return PLN_amount = value * AUD;

            case "CZK":
                return PLN_amount = value * CZK;

            case "UAH":
                return PLN_amount = value * UAH;

            case "NZD":
                return PLN_amount = value * NZD;

            default:
                return PLN_amount = value * CHF;
        };
    } 

    function currency_calculator_second_stage(PLN_amount, output_currencyElement) {

        const input_currencyElement = document.querySelector(".form__field--input_currency");
        PLN_amount = currency_calculator_first_stage(value, input_currencyElement);

        switch (output_currencyElement.value) {

            case "PLN":
                return amount = PLN_amount / PLN;

            case "EUR":
                return amount = PLN_amount / EUR;

            case "GBP":
                return amount = PLN_amount / GBP;

            case "USD":
                return amount = PLN_amount / USD;

            case "CAD":
                return amount = PLN_amount / CAD;

            case "CLP":
                return amount = PLN_amount / CLP;

            case "AUD":
                return amount = PLN_amount / AUD;

            case "CZK":
                return amount = PLN_amount / CZK;

            case "UAH":
                return amount = PLN_amount / UAH;

            case "NZD":
                return amount = PLN_amount / NZD;

            default:
                return amount = PLN_amount / CHF;   
        }
    };

    const formElement = document.querySelector(".form");
    
    formElement.addEventListener("submit", (e) => {
        e.preventDefault();

        const input_currencyElement = document.querySelector(".form__field--input_currency");
        const input_currency_rateElement = document.querySelector(".form__field--input_currency_rate");
       
        PLN = 1;
        EUR = 4.7013;
        GBP = 5.5752;
        USD = 4.6127;
        CAD = 3.5734;
        CLP = 0.005;
        AUD = 3.2101;
        CZK = 0.1916;
        UAH = 0.1258;
        NZD = 2.8878;
        CHF = 4.8137;

        switch (input_currencyElement.value) {

            case "PLN":
                return input_currency_rateElement.innerText=PLN.toFixed(2);

            case "EUR":
                return input_currency_rateElement.innerText=EUR;

            case "GBP":
                return input_currency_rateElement.innerText=GBP;

            case "USD":
                return input_currency_rateElement.innerText=USD;

            case "CAD":
                return input_currency_rateElement.innerText=CAD;

            case "CLP":
                return input_currency_rateElement.innerText=CLP;

            case "AUD":
                return input_currency_rateElement.innerText=AUD;

            case "CZK":
                return input_currency_rateElement.innerText=CZK;
                
            case "UAH":
                return input_currency_rateElement.innerText=UAH;

            case "NZD":
                return input_currency_rateElement.innerText=NZD;
            
            default:
                return input_currency_rateElement.innerText=CHF;
        };       
    });
    formElement.addEventListener("submit", (e) => {
        e.preventDefault(); 

        const output_currencyElement = document.querySelector(".form__field--output_currency");
        const output_currency_rateElement = document.querySelector(".form__field--output_currency_rate");

        switch (output_currencyElement.value) {

            case "PLN":
                return output_currency_rateElement.innerText=PLN.toFixed(2);

            case "EUR":
                return output_currency_rateElement.innerText=EUR;

            case "GBP":
                return output_currency_rateElement.innerText=GBP;

            case "USD":
                return output_currency_rateElement.innerText=USD;

            case "CAD":
                return output_currency_rateElement.innerText=CAD;

            case "CLP":
                return output_currency_rateElement.innerText=CLP;

            case "AUD":
                return output_currency_rateElement.innerText=AUD;

            case "CZK":
                return output_currency_rateElement.innerText=CZK;
                
            case "UAH":
                return output_currency_rateElement.innerText=UAH;

            case "NZD":
                return output_currency_rateElement.innerText=NZD;
            
            default:
                return output_currency_rateElement.innerText=CHF;
        };      
    });
    formElement.addEventListener("submit", (e) => {
        e.preventDefault(); 

        const input_currencyElement = document.querySelector(".form__field--input_currency");
        const output_currencyElement = document.querySelector(".form__field--output_currency");
        const valueElement = document.querySelector(".form__field--value");
        const input_amount = document.querySelector(".input_amount");
        const input_currency = document.querySelector(".input_currency");
        const output_amount = document.querySelector(".output_amount");
        const output_currency = document.querySelector(".output_currency");

        value = valueElement.value;
        PLN_amount = currency_calculator_first_stage(value, input_currencyElement);
        amount = currency_calculator_second_stage(PLN_amount,output_currencyElement);

        input_amount.innerText = value;
        input_currency.innerText=input_currencyElement.value;
        output_amount.innerText=amount.toFixed(2);
        output_currency.innerText=output_currencyElement.value;
    });
}       
