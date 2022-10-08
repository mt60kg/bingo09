//配列をシャッフル
var shuffle = ([...array]) => {
  for (var i = array.length - 1; i >= 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

$(function () {
    $("#tex0").val(localStorage.getItem("tex0_1_09"));
    $("#tex1").val(localStorage.getItem("tex1_1_09"));
    $("#tex2").val(localStorage.getItem("tex2_1_09"));
    $("#tex3").val(localStorage.getItem("tex3_1_09"));
    $("#tex4").val(localStorage.getItem("tex4_1_09"));
    $("#tex5").val(localStorage.getItem("tex5_1_09"));
    $("#tex6").val(localStorage.getItem("tex6_1_09"));
    $("#tex7").val(localStorage.getItem("tex7_1_09"));
    $("#tex8").val(localStorage.getItem("tex8_1_09"));
    $("#bi0").text(localStorage.getItem("bi0_1_09"));
    $("#bi1").text(localStorage.getItem("bi1_1_09"));
    $("#bi2").text(localStorage.getItem("bi2_1_09"));
    $("#bi3").text(localStorage.getItem("bi3_1_09"));
    $("#bi4").text(localStorage.getItem("bi4_1_09"));
    $("#bi5").text(localStorage.getItem("bi5_1_09"));
    $("#bi6").text(localStorage.getItem("bi6_1_09"));
    $("#bi7").text(localStorage.getItem("bi7_1_09"));
    $("#bi8").text(localStorage.getItem("bi8_1_09"));

    //クリックにて処理開始
    $("#shuffle_bingo").on('click', function () {
        //入力データの配列化
        var val = [];
        $(".tex").each(function (i, obj) {
            val.push(obj.value);
        });
        localStorage.setItem("tex0_1_09",val[0]);
        localStorage.setItem("tex1_1_09",val[1]);
        localStorage.setItem("tex2_1_09",val[2]);
        localStorage.setItem("tex3_1_09",val[3]);
        localStorage.setItem("tex4_1_09",val[4]);
        localStorage.setItem("tex5_1_09",val[5]);
        localStorage.setItem("tex6_1_09",val[6]);
        localStorage.setItem("tex7_1_09",val[7]);
        localStorage.setItem("tex8_1_09",val[8]);
    //シャッフル処理
    var val2 = (shuffle(val));
    for (var i = 0; i < val2.length; i++) {
        $('#bi' + i).text(val2[i]);
    };
    localStorage.setItem("bi0_1_09",val2[0]);
    localStorage.setItem("bi1_1_09",val2[1]);
    localStorage.setItem("bi2_1_09",val2[2]);
    localStorage.setItem("bi3_1_09",val2[3]);
    localStorage.setItem("bi4_1_09",val2[4]);
    localStorage.setItem("bi5_1_09",val2[5]);
    localStorage.setItem("bi6_1_09",val2[6]);
    localStorage.setItem("bi7_1_09",val2[7]);
    localStorage.setItem("bi8_1_09",val2[8]);
});

    // 番号をクリックすると、スタイルを変更するクラスをつけ外しできる
    $('#bingo td').click(function (){
        var iro = $('#color').val();
        if(iro == 'red'){
            $(this).removeClass();
            $(this).addClass('bgRed');
        }else if(iro == 'green'){
            $(this).removeClass();
            $(this).addClass('bgGreen');
        }else if(iro == 'blue'){
            $(this).removeClass();
            $(this).addClass('bgBlue');
        }else if(iro == 'yellow'){
            $(this).removeClass();
            $(this).addClass('bgYellow');
        }else if(iro == 'orange'){
            $(this).removeClass();
            $(this).addClass('bgOrange');
        }else if(iro == 'pink'){
            $(this).removeClass();
            $(this).addClass('bgPink');
        }else if(iro == 'purple'){
            $(this).removeClass();
            $(this).addClass('bgPurple');
        }else{
            $(this).removeClass();
        }
    });
    $('#tbclear').click(function (){
        $('#bingo td').removeClass();
            
    });
    // 画像保存
    $('#tbload').click(function (){
        html2canvas(document.querySelector("#bingo")).then(canvas => { 
            let downloadEle = document.createElement("a");
            downloadEle.href = canvas.toDataURL("image/png");
            downloadEle.download = "bingo.png";
            downloadEle.click();
        });
    });
});
       