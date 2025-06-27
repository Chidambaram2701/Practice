function bmi_calc(weight,height){
    return weight/(height*height);
}
let w1=65;
let h1=1.3;
console.log(Math.round((bmi_calc(w1,h1))));