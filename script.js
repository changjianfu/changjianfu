var fontColor = '#ffffff';
        
$("#pub").hide();
$("#talk").hide();
$("#award").hide();
$("#contact").hide();
$("#aboutButton").click(function() {
    $("#pub").hide("slow");
    $("#talk").hide("slow");
    $("#award").hide("slow");
    $("#contact").hide("slow");
    $("#about").show("slow");
});
$("#pubButton").click(function() {
    $("#about").hide("slow");
    $("#talk").hide("slow");
    $("#award").hide("slow");
    $("#contact").hide("slow");
    $("#pub").show("slow");
});
$("#talkButton").click(function() {
    $("#about").hide("slow");
    $("#pub").hide("slow");
    $("#award").hide("slow");
    $("#contact").hide("slow");
    $("#talk").show("slow");
});
$("#awardButton").click(function() {
    $("#pub").hide("slow");
    $("#talk").hide("slow");
    $("#about").hide("slow");
    $("#contact").hide("slow");
    $("#award").show("slow");
});
$("#contactButton").click(function() {
    $("#pub").hide("slow");
    $("#talk").hide("slow");
    $("#award").hide("slow");
    $("#about").hide("slow");
    $("#contact").show("slow");
});
$("div#menu > ul li").mouseover(function() {
    $(this).animate({
        color: fontColor,
        margin: '0 0 0 20px'
     }, 200)
}).mouseout(function() {
    $(this).animate({
        color: '#999',
        margin: '0'
     }, 200)
});
$("h1").mouseover(function() {
    $(this).animate({
        color: '#1C8FE1'
     }, 200)
}).mouseout(function() {
    $(this).animate({
        color: fontColor
     }, 200)
});
