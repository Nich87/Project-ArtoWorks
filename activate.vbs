Set WshShell = WScript.CreateObject("WScript.Shell")
Dim Input
Input = InputBox("óvëfêî")
WScript.Sleep 3000
If IsNumeric(Input) then
For a = 0 To Input
WshShell.SendKeys "{F2}"
WshShell.SendKeys "{ENTER}"
Next
Else
End If
