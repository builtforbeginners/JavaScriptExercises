const description = document.getElementById("txtareaMessage");
const displayMessage = document.getElementById("displayMessage");
const maxWords = 100;

description.addEventListener('input', function handleChange(event){
    let inputValue = maxWords - event.target.value.split(' ').filter(num => num !== '').length;
    displayMessage.innerText = inputValue === 0 ? "You have entered more than " + maxWords + " words."
                                                : inputValue + " words remaining";
});

