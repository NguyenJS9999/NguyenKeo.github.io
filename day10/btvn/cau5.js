console.log("Câu 5:")

const language = ""

function translate(language) {

    // if (language =="") {
    //     console.log("Xin chào")

    // } else if (language == "French") {
    //     console.log("Bonjour")
    // } else if (language == "Hawaiian") {
    //     console.log("aloha")
    // } else if (language == "Germany") {
    //     console.log("Hallo")
    // } else if (language == "Italy") {
    //     console.log("Ciao")
    // } else if (language == "Croatia") {
    //     console.log("zdravo")
    // } 
    // So sánh kiểu dữ liệu tránh nhập số hoặc kí tự đặc biệt
    if (typeof language != "string") { 
        return "xin chào";
    }

    if (language === "French") {
        return "Borjou"
    } else if (language === "Hawaiian") {
        return "aloha"
    } else if (language === "Germany") {
        return "Hallo"
    } else if (language === "Italy") {
        return "Ciao"
    } else if (language === "Croatia") {
        return "zdravo"
    } 


    switch (language) {
        case (""):
            console.log("Xin chào")
            break

        case ("French"):
            console.log("Bonjour")
            break

        case ("Hawaiian"):
            console.log("aloha")
            break

        case ("Germany"):
            console.log("Hallo")
            break

        case ("Italy"):
            console.log("Ciao")
            break

        case ("Croatia"):
            console.log("zdravo")
            break

    }

}
translate(language)

// Câu hỏi: với switch case để check khi nhập số thì viết ntn