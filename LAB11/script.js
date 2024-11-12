(function ($) { 
    var counter = 1; 
    function createElement() { 
    var newElement = $("<div>", { 
    id: "element-" + counter, 
    class: "new-element", 
    text: "This is element " + counter,  }); 
    $("#elements-container").append(newElement);  counter++; 
    } 
    $(document).ready(function () { 
    $("#add-element-button").click(createElement);  }); 
   })(jQuery);
   