// ============================
// Разработчик: apelserg ; https://github.com/apelserg/
// Лицензия: WTFPL
// ============================

"use strict";

//===
// Базовый объект - колодец
//===
APELSERG.MODEL.Well = function (wellNum) {

    this.Device = APELSERG.CONFIG.SET.UserDevice[wellNum];

    //if (this.Device == 10) this.Name = "COMP";
    //else if (this.Device == 11) this.Name = "COMP Exp";
    //else 
    this.Name = APELSERG.CONFIG.SET.UserName[wellNum];

    this.MousePanel = {};

    if (wellNum == 0) this.BaseX = APELSERG.CONFIG.SET.WellBorderWidth;
    else this.BaseX = APELSERG.CONFIG.SET.InfoNextWidth + (3 * APELSERG.CONFIG.SET.WellBorderWidth) + (APELSERG.CONFIG.SET.WellColumn * APELSERG.CONFIG.SET.CellSize);

    this.BaseY = APELSERG.CONFIG.SET.InfoLineHeight + (2 * APELSERG.CONFIG.SET.WellBorderWidth);

    this.CurrentBlock = {};
    this.Pool = [];
    this.Points = 0;
    this.Stop = true;

    this.AudioCnt = 0;
    this.AudioTone = 0;
    this.AudioOsc;
}

//===
// Панель управления мышью
//===
APELSERG.MODEL.MousePanel = function (wellNum, newGap) {

    this.GoProg = false; // защита от множественного срабатывания при Device == 4
    this.Gap = newGap; // ширина зазора между кнопками

    // база
    //
    this.BaseX = APELSERG.CONFIG.PROC.Wells[wellNum].BaseX + APELSERG.CONFIG.SET.CellSize * APELSERG.CONFIG.SET.WellColumn / 2;
    this.BaseY = APELSERG.CONFIG.PROC.Wells[wellNum].BaseY + APELSERG.CONFIG.SET.CellSize / 2;

    this.Width = ((APELSERG.CONFIG.SET.WellColumn - 1) / 2) * APELSERG.CONFIG.SET.CellSize - this.Gap / 2;
    this.Height = 2 * APELSERG.CONFIG.SET.CellSize;

    // кнопка лево
    //
    this.LeftX = this.BaseX - this.Width - this.Gap / 2;
    this.LeftY = this.BaseY;

    // кнопка вправо
    //
    this.RightX = this.BaseX + this.Gap / 2;
    this.RightY = this.BaseY;

    // кнопка вращать влево
    //
    this.RotateLeftX = this.BaseX - this.Width - this.Gap / 2;
    this.RotateLeftY = this.BaseY + this.Height + this.Gap;

    // кнопка вращать вправо
    //
    this.RotateRightX = this.BaseX + this.Gap / 2;
    this.RotateRightY = this.BaseY + this.Height + this.Gap;

    // кнопка сброс блока
    //
    this.SpaceX = this.BaseX - this.Width - this.Gap / 2;
    this.SpaceY = this.BaseY + 2 * this.Height + 2 * this.Gap;

    // для подсвечивания рамки при клике мыши
    //
    this.CntLeft = 0;
    this.CntRight = 0;
    this.CntRotateLeft = 0;
    this.CntRotateRight = 0;
    this.CntSpace = 0;

    // для подсвечивания рамки при наведении мыши
    //
    this.SelectLeft = false;
    this.SelectRight = false;
    this.SelectRotateLeft = false;
    this.SelectRotateRight = false;
    this.SelectSpace = false;

    // цвет кнопок
    //
    this.ColorNormal = 'gray';
    this.ColorPress = 'red';
    this.ColorSelect = 'white';
}

//===
// Установка на начальную позицию
//===
APELSERG.MODEL.SetWellOnStart = function (wellNum) {

    APELSERG.CONFIG.PROC.Wells[wellNum].Pool = new APELSERG.MODEL.GetNewPool();

    APELSERG.CONFIG.PROC.Wells[wellNum].CurrentBlock = APELSERG.MODEL.GetBlock();

    APELSERG.CONFIG.PROC.Wells[wellNum].Points = 0;
    APELSERG.CONFIG.PROC.Wells[wellNum].Stop = false;

    if (APELSERG.CONFIG.PROC.Wells[wellNum].Device == 3) {
        APELSERG.CONFIG.PROC.Wells[wellNum].MousePanel = new APELSERG.MODEL.MousePanel(wellNum, 4);
    }
    if (APELSERG.CONFIG.PROC.Wells[wellNum].Device == 4) {
        APELSERG.CONFIG.PROC.Wells[wellNum].MousePanel = new APELSERG.MODEL.MousePanel(wellNum, 34);
    }
}

//===
// Базовый объект - ячейка
//===
APELSERG.MODEL.Cell = function (cellRow, cellCol, cellColor) {
    this.Row = cellRow;
    this.Col = cellCol;
    this.Color = cellColor;
}

//===
// Объект - блок
//===
APELSERG.MODEL.Block = function (blockType) {
    this.type = blockType;
    this.idx = 0;
    this.cells = [[], [], [], []];
}

//===
// Новый блок
//===
APELSERG.MODEL.GetNewBlock = function (wellNum) {

    var newBlock = APELSERG.MAIN.CloneObj(APELSERG.CONFIG.PROC.NextBlock);

    APELSERG.CONFIG.PROC.NextBlock = APELSERG.MODEL.GetBlock(); 

    if (!APELSERG.MODEL.CheckBlockCross(newBlock, APELSERG.CONFIG.PROC.Wells[wellNum].Pool)) {

        APELSERG.CONFIG.PROC.Wells[wellNum].Stop = true; // игрок завершил игру

        // звук
        //
        if (APELSERG.CONFIG.PROC.Wells[wellNum].AudioCnt == 0) {
            APELSERG.CONFIG.PROC.Wells[wellNum].AudioCnt = APELSERG.CONFIG.SET.AudioCnt;
            APELSERG.CONFIG.PROC.Wells[wellNum].AudioTone = APELSERG.CONFIG.SET.AudioToneEnd;
        }

        if (APELSERG.CONFIG.PROC.Wells[0].Stop && APELSERG.CONFIG.PROC.Wells[1].Stop
            || APELSERG.CONFIG.PROC.Wells[0].Device == 0 && APELSERG.CONFIG.PROC.Wells[1].Stop
            || APELSERG.CONFIG.PROC.Wells[0].Stop && APELSERG.CONFIG.PROC.Wells[1].Device == 0) {

            APELSERG.MAIN.Stop();
            APELSERG.CONFIG.SetResult(); // запись результата
        }
    }
    return newBlock;
}

//===
// Новый pool
//===
APELSERG.MODEL.GetNewPool = function () {

    var newPool = [];

    for (var row = 0; row < APELSERG.CONFIG.SET.WellRow; row++) {

        var newRow = [];

        for (var col = 0; col < APELSERG.CONFIG.SET.WellColumn; col++) {
            newRow.push(new APELSERG.MODEL.Cell(0, 0, 'black'));
        }

        newPool.push(newRow);
    }
    return newPool;
}

//===
// Получить случайное число из диапазона
//===
APELSERG.MODEL.GetRandomNumber = function(max) {
    return Math.round(Math.random() * max * 100) % max;
}

//===
// Получить случайный цвет из списка
//===
APELSERG.MODEL.GetCellColor = function() {
    var cellColors = ['#CC3300', '#FF9900', '#660033', '#009933', '#3399FF', '#0033CC', '#9900CC'];
    return cellColors[APELSERG.MODEL.GetRandomNumber(cellColors.length)];
}

//===
// Получить случайный тип блока из списка
//===
APELSERG.MODEL.GetBlockType = function() {

    var blockTypes = [];

    if(APELSERG.CONFIG.SET.Skill == 1) {
        blockTypes = [101,
                  201, 202, 203,
                  301, 302, 303, 304, 305, 306, 307, 308, 309];
    }
    else if(APELSERG.CONFIG.SET.Skill == 2) {
        blockTypes = [101,
                  201, 202, 203,
                  301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319];
    }
    else if (APELSERG.CONFIG.SET.Skill == 3) {
        blockTypes = [101,
                  201, 202, 203,
                  301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319,
                  401, 402, 403, 404, 405, 406, 407, 408, 409];
    }
    else {
        blockTypes = [101];
    }

    return blockTypes[APELSERG.MODEL.GetRandomNumber(blockTypes.length)];
}

//===
// Сместить текущий блок по горизонтали
//===
APELSERG.MODEL.ShiftBlockColumn = function(block, num) {
    for (var x in block.cells) {
        for (var n in block.cells[x]) {
            block.cells[x][n].Col = block.cells[x][n].Col + num;
        }
    }
}

//===
// Сместить текущий блок по вертикали
//===
APELSERG.MODEL.ShiftBlockRow = function(block, num) {

    for (var x in block.cells) {
        for (var n in block.cells[x]) {
            block.cells[x][n].Row = block.cells[x][n].Row + num;
        }
    }
}

//===
// Сместить текущий блок
//===
APELSERG.MODEL.BlockShift = function (wellNum, shiftType) {

    var nextBlock = APELSERG.MAIN.CloneObj(APELSERG.CONFIG.PROC.Wells[wellNum].CurrentBlock);

    if (shiftType == 'LEFT') {

        APELSERG.MODEL.ShiftBlockColumn(nextBlock, -1);

        if (APELSERG.MODEL.CheckBlockCross(nextBlock, APELSERG.CONFIG.PROC.Wells[wellNum].Pool)) {
            APELSERG.CONFIG.PROC.Wells[wellNum].CurrentBlock = nextBlock;
        }
    }

    if (shiftType == 'RIGHT') {

        APELSERG.MODEL.ShiftBlockColumn(nextBlock, 1);

        if (APELSERG.MODEL.CheckBlockCross(nextBlock, APELSERG.CONFIG.PROC.Wells[wellNum].Pool)) {
            APELSERG.CONFIG.PROC.Wells[wellNum].CurrentBlock = nextBlock;
        }
    }

    // срабатывает по таймеру
    //
    if (shiftType == 'DOWN') {

        APELSERG.MODEL.ShiftBlockRow(nextBlock, 1);

        if (APELSERG.MODEL.CheckBlockCross(nextBlock, APELSERG.CONFIG.PROC.Wells[wellNum].Pool)) {
            APELSERG.CONFIG.PROC.Wells[wellNum].CurrentBlock = nextBlock;
        }
        else {
            APELSERG.MODEL.DropBlockToPool(wellNum);
        }

        // звук
        //
        if (APELSERG.CONFIG.PROC.Wells[wellNum].AudioCnt == 0) {
            APELSERG.CONFIG.PROC.Wells[wellNum].AudioCnt = APELSERG.CONFIG.SET.AudioCnt;
            APELSERG.CONFIG.PROC.Wells[wellNum].AudioTone = APELSERG.CONFIG.SET.AudioToneDown;
        }
    }

    if (shiftType == 'SPACE') {

        // последовательный DOWN виртуальный, пока не будет достигнут "пол" (не будет видно)
        //
        while (true) {

            APELSERG.MODEL.ShiftBlockRow(nextBlock, 1);

            if (APELSERG.MODEL.CheckBlockCross(nextBlock, APELSERG.CONFIG.PROC.Wells[wellNum].Pool)) {
                APELSERG.CONFIG.PROC.Wells[wellNum].CurrentBlock = APELSERG.MAIN.CloneObj(nextBlock); // клонировать - это правильно
                // break; // только на ряд вниз за один SPACE
            }
            else {
                APELSERG.MODEL.DropBlockToPool(wellNum);
                break; // завершение цикла
            }
        }
    }

    if (shiftType == 'ROTATE_LEFT') {
        if (nextBlock.idx == 3) {
            nextBlock.idx = 0;
        }
        else {
            nextBlock.idx++;
        }
        if (APELSERG.MODEL.CheckBlockCross(nextBlock)) {
            APELSERG.CONFIG.PROC.Wells[wellNum].CurrentBlock = nextBlock;
        }
    }

    if (shiftType == 'ROTATE_RIGHT') {
        if (nextBlock.idx == 0) {
            nextBlock.idx = 3;
        }
        else {
            nextBlock.idx--;
        }
        if (APELSERG.MODEL.CheckBlockCross(nextBlock)) {
            APELSERG.CONFIG.PROC.Wells[wellNum].CurrentBlock = nextBlock;
        }
    }
}

//===
// Проверить что блок не пересекается с границами колодца и пулом накопившехся ячеек
//===
APELSERG.MODEL.CheckBlockCross = function (block, cellPool) {

    // проверить границы колодца
    //
    for (var n in block.cells[block.idx]) {
        if (block.cells[block.idx][n].Col < 1 || block.cells[block.idx][n].Col > APELSERG.CONFIG.SET.WellColumn ||
            block.cells[block.idx][n].Row < 1 || block.cells[block.idx][n].Row > APELSERG.CONFIG.SET.WellRow) {
            return false;
        }
    }

    // проверить границы пула
    //
    for (var n in block.cells[block.idx]) {
        for (var row in cellPool) {
            for (var col in cellPool[row]) {
                var cell = cellPool[row][col];
                if (block.cells[block.idx][n].Col == cell.Col && block.cells[block.idx][n].Row == cell.Row) {
                    return false;
                }
            }
        }
    }
    return true;
}

//===
// Перенести блок в пул колодца
//===
APELSERG.MODEL.DropBlockToPool = function (wellNum) {

    if (APELSERG.CONFIG.PROC.Wells[wellNum].Stop)
        return;

    // Перенести блок в пул колодца
    //
    for (var n in APELSERG.CONFIG.PROC.Wells[wellNum].CurrentBlock.cells[APELSERG.CONFIG.PROC.Wells[wellNum].CurrentBlock.idx]) {

        var cell = APELSERG.CONFIG.PROC.Wells[wellNum].CurrentBlock.cells[APELSERG.CONFIG.PROC.Wells[wellNum].CurrentBlock.idx][n];

        APELSERG.CONFIG.PROC.Wells[wellNum].Pool[cell.Row - 1][cell.Col - 1].Row = cell.Row;
        APELSERG.CONFIG.PROC.Wells[wellNum].Pool[cell.Row - 1][cell.Col - 1].Col = cell.Col;
        APELSERG.CONFIG.PROC.Wells[wellNum].Pool[cell.Row - 1][cell.Col - 1].Color = cell.Color;
    }

    // Удалить заполненные ряды
    //
    var numRowDrops = 0; // для начисления очков

    // проверить ряды снизу
    //
    for (var currentRow = APELSERG.CONFIG.SET.WellRow; currentRow > 0; currentRow--) {

        var numCol = 0;

        for (var col in APELSERG.CONFIG.PROC.Wells[wellNum].Pool[currentRow - 1]) {
            if (APELSERG.CONFIG.PROC.Wells[wellNum].Pool[currentRow - 1][col].Row == currentRow) {

                numCol++;

                if (numCol == APELSERG.CONFIG.SET.WellColumn) {

                    // убрать ряд (сдвинуть верхние ряды вниз)
                    //
                    for (var row = currentRow - 1; row >= 0; row--) {
                        for (var col in APELSERG.CONFIG.PROC.Wells[wellNum].Pool[row]) {
                            if (row > 0) {

                                var cellRow = APELSERG.CONFIG.PROC.Wells[wellNum].Pool[row - 1][col].Row;

                                if (cellRow > 0) cellRow++;

                                APELSERG.CONFIG.PROC.Wells[wellNum].Pool[row][col].Row = cellRow;
                                APELSERG.CONFIG.PROC.Wells[wellNum].Pool[row][col].Col = APELSERG.CONFIG.PROC.Wells[wellNum].Pool[row - 1][col].Col;
                                APELSERG.CONFIG.PROC.Wells[wellNum].Pool[row][col].Color = APELSERG.CONFIG.PROC.Wells[wellNum].Pool[row - 1][col].Color;
                            }
                            else {
                                APELSERG.CONFIG.PROC.Wells[wellNum].Pool[row][col].Row = 0;
                                APELSERG.CONFIG.PROC.Wells[wellNum].Pool[row][col].Col = 0;
                                APELSERG.CONFIG.PROC.Wells[wellNum].Pool[row][col].Color = 'black';
                            }
                        }
                    }
                    currentRow++; // вернуть ряд, так как верний тоже мог быть заполнен
                    numRowDrops++;

                    // звук
                    //
                    if (APELSERG.CONFIG.PROC.Wells[wellNum].AudioCnt == 0) {
                        APELSERG.CONFIG.PROC.Wells[wellNum].AudioCnt = APELSERG.CONFIG.SET.AudioCnt;
                        APELSERG.CONFIG.PROC.Wells[wellNum].AudioTone = APELSERG.CONFIG.SET.AudioToneRow;
                    }
                }
            }
        }
    }

    // подсчёт очков
    //
    var pointsCell = (numRowDrops * APELSERG.CONFIG.SET.WellColumn * APELSERG.CONFIG.SET.Skill) + APELSERG.CONFIG.SET.SpeedSelector + APELSERG.CONFIG.SET.Skill;

    if (APELSERG.CONFIG.PROC.Wells[wellNum].Pool.length == 0) pointsCell *= 100 * numRowDrops;

    APELSERG.CONFIG.PROC.Wells[wellNum].Points += pointsCell;

    // контроль уровня
    //
    if ((APELSERG.CONFIG.PROC.Wells[wellNum].Points >= (APELSERG.CONFIG.SET.PointStep * (APELSERG.CONFIG.PROC.SpeedSelector + 1)))
        && (APELSERG.CONFIG.PROC.Wells[wellNum].Points < (APELSERG.CONFIG.SET.PointStep * (APELSERG.CONFIG.PROC.SpeedSelector + 2)))
        && APELSERG.CONFIG.PROC.SpeedSelector < 9) {

        APELSERG.CONFIG.PROC.SpeedSelector++;
    }

    // новый блок
    //
    APELSERG.CONFIG.PROC.Wells[wellNum].CurrentBlock = APELSERG.MODEL.GetNewBlock(wellNum);
}

//===
// Звук
//===
APELSERG.MODEL.Sound = function (wellNum) {

    if (!APELSERG.CONFIG.SET.OnSound)
        return;

    if (APELSERG.CONFIG.PROC.AudioCtx == null)
        return;

    if (APELSERG.CONFIG.PROC.Wells[wellNum].AudioCnt == 0)
        return;

    var well = APELSERG.CONFIG.PROC.Wells[wellNum];

    if (well.AudioCnt == APELSERG.CONFIG.SET.AudioCnt) {

        well.AudioOsc = APELSERG.CONFIG.PROC.AudioCtx.createOscillator();
        well.AudioOsc.frequency.value = well.AudioTone;
        well.AudioOsc.connect(APELSERG.CONFIG.PROC.AudioCtx.destination);
        well.AudioOsc.start();

    }
    if (well.AudioCnt == 1) {
        well.AudioOsc.stop();
    }

    well.AudioCnt--;
}

