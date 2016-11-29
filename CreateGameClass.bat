@echo off

set /p ScrNam=Enter script name starting with upper case:
set /p ScrNamL=Enter object name (needs to be difrent:

echo class %ScrNam% extends Seed { > ts/%ScrNam%.ts
echo. >> ts/%ScrNam%.ts
echo 	constructor () { >> ts/%ScrNam%.ts
echo 		super('%ScrNamL%'); >> ts/%ScrNam%.ts
echo. 		>> ts/%ScrNam%.ts
echo 		this.Update = function () { >> ts/%ScrNam%.ts
echo. 			>> ts/%ScrNam%.ts
echo.			>> ts/%ScrNam%.ts
echo			return 0; >> ts/%ScrNam%.ts
echo 		} >> ts/%ScrNam%.ts
echo 	} >> ts/%ScrNam%.ts
echo } >> ts/%ScrNam%.ts
echo. >> ts/%ScrNam%.ts
echo Seed.addClass(new %ScrNam%); >> ts/%ScrNam%.ts

echo. >> ts/%ScrNam%.ts
echo /** >> ts/%ScrNam%.ts
echo * Add this script (%ScrNam%.js) to the html file >> ts/%ScrNam%.ts
echo */ >> ts/%ScrNam%.ts
