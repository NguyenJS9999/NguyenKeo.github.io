console.log("File main buổi học 26 Js nâng cao buổi 1")



// End câu 1 Accordion

// Start câu 2 Carousel
// End câu 2 Carousel

// Start câu 3 Modal
// End câu 3 Modal

// Start câu 4 Popovers 
// End câu 4 Popovers


// Start câu 5 Progress
// End câu 5 Progress




// Start câu 6 Tab
function tabContent(data_tab) {
    if (data_tab === "Home") {
        $('.content-out').html($('#home'))


        console.log("$('#home')", $('#home').html())


        $('.content-out').html($('#home')) = $('#home').html()

        // console.log("Home", data_tab)


        // console.log("Home", data_tab )
    }

    if (data_tab === "Menu1") {
        $('.content-out').html($('#Menu1'))
        console.log("Menu1", data_tab)

    }

    if (data_tab === "Menu2") {
        $('.content-out').html($('#Menu2'))
        console.log("Menu2", data_tab)

    }
}
// End câu 6 Tab

// Start câu 7 Toasts 
// End câu 7 Toasts