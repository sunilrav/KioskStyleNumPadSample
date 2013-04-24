function registerNumpad(textbox) {
    $("#numpad1").click({ val: "1", textboxname: textbox }, display);
    $("#numpad2").click({ val: "2", textboxname: textbox }, display);
    $("#numpad3").click({ val: "3", textboxname: textbox }, display);
    $("#numpad4").click({ val: "4", textboxname: textbox }, display);
    $("#numpad5").click({ val: "5", textboxname: textbox }, display);
    $("#numpad6").click({ val: "6", textboxname: textbox }, display);
    $("#numpad7").click({ val: "7", textboxname: textbox }, display);
    $("#numpad8").click({ val: "8", textboxname: textbox }, display);
    $("#numpad9").click({ val: "9", textboxname: textbox }, display);
    $("#numpad0").click({ val: "0", textboxname: textbox }, display);
}

function display(event) {
    var presentNum = $("#" + event.data.textboxname).val();
    var appendedNum = presentNum + event.data.val
    $("#" + event.data.textboxname).val(appendedNum)
}
