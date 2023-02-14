export function checkPalindrome(string) {
    var len = string.length;

    for (let i = 0; i < len / 2; i++) {
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
};

export function whichIsBigger(firstNumber, secondNumber) {
    if(firstNumber>secondNumber)
        return "First number is bigger";
    else if(secondNumber>firstNumber)
        return "Second Number is bigger";
    else
        return "Numbers is equals";
};

