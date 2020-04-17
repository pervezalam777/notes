# Shell Scripts 

## Remove spaces from current directory

```bash
@ECHO OFF
SETLOCAL EnableDelayedExpansion

FOR /f "tokens=*" %%a IN ('DIR /s /b /ad') DO (
SET Var=%%~na
SET Var=!Var: =!
REN "%%a" "!Var!"
)  
```