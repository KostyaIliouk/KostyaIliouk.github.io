(function(){
    "use strict";

    window.onresize = () => {
        fixFooter();
    };

    window.onload = () => {
        fixFooter();
    };

    function fixFooter() {
        let footerEl = document.getElementById("footer");
        let viewHeight = window.innerHeight;
        let footerHeight = footerEl.scrollHeight;
        let compare = viewHeight - footerHeight;
        let footerTop =  footerEl.getBoundingClientRect().top;
        if ((compare > footerTop)){
            footerEl.style.marginTop = (compare - footerTop).toString() + "px";
        }
    }
    
})();