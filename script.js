document.addEventListener("DOMContentLoaded", function() {

    function onScroll() {
        document.querySelectorAll("#timeline .event").forEach(function(elem) {
            let elemRect = elem.getBoundingClientRect();
    
            let scrollPos = window.scrollY / (document.body.getBoundingClientRect().height - window.innerHeight);
            scrollPos = Math.min(Math.max(scrollPos, 0), 1);
            let focusHeight = window.innerHeight * scrollPos;
    
            if (focusHeight >= Math.floor(elemRect.top) && focusHeight <= Math.ceil(elemRect.bottom)) {
                elem.classList.add("focused");
            } else {
                elem.classList.remove("focused");
            }
        });
    }
    
    onScroll();
    document.addEventListener("scroll", onScroll);
    
})