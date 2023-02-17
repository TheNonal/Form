
$(".dws-form").on("click", ".tab", function() { //функция удаления и добавления класса active
    $(".dws-form .tab").removeClass('active');
    $(this).addClass('active');
});

$(".dws-form").find(".active").removeClass("active"); //находим и удаляем классы active

$(this).addClass("active");
 $(".tab-form").eq($(this).index()).addClass("active");

