let heroi = "Jones"
let xp = 0
let patente = ""

if(xp <= 1000){
    patente = "Ferro";
}else if(xp >= 1001 && xp <= 2000){
    patente = "Bronze";
}else if(xp >= 2001 && xp <= 5000){
    patente = "Prata";
}else if(xp >= 5001 && xp <= 7000){
    patente = "Ouro";
}else if(xp >= 7001 && xp <= 8000){
    patente = "Platina";
}else if(xp >= 8001 && xp <= 9000){
    patente = "Ascendente";
}else if(xp >= 9001 && xp <= 10000){
    patente = "Imortal";
}else if(xp >= 10001){
    patente = "Radiante";
}

console.log(`O Herói de nome ${heroi} está no nível de ${patente}`);