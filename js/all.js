document.addEventListener('DOMContentLoaded', function () {
    // 1. Chọn vùng chứa các nút điều hướng
    const containerDiv = document.querySelector('.qn_buttons')
    let selectedButton = containerDiv.querySelector('a')
    // Lấy tất cả các DIV nội dung quiz.
    // Thay thế selector dưới đây bằng selector chính xác của bạn nếu cần (ví dụ: '.quiz-content-item')
    const allContentDivs = document.querySelectorAll('div[id^="question-"]')

    // Question hiển thị đầu tiên.
    let showQuestion = allContentDivs[0]

    init()

    if (containerDiv) {
        containerDiv.addEventListener('click', function (event) {
            let clickedElement = event.target
            const anchorElement = clickedElement.closest('a') // Tìm thẻ <a> gần nhất

            if (anchorElement) {
                event.preventDefault() // Ngăn chặn hành vi mặc định của thẻ <a> (ngăn nó chuyển trang/cuộn)

                // Lấy giá trị của attribute 'questionId'
                const questionIdValue = anchorElement.getAttribute('questionId')

                // tắt highligh button
                selectedButton.classList.remove('thispage')

                // Set highligh button
                selectedButton = anchorElement
                selectedButton.classList.add('thispage')

                if (questionIdValue) {
                    // Gọi hàm để xử lý việc hiển thị/ẩn
                    displayQuestion(questionIdValue)
                }
            }
        })
    }

    // 2. Định nghĩa hàm xử lý việc hiển thị/ẩn nội dung
    function displayQuestion(questionId) {
        // Ẩn hiện tại
        showQuestion.style.display = 'none'

        // Hiển thị DIV có ID khớp với questionId
        showQuestion = document.querySelector(`div[id="${questionId}"]`)

        if (showQuestion) {
            showQuestion.style.display = 'block' // Hiển thị
        } else {
            console.warn(`Không tìm thấy thẻ div với ID: ${questionId}`)
        }
    }

    function init() {
        // Ẩn hết tất cả
        allContentDivs.forEach((div) => {
            div.style.display = 'none' // Ẩn
        })

        // Hiển thị câu đầu tiên
        showQuestion.style.display = 'block'
        selectedButton.classList.add('thispage')
    }
})
