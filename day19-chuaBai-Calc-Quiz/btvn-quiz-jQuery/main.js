console.log("Quiz-jquery")

let datas = [
    {
        ask: "Trong các cách đặt tên biến sau, cách nào sai cú pháp?",
        answer: "Dùng text-align: center cho thẻ p chứa ảnh",
        choices: [
            "12degree", 
            "_variable",
            "$12",
            "first-name",
            "numberOne",
        ]
    },
    {
        ask: "Để căn giữa ảnh trong 1 đoạn văn thì ta làm thế nào?",
        answer: "Dùng text-align: center cho thẻ p chứa ảnh",
        choices: [
            "Dùng text-align: center cho thẻ p chứa ảnh", 
            "Dùng text-align: center cho ảnh",
            "Dùng margin: auto cho thẻ p chứa ảnh",
            "Dùng margin: auto cho ảnh",
        ]
    },
    // { // question
    //     ask: "",
    //     answer: "",
    //     choices: [
    //         "", 
    //         "",
    //         "",
    //         "",
    //         "",
    //     ]
    // },

] // datas 

// Câu hỏi hiện tại (current question)
let curQuestion = 0;

// Function render ra từng câu hỏi
function renderQuestion ( count ) {
    let question = datas[count];

  // Cập nhật title, nội dung câu hỏi:
  $(".question-title").html(`Câu hỏi ${count + 1}/${datas.length}`);

  $(".question-content").html(`${question.ask}`);

  // Cập nhật các lựa chọn cho câu hỏi:
  $(".choices-box")[0].innerHTML = "";

  for (let i = 0; i < question.choices.length; i++) {
    $(".choices-box")[0].innerHTML += `<div class="answer" id="choice-${count + 1}" onclick="choose_Answer(this)">
    <p>${question.choices[i]}</p>
   
</div>
             `;
  }

}
// Chạy hàm ngay luôn khi vào phần mềm
renderQuestion(curQuestion);














// let content = '';
// for (let i = 0; i < datas.length; i++ ) {
//     content +=  '<h1>' + datas[i] + '</h1>'
// }


// let answer = document.getElementsByClassName("answer").innerHTML;
// let answer = $('.answer')[0].innerText;
// function choose_Answer() {
//     // if ( n == 1 ) {
//     //     console.log("Đáp án đúng")
//     // }

//     if ( answer == "Dùng text-align: center cho thẻ p chứa ảnh" ) {
//         console.log("Đáp án đúng")
//         alert("Đáp án đúng")
//     }
//     console.log(answer)
// }