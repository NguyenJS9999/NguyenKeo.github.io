let day = new Date ();
let year = day.getFullYear();
function ageCount() {
    let namSinh = document.getElementById("age").value;
    if (namSinh <= 0 || namSinh > year) {
        thongBao = "Xin moi nhap lai nam sinh"
    } else {
       tuoi = year - namSinh;
       if ( tuoi > 121) {
        thongBao = "Ban da qua gia"
        
       }
       thongBao =  `Tuoi cua ban la ${year - namsinamSinhnh}`
    }
    document.getElementById("alert").innerHTML = thongbao

}



function reset() {
    window.location.reload()
}