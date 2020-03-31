var scheduleShown = false;
$(document).ready( function() {            
    $("#load_schedule").on("click", function($e) {
        $e.preventDefault();
        if(!scheduleShown){
            $("#schedule").load("schedule.html", function( response, status, xhr ) {
                var coll = document.getElementsByClassName("collapsible");
                var i;

                for (i = 0; i < coll.length; i++) {
                coll[i].addEventListener("click", function() {
                    this.classList.toggle("active");
                    var content = this.nextElementSibling;
                    if (content.style.maxHeight){
                    content.style.maxHeight = null;
                    } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                    } 
                });
                }
            });

            scheduleShown = true;
        } else {
            var node = document.getElementById("schedule");
            while (node.hasChildNodes()) {
                node.removeChild(node.lastChild);
            }
            scheduleShown = false;
        }
    });
});
