// ============================
// Разработчик: apelserg ; https://github.com/apelserg/
// Лицензия: WTFPL
// ============================

"use strict";

//===
// Перерисовать колодец
//===
APELSERG.CANVA.WellRewrite = function () {

    var ctx = APELSERG.CONFIG.PROC.Ctx;

    // Очистить canvas
    //
    ctx.fillStyle = 'gray';
    ctx.fillRect(0, 0, APELSERG.CONFIG.PROC.CanvaID.width, APELSERG.CONFIG.PROC.CanvaID.height);

    //-- Рамки
    //--
    ctx.fillStyle = 'silver';
    ctx.fillRect(APELSERG.CONFIG.SET.WellBorderWidth, APELSERG.CONFIG.SET.WellBorderWidth, APELSERG.CONFIG.PROC.CanvaID.width - 2 * APELSERG.CONFIG.SET.WellBorderWidth, APELSERG.CONFIG.SET.InfoLineHeight);
    ctx.fillRect(APELSERG.CONFIG.PROC.Wells[0].BaseX + APELSERG.CONFIG.SET.WellBorderWidth + APELSERG.CONFIG.SET.WellColumn * APELSERG.CONFIG.SET.CellSize, APELSERG.CONFIG.PROC.Wells[0].BaseY, APELSERG.CONFIG.SET.InfoNextWidth, APELSERG.CONFIG.SET.WellRow * APELSERG.CONFIG.SET.CellSize);

    ctx.fillRect(APELSERG.CONFIG.PROC.Wells[0].BaseX, APELSERG.CONFIG.PROC.Wells[0].BaseY, APELSERG.CONFIG.SET.WellColumn * APELSERG.CONFIG.SET.CellSize, APELSERG.CONFIG.SET.WellRow * APELSERG.CONFIG.SET.CellSize);
    ctx.fillRect(APELSERG.CONFIG.PROC.Wells[1].BaseX, APELSERG.CONFIG.PROC.Wells[1].BaseY, APELSERG.CONFIG.SET.WellColumn * APELSERG.CONFIG.SET.CellSize, APELSERG.CONFIG.SET.WellRow * APELSERG.CONFIG.SET.CellSize);

    // Сетка
    //
    if (APELSERG.CONFIG.SET.ShowNet) {
        ctx.strokeStyle = "#E0E0E0";
        for (var nRow = 0 ; nRow < APELSERG.CONFIG.SET.WellRow; nRow++) {
            for (var nColumn = 0 ; nColumn < APELSERG.CONFIG.SET.WellColumn; nColumn++) {
                ctx.lineWidth = 1;
                ctx.strokeRect(APELSERG.CONFIG.PROC.Wells[0].BaseX + nColumn * APELSERG.CONFIG.SET.CellSize, APELSERG.CONFIG.PROC.Wells[0].BaseY + nRow * APELSERG.CONFIG.SET.CellSize, APELSERG.CONFIG.SET.CellSize, APELSERG.CONFIG.SET.CellSize);
                ctx.strokeRect(APELSERG.CONFIG.PROC.Wells[1].BaseX + nColumn * APELSERG.CONFIG.SET.CellSize, APELSERG.CONFIG.PROC.Wells[1].BaseY + nRow * APELSERG.CONFIG.SET.CellSize, APELSERG.CONFIG.SET.CellSize, APELSERG.CONFIG.SET.CellSize);
            }
        }
    }

    // Падающий блок
    //
    for (var wellNum = 0; wellNum < 2; wellNum++) {

        if (APELSERG.CONFIG.PROC.Wells[wellNum].Device != 0) {

            var block = APELSERG.CONFIG.PROC.Wells[wellNum].CurrentBlock;
            var baseX = APELSERG.CONFIG.PROC.Wells[wellNum].BaseX;
            var baseY = APELSERG.CONFIG.PROC.Wells[wellNum].BaseY;

            for (var n in block.cells[block.idx]) {
                APELSERG.CANVA.CellRewrite(ctx, block.cells[block.idx][n], baseX, baseY);
            }
        }
    }

    // Упавшие блоки
    //
    for (var wellNum = 0; wellNum < 2; wellNum++) {

        if (APELSERG.CONFIG.PROC.Wells[wellNum].Device != 0) {

            var pool = APELSERG.CONFIG.PROC.Wells[wellNum].Pool;
            var baseX = APELSERG.CONFIG.PROC.Wells[wellNum].BaseX;
            var baseY = APELSERG.CONFIG.PROC.Wells[wellNum].BaseY;

            for (var row in pool) {
                for (var col in pool[row]) {
                    if (pool[row][col].Row > 0) {
                        APELSERG.CANVA.CellRewrite(ctx, pool[row][col], baseX, baseY);
                    }
                }
            }
        }
    }

    // Следующий блок
    //
    if (APELSERG.CONFIG.SET.ShowNextBlock) {

        var block = APELSERG.CONFIG.PROC.NextBlock;
        var baseX = APELSERG.CONFIG.PROC.CanvaID.width / 2 - (APELSERG.CONFIG.SET.WellColumn * APELSERG.CONFIG.SET.CellSize / 2);
        var baseY = APELSERG.CONFIG.PROC.Wells[0].BaseY;

        for (var n in block.cells[block.idx]) {
            APELSERG.CANVA.CellRewrite(ctx, block.cells[block.idx][n], baseX, baseY);
        }
    }

    // Панель управления мышью
    //
    for (var wellNum = 0; wellNum < 2; wellNum++) {

        if (APELSERG.CONFIG.PROC.Wells[wellNum].Device == 3 || APELSERG.CONFIG.PROC.Wells[wellNum].Device == 4) {

            var pan = APELSERG.CONFIG.PROC.Wells[wellNum].MousePanel;

            var fontHeight = 20;
            ctx.font = fontHeight.toString() + "px Arial";
            ctx.textAlign = "center";

            // Left
            //
            ctx.strokeStyle = pan.ColorNormal;
            if (pan.CntLeft > 0) {
                pan.CntLeft--;
                ctx.strokeStyle = pan.ColorPress;
            }
            else if (pan.SelectLeft) {
                ctx.strokeStyle = pan.ColorSelect;
            }
            ctx.strokeRect(pan.LeftX, pan.LeftY, pan.Width, pan.Height);

            //ctx.font = fontHeight.toString() + "px Arial";
            ctx.fillStyle = ctx.strokeStyle;
            ctx.fillText("<<", pan.LeftX + pan.Width / 2, pan.LeftY + pan.Height / 2 + fontHeight / 2);

            // Right
            //
            ctx.strokeStyle = pan.ColorNormal;
            if (pan.CntRight > 0) {
                pan.CntRight--;
                ctx.strokeStyle = pan.ColorPress;
            }
            else if (pan.SelectRight) {
                ctx.strokeStyle = pan.ColorSelect;
            }
            ctx.strokeRect(pan.RightX, pan.RightY, pan.Width, pan.Height);

            //ctx.font = fontHeight.toString() + "px Arial";
            ctx.fillStyle = ctx.strokeStyle;
            ctx.fillText(">>", pan.RightX + pan.Width / 2, pan.RightY + pan.Height / 2 + fontHeight / 2);

            // Rotate Left
            //
            ctx.strokeStyle = pan.ColorNormal;
            if (pan.CntRotateLeft > 0) {
                pan.CntRotateLeft--;
                ctx.strokeStyle = pan.ColorPress;
            }
            else if (pan.SelectRotateLeft) {
                ctx.strokeStyle = pan.ColorSelect;
            }
            ctx.strokeRect(pan.RotateLeftX, pan.RotateLeftY, pan.Width, pan.Height);

            //ctx.font = fontHeight.toString() + "px Arial";
            ctx.fillStyle = ctx.strokeStyle;
            ctx.fillText("<", pan.LeftX + pan.Width / 2 - 8, pan.RotateLeftY + fontHeight - 2);

            ctx.beginPath();
            ctx.arc(pan.RotateLeftX + pan.Width / 2, pan.RotateLeftY + pan.Height / 2, fontHeight / 2, 1.5 * Math.PI, 1.0 * Math.PI);
            ctx.stroke();

            // Rotate Right
            //
            ctx.strokeStyle = pan.ColorNormal;
            if (pan.CntRotateRight > 0) {
                pan.CntRotateRight--;
                ctx.strokeStyle = pan.ColorPress;
            }
            else if (pan.SelectRotateRight) {
                ctx.strokeStyle = pan.ColorSelect;
            }
            ctx.strokeRect(pan.RotateRightX, pan.RotateRightY, pan.Width, pan.Height);

            //ctx.font = fontHeight.toString() + "px Arial";
            ctx.fillStyle = ctx.strokeStyle;
            ctx.fillText(">", pan.RightX + pan.Width / 2 + 8, pan.RotateRightY + fontHeight - 2);

            ctx.beginPath();
            ctx.arc(pan.RotateRightX + pan.Width / 2, pan.RotateRightY + pan.Height / 2, fontHeight / 2, 0.0 * Math.PI, 1.5 * Math.PI);
            ctx.stroke();

            // Space Drop
            //
            ctx.strokeStyle = pan.ColorNormal;
            if (pan.CntSpace > 0) {
                pan.CntSpace--;
                ctx.strokeStyle = pan.ColorPress;
            }
            else if (pan.SelectSpace) {
                ctx.strokeStyle = pan.ColorSelect;
            }
            ctx.strokeRect(pan.SpaceX, pan.SpaceY, 2 * pan.Width + pan.Gap, pan.Height);
        }
    }

    // Пауза
    //
    if (APELSERG.CONFIG.PROC.GamePause && !APELSERG.CONFIG.PROC.GameStop) {
        APELSERG.CANVA.TextRewrite(ctx, APELSERG.LANG.GetText("PAUSE"));
    }

    // Стоп
    //
    if (APELSERG.CONFIG.PROC.GameStop) {
        APELSERG.CANVA.TextRewrite(ctx, APELSERG.LANG.GetText("STOP"));
    }

    for (var wellNum = 0; wellNum < 2; wellNum++) {

        if (APELSERG.CONFIG.PROC.Wells[wellNum].Stop && APELSERG.CONFIG.PROC.Wells[wellNum].Device != 0) {

            ctx.font = "20px Arial";
            ctx.fillStyle = "red";
            ctx.textAlign = "center";

            var placeX = APELSERG.CONFIG.PROC.Wells[wellNum].BaseX + APELSERG.CONFIG.SET.WellColumn * APELSERG.CONFIG.SET.CellSize / 2;
            var placeY = APELSERG.CONFIG.PROC.CanvaID.height / 2;

            ctx.fillText(APELSERG.LANG.GetText("STOP"), placeX, placeY);

        }
    }

    // Инфо
    //
    APELSERG.CANVA.InfoRewrite(ctx);

    //-- Обратный отсчёт задаржки
    //--
    if (APELSERG.CONFIG.PROC.StartCnt > 0) {

        ctx.font = "40px Arial";
        ctx.fillStyle = "yellow";
        ctx.textAlign = "center";
        ctx.fillText(APELSERG.CONFIG.PROC.StartCnt.toString(), APELSERG.CONFIG.PROC.CanvaID.width / 2, APELSERG.CONFIG.PROC.CanvaID.height / 2);

        APELSERG.CONFIG.PROC.StartCnt--;
    }

    //-- Обратный отсчёт сообщения об ошибке
    //--
    if (APELSERG.CONFIG.PROC.ErrorCnt > 0) {

        ctx.font = "40px Arial";
        ctx.fillStyle = "red";
        ctx.textAlign = "center";
        ctx.fillText(APELSERG.CONFIG.PROC.ErrorMsg, APELSERG.CONFIG.PROC.CanvaID.width / 2, APELSERG.CONFIG.PROC.CanvaID.height / 2 - 40);

        APELSERG.CONFIG.PROC.ErrorCnt--;
        if (APELSERG.CONFIG.PROC.ErrorCnt == 0) APELSERG.CONFIG.PROC.ErrorMsg = "";
    }
}

//===
// Перерисовать ячейку
//===
APELSERG.CANVA.CellRewrite = function (ctx, cell, baseX, baseY) {

    var xR = baseX + (cell.Col - 1) * APELSERG.CONFIG.SET.CellSize;
    var xL = APELSERG.CONFIG.SET.CellSize;
    var yR = baseY + (cell.Row - 1) * APELSERG.CONFIG.SET.CellSize;
    var yL = APELSERG.CONFIG.SET.CellSize;

    ctx.fillStyle = cell.Color;
    ctx.fillRect(xR, yR, xL, yL);
}

//===
// Перерисовать текст
//===
APELSERG.CANVA.TextRewrite = function (ctx, strText) {
    ctx.font = "30px Arial";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText(strText, APELSERG.CONFIG.PROC.CanvaID.width / 2, APELSERG.CONFIG.PROC.CanvaID.height / 2);
}

//===
// Перерисовать инфо
//===
APELSERG.CANVA.InfoRewrite = function (ctx) {

    ctx.font = "14px Arial";
    ctx.fillStyle = "darkgreen";
    ctx.textAlign = "center";

    var strText = APELSERG.LANG.GetText("LABEL_LEVEL")
        + ": "
        + (APELSERG.CONFIG.PROC.SpeedSelector + 1).toString()
        + " "
        + APELSERG.LANG.GetText("LABEL_SKILL")
        + ": "
        + APELSERG.CONFIG.SET.Skill.toString();

    ctx.fillText(strText, APELSERG.CONFIG.PROC.CanvaID.width / 2, 25);

    strText = APELSERG.CONFIG.PROC.Wells[0].Name.substr(0, 6)
        + ": "
        + APELSERG.CONFIG.PROC.Wells[0].Points.toString()
        + " >< "
        + APELSERG.CONFIG.PROC.Wells[1].Name.substr(0, 6)
        + ": "
        + APELSERG.CONFIG.PROC.Wells[1].Points.toString();

    ctx.fillText(strText, APELSERG.CONFIG.PROC.CanvaID.width / 2, 45);

    if (APELSERG.CONFIG.SET.ShowResult) {

        ctx.font = "14px Arial";
        ctx.fillStyle = "darkgreen";
        ctx.textAlign = "left";

        var baseX = APELSERG.CONFIG.PROC.CanvaID.width / 2 - APELSERG.CONFIG.SET.CellSize * 3;
        var baseY = 200;
        var stepY = 20;

        if (APELSERG.CONFIG.RESULT.Best[0] === undefined)
        {
            ctx.textAlign = "center";
            ctx.fillText(APELSERG.LANG.GetText("NO_RESULT"), APELSERG.CONFIG.PROC.CanvaID.width / 2, baseY);
        }
        else
        {
            for (var n = 0; APELSERG.CONFIG.RESULT.Best.length > n; n++) {

                var strResult = (n + 1).toString()
                    + '. '
                    + APELSERG.CONFIG.RESULT.Best[n].Name.substr(0, 6)
                    + ': '
                    + APELSERG.CONFIG.RESULT.Best[n].Points.toString();

                ctx.fillText(strResult, baseX, baseY + (n * stepY));
            }
        }
    }
}
