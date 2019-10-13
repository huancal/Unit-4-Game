$(document).ready(function () {
    var generate_random = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var targetscore = generate_random(19, 120);
    var crystal_1 = generate_random(1, 12);
    var crystal_2 = generate_random(1, 12);
    var crystal_3 = generate_random(1, 12);
    var crystal_4 = generate_random(1, 12);


    $('#Comp-Random-Num').text(targetscore);

    var wins = 0;
    var losses = 0;
    var playerscore = 0;

    $('#button1').on('click', function () {
        playerscore += crystal_1;
        $('#finalScore').html(playerscore);
        winscheck();
    });

    $('#button2').on('click', function () {
        playerscore += crystal_2;
        $('#finalScore').html(playerscore);
        winscheck();
    });

    $('#button3').on('click', function () {
        playerscore += crystal_3;
        $('#finalScore').html(playerscore);
        winscheck();
    });

    $('#button4').on('click', function () {
        playerscore += crystal_4;
        $('#finalScore').html(playerscore);
        winscheck();
    });

    var winscheck = function () {
        if (targetscore === playerscore) {
            wins++
            $('#wins').text(("Wins: " + wins));
            alert('Congrats You Won!');
            resetgame();
        } else if (playerscore > targetscore) {
            losses++
            $('#Losses').text(("Losses: " + losses));
            alert('Sorry Try Again!');
            resetgame();

        }
    };

    var resetgame = function () {
        targetscore = generate_random(19, 120);
        $('#Comp-Random-Num').text(targetscore);
        playerscore = 0;
        crystal_1 = generate_random(1, 12);
        crystal_2 = generate_random(1, 12);
        crystal_3 = generate_random(1, 12);
        crystal_4 = generate_random(1, 12);
        $('#finalScore').html(playerscore) = 0;

    }
})