var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function () {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function ($) {
    $.fn.typewriter = function () {
        this.each(function () {
            var $ele = $(this);
            // แยกแต่ละ .say ออกมา fade in ทีละบรรทัด
            var spans = $ele.find('.say');
            spans.css({ opacity: 0, transform: 'translateY(16px)', display: 'inline-block', transition: 'opacity 0.6s ease, transform 0.6s ease' });
            spans.each(function(i) {
                var $s = $(this);
                setTimeout(function() {
                    $s.css({ opacity: 1, transform: 'translateY(0)' });
                }, i * 700);
            });
        });
        return this;
    };
})(jQuery);

function timeElapse(date) {
    var current = new Date(); // ← CORREGIDO
	current.setHours(current.getHours() - 1);
    var seconds = (current.getTime() - date.getTime()) / 1000;

    var days = Math.floor(seconds / (3600 * 24));
    seconds = seconds % (3600 * 24);

    var hours = Math.floor(seconds / 3600);
    if (hours < 10) hours = "0" + hours;

    seconds = seconds % 3600;
    var minutes = Math.floor(seconds / 60);
    if (minutes < 10) minutes = "0" + minutes;

    seconds = Math.floor(seconds % 60);
    if (seconds < 10) seconds = "0" + seconds;

    var result = " <span class=\"digit\">" + days + "</span> días " +
        "<span class=\"digit\">" + hours + "</span> horas " +
        "<span class=\"digit\">" + minutes + "</span> minutos " +
        "<span class=\"digit\">" + seconds + "</span> segundos";
    $("#clock").html(result);
}
