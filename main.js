// メニューバー
$('#toggle').click(function() {
   $(this).toggleClass("active");
   $('#overlay').toggleClass("open");
   if ($("html div").not("#overlay").hasClass("blur")){
      $("html div").not("#overlay").not(".button_container").removeClass("blur")
   }else{
      $("html div").not("#overlay").not(".button_container").addClass("blur")
   }
});
    
// ポートフォリオページの作品表示
// ALLが選択された時、動画とwebとAIを表示にする
$("#slide-all").click(function(){
    $(".AI_portfolio").removeClass("delete");
    $(".video_portfolio").removeClass("delete");
    $(".web_portfolio").removeClass("delete");
});
// webが選択された時、動画とAIを非表示にする
$("#slide-web").click(function(){
    $(".web_portfolio").removeClass("delete");
    $(".video_portfolio").addClass("delete");
    $(".AI_portfolio").addClass("delete");
});
// 動画が選択された時、webとAIを非表示にする
$("#slide-video").click(function(){
    $(".video_portfolio").removeClass("delete");
    $(".web_portfolio").addClass("delete");
    $(".AI_portfolio").addClass("delete");
});
// AIが選択された時、動画とwebを非表示にする
$("#slide-AI").click(function(){
    $(".AI_portfolio").removeClass("delete");
    $(".video_portfolio").addClass("delete");
    $(".web_portfolio").addClass("delete");
});
