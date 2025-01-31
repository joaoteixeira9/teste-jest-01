function divisao(a, b){
    if (Number(b) == 0){
        return "Não pode ser dividido por 0";
    }else{
        return Number(a) / Number(b);
    }
}

module.exports = divisao;