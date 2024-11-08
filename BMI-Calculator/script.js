const form = document.querySelector('form');
form.addEventListener('submit',function (e){
    e.preventDefault();
    let weight = parseInt(document.getElementById("weight").value);
    let height = parseInt(document.getElementById("height").value);
    let result = document.getElementById("result");
    let bmiprint = document.getElementById("bmi");
    if(height === "" || height < 0 || isNaN(height)){
        result.innerHTML="Please Give A Valid Height";
    }else if(weight === "" || weight < 0 || isNaN(weight)){
        result.innerHTML="Please Give A Valid Weight";
    }else{
        let bmi=(weight/((height*height)/10000)).toFixed(2);
        //Now calculate the bmi by weight list
        if(bmi < 16.00){
            result.innerHTML=`Your BMI IS :- ${bmi}`;
            bmiprint.innerHTML="You are under weight according to the height and weight";
        }else if(bmi > 16.00 && bmi < 70){
            result.innerHTML=`Your BMI IS :- ${bmi}`;
            bmiprint.innerHTML="Your BMI is normal according to the height and weight";
        }else{
            result.innerHTML=`Your BMI IS :- ${bmi}`;
            bmiprint.innerHTML="You are over weight according to the height and weight";
        }
    }


})
