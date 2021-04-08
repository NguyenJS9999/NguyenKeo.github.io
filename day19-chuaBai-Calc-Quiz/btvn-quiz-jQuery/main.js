console.log("Quiz-jquery")

let question = [
    
]

// $(document).ready(function(){
//     $("div").click(function(){
//       $(this).hide();
//     });
//   });

// let answer = document.getElementsByClassName("answer").innerHTML;
let answer = $('.option-1')[0].innerText;


function choose_Answer(n) {
    if ( n == 1 ) {
        console.log("Đáp án đúng")
    }
    console.log(answer)
}