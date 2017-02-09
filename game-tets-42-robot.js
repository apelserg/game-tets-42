// ============================
// Разработчик: apelserg ; https://github.com/apelserg/
// Лицензия: WTFPL
// ============================

"use strict";

/*
APELSERG.MODEL.GetNewPool = function () {

    //var newPool = [[],[],[],[],[]];
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
*/

//===
// Играет комп
//===
APELSERG.ROBOT.CompGame = function (wellNum) {

    if (APELSERG.CONFIG.PROC.CompCnt > 0) {
        APELSERG.CONFIG.PROC.CompCnt--;
        return;
    }

    //console.log("comp game");

    APELSERG.CONFIG.PROC.CompCnt = APELSERG.CONFIG.SET.CompCnt;

    var well = APELSERG.CONFIG.PROC.Wells[wellNum];

    if (well.Device == 10 || well.Device == 11) {

        var shape = [];

        for (var col = 0; col < APELSERG.CONFIG.SET.WellColumn; col++) {

            var last = 0;

            for (var row in well.Pool) {

                if (well.Pool[row][col].Row == 0) {
                    last = row; // + 1;
                }
                else {
                    break;
                }
            }

            shape.push(last);
        }

        var maxRow = 0;

        for (var n in shape) {
            if (maxRow < shape[n]) maxRow = shape[n];
        }


        var colSpaceBest = -1;
        var maxSpaceBest = 0;

        var colSpaceNext = -1;
        var maxSpaceNext = 0;


        for (var n in shape) {
            if (maxRow == shape[n]) { // && colSpaceBest < 0) {
                colSpaceBest = n;
                maxSpaceBest++;
            }
        }


    }
}
