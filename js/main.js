


$(document).ready(function(){
    // $("#shortList").click(function(){
    //     // $("#shortList").css
    // });
    $("#totalContent").hide();
    $("#shortContent").show();
    $("div#nav-tail").hide("fast");



    $("div#nav").mouseleave(function(){
        $("div#nav-tail").hide("fast");
    });
    $("div#nav").mouseenter(function(){
        $("div#nav-tail").show("fast");
    });
  
    $("#shortList").click(function(){
        $("#totalContent").hide();
        $("#shortContent").show();
    });
    $("#totalList").click(function(){
        $("#totalContent").show();
        $("#shortContent").hide();
    });
    



});

