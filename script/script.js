const course_elemlist_header = document.querySelectorAll(".spoiler-header");
const course_elemlist_sublist = document.querySelectorAll(".spoiler-subtext");
const modal_window = document.querySelector(".modal");
const modal_content_boxes = document.querySelectorAll(".modal-toggle");
const modal_callbuttons = document.querySelectorAll(".call-modal");
const enroll_form = document.querySelector("#eroll__form");

course_elemlist_header.forEach(e => {
    e.addEventListener("click", () => {
        const current_element = e.parentElement.children[1];
        course_elemlist_sublist.forEach(e => {
            if(e != current_element)
                e.classList.remove("subtext-open");
        })
        current_element.classList.toggle("subtext-open");
    });
})

modal_callbuttons.forEach(e => {
    e.addEventListener("click", () => {
        document.body.style.overflow = "hidden";
        modal_window.style.display = "block";
        modal_window.style.opacity = 1;
        modal_window.style.top = window.pageYOffset + "px";

        if(e.classList.contains("formwindow")){
            modal_content_boxes.forEach(e => {
                if(e.classList.contains("modal__enroll")){
                    e.style.display = "block";
                }
                else{
                    e.style.display = "none";
                }
            })
        }
        else if(e.classList.contains("trailerwindow")){
            modal_content_boxes.forEach(e => {
                if(e.classList.contains("modal__enroll")){
                    e.style.display = "none";
                }
                else{
                    e.style.display = "block";
                }
            })
        }
    })
})

modal_window.addEventListener("click", () => {
    console.log(window);
})

window.onload = () => {
    modal_window.style.height = window.innerHeight + "px";
}

window.onresize = () => {
    modal_window.style.height = window.innerHeight + "px";
}

function enrollSubmit(event){
    event.preventDefault;
}

function quitPopup(){
    modal_window.style.display = "none";
    document.body.style.overflow = "visible";
}
