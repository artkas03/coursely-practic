const course_elemlist_header = document.querySelectorAll(".spoiler-header");
const course_elemlist_sublist = document.querySelectorAll(".spoiler-subtext");

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