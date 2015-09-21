@ECHO OFF &SETLOCAL ENABLEDELAYEDEXPANSION
REM This script should automatically
REM increase the version number.
REM http://stackoverflow.com/a/18095483
SET "HFile=swearify.user.js"
SET "search=// @version"

FOR /f %%a IN ('^<"%HFile%" find /c /v ""') DO SET /a lines=%%a
< "%HFile%" (
FOR /l %%a IN (1,1,%lines%) DO (
     SET "line="
     SET /p "line="
     IF NOT "!line!"=="" IF NOT "!line:%search%=!"=="!line!" (
          SET /a replace=!line:%search%=!+1
          SET "line=%search% !replace!"
     )
     ECHO(!line!
))>"%HFile%.new"
MOVE /y "%HFile%.new" "%HFile%"
TYPE "%HFile%"
