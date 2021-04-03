// let height = document.getElementById("height").value / 100; // nhâp vào số met
// let weight = document.getElementById("weight").value;

let heightInput = document.querySelector(".heightN"); // nhâp vào số met
let weightInput = document.querySelector(".weightN");

let notificationError = document.querySelector(".notification-Error");
let notificationMessage = document.querySelector(".notificationMessage");
let resultBMI = document.querySelector(".result-BMI");
let doctorHelp = document.querySelector(".doctor-help");

console.log(height);
console.log(weight);

function CalculatedBMI() {
    // CheckNumberHeight()
    // CheckNumberWeight()

    height = heightInput.value;
    weight = weightInput.value;

    console.log("height", height)
    console.log("weight", weight)

    if (
        height < 100 || height > 200 || height === "" 
        ||
        weight < 20  || weight > 200 || weight === "" 
    )

    {
        notificationError.innerText = "Thông số đầu vào không hợp lệ !!!";
        return;

    } else {
        console.log("height", height)
        console.log("weight", weight)

        let bmi = (weight / (  (height/100) * (height/100) )  ).toFixed(1);
        console.log("bmi", bmi)

        notificationMessage.innerHTML = `Chỉ số BMI của bạn là: ${bmi}`;

        if (bmi < 18.5) {
            resultBMI.innerHTML = `Chỉ số BMI của bạn hiện tại là: ${bmi}`;
            notificationMessage.innerText = "Chỉ số BMI dưới 18.5 bạn đang thiếu cân.";
            doctorHelp.innerText = "Bạn cần phải đi khám bác sĩ và áp dụng một chế độ tập luyện thể thao, thể hình,  ăn uống đủ chất và đúng cách nhất để có thể tăng cân an toàn phù hợp, bảo đảm sức khỏe."
        } else if (bmi < 25) {
            resultBMI.innerHTML = `Chỉ số BMI của bạn hiện tại là: ${bmi}`;
            notificationMessage.innerText = "Chỉ số BMI từ 18.5 đến 24.9 là trạng thái cơ thể bình thường.";
            doctorHelp.innerText = "Bạn cần phải đi khám bác sĩ và áp dụng một chế độ tập luyện thể thao, dinh dưỡng tốt nhất để có thể tăng cân an toàn, đảm bảo sức khỏe."
        } else if (bmi < 30) {
            resultBMI.innerHTML = `Chỉ số BMI của bạn hiện tại là: ${bmi}`;
            notificationMessage.innerText = "Chỉ số BMI từ 25.0 đến 29.9 là dấu hiệu ban bắt đầu thừa cân.";
            doctorHelp.innerText = "Trạng thái thừa cân lúc này chưa quá đáng lo, vì bậy ngay lúc này bạn hãy sớm tìm phương pháp và chế độ giảm cân phù hợp để nhanh chóng đưa cơ thể chở lại vóc dáng cân đối thon thả, và phòng ngừa tiềm ẩn bệnh tật về sau."
        } else if (bmi > 30) {
            resultBMI.innerHTML = `Chỉ số BMI của bạn hiện tại là: ${bmi}`;
            notificationMessage.innerText = "Chỉ số BMI bằng hoặc trên 30 thực sự được xem là quá béo phì.";
            doctorHelp.innerText = "Giờ ở cấp độ thừa cân béo phì như này, cơ thể bạn sẽ gây lên áp lực rất lơn tới hệ thống xương khớp, . Bạn nên đi khám bác sĩ gấp để được tư vấn kịp thời phương pháp, cách thức giảm cân phù hợp và tốt nhất. "
        }

    }

}

function restart() {
    window.location.reload();
}