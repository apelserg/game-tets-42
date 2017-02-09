// ============================
// Разработчик: apelserg ; https://github.com/apelserg/
// Лицензия: WTFPL
// ============================

"use strict";

//===
// Инициализация текущего блока
// Добавление новых типов блоков делается здесь - после блок следует добавить в массив скилов
//===
APELSERG.MODEL.GetBlock = function() {
    
    var blockType = APELSERG.MODEL.GetBlockType();
    var newBlock = new APELSERG.MODEL.Block(blockType);
    var newColor = APELSERG.MODEL.GetCellColor();

    var baseRow = 1;
    var baseCol = Math.round(APELSERG.CONFIG.SET.WellColumn / 2);
    
    switch (blockType) {
        case 101:
            // [1]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0][0] = new APELSERG.MODEL.Cell(baseRow, baseCol, newColor);
            newBlock.cells[1][0] = new APELSERG.MODEL.Cell(baseRow, baseCol, newColor);
            newBlock.cells[2][0] = new APELSERG.MODEL.Cell(baseRow, baseCol, newColor);
            newBlock.cells[3][0] = new APELSERG.MODEL.Cell(baseRow, baseCol, newColor);
            break;

        case 201:
            // [1]
            // [2]
            
            // [1]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol + 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol + 1, newColor));
            // [2]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol + 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow, baseCol + 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            break;

        case 202:
            // [1]
            // [2][3]
            
            // [1]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol + 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow, baseCol + 1, newColor));
            // [2]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol + 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow, baseCol + 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow, baseCol, newColor));
            // [3]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol + 1, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow, baseCol + 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow, baseCol, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            break;

        case 203:
            // [1][4]
            // [2][3]

            // [1]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol + 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow, baseCol + 1, newColor));
            // [2]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol + 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow, baseCol + 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow, baseCol, newColor));
            // [3]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol + 1, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow, baseCol + 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow, baseCol, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            // [4]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow, baseCol + 1, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow, baseCol, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol + 1, newColor));
            break;

        case 301:
            // [1]
            // [2]
            // [3]
            
            // [1]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol - 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 1, newColor));
            // [2]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            // [3]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow, baseCol, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol - 1, newColor));
            break;

        case 302:
            // [1]
            // [2][3]
            //    [4]
            
            // [1]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol - 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol + 1, newColor));
            // [2]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            // [3]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol + 1, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol - 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            // [4]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 1, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol + 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow, baseCol - 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol - 1, newColor));
            break;

        case 303:
            //    [1]
            // [3][2]
            // [4]
            
            // [1]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol - 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 1, newColor));
            // [2]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            // [3]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol - 1, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol + 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            // [4]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol - 1, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow, baseCol + 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol - 1, newColor));
            break;

        case 304:
            // [1]
            // [2][4]
            // [3]

            // [1]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol - 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol + 1, newColor));
            // [2]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            // [3]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow, baseCol, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol - 1, newColor));
            // [4]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol + 1, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol - 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            break;

        case 305:
            // [1]
            // [2][4][5]
            // [3]
            
            // [1]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow, baseCol - 1, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol - 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow, baseCol + 1, newColor));
            // [2]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol - 1, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol + 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow, baseCol, newColor));
            // [3]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol - 1, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow, baseCol + 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow, baseCol - 1, newColor));
            // [4]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            // [5]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol + 1, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow, baseCol, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol - 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            break;

        case 306:
            // [1]
            // [2]
            // [3][4]
            
            // [1]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol - 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol + 1, newColor));
            // [2]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            // [3]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow, baseCol, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol - 1, newColor));
            // [4]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 1, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol + 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow, baseCol - 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol - 1, newColor));
            break;

        case 307:
            //    [1]
            //    [2]
            // [4][3]
            
            // [1]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol - 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 1, newColor));
            // [2]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            // [3]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol + 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow, baseCol, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol - 1, newColor));
            // [4]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol - 1, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow, baseCol + 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol - 1, newColor));
            break;

        case 308:
            // [1]
            // [2][5]
            // [3][4]
            
            // [1]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol - 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol + 1, newColor));
            // [2]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            // [3]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow, baseCol, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol - 1, newColor));
            // [4]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 1, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol + 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow, baseCol - 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol - 1, newColor));
            // [5]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol + 1, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol - 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            break;

        case 309:
            //    [1]
            // [5][2]
            // [4][3]
            
            // [1]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol - 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 1, newColor));
            // [2]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            // [3]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol + 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow, baseCol, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol - 1, newColor));
            // [4]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol - 1, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow, baseCol + 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol - 1, newColor));
            // [5]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol - 1, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol + 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            break;

        case 310:
            //    [1]
            // [5][2][4]
            //    [3]
            
            // [1]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol - 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol + 1, newColor));
            // [2]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            // [3]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol + 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow, baseCol, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol - 1, newColor));
            // [4]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol + 1, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow, baseCol, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol - 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            // [5]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol - 1, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol + 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow, baseCol, newColor));
            break;

        case 311:
            // [5][1]
            //    [2]
            //    [3][4]
            
            // [1]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol - 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol + 1, newColor));
            // [2]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            // [3]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol + 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow, baseCol, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol - 1, newColor));
            // [4]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 1, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow, baseCol + 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow, baseCol - 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol - 1, newColor));
            // [5]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow, baseCol - 1, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol - 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow, baseCol + 1, newColor));
            break;

        case 312:
            //    [1][4]
            //    [2]
            // [5][3]
            
            // [1]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol - 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol + 1, newColor));
            // [2]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            // [3]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol + 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow, baseCol, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol - 1, newColor));
            // [4]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow, baseCol + 1, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow, baseCol - 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol - 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 1, newColor));
            // [5]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol - 1, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow, baseCol + 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow, baseCol - 1, newColor));
            break;

        case 313:
            // [1][5]
            // [2]
            // [3][4]
            
            // [1]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol - 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol + 1, newColor));
            // [2]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            // [3]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow, baseCol, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol - 1, newColor));
            // [4]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 1, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol + 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow, baseCol - 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol - 1, newColor));
            // [5]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow, baseCol + 1, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol - 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol - 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 1, newColor));
            break;

         case 314:
            // [1]
            // [2]
            // [3][4][5]
            
            // [1]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow, baseCol - 1, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol - 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow, baseCol + 1, newColor));
            // [2]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol - 1, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol + 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow, baseCol, newColor));
            // [3]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol - 1, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow, baseCol + 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow, baseCol - 1, newColor));
            // [4]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol + 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow, baseCol, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol - 1, newColor));
            // [5]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 1, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow, baseCol + 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow, baseCol - 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol - 1, newColor));
            break;

        case 315:
            // [1]
            // [2][3]
            //    [4][5]
            
            // [1]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow, baseCol - 1, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol - 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow, baseCol + 1, newColor));
            // [2]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol - 1, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol + 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow, baseCol, newColor));
            // [3]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            // [4]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol + 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow, baseCol, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol - 1, newColor));
            // [5]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 1, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow, baseCol + 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow, baseCol - 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol - 1, newColor));
            break;

        case 316:
            // [5][1]
            //    [2][4]
            //    [3]
            
            // [1]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol - 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol + 1, newColor));
            // [2]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            // [3]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol + 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow, baseCol, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol - 1, newColor));
            // [4]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol + 1, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow, baseCol, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol - 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            // [5]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow, baseCol - 1, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol - 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow, baseCol + 1, newColor));
            break;

        case 317:
            //    [1]
            //    [2][4]
            // [5][3]
            
            // [1]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol - 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol + 1, newColor));
            // [2]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            // [3]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol + 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow, baseCol, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol - 1, newColor));
            // [4]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol + 1, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow, baseCol, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol - 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            // [5]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol - 1, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow, baseCol + 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow, baseCol - 1, newColor));
            break;

        case 318:
            // [1]   [-]
            // [2]   [6]
            // [3][4][5]
            
            // [1]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow, baseCol - 1, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol - 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow, baseCol + 1, newColor));
            // [2]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol - 1, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol + 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow, baseCol, newColor));
            // [3]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol - 1, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow, baseCol + 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow, baseCol - 1, newColor));
            // [4]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol + 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow, baseCol, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol - 1, newColor));
            // [5]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 1, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow, baseCol + 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow, baseCol - 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol - 1, newColor));
            // [6]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol + 1, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow, baseCol, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol - 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            // [7]
            //newColor = APELSERG.MODEL.GetCellColor();
            //newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow, baseCol + 1, newColor));
            //newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow, baseCol - 1, newColor));
            //newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol - 1, newColor));
            //newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 1, newColor));
            break;

        case 319:
            // [-][-][7]
            // [2]   [6]
            // [3][4][5]
            
            // [1]
            //newColor = APELSERG.MODEL.GetCellColor();
            //newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow, baseCol - 1, newColor));
            //newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol - 1, newColor));
            //newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 1, newColor));
            //newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow, baseCol + 1, newColor));
            // [2]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol - 1, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol + 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow, baseCol, newColor));
            // [3]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol - 1, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow, baseCol + 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow, baseCol - 1, newColor));
            // [4]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol + 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow, baseCol, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol - 1, newColor));
            // [5]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 1, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow, baseCol + 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow, baseCol - 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol - 1, newColor));
            // [6]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol + 1, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow, baseCol, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol - 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            // [7]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow, baseCol + 1, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow, baseCol - 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol - 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 1, newColor));
            // [8]
            //newColor = APELSERG.MODEL.GetCellColor();
            //newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow, baseCol, newColor));
            //newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol - 1, newColor));
            //newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            //newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol + 1, newColor));
            break;
        case 401:
            // [1]
            // [2]
            // [3]
            // [4]

            // [1]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 3, baseCol - 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 3, baseCol + 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 3, baseCol + 2, newColor));
            // [2]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 3, baseCol, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 3, baseCol + 1, newColor));
            // [3]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 3, baseCol + 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol + 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 3, baseCol, newColor));
            // [4]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 3, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 3, baseCol + 2, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow, baseCol + 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 3, baseCol - 1, newColor));
            break;
        case 402:
            //    [1]
            //    [2]
            //    [3]
            // [5][4]

            // [1]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol - 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 3, baseCol + 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 3, baseCol + 2, newColor));
            // [2]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 3, baseCol + 1, newColor));
            // [3]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol + 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 3, baseCol, newColor));
            // [4]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 3, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 2, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow, baseCol + 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 3, baseCol - 1, newColor));
            // [5]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 3, baseCol - 1, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 3, baseCol + 2, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow, baseCol + 2, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol - 1, newColor));
            break;
        case 403:
            // [1]
            // [2]
            // [3]
            // [4][5]

            // [1]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 3, baseCol - 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 3, baseCol + 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 2, newColor));
            // [2]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 3, baseCol, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 1, newColor));
            // [3]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 3, baseCol + 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol + 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            // [4]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 3, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 3, baseCol + 2, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow, baseCol + 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol - 1, newColor));
            // [5]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 3, baseCol + 1, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 2, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow, baseCol, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 3, baseCol - 1, newColor));
            break;
        case 404:
            //    [1][6]
            //    [2]
            //    [3]
            // [5][4]

            // [1]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol - 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 3, baseCol + 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 2, newColor));
            // [2]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 1, newColor));
            // [3]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol + 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            // [4]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 3, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 2, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow, baseCol + 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol - 1, newColor));
            // [5]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 3, baseCol - 1, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 3, baseCol + 2, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow, baseCol + 2, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol - 1, newColor));
            // [6]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow, baseCol + 1, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol - 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 3, baseCol, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 3, baseCol + 2, newColor));
            break;
        case 405:
            // [6][1]
            //    [2]
            //    [3]
            //    [4][5]

            // [1]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol - 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 3, baseCol + 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 2, newColor));
            // [2]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 1, newColor));
            // [3]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol + 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            // [4]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 3, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 2, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow, baseCol + 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol - 1, newColor));
            // [5]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 3, baseCol + 1, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol + 2, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow, baseCol, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 3, baseCol - 1, newColor));
            // [6]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow, baseCol - 1, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 3, baseCol - 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 3, baseCol + 2, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol + 2, newColor));
            break;
        case 406:
            //    [1]
            //    [2]
            //    [3]
            // [6][4][5]

            // [1]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol - 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 3, baseCol + 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 2, newColor));
            // [2]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 1, newColor));
            // [3]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol + 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            // [4]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 3, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 2, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow, baseCol + 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol - 1, newColor));
            // [5]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 3, baseCol + 1, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol + 2, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow, baseCol, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 3, baseCol - 1, newColor));
            // [6]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 3, baseCol - 1, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 3, baseCol + 2, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow, baseCol + 2, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol - 1, newColor));
            break;
        case 407:
            //    [1]
            //    [2]
            // [5][3]
            //    [4]

            // [1]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol - 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 3, baseCol + 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 3, baseCol + 2, newColor));
            // [2]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 3, baseCol + 1, newColor));
            // [3]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol + 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 3, baseCol, newColor));
            // [4]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 3, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 2, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow, baseCol + 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 3, baseCol - 1, newColor));
            // [5]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol - 1, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 3, baseCol + 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol + 2, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            break;
        case 408:
            // [1]
            // [2]
            // [3][5]
            // [4]

            // [1]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 3, baseCol - 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 3, baseCol + 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 2, newColor));
            // [2]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 3, baseCol, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 1, newColor));
            // [3]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 3, baseCol + 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol + 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            // [4]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 3, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 3, baseCol + 2, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow, baseCol + 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol - 1, newColor));
            // [5]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 1, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 3, baseCol, newColor));
            break;
        case 409:
            //    [1]
            //    [2]
            // [6][3][5]
            //    [4]

            // [1]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol - 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 3, baseCol + 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 2, newColor));
            // [2]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 1, newColor));
            // [3]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol + 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol, newColor));
            // [4]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 3, baseCol, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 2, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow, baseCol + 1, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol - 1, newColor));
            // [5]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol + 1, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol + 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 3, baseCol, newColor));
            // [6]
            newColor = APELSERG.MODEL.GetCellColor();
            newBlock.cells[0].push(new APELSERG.MODEL.Cell(baseRow + 2, baseCol - 1, newColor));
            newBlock.cells[1].push(new APELSERG.MODEL.Cell(baseRow + 3, baseCol + 1, newColor));
            newBlock.cells[2].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol + 2, newColor));
            newBlock.cells[3].push(new APELSERG.MODEL.Cell(baseRow + 1, baseCol, newColor));
            break;

        default:
    }
    return newBlock;
}
