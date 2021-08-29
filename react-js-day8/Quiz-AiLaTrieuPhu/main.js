
function ProductList() {
  let QUESTIONS_DATA = [
    { id : 1,
      question: "Câu 1: Từ nào còn thiếu trong câu thành ngữ: 'Mật ngọt chết ...?'",   
      answer: "B: Ruồi",
      choices: ["A: Ong", 'B: Ruồi', "C: Muỗi", 'D Kiến' ],
    },{ id : 2,
      question: "Loại bột nào sau đây không được dùng để chế biến thức ăn?",
      answer: " B: Bột giặt ",
      choices: [ ' A: Bột mì ', ' B: Bột gạo ', ' C: Bột giặt ', ' D: Bột năng ' ],
    },
    // { id : 3,
    //   question: " Từ nào sau đây viết đúng chính tả tiếng Việt? ",
    //   answer: " D: Chậm chạp ",
    //   choices: [ ' A: Trậm chạp ', ' B: Chậm Trạp ', ' C: Trậm trạp ', ' D: Chậm chạp ' ],
    // },{ id : 4,
    //   question: " Loài vật nào thường được nuôi để lấy ngọc ",
    //   answer: " C: Trai ",
    //   choices: [ 'A: Cua ', ' B: Mực ', ' C: Trai ', ' D: Sứa ' ], 
    // },{ id : 5,
    //   question: " Trên mặt một đồng hồ cơ có số chỉ giờ, đối diện với số 9 là số mấy? ",
    //   answer: " A: Số 3 ",
    //   choices: [ ' A: Số 3', ' B: Số 6 ', ' C: Số 1  ', ' D: Số 12 ' ], 
    // },{ id : 6,
    //   question: " Hiện nay, vùng an toàn  được nhiều khu dân cư, ngõ xóm thiết lập nhằm chống lây nhiễm COVID-19 vào khu đó thường được gọi là gì? ",
    //   answer: " D: Vùng xanh ",
    //   choices: [ ' A: Vùng nâu ', ' B: Vùng nâu ', ' C: Vùng xám ', ' D: Vùng xanh ' ], 
    // },{ id : 7,
    //   question: " Bàn thắng đầu tiên tại  VCK UEFA Euro 2020 có điểm gì đặc biệt? ",
    //   answer: " C: Là bàn phản lưới nhà ",
    //   choices: [ ' A: Ghi bàn từ giữa sân', ' B: Do thủ môn ghi bàn ', ' C: Là bàn phản lưới nhà ', ' D: Đá phạt góc thành bàn ' ], 
    // },{ id : 8,
    //   question: " Ngôn ngữ nào trên thế giới còn được gọi là 'Ngôn ngữ Molière'? ",
    //   answer: " A: Tiếng Pháp ",
    //   choices: [ ' A: Tiếng Pháp', ' B: Tiếng Anh ', ' C: Tiếng Đức ', ' D: Tiếng Ý ' ], 
    // },{ id : 9,
    //   question: "  ",
    //   answer: "  ",
    //   choices: [ ' ', '  ', '  ', '  ' ], 
    // },{ id : 10,
    //   question: "  ",
    //   answer: "  ",
    //   choices: [ ' ', '  ', '  ', '  ' ], 
    // },{ id : 11,
    //   question: "  ",
    //   answer: "  ",
    //   choices: [ ' ', '  ', '  ', '  ' ], 
    // },{ id : 12,
    //   question: "  ",
    //   answer: "  ",
    //   choices: [ ' ', '  ', '  ', '  ' ], 
    // },{ id : 13,
    //   question: "  ",
    //   answer: "  ",
    //   choices: [ ' ', '  ', '  ', '  ' ], 
    // },{ id : 14,
    //   question: "  ",
    //   answer: "  ",
    //   choices: [ ' ', '  ', '  ', '  ' ], 
    // },{ id : 15,
    //   question: "  ",
    //   answer: "  ",
    //   choices: [ ' ', '  ', '  ', '  ' ], 
    // }
  ]; // QUESTIONS_DATA

  
  const [ stateGreetingTitle, setGreetingTitle ] = React.useState('Chào mừng bạn đến với chương trình "Ai là triệu phú", hãy nhấn nút Bắt đầu để tham gia phần thi');
  //  State Question - Hiện từng câu hỏi một
  const [ stateQuestions, setQuestions ] = React.useState( [] );

  // Số câu hỏi hiện tại / trên tổng số 15 câu
  const [ stateCurrentQuestionNumber , setCurrentQuestionNumber ] = React.useState( 0 );




  // Shuffle thứ tự các lựa chọn trong mảng choices
  for ( let i = 0; i <  QUESTIONS_DATA.length; i++ ) {
    QUESTIONS_DATA[i].choices.sort( () => Math.random() -0.5 );
  }
  // Shuffle thứ tự các lựa chọn trong mảng data
  QUESTIONS_DATA.sort( () => Math.random() - 0.5 );
  // Câu hỏi hiện tại (current question)
  let curQuestion = 0;
  // -- Function render ra từng câu hỏ
  function renderQuestion( count ) {
    console.log('Bắt đầu game - in ra câu hỏi')

    let currentQuestion = QUESTIONS_DATA.filter( (question) => question.id == 1 )
    console.log('currentQuestion', currentQuestion)
    setQuestions( currentQuestion )
    setGreetingTitle('')

    // Lấy ra câu hỏi hiện tại
    let question = QUESTIONS_DATA[count]
    // Cập nhật title, nội dung câu hỏi
    let currentQuestionNumber = count + 1;
    setCurrentQuestionNumber( currentQuestionNumber );
    // Cập nhật thanh tiến trình
    function actualProgress(params) {
      return  <span style='width: 10%' className=" actual-progress ">6.66%</span>
    }
  }


  // Hàm hiện ngẫu nhiên 1 câu hỏi
  // function actuallyQuestion() {
  //   let presentQuestion;
  //   presentQuestion = [...QUESTIONS_DATA].filter( ( question ) => question.id == 1 ); console.log('presentQuestion', presentQuestion)
  //   setQuestions(presentQuestion)
  // }
  // Biến kiểm tra nếu người dùng trả lời mới cho next, và không cho phép chọn lại đáp án (mặc định flag = false là chưa cho next và cho chọn đáp án)
  // let allowNext = false;

  // Lặp ra 1 câu hỏi theo id truyền vào
  let questionElement = [...stateQuestions].map( (question) => (
    <span key={question.id} >  
      {question.question} <br/>
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
            <div className=" number-of-question "> Câu hỏi <b>1</b>/15 </div>&nbsp;
            <div className=" skip-question ">Bỏ qua</div>
          </span>

          <span>
            <div className=" money-bonus ">200.000 vnđ</div>&nbsp;
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
          {/* Câu hỏi */}
          <span  onClick= {renderQuestion} className='start-play-quiz' >Bắt đầu</span>
          
          <div className=" questions ">           
              { stateGreetingTitle }
              { questionElement } 
          </div>

          {/* Các đáp án */}
          <div className=" answers  choices-box" id="content">
            {/* 1 */}
            <div className=" answer " id="option-1">
              <span className="numerical-order ">1</span>
              <div>Dùng text-align: center cho thẻ p chứa ảnh</div>
            </div>
            {/* 2 */}
            <div className=" answer " id="option-2">
              <span className="numerical-order ">2</span>
              <div>Dùng text-align: center cho ảnh</div>
            </div>
            {/* 3 */}
            <div className=" answer " id="option-3">
              <span className="numerical-order ">3</span>
              <div>Dùng margin: auto cho thẻ p chứa ảnh</div>
            </div>
            {/* 4 */}
            <div className=" answer " id="option-4">
              <span className="numerical-order ">4</span>
              <div>Dùng margin: auto cho ảnh</div>
            </div>

          </div>
        </div>
      </div>


    </>
  );
}

ReactDOM.render(<ProductList />, document.getElementById("root"));
