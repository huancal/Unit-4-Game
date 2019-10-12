$(document).ready(function () {
    var generate_random = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var targetScore = generate_random(19, 120);
    var crystal_1 = generate_random(1, 12);
    var crystal_2 = generate_random(1, 12);
    var crystal_3 = generate_random(1, 12);
    var crystal_4 = generate_random(1, 12);


    $('#Comp-Random-Num').text(targetScore);

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
        if (targetScore === playerscore) {
            wins++
            $('#wins').text(("Wins: " + wins));
            alert('Congrats You Won!');
            resetgame();
        } else if (playerscore > targetScore) {
            losses++
            $('#Losses').text(("Losses: " + losses));
            alert('Sorry Try Again!');
            resetgame();
        }
    };

    var resetgame = function () {
        targetScore = generate_random(19, 120);
        crystal_1 = generate_random(1, 12);
        crystal_2 = generate_random(1, 12);
        crystal_3 = generate_random(1, 12);
        crystal_4 = generate_random(1, 12);
        playerscore = 0;
    }

















})