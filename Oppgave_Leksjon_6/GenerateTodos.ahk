#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  ; Enable warnings to assist with detecting common errors.
SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.
!p::Pause ; press Alt+p to pause/unpause

; Script that creates todos in the browser. The hotkey is CTRL + F8. Used for testing.


^F8:: 
numberOFTodods := 20

global variable := 1
numberOFTodods := numberOFTodods - 3 

CreateTodo(variable, 3)
CreateTodo(variable, 5)
CreateTodo(variable, 7)
Loop, %numberOFTodods% {
    CreateTodo(variable, 9)
}

CreateTodo(variable, numberOfTabs) {
    Sleep, 25
    OpenModal()
    Sleep, 25
    SendTabs(numberOfTabs)
    Sleep, 25
    PopulateFields(variable)
    Send {Enter}
}

SendTabs(numberOfTabs) {
    Loop, %numberOfTabs% {
        Send {Tab}
    }
}

PopulateFields(variablet) {
    Send %variablet%
    Send {Tab}
    Sleep, 50
    Send %variablet%
    Send {Tab}
    Sleep, 50
    Send %variablet%
    Sleep, 50
    variable := variablet + 1
}

OpenModal() {
    send {Tab}
    send {Enter}
}
