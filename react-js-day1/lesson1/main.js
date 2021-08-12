console.log("react js btvn 1");

// const timeNow = document.getElementById("root");
// function clock() {
//   let time = new Date().toLocaleTimeString();
//   // let time = `
//   // <div class="theClock" id="root"></div>
//   // `
//   timeNow.innerText = time;
 
// }
// setInterval(clock, 1000);

function tick() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
  }
  
  setInterval(tick, 1000);
  