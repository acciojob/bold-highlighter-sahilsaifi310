function highlight() {
     let boldWords = document.querySelectorAll('b');
    
   
    boldWords.forEach(function(word) {
        word.style.color = 'green';
    });


}


function return_normal() {
      let boldWords = document.querySelectorAll('b');
    
   
    boldWords.forEach(function(word) {
        word.style.color = 'black';
    });

    
}
