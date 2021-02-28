function playCode (text: string) {
    for (let index = 0; index <= text.length; index++) {
        chr = text.charAt(index)
        if (chr == ".") {
            music.playTone(523, music.beat(BeatFraction.Eighth))
        }
        if (chr == "-") {
            music.playTone(131, music.beat(BeatFraction.Half))
        }
        basic.pause(100)
    }
}
input.onButtonPressed(Button.A, function () {
    basic.showString("" + (code))
    playCode(code)
    basic.showString("" + (alphabet[morse.indexOf(code)]))
    Cword = "" + Cword + code + "  "
    Word = "" + Word + alphabet[morse.indexOf(code)]
    code = ""
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + (Cword))
    basic.pause(100)
    basic.showString("" + (Word))
    radio.sendString("" + (Word))
    Cword = ""
    Word = ""
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onGesture(Gesture.Shake, function () {
    Word = ""
    Cword = ""
    code = ""
})
let timed = 0
let chr = ""
let alphabet: string[] = []
let morse: string[] = []
let code = ""
let Cword = ""
let Word = ""
radio.setGroup(1)
Word = ""
Cword = ""
code = ""
morse = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", ".----", "..---", "...--", "....-", ".....", "-....", "--...", "---..", "----.", "-----"]
alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
basic.forever(function () {
    timed = 0
    while (input.buttonIsPressed(Button.B)) {
        timed += 1
        basic.pause(25)
    }
    if (timed < 33 && timed > 0) {
        basic.showString(".")
        music.playTone(523, music.beat(BeatFraction.Eighth))
        code = "" + code + "."
    }
    if (timed > 33 && timed > 0) {
        basic.showString("-")
        code = "" + code + "-"
        music.playTone(131, music.beat(BeatFraction.Half))
    }
    basic.pause(10)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
