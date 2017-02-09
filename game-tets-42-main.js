// ============================
// Разработчик: apelserg ; https://github.com/apelserg/
// Лицензия: WTFPL
// ============================

"use strict";

// Глобальные переменные
//

var APELSERG = {};

APELSERG.MAIN = {};
APELSERG.MODEL = {};
APELSERG.CANVA = {};
APELSERG.UI = {};
APELSERG.LANG = {};
APELSERG.CONFIG = {};
APELSERG.CONFIG.SET = {};
APELSERG.CONFIG.KEY = {};
APELSERG.CONFIG.PROC = {};
APELSERG.CONFIG.RESULT = {};
APELSERG.ROBOT = {};

//===
// старт программы (начальная прорисовка)
//===
APELSERG.MAIN.OnLoad = function (initFirst) {

    // определить место загрузки
    //
    window.location.protocol == "file:" ? APELSERG.CONFIG.PROC.LoadFromWeb = false : APELSERG.CONFIG.PROC.LoadFromWeb = true;

    // инициализация данных из localeStorage
    //
    APELSERG.CONFIG.GetConfigOnLoad();
    APELSERG.CONFIG.GetResultOnLoad();

    // звук
    //
    try {
        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        APELSERG.CONFIG.PROC.AudioCtx = new window.AudioContext();
    }
    catch (e) {
        APELSERG.CONFIG.PROC.AudioCtx = null;
    }

    // канва
    //
    APELSERG.CONFIG.PROC.CanvaID = document.getElementById('APELSERG_CanvasTets');
    APELSERG.CONFIG.PROC.Ctx = APELSERG.CONFIG.PROC.CanvaID.getContext('2d');
    APELSERG.CONFIG.PROC.CanvaID.width = APELSERG.CONFIG.SET.InfoNextWidth + (2 * APELSERG.CONFIG.SET.WellColumn * APELSERG.CONFIG.SET.CellSize) + (4 * APELSERG.CONFIG.SET.WellBorderWidth);
    APELSERG.CONFIG.PROC.CanvaID.height = APELSERG.CONFIG.SET.InfoLineHeight + (APELSERG.CONFIG.SET.WellRow * APELSERG.CONFIG.SET.CellSize) + (3 * APELSERG.CONFIG.SET.WellBorderWidth);
    APELSERG.CONFIG.PROC.CanvaID.style.cursor = "crosshair"; //"none"; //"crosshair"; //"move";

    // инициализация базовых объектов
    //
    APELSERG.CONFIG.PROC.NextBlock = APELSERG.MODEL.GetBlock();
    APELSERG.CONFIG.PROC.Wells[0] = new APELSERG.MODEL.Well(0);
    APELSERG.CONFIG.PROC.Wells[1] = new APELSERG.MODEL.Well(1);
    APELSERG.MODEL.SetWellOnStart(0);
    APELSERG.MODEL.SetWellOnStart(1);

    APELSERG.MAIN.Stop(); // отрисовка наименований кнопок

    // только для начальной инициализации
    //
    if (initFirst) {
        APELSERG.MAIN.Animation(); // пуск анимации

        //===
        // Движения мыши
        //===
        APELSERG.CONFIG.PROC.CanvaID.addEventListener('mousemove', function (event) { APELSERG.MAIN.MouseOnMove(event); });

        //===
        // Клик мыши
        //===
        APELSERG.CONFIG.PROC.CanvaID.addEventListener('click', function (event) { APELSERG.MAIN.MouseOnClick(event); });

        //===
        // Двойной клик мыши
        //===
        APELSERG.CONFIG.PROC.CanvaID.addEventListener('dblclick', function (event) {
            if (APELSERG.CONFIG.PROC.GameStop) APELSERG.MAIN.Start();
            if (APELSERG.CONFIG.PROC.GamePause) APELSERG.MAIN.Pause();
        });
    }
}

//===
// Move мыши
//===
APELSERG.MAIN.MouseOnMove = function (event) {

    for (var wellNum = 0; wellNum < 2; wellNum++) {

        var device = APELSERG.CONFIG.PROC.Wells[wellNum].Device;

        if (device == 3 || device == 4) {

            var mouseX = event.clientX - APELSERG.CONFIG.PROC.CanvaID.offsetLeft;
            var mouseY = event.clientY - APELSERG.CONFIG.PROC.CanvaID.offsetTop;

            var pan = APELSERG.CONFIG.PROC.Wells[wellNum].MousePanel;

            // выделить активную кнопку
            //
            pan.SelectLeft = false;
            pan.SelectRight = false;
            pan.SelectRotateLeft = false;
            pan.SelectRotateRight = false;
            pan.SelectSpace = false;

            if (pan.LeftX < mouseX && pan.LeftX + pan.Width > mouseX && pan.LeftY < mouseY && pan.LeftY + pan.Height > mouseY) {

                pan.SelectLeft = true;

                if (!pan.GoProg && device == 4) {
                    APELSERG.MODEL.BlockShift(wellNum, 'LEFT');
                    pan.CntLeft = APELSERG.CONFIG.SET.RedCnt;
                    pan.GoProg = true;
                }
                return;
            }
            if (pan.RightX < mouseX && pan.RightX + pan.Width > mouseX && pan.RightY < mouseY && pan.RightY + pan.Height > mouseY) {

                pan.SelectRight = true;

                if (!pan.GoProg && device == 4) {
                    APELSERG.MODEL.BlockShift(wellNum, 'RIGHT');
                    pan.CntRight = APELSERG.CONFIG.SET.RedCnt;
                    pan.GoProg = true;
                }
                return;
            }
            if (pan.RotateLeftX < mouseX && pan.RotateLeftX + pan.Width > mouseX && pan.RotateLeftY < mouseY && pan.RotateLeftY + pan.Height > mouseY) {

                pan.SelectRotateLeft = true;

                if (!pan.GoProg && device == 4) {
                    APELSERG.MODEL.BlockShift(wellNum, 'ROTATE_LEFT');
                    pan.CntRotateLeft = APELSERG.CONFIG.SET.RedCnt;
                    pan.GoProg = true;
                }
                return;
            }
            if (pan.RotateRightX < mouseX && pan.RotateRightX + pan.Width > mouseX && pan.RotateRightY < mouseY && pan.RotateRightY + pan.Height > mouseY) {

                pan.SelectRotateRight = true;

                if (!pan.GoProg && device == 4) {
                    APELSERG.MODEL.BlockShift(wellNum, 'ROTATE_RIGHT');
                    pan.CntRotateRight = APELSERG.CONFIG.SET.RedCnt;
                    pan.GoProg = true;
                }
                return;
            }
            if (pan.SpaceX < mouseX && pan.SpaceX + (2 * pan.Width + pan.Gap) > mouseX && pan.SpaceY < mouseY && pan.SpaceY + pan.Height > mouseY) {

                if (!APELSERG.CONFIG.PROC.GameStop && !APELSERG.CONFIG.PROC.GamePause) {

                    pan.SelectSpace = true;

                    if (!pan.GoProg && device == 4) {
                        APELSERG.MODEL.BlockShift(wellNum, 'SPACE');
                        pan.CntSpace = APELSERG.CONFIG.SET.RedCnt;
                        pan.GoProg = true;
                    }
                }
                return;
            }

            // сбросить флаг для следующей команды
            //
            pan.GoProg = false;
        }
    }
}

//===
// Click мыши
//===
APELSERG.MAIN.MouseOnClick = function (event) {

    if (!APELSERG.CONFIG.PROC.GamePause) {

        for (var wellNum = 0; wellNum < 2; wellNum++) {

            var device = APELSERG.CONFIG.PROC.Wells[wellNum].Device;

            if (device == 3 || device == 4) {

                var mouseX = event.clientX - APELSERG.CONFIG.PROC.CanvaID.offsetLeft;
                var mouseY = event.clientY - APELSERG.CONFIG.PROC.CanvaID.offsetTop;

                var pan = APELSERG.CONFIG.PROC.Wells[wellNum].MousePanel;

                if (pan.LeftX < mouseX && pan.LeftX + pan.Width > mouseX && pan.LeftY < mouseY && pan.LeftY + pan.Height > mouseY) {

                    APELSERG.MODEL.BlockShift(wellNum, 'LEFT');
                    pan.CntLeft = APELSERG.CONFIG.SET.RedCnt;
                    return;
                }

                if (pan.RightX < mouseX && pan.RightX + pan.Width > mouseX && pan.RightY < mouseY && pan.RightY + pan.Height > mouseY) {

                    APELSERG.MODEL.BlockShift(wellNum, 'RIGHT');
                    pan.CntRight = APELSERG.CONFIG.SET.RedCnt;
                    return;
                }

                if (pan.RotateLeftX < mouseX && pan.RotateLeftX + pan.Width > mouseX && pan.RotateLeftY < mouseY && pan.RotateLeftY + pan.Height > mouseY) {

                    APELSERG.MODEL.BlockShift(wellNum, 'ROTATE_LEFT');
                    pan.CntRotateLeft = APELSERG.CONFIG.SET.RedCnt;
                    return;
                }

                if (pan.RotateRightX < mouseX && pan.RotateRightX + pan.Width > mouseX && pan.RotateRightY < mouseY && pan.RotateRightY + pan.Height > mouseY) {

                    APELSERG.MODEL.BlockShift(wellNum, 'ROTATE_RIGHT');
                    pan.CntRotateRight = APELSERG.CONFIG.SET.RedCnt;
                    return;
                }

                if (pan.SpaceX < mouseX && pan.SpaceX + (2 * pan.Width + pan.Gap) > mouseX && pan.SpaceY < mouseY && pan.SpaceY + pan.Height > mouseY) {

                    if (!APELSERG.CONFIG.PROC.GameStop && !APELSERG.CONFIG.PROC.GamePause) {
                        APELSERG.MODEL.BlockShift(wellNum, 'SPACE');
                        pan.CntSpace = APELSERG.CONFIG.SET.RedCnt;
                        return;
                    }
                }
            }
        }
    }
}

//===
// Клонировать объект
//===
APELSERG.MAIN.CloneObj = function (object) {
    return JSON.parse(JSON.stringify(object));
}

//===
// Обработка нажатий клавиш
//===
window.addEventListener('keydown', function (event) {

    // предотвратить срабатывание при "всплытии" клика
    //
    document.getElementById("APELSERG_InputSettings").blur();
    document.getElementById("APELSERG_InputPoints").blur();
    document.getElementById("APELSERG_InputHelp").blur();
    document.getElementById("APELSERG_InputStartStop").blur();

    // пробел [SPACE]
    //
    if (event.keyCode == APELSERG.CONFIG.KEY.Space && APELSERG.CONFIG.PROC.GameStop) {
        APELSERG.MAIN.Start();
        return;
    }
    if (event.keyCode == APELSERG.CONFIG.KEY.Space && APELSERG.CONFIG.PROC.GamePause) {
        APELSERG.MAIN.Pause();
        return;
    }

    // пауза [P]
    //
    if (event.keyCode == APELSERG.CONFIG.KEY.Pause) {
        APELSERG.MAIN.Pause();
        return;
    }

    // сетка [N]
    //
    if (event.keyCode == APELSERG.CONFIG.KEY.ShowNet) {
        APELSERG.CONFIG.SET.ShowNet = !APELSERG.CONFIG.SET.ShowNet;
        return;
    }

    // следующий блок [B]
    //
    if (event.keyCode == APELSERG.CONFIG.KEY.ShowNextBlock) {
        APELSERG.CONFIG.SET.ShowNextBlock = !APELSERG.CONFIG.SET.ShowNextBlock;
        return;
    }

    // результаты [I]
    //
    if (event.keyCode == APELSERG.CONFIG.KEY.ShowResult) {
        APELSERG.CONFIG.SET.ShowResult = !APELSERG.CONFIG.SET.ShowResult;
        return;
    }

    // звук [S]
    //
    if (event.keyCode == APELSERG.CONFIG.KEY.Sound) {
        APELSERG.CONFIG.SET.OnSound = !APELSERG.CONFIG.SET.OnSound;
        return;
    }

    if (!APELSERG.CONFIG.PROC.GamePause) {
        for (var wellNum = 0; wellNum < 2; wellNum++) {
            if (APELSERG.CONFIG.PROC.Wells[wellNum].Device == 1) {

                // пробел
                //
                if (event.keyCode == APELSERG.CONFIG.KEY.Space) {
                    APELSERG.MODEL.BlockShift(wellNum, 'SPACE');
                    return;
                }

                // стрелки
                //
                if (event.keyCode == APELSERG.CONFIG.KEY.Left) {
                    APELSERG.MODEL.BlockShift(wellNum, 'LEFT');
                    return;
                }
                if (event.keyCode == APELSERG.CONFIG.KEY.Right) {
                    APELSERG.MODEL.BlockShift(wellNum, 'RIGHT');
                    return;
                }
                if (event.keyCode == APELSERG.CONFIG.KEY.RotateLeft) {
                    APELSERG.MODEL.BlockShift(wellNum, 'ROTATE_LEFT');
                    return;
                }
                if (event.keyCode == APELSERG.CONFIG.KEY.RotateRight) {
                    APELSERG.MODEL.BlockShift(wellNum, 'ROTATE_RIGHT');
                    return;
                }
            }
        }
    }
});

//===
// Старт
//===
APELSERG.MAIN.Start = function () {

    // старт
    //
    if (APELSERG.CONFIG.PROC.GameStop) {

        // закрыть окна (если открыты - должны закрыться)
        //
        if (APELSERG.CONFIG.PROC.UiSettings) APELSERG.UI.ShowSettings();
        if (APELSERG.CONFIG.PROC.UiPoints) APELSERG.UI.ShowPoints();
        if (APELSERG.CONFIG.PROC.UiHelp) APELSERG.UI.ShowHelp();

        // кнопки
        //
        document.getElementById('APELSERG_InputSettings').value = '-';
        document.getElementById('APELSERG_InputPoints').value = '-';
        document.getElementById('APELSERG_InputHelp').value = '-';
        document.getElementById('APELSERG_InputStartStop').value = APELSERG.LANG.GetText('STOP');
        document.getElementById("APELSERG_InputStartStop").blur(); // здесь надо

        // новая игра - инициализация
        //
        APELSERG.CONFIG.PROC.GameStop = false;
        APELSERG.CONFIG.PROC.GamePause = false;

        APELSERG.CONFIG.PROC.SpeedSelector = APELSERG.CONFIG.SET.SpeedSelector;
        APELSERG.CONFIG.PROC.StartCnt = APELSERG.CONFIG.SET.StartCnt;

        APELSERG.CONFIG.PROC.NextBlock = APELSERG.MODEL.GetBlock();
        APELSERG.MODEL.SetWellOnStart(0);
        APELSERG.MODEL.SetWellOnStart(1);

        window.clearTimeout(APELSERG.CONFIG.PROC.TimeoutID); // отмена таймера (ещё раз, на всякий пожарный)
        APELSERG.MAIN.WorkTimer(); // запуск рабочего цикла

    }
    else {
        // пауза
        //
        if (APELSERG.CONFIG.PROC.GamePause) {
            APELSERG.MAIN.Pause();
        }
    }
}

//===
// Стоп
//===
APELSERG.MAIN.Stop = function () {

    document.getElementById('APELSERG_InputSettings').value = APELSERG.LANG.GetText('CONFIG');
    document.getElementById('APELSERG_InputPoints').value = APELSERG.LANG.GetText('SCORE');
    document.getElementById('APELSERG_InputHelp').value = APELSERG.LANG.GetText('HELP');
    document.getElementById('APELSERG_InputStartStop').value = APELSERG.LANG.GetText('START');

    APELSERG.CONFIG.PROC.GameStop = true;
    window.clearTimeout(APELSERG.CONFIG.PROC.TimeoutID); // отмена таймера
}

//===
// Старт/Стоп/Продолжить (для кнопки)
//===
APELSERG.MAIN.StartStopContinue = function () {
    if (APELSERG.CONFIG.PROC.GameStop) {
        APELSERG.MAIN.Start();
    }
    else {
        if (APELSERG.CONFIG.PROC.GamePause) {
            APELSERG.MAIN.Pause();
        }
        else {
            APELSERG.MAIN.Stop();
        }
    }
}

//===
// Пауза
//===
APELSERG.MAIN.Pause = function () {
    if (!APELSERG.CONFIG.PROC.GameStop) {
        // снять паузу
        //
        if (APELSERG.CONFIG.PROC.GamePause) {
            document.getElementById('APELSERG_InputStartStop').value = APELSERG.LANG.GetText('STOP');
            APELSERG.CONFIG.PROC.GamePause = false;
            APELSERG.MAIN.WorkTimer(); // запуск рабочего цикла
        }
        else {
            // встать на паузу
            //
            document.getElementById('APELSERG_InputStartStop').value = APELSERG.LANG.GetText('CONTINUE');
            APELSERG.CONFIG.PROC.GamePause = true;
            window.clearTimeout(APELSERG.CONFIG.PROC.TimeoutID); // отмена срабатывания
        }
    }
}

//===
// Рабочий цикл таймера
//===
APELSERG.MAIN.Animation = function () {

    if (!APELSERG.CONFIG.PROC.GameStop && !APELSERG.CONFIG.PROC.GamePause) {

        /*
        if (APELSERG.CONFIG.PROC.StartCnt == 0) {
            for (var wellNum = 0; wellNum < 2; wellNum++) {
                if (APELSERG.CONFIG.PROC.Wells[wellNum].Device > 9) {
                    APELSERG.ROBOT.CompGame(wellNum);
                }
            }
        }
        */
    }
    
    // звук (здесь, чтобы при остановке звук смог прекратиться)
    //
    APELSERG.MODEL.Sound(0);
    APELSERG.MODEL.Sound(1);

    // отрисовка (при паузе и остановке цикл отрисовки не прекращается)
    //
    APELSERG.CANVA.WellRewrite();

    // следующий цикл
    //
    window.requestAnimationFrame(function () {
        APELSERG.MAIN.Animation();
    });
}

//===
// Таймер с функцией callback
//===
APELSERG.MAIN.WorkTimer = function () {

    if (!APELSERG.CONFIG.PROC.GameStop && !APELSERG.CONFIG.PROC.GamePause) {

        if (APELSERG.CONFIG.PROC.StartCnt == 0) {
            for (var wellNum = 0; wellNum < 2; wellNum++) {
                if (APELSERG.CONFIG.PROC.Wells[wellNum].Device != 0) {
                    APELSERG.MODEL.BlockShift(wellNum, 'DOWN'); // !!! окончание игры срабатывает здесь - устанавливается флаг при получении нового блока
                }
            }
        }

        APELSERG.CONFIG.PROC.TimeoutID = window.setTimeout(function () {
            APELSERG.MAIN.WorkTimer();
        }, APELSERG.CONFIG.SET.Speed[APELSERG.CONFIG.PROC.SpeedSelector]);
    }
}
