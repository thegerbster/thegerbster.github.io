@ECHO off
REM get around cmd block

SET /a "x = 0"
:while1
	if %x% leq 5 (
		%Input%
		SET /P Input=%cd%\
		goto :while1
	)