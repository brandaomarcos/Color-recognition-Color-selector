function throwRight () {
    basic.pause(1000)
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, 90)
    basic.pause(1000)
    startPosition()
}
function throwLeft () {
    basic.pause(1000)
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, 0)
    basic.pause(1000)
    startPosition()
}
input.onButtonPressed(Button.A, function () {
    mode = 0
    basic.showNumber(mode)
})
function colorSeparator () {
    startPosition()
    if (Module_Colour.GetRGBValue(Module_Colour.enGetRGB.GetValueB) > Module_Colour.GetRGBValue(Module_Colour.enGetRGB.GetValueR) && Module_Colour.GetRGBValue(Module_Colour.enGetRGB.GetValueB) > Module_Colour.GetRGBValue(Module_Colour.enGetRGB.GetValueG)) {
        ModuleWorld_PWM.RGB(Module_Colour.GetRGBValue(Module_Colour.enGetRGB.GetValueR), Module_Colour.GetRGBValue(Module_Colour.enGetRGB.GetValueG), Module_Colour.GetRGBValue(Module_Colour.enGetRGB.GetValueB))
        throwRight()
    } else if (Module_Colour.GetRGBValue(Module_Colour.enGetRGB.GetValueG) > Module_Colour.GetRGBValue(Module_Colour.enGetRGB.GetValueR) && Module_Colour.GetRGBValue(Module_Colour.enGetRGB.GetValueG) > Module_Colour.GetRGBValue(Module_Colour.enGetRGB.GetValueB)) {
        ModuleWorld_PWM.RGB(Module_Colour.GetRGBValue(Module_Colour.enGetRGB.GetValueR), Module_Colour.GetRGBValue(Module_Colour.enGetRGB.GetValueG), Module_Colour.GetRGBValue(Module_Colour.enGetRGB.GetValueB))
        throwLeft()
    }
}
input.onButtonPressed(Button.B, function () {
    mode = 1
    basic.showNumber(mode)
})
function startPosition () {
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, 45)
    ModuleWorld_PWM.RGB(0, 0, 0)
}
function colorRecognition () {
    ModuleWorld_PWM.RGB(Module_Colour.GetRGBValue(Module_Colour.enGetRGB.GetValueR), Module_Colour.GetRGBValue(Module_Colour.enGetRGB.GetValueG), Module_Colour.GetRGBValue(Module_Colour.enGetRGB.GetValueB))
}
let mode = 0
startPosition()
basic.forever(function () {
    if (mode == 0) {
        colorSeparator()
    }
})
basic.forever(function () {
    if (mode == 1) {
        colorRecognition()
    }
})
