//elena-efimova
//Проверить скобочную последовательность

function checkParenthesisSequence(sequence) {

    let initialSeq = sequence.split('');
    let stack = [];

    let dict = {};
    dict[')']='(';
    dict[']']='[';
    dict['}']='{';
    let openingParenthesis = ['(', '{', '['];
    let success = true;
    initialSeq.forEach(function (item) {
        if (openingParenthesis.includes(item)) {
            stack.push(item);
        } else if (item in dict) {
            if (stack.length == 0)
                success = false;
            let expected = dict[item];
            let fact = stack.pop();
            if (expected != fact) {
                success = false;
            }
        }
    });
    return success && (stack.length == 0);
}


if (!checkParenthesisSequence('{[]({})}'))
    console.log("Неправильно задана скобочная последовательность");