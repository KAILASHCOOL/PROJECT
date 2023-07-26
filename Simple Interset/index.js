calculate=()=>{
    let inputs=document.querySelectorAll("input")
    let si= inputs[0].value* inputs[1].value* inputs[2].value/100;
    inputs[3].value=si;
    }
