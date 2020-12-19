// selectors

let weightInput = document.getElementById('weightInput');
let heightInput = document.getElementById('heightInput');
let runButton = document.getElementById('runButton');
let resetButton = document.getElementById('resetButton');
let bmiOutput = document.getElementById('bmiOutput');
let medcialNoteIcon= document.getElementById('medicalNoteIcon');
let bmiReport = document.getElementById('bmiReport');



// step-1: Identify the functions                       //step-2: Bind functions and Event Listener  
//step-3: Find variables and data.                      //step-4: implement bmi output
// step-5: implement showReportfunction                //step-6: implement reset function 
//step-7: implement eventHandler function               //step-8: Make the Application Bug free




//step-1 
function run(){
    let weight= Number(weightInput.value);
    let height= Number(heightInput.value); //step-3
    let bmi = weight/((height/100)^2);
    bmiOutput.textContent = bmi.toFixed(2); //step-4
    let report= showReport(bmi);
    medcialNoteIcon.style.display = 'inline-block';
    bmiReport.textContent = report;
}


//step-1 & step-6
function reset(){
    heightInput.value = '';
    weightInput.value = '';
    bmiOutput.textContent= '_______';
    medcialNoteIcon.style.display= 'none';
    bmiReport.textContent= '';
}


//step-2
runButton.addEventListener('click', eventHandler);
resetButton.addEventListener('click', reset);


//step-5
function showReport(bmiValue){
    if(bmiValue<16){
        return `you're very thin`
    }else if(bmiValue>=16 && bmiValue<=17){
        return `You are Moderate thin`
    }else if(bmiValue>17 && bmiValue<=18.5){
        return `You are Mid Thin`
    }else if(bmiValue>18.5 && bmiValue<=25){
        return `You're Normal`
    }else if(bmiValue>25){
        return `You're Overweight`
    }
}


// step-7
function eventHandler(){
    if(Number(weightInput.value) && Number(heightInput.value)){
        run();
    }else {
        alert('Please Provide Valid Input');
        reset();
    }
}