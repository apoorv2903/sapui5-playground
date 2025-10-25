const btn = new sap.m.Button({
    id: 'idButton',
    text: "Button",
    press: onBtnPressHandler
})

btn.placeAt("content");

function onBtnPressHandler(){
    console.log("Button Pressed");
}