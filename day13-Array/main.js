// Buổi 13:  Chữa bài buổi 12 22/03/2021 
function tamgiacvuong(m) {
    console.log(m)
    if (m <= 0 || Number.isInteger(m) === false) {
        document.write("So khong hop le")
        return;
    }
    let str = "";
    for (i = 0; i < m; i++) {
        for (let j = 0; j <= i; j++) {
            str += "*&#32;"
        }
        str += "<br />"
    }
    document.write(str)
}
tamgiacvuong(4)
// hinh tam giac can nguoc
function tamgiacCan(m, n) {
    console.log(m);
    if (m <= 0 || n <= 0 || Number.isInteger(m) === false || Number.isInteger(n) === false) {
        document.write("So khong hop le");
        return;
    }
    let str = "";
    for (let i = 0; i < n; i++) {
        str += "<br>";
        for (let j = 0; j < m; j++) {
            if (j >= i && j < m - 1) {
                str = "* ";
            } else {
                str += ""
            }
        }
    }
    document.writeln(str);
}
tamgiacCan(7, 4);



function doixung(n) {
    n = n + "";
    let reverse = n.split("").reverse()
}

// 

function giataxi() {
    let soKM = prompt("nhap so km");
    let b = prompt("nhap thoi gian  cho");
    let giacuoc = 0;

    if (soKM < 0 && b < 0) {
        return "nhap lai du lieu";
    }

    if (soKM <= 1) {
        giacuoc = 9000;
    } else if (soKM > 1 && soKM < 31) {
        giacuoc = 9000 + (soKM - 1) * 11000;
    } else if (soKM >= 31) {
        giacuoc = 9000 + (29 * 11000) + (soKM - 30) * 9500;
    }

    if (b > 0) {
        let a = 0;
        a = 20000 * b;
        giacuoc += a
    }


    console.log("KM di: ", soKM);
    console.log("thoi gian cho la:", b, "gio")
    console.log("so tien la: ", giacuoc);
}