// ============================
// Разработчик: apelserg ; https://github.com/apelserg/
// Лицензия: WTFPL
// ============================

"use strict";

APELSERG.CONFIG.SET.Version = "0.1.0"
APELSERG.CONFIG.SET.LocalStorageName = "APELSERG-Tets42";

APELSERG.CONFIG.SET.CellSize = 20; // размер базового объекта (кубика) (в пикселях)
APELSERG.CONFIG.SET.WellBorderWidth = 10; // ширина бордюра (в пикселях)
APELSERG.CONFIG.SET.InfoLineHeight = 2 * APELSERG.CONFIG.SET.CellSize; // высота инфо (в пикселях)
APELSERG.CONFIG.SET.InfoNextWidth = 7 * APELSERG.CONFIG.SET.CellSize; // ширина инфо (в пикселях)

APELSERG.CONFIG.SET.WellColumn = 5; // 5, 10, 15 -- ширина колодца (в базовых объектах)
APELSERG.CONFIG.SET.WellRow = 20; // 15, 20, 25 -- глубина колодца (в базовых объектах)

APELSERG.CONFIG.SET.StartCnt = 50; // задержка старта (100 ~ 1.3 секунды)
APELSERG.CONFIG.SET.RedCnt = 20; // число циклов красной/белой кнопки
APELSERG.CONFIG.SET.ErrorCnt = 100; // число циклов сообщения об ошибке
APELSERG.CONFIG.SET.CompCnt = 20; // число циклов между игрой компа

APELSERG.CONFIG.SET.AudioCnt = 3; // число циклов звука
APELSERG.CONFIG.SET.AudioToneDown = 200; // частота герцы
APELSERG.CONFIG.SET.AudioToneRow = 500;
APELSERG.CONFIG.SET.AudioToneEnd = 1000;

APELSERG.CONFIG.SET.Speed = [2000, 1800, 1600, 1400, 1200, 1000, 800, 600, 400, 200];
APELSERG.CONFIG.SET.SpeedSelector = 6; // 0 - 9
APELSERG.CONFIG.SET.Skill = 1; // 1, 2, 3

APELSERG.CONFIG.SET.PointStep = 300; // количество очков для перехода на следующий уровень

APELSERG.CONFIG.SET.UserName = ["Left", "Right"]; // Только для обновления - далее значение хранится в объекте
APELSERG.CONFIG.SET.UserDevice = [3, 1]; // 0 - нет, 1 - клава, 3 - мышь, 4 - мышь-2, 10 - комп, 11 - комп(эксперт)

APELSERG.CONFIG.SET.Lang = "EN"; // RU

APELSERG.CONFIG.SET.ShowNextBlock = true; // показывать следующий блок (срабатывает по <B>)
APELSERG.CONFIG.SET.ShowNet = false; // показывать сетку (срабатывает по <N>)
APELSERG.CONFIG.SET.ShowResult = true; // показывать очки (срабатывает по <I>)
APELSERG.CONFIG.SET.OnSound = false; // вкл/выкл звук (срабатывает по <S>)

APELSERG.CONFIG.KEY.Space = 32;
APELSERG.CONFIG.KEY.Pause = 80;
APELSERG.CONFIG.KEY.Sound = 83;

APELSERG.CONFIG.KEY.ShowNextBlock = 66;
APELSERG.CONFIG.KEY.ShowNet = 78;
APELSERG.CONFIG.KEY.ShowResult = 73;

APELSERG.CONFIG.KEY.Left = 37;
APELSERG.CONFIG.KEY.Right = 39;
APELSERG.CONFIG.KEY.RotateLeft = 38;
APELSERG.CONFIG.KEY.RotateRight = 40;

APELSERG.CONFIG.PROC.Wells = [{}, {}];

APELSERG.CONFIG.PROC.NextBlock;

APELSERG.CONFIG.PROC.GameStop = true;
APELSERG.CONFIG.PROC.GamePause = false;

APELSERG.CONFIG.PROC.SpeedSelector = 0;

APELSERG.CONFIG.PROC.StartCnt = 0;  // в начале партии устанавливается = SET.StartCnt
APELSERG.CONFIG.PROC.CompCnt = 0;
APELSERG.CONFIG.PROC.ErrorCnt = 0; // при ошибке устанавливается SET.ErrorCnt
APELSERG.CONFIG.PROC.ErrorMsg = ""; // устанавливается при ошибке

APELSERG.CONFIG.PROC.UiSettings = false; // для синхронизации интерфейса и режима игры
APELSERG.CONFIG.PROC.UiPoints = false; // для синхронизации интерфейса и режима игры
APELSERG.CONFIG.PROC.UiHelp = false; // для синхронизации интерфейса и режима игры

APELSERG.CONFIG.PROC.TimeoutID = 0; // для управления таймером
APELSERG.CONFIG.PROC.LoadFromWeb = false; // HTML загружен с сети или локального диска (надо для сохранения результатов и конфигурации)

APELSERG.CONFIG.PROC.CanvaID;
APELSERG.CONFIG.PROC.Ctx;

APELSERG.CONFIG.PROC.AudioCtx = null;
APELSERG.CONFIG.PROC.AudioOsc;

APELSERG.CONFIG.RESULT.Best = []; // 10 лучших
APELSERG.CONFIG.RESULT.Last = []; // 20 последних парных

//===
// Получить имя хранения конфигурации
//===
APELSERG.CONFIG.GetLocalStorageConfigName = function () {
    return APELSERG.CONFIG.SET.LocalStorageName + "-Config-" + APELSERG.CONFIG.SET.Version;
}

//===
// Получить имя хранения результатов
//===
APELSERG.CONFIG.GetLocalStorageResultName = function () {
    return APELSERG.CONFIG.SET.LocalStorageName + "-Results";
}

//===
// Получить результаты
//===
APELSERG.CONFIG.GetResultOnLoad = function () {

    if (APELSERG.CONFIG.PROC.LoadFromWeb) {

        var resultName = APELSERG.CONFIG.GetLocalStorageResultName();

        // восстановить результаты из хранилища
        //
        if (localStorage[resultName] !== undefined) {

            APELSERG.CONFIG.RESULT = JSON.parse(localStorage[resultName]);
        }
    }
}

//===
// Получить конфигурацию
//===
APELSERG.CONFIG.GetConfigOnLoad = function () {

    if (APELSERG.CONFIG.PROC.LoadFromWeb) {

        var configName = APELSERG.CONFIG.GetLocalStorageConfigName();

        // восстановить конфигурацию из хранилища
        //
        if (localStorage[configName] !== undefined) {
            APELSERG.CONFIG.SET = JSON.parse(localStorage[configName]);
        }
    }
}

//===
// Сохранить результат
//===
APELSERG.CONFIG.SetResult = function () {

    var dateCurrent = new Date();
    var dateCurrentStr = dateCurrent.toJSON().substring(0, 10);

    // 20 последних результатов
    //
    var resultLast = {};
    resultLast.Date = dateCurrentStr;

    if (APELSERG.CONFIG.PROC.Wells[0].Device > 0 && APELSERG.CONFIG.PROC.Wells[1].Device > 0) {

        if (APELSERG.CONFIG.PROC.Wells[0].Points > APELSERG.CONFIG.PROC.Wells[1].Points) {

            resultLast.NameWin = APELSERG.CONFIG.PROC.Wells[0].Name;
            resultLast.PointsWin = APELSERG.CONFIG.PROC.Wells[0].Points;
            resultLast.NameLost = APELSERG.CONFIG.PROC.Wells[1].Name;;
            resultLast.PointsLost = APELSERG.CONFIG.PROC.Wells[1].Points;
        }
        else {
            resultLast.NameWin = APELSERG.CONFIG.PROC.Wells[1].Name;
            resultLast.PointsWin = APELSERG.CONFIG.PROC.Wells[1].Points;
            resultLast.NameLost = APELSERG.CONFIG.PROC.Wells[0].Name;;
            resultLast.PointsLost = APELSERG.CONFIG.PROC.Wells[0].Points;
        }

        APELSERG.CONFIG.RESULT.Last.unshift(resultLast); //-- вставить в начало
        if (APELSERG.CONFIG.RESULT.Last.length > 20) {
            APELSERG.CONFIG.RESULT.Last.pop(); //-- удалить с конца
        }
    }

    // 10 лучших результатов
    //

    // Добавить последние результаты
    //
    for (var n = 0; n < APELSERG.CONFIG.PROC.Wells.length; n++) {
        if (APELSERG.CONFIG.PROC.Wells[n].Points > 0) {

            var resultBest = {};

            resultBest.Name = APELSERG.CONFIG.PROC.Wells[n].Name;
            resultBest.Points = APELSERG.CONFIG.PROC.Wells[n].Points;
            resultBest.Date = dateCurrentStr;

            APELSERG.CONFIG.RESULT.Best.push(resultBest);
        }
    }

    // Оставить 10 лучших
    //
    var topBest = [];
    var cntBest = 0;

    while (true) {
        var maxValue = 0;
        var maxIdx = -1;
        for (var n in APELSERG.CONFIG.RESULT.Best) {
            if (APELSERG.CONFIG.RESULT.Best[n] !== undefined) {
                if (APELSERG.CONFIG.RESULT.Best[n].Points >= maxValue) {
                    maxValue = APELSERG.CONFIG.RESULT.Best[n].Points;
                    maxIdx = n;
                }
            }
        }
        if (maxIdx >= 0) {
            topBest.push(APELSERG.CONFIG.RESULT.Best[maxIdx]);
            APELSERG.CONFIG.RESULT.Best.splice(maxIdx, 1);
            cntBest++;
        }
        if (cntBest >= 10 || maxIdx < 0) {
            break;
        }
    }

    APELSERG.CONFIG.RESULT.Best = topBest;

    // сохранить в localStorage
    //
    if (APELSERG.CONFIG.PROC.LoadFromWeb) {
        var resultName = APELSERG.CONFIG.GetLocalStorageResultName();
        localStorage[resultName] = JSON.stringify(APELSERG.CONFIG.RESULT);
    }
}

//===
// Сброс результата
//===
APELSERG.CONFIG.ResetResult = function () {

    var resultName = APELSERG.CONFIG.GetLocalStorageResultName();

    localStorage.removeItem(resultName);

    APELSERG.CONFIG.RESULT.Best = [];
    APELSERG.CONFIG.RESULT.Last = [];

    if (APELSERG.CONFIG.PROC.UiPoints) {
        APELSERG.UI.ShowPoints();
    }
}

//===
// Сброс конфигурации
//===
APELSERG.CONFIG.ResetConfig = function () {

    var configName = APELSERG.CONFIG.GetLocalStorageConfigName();

    localStorage.removeItem(configName);

    if (APELSERG.CONFIG.PROC.UiSettings) {
        APELSERG.UI.ShowSettings();
    }

    document.getElementById('APELSERG_DivCanvas').innerHTML = APELSERG.LANG.GetText('RELOAD_PAGE');
}

