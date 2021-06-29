//Questão 1

var result = someFun({someProperty: 'interview'}, function(value){
    console.log(`This pointing to ${value}`);
});


function someFun(A,B){
    B(A.someProperty)
    return 1;
}



console.log(`Result is `,result);

//Questão 2

function someFn(A){
    var valor =  A;
    return function(Aumento){

      valor += Aumento;
        return valor;

    }
}


var counter = someFn(1)
 console.log('Fist call', counter(3));
 console.log('Second call',counter(1));
 console.log('Third call',counter(5));


 //Questão 3

 function calculator(Nun1, Nun2){
     
    return function(callBack){
        
        return callBack(Nun1,Nun2);
   
     }
 }

 var sun = calculator(3,2);
console.log( sun(function(Nun1,Nun2){
    return Nun1 + Nun2;
  }))

  //Questão 4
  var a = 5;
  var b = 10;
  if(a === 5){
      let a = 4;
      var b = 1;
       console.log(a);
       console.log(b);
  }
  console.log(a);
  console.log(b);
//Resposta: 4, 1, 5 , 1 


//Questão 5
   function tabuada(Nun){
       
     for (let i = 1; i <= 10; i++) {
        result = i*Nun;
        console.log(result);
        
       }

   } 

   tabuada(5);