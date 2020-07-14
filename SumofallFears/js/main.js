// Data from user//
$("#soafBtn").on("click", function () {

    let k = parseInt($("#soafK").val());
    let num1 = parseInt($("#soafIn1").val());
    let num2 = parseInt($("#soafIn2").val());
    let num3 = parseInt($("#soafIn3").val());
    let num4 = parseInt($("#soafIn4").val());
    let num5 = parseInt($("#soafIn5").val());

    // Array with the user input//

    let array = new Array();
    array.push(num1);
    array.push(num2);
    array.push(num3);
    array.push(num4);
    array.push(num5);
    // perform the algorithm//
    let message = "";

    for (let index = 0; index < array.length - 1; index++) {
        //--any num larger than K will be ignored//
        if (array[index] > k)
            continue;

        let solution = k - array[index];

        if (array.indexOf(solution, index + 1) > -1) {
            message = `A solution was found for a "K" value of ${k}.`;
            break;
        }
        else {
            message = `No solution for a "K" value of ${k} was found.`;
        }
    }
    // print result to user//
    $("#soafOut").text(message);
});
$("#btnClear").on("click", function () {
    $("#soafK, #soafIn1,#soafIn2, #soafIn3, #soafIn4, #soafIn5").val("");
    $("#soafOut").text("");
})
