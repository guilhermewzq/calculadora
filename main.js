let bill = 0
let tipPercentage = 0
let numberOfPeople = 0
let buttonSelected = null

function receiveBillValue() {
    bill = billInput.valueAsNumber

    calculate()
}

function receiveNumberOfPeopleValue() {
    numberOfPeople = numberOfPeopleInput.valueAsNumber

    calculate()
}