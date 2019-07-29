function createAlphabetic(){
    return ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
}

function createMatrixVigenere(){
    let alphabetic = createAlphabetic();
    let matrixVigenere = [];

    for(let j = 0; j < alphabetic.length; j++){
        let arrayAux = [];
        let i = j;
        while(i < 26){
            if(arrayAux.length == 26){
                break;
            }
            arrayAux.push(alphabetic[i]);
            if(i == 25){
                i = -1;
            }
            i++;
        }
        matrixVigenere.push(arrayAux);
    }

    return matrixVigenere;
}

function returnTextInArray(text){
    return text.split("");
}

function decode(text, key){
    let j = 0;
    let textDecoded = [];
    let textArray = returnTextInArray(text);
    let keyArray = returnTextInArray(key);
    let alphabetic = createAlphabetic();
    let matrixVigenere = createMatrixVigenere();

    for(let i = 0; i < textArray.length; i++){

        if(textArray[i] == ' '){
            textDecoded.push(' ');
            i++;
        }    

        if(j == keyArray.length){
            j=0;
        }

        let column = alphabetic.indexOf(keyArray[j]);
        let positionDecode = '';
        for(let k = 0; k < alphabetic.length; k++){
            if(matrixVigenere[k][column] == textArray[i]){
                positionDecode = k;
            }
        }
        textDecoded.push(alphabetic[positionDecode]);
        j++;
    }
    return textDecoded.join('');
}
