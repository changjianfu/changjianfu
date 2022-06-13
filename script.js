var fontColor = '#ffffff';
        
$("#pub").hide();
$("#talk").hide();
$("#teach").hide();
$("#link").hide();
$("#aboutButton").click(function() {
    $("#pub").hide("slow");
    $("#talk").hide("slow");
    $("#teach").hide("slow");
    $("#link").hide("slow");
    $("#about").show("slow");
});
$("#pubButton").click(function() {
    $("#about").hide("slow");
    $("#talk").hide("slow");
    $("#teach").hide("slow");
    $("#link").hide("slow");
    $("#pub").show("slow");
});
$("#talkButton").click(function() {
    $("#about").hide("slow");
    $("#pub").hide("slow");
    $("#teach").hide("slow");
    $("#link").hide("slow");
    $("#talk").show("slow");
});
$("#teachButton").click(function() {
    $("#pub").hide("slow");
    $("#talk").hide("slow");
    $("#about").hide("slow");
    $("#link").hide("slow");
    $("#teach").show("slow");
});
$("#linkButton").click(function() {
    $("#pub").hide("slow");
    $("#talk").hide("slow");
    $("#teach").hide("slow");
    $("#about").hide("slow");
    $("#link").show("slow");
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
