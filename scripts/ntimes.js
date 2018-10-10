function fun(){
    
    console.log('Hello World'); 
    };
 function call3Times(fun,times) {
  for (i = 0; i <times; i++ ){
      fun();
  }

    }
   
call3Times(fun,5);
