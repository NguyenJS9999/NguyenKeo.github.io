
function ProductList() {
  let QUESTIONS_DATA = [
    { id : 1,
      question: "Câu 1: Từ nào còn thiếu trong câu thành ngữ: 'Mật ngọt chết ...?'",   
      answer: "B: Ruồi",
      choices: ["A: Ong", 'B: Ruồi', "C: Muỗi", 'D: Kiến' ],
    },{ id : 2,
      question: "Câu 2: Loại bột nào sau đây không được dùng để chế biến thức ăn?",
      answer: " C: Bột giặt ",
      choices: [ ' A: Bột mì ', ' B: Bột gạo ', ' C: Bột giặt ', ' D: Bột năng ' ],
    },
    { id : 3,
      question: "Câu 3: Từ nào sau đây viết đúng chính tả tiếng Việt? ",
      answer: " D: Chậm chạp ",
      choices: [ ' A: Trậm chạp ', ' B: Chậm Trạp ', ' C: Trậm trạp ', ' D: Chậm chạp ' ],
    },{ id : 4,
      question: "Câu 4: Loài vật nào thường được nuôi để lấy ngọc ",
      answer: " C: Trai ",
      choices: [ 'A: Cua ', ' B: Mực ', ' C: Trai ', ' D: Sứa ' ], 
    },{ id : 5,
      question: "Câu 5: Trên mặt một đồng hồ cơ có số chỉ giờ, đối diện với số 9 là số mấy? ",
      answer: " A: Số 3 ",
      choices: [ ' A: Số 3', ' B: Số 6 ', ' C: Số 1  ', ' D: Số 12 ' ], 
    },{ id : 6,
      question: "Câu 6: Hiện nay, vùng an toàn  được nhiều khu dân cư, ngõ xóm thiết lập nhằm chống lây nhiễm COVID-19 vào khu đó thường được gọi là gì? ",
      answer: " D: Vùng xanh ",
      choices: [ ' A: Vùng nâu ', ' B: Vùng nâu ', ' C: Vùng xám ', ' D: Vùng xanh ' ], 
    },{ id : 7,
      question: "Câu 7: Bàn thắng đầu tiên tại  VCK UEFA Euro 2020 có điểm gì đặc biệt? ",
      answer: " C: Là bàn phản lưới nhà ",
      choices: [ ' A: Ghi bàn từ giữa sân', ' B: Do thủ môn ghi bàn ', ' C: Là bàn phản lưới nhà ', ' D: Đá phạt góc thành bàn ' ], 
    },{ id : 8,
      question: "Câu 8: Ngôn ngữ nào trên thế giới còn được gọi là 'Ngôn ngữ Molière'? ",
      answer: " A: Tiếng Pháp ",
      choices: [ ' A: Tiếng Pháp', ' B: Tiếng Anh ', ' C: Tiếng Đức ', ' D: Tiếng Ý ' ], 
    },{ id : 9,
      question: " Câu 9: Thành Tây Đô (nay ở Thanh Hóa)  được xây dựng vào triều đại nào trong lịch sử nước ta",
      answer: " B: Nhà Trần ",
      choices: [ ' A: Nhà Lý', ' B: Nhà Trần', ' C: Nhà Hồ', ' D: Nhà Hậu Lê' ], 
    },{ id : 10,
      question: " Câu 10: Vào ngày 2/9/2020, hình ảnh quốc kỳ Việt Nam được chiếu lên toàn bộ bề mặt tòa nhà nổi tiếng thế giới nào?",
      answer: " C: Tháp Burj Khalifa ",
      choices: [ ' A: Tháp đôi Petronas', ' B: Tháp Đài Bắc 101 (Taipei 101)', ' C: Tháp Burj Khalifa', ' D: Tháp Eiffel' ], 
    },{ id : 11,
      question: " Câu 11: ",
      answer: " B: ",
      choices: [ ' A: ', ' B: ', ' C: ', ' D: ' ], 
    },{ id : 12,
      question: " Câu 12: ",
      answer: " C: ",
      choices: [ ' A: ', ' B: ', ' C: ', ' D: ' ], 
    },{ id : 13,
      question: " Câu 13: ",
      answer: " D: ",
      choices: [ ' A: ', ' B: ', ' C: ', ' D: ' ], 
    },{ id : 14,
      question: " Câu 14: ",
      answer: " A: ",
      choices: [ ' A: ', ' B: ', ' C: ', ' D: ' ], 
    },{ id : 15,
      question: " Câu 15: ",
      answer: " B: ",
      choices: [ ' A: ', ' B: ', ' C: ', ' D: ' ], 
    }
  ]; // QUESTIONS_DATA
  const MONEY_BONUS = ['200000','400000','600000','1000000','2000000','3000000','6000000','10000000','14000000','22000000','30000000','40000000','60000000','85000000','150000000',
]

  
  const [ stateGreetingTitle, setGreetingTitle ] = React.useState('Chào mừng bạn đến với chương trình "Ai là triệu phú", hãy nhấn nút Bắt đầu để tham gia phần thi');
  //  State Question - Hiện từng câu hỏi một
  const [ stateQuestions, setQuestions ] = React.useState( [] );
  // Số câu hỏi hiện tại / trên tổng số 15 câu, skip tăng dần số lên
  const [ stateCurrentQuestionNumber , setCurrentQuestionNumber ] = React.useState( 1 );
  // Thay text nút bắt đầu
  const [ stateTextStart , setTextStart ] = React.useState( 'Bắt đầu' );
  // Thay text nút Bỏ qua
  const [ stateSkip , setSkip ] = React.useState( 'Bỏ qua' );
  //  Số tiền thưởng - liên tiếp tương ứng với MỨC câu hỏi
  const [ stateMoneyBonus , setMoneyBonus ] = React.useState( 0 );
  // Thông báo chúc mừng hoặc thua cuộc
  const [ stateNotify , setNotify ] = React.useState( '' ); 

  // Shuffle thứ tự các lựa chọn trong mảng choices
  // for ( let i = 0; i <  QUESTIONS_DATA.length; i++ ) {
  //   QUESTIONS_DATA[i].choices.sort( () => Math.random() -0.5 );
  // }
  // Shuffle thứ tự các lựa chọn trong mảng data
  // QUESTIONS_DATA.sort( () => Math.random() - 0.5 );
  // Câu hỏi hiện tại (current question)
  
  // -- Function render ra từng câu hỏi
  function renderQuestion( ) { console.log('Bắt đầu game - in ra câu hỏi')
    // Nhấn nút start in ra cầu số 1
    setTextStart( 'Chơi lại' )

    let IdQuestionRestart
    if ( stateTextStart === 'Bắt đầu' ) {
      let currentQuestion = QUESTIONS_DATA.filter( (question) => question.id == stateCurrentQuestionNumber )
      console.log('currentQuestion', currentQuestion)
      setQuestions( currentQuestion )
      setGreetingTitle('')
    }

    if ( stateTextStart === 'Chơi lại' ) { 
      IdQuestionRestart = 1;
      console.log('IdQuestionRestart: ', IdQuestionRestart)
      setCurrentQuestionNumber( IdQuestionRestart )
      
      let currentQuestion = QUESTIONS_DATA.filter( (question) => question.id == stateCurrentQuestionNumber )
      setQuestions( currentQuestion )
      setSkip( 'Bỏ qua' )
    }
    
  } 
  // stateCurrentQuestionNumber
 
  // Bỏ qua 1 câu hỏi - câu kế tiếp
  let IdQuestion
  function skipQuestion() {
    // Thay text câu giới thiệu
    setGreetingTitle('')
    IdQuestion = stateCurrentQuestionNumber + 1; 
    console.log('IdQuestion: ', IdQuestion)
    let currentQuestion = [...QUESTIONS_DATA].filter( (question) => question.id == IdQuestion )
    setQuestions( currentQuestion );
    setCurrentQuestionNumber( IdQuestion )

    
    

    if ( IdQuestion > 15 ) {
      setSkip( 'Hoàn thành' )
    }
  }
  // Lấy giá trị nội dụng của mỗi thẻ đáp án
  let valueElement
  function getAnswerValue(event) {
    valueElement = event.target.value
    console.log('valueElement', valueElement)
  }
  // Kiểm tra câu trả lời đúng/sai
  function answerResult(params_answer) {
    console.log('Đáp án được chọn - kiểm tra, Nôi dung người chơi trả về', params_answer)

    // Trả về 1 object khi click 1 trong 4 đáp án
    let currentSentence = [...QUESTIONS_DATA].filter( (question) => question.id == stateCurrentQuestionNumber )
    console.log('currentSentence: ', currentSentence)
    // Nội dung đáp án đúng
    let currentAnswer = currentSentence[0].answer; console.log('currentAnswer: ', currentAnswer)

    // let playersChoice = currentSentence[0].choices; console.log('playersChoice: ', playersChoice)
    
    // Tăng tiền thưởng, nếu đúng 1 câu tăng 1 điểm/phải đúng liên tiếp thưởng theo index
    let moneyBonusFormat = MONEY_BONUS[stateCurrentQuestionNumber] 
    let moneyBonus = moneyBonusFormat.toLocaleString('vi-VN')
    console.log('moneyBonus', moneyBonus)

    // toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    if ( params_answer == currentAnswer ) { console.log('Câu trả lời chính xác')
      setNotify( 'Câu trả lời chính xác' ); alert('Câu trả lời chính xác')
      setMoneyBonus( moneyBonus )
    } else {
      console.log('Câu trả lời SAI - bạn phải dừng cuộc chơi tại đây và ra về với 0 đồng')
      setNotify( 'Câu trả lời SAI - bạn phải dừng cuộc chơi tại đây và ra về với 0 đồng' )
      setMoneyBonus( 0 )
    }
   
 
  }


  // In ra mỗi câu hỏi
  let questionElement = [...stateQuestions].map( (question) => (
    <span key={question.id} >  
      {question.question} <br/>
    </span>
  ) ); 
  // Đáp án số 1
  let answerElement1 = [...stateQuestions].map( (question) => (
    <span key={question.id} onClick = { () => answerResult ( question.choices[0] ) }  >  
      {question.choices[0]} <br/>
    </span>
  ) ); 
  // Đáp án số 2
  let answerElement2 = [...stateQuestions].map( (question) => (
    <span key={question.id} onClick = { () => answerResult ( question.choices[1] ) }>  
      {question.choices[1]} <br/>
    </span>
  ) ); 
  // Đáp án số 3
  let answerElement3= [...stateQuestions].map( (question) => (
    <span key={question.id} onClick = { () => answerResult ( question.choices[2] ) }>  
      {question.choices[2]} <br/>
    </span>
  ) ); 
  // Đáp án số 4
  let answerElement4 = [...stateQuestions].map( (question) => (
    <span key={question.id} onClick = { () => answerResult ( question.choices[3] ) }>  
      {question.choices[3]} <br/>
    </span>
  ) ); 


  return (
    <>
       <div className=" quiz-container   container-fluid ">
        <div className=" quiz-title-name ">Ai là triệu phú</div>

        {/* Thanh tiến trình cuộc chơi */}
        <div className=" process   container ">
          <span className=" actual-progress ">6.66%</span>
        </div>

        {/* Thông tin và thưởng */}
        <div className=" infor-btn-points-gift container ">

          <span>
            <div className=" number-of-question "> Câu hỏi 
              <b> {stateCurrentQuestionNumber} </b>/15 
            </div>&nbsp;

            <div onClick={ skipQuestion } className=" skip-question "> { stateSkip } </div>
          </span>

          <span>
            {/* Tiền thưởng khi tl đúng */}
            <div className=" money-bonus "> { stateMoneyBonus } vnđ</div>&nbsp;

            {/* Các sự trợ giúp */}
            <div className=" helps ">
              {/* Bỏ đi ngẫu nhiên 2 đáp án sai */}
              <span><b>50:50</b></span>
              {/* Trả lời random 4 câu trả lời - ko chắc */}
              <span> <i className="fas fa-phone-volume" /> </span>
              {/* Hỏi ý  kiến của khán giả - nhiều người-random 4 câu trả lời -  2 đáp án ko chắc  */}
              <span> <i className="fas fa-users"></i> </span>
              {/* Hỏi ý kiến nhà thông thái - đáp án đúng 100% */}
              <span> <i className="fas fa-graduation-cap" /> </span>

            </div>
          </span>

        </div>

        {/* Phần thông tin câu hỏi và các đáp án */}
        <div className=" quiz-form    container ">
          {/* Nút bắt đầu */}
          <span  onClick= {renderQuestion} className='start-play-quiz' >{stateTextStart}</span>

          {/* Câu hỏi */}
          <div className=" questions ">           
              { stateGreetingTitle }
              { questionElement } 

              {/* Thông báo thắng/thua */}
              { stateNotify }
            
          </div>

          {/* Các đáp án */}
          <div className=" answers  choices-box" id="content">

            {/* 1 */}
            <div 
               className=" answer " id="option-1">
              <span className="numerical-order ">1</span>
              {answerElement1}
            </div>
            {/* 2 */}
            <div
              className=" answer " id="option-2">
              <span className="numerical-order ">2</span>
              {answerElement2}
            </div>
            {/* 3 */}
            <div
               className=" answer " id="option-3">
              <span className="numerical-order ">3</span>
              {answerElement3}
            </div>
            {/* 4 */}
            <div
               className=" answer " id="option-4">
              <span className="numerical-order ">4</span>
              {answerElement4}
            </div>

          </div>
        </div>
      </div>

    </>


  );

}

ReactDOM.render(<ProductList />, document.getElementById("root"));
