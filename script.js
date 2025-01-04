function highlight() {
    let boldWords = document.querySelectorAll('strong');
   
  
   boldWords.forEach(function(word) {
       word.style.color = 'green';
   });


}


function return_normal() {
     let boldWords = document.querySelectorAll('strong');
   
  
   boldWords.forEach(function(word) {
       word.style.color = 'black';
   });

   
}