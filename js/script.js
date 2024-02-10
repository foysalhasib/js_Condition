var age= prompt("Enter age");

if ( age >= 50 ){
    
    console.log('Old!');
}else if (age<50 && age>=30 ) {
      
    console.log('under 50 but above or equal 30')
} else if(age<30 && age>=18){
    
    console.log("Under 30 but above or equal 18")
}else if(age<18 && age>0){
    
    console.log("Under 18")
}else{
   console.log("Invalid Input")
}
