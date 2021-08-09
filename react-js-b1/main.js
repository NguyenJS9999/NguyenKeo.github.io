console.log("react js btvn 1")

const timeNow = document.getElementById("root");

    function clock() {
        let time = new Date().toLocaleTimeString();
   
        timeNow.innerText = `Thời gian hiện tại ${time}`;

        setInterval(clock, 1000);
    }


const ketXuat = document.getElementById("render")
console.log(ketXuat)