const nEntrante= parseInt(prompt("n"))
// nEntrante=nEntrante%1==0

// verificamos que es un numero
if (nEntrante%1==0){
    // convertimos a kelvin
    function kelvin(){
    return console.log("Grados Kelvin: ",nEntrante+273,15)
    }
    // // convertimos a fahren
    function fahren(){
    return console.log("Grados Fahrenheit:", nEntrante*9/5+32) 
    
}

    // llamamos a fuction
    
    kelvin()
    fahren()
    
} else{
    console.log("this computer recived only numbers, try again")
}

