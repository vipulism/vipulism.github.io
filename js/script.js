$(document).ready(function () {
    emitter2 = new particle_emitter({
         image: ["images/bug1.gif", "images/bug2.gif", "images/bug3.gif", "images/bug4.gif"],
          center: ["0", "10"], offset: [0, 0], radius: 5, size: 10, velocity: 10, decay: 800 }),
           emitter2.start()
}), $(document).ready(function () {
     skrollr.init({ edgeStrategy: "set", easing: {
          WTF: Math.random, inverted: function (t) { return 1 - t } } }) }),
           $(document).ready(function () {
                $.firefly({ images: ["images/bird.gif", "images/bird2.gif", "images/bird3.gif"], total: 3 }) }),
                 $(document).ready(function () { 
                     function t() { 
                         $(".ship img, .bugs ").css({ left: "110%" }), $(".ship img, .bugs ").animate({ position: "absolute", left: "-10%", marginLeft: "-400px" }, 5e4, "linear", 
                         function () { t() }) } 
                         function e() { $(".building-bg").css({ left: "0%" }), $(".building-bg").animate({ left: "-100%" }, 8e4, "linear", 
                         function () { $(".building-bg").animate({ left: "0%" }, 8e4, "linear", 
                         function () { e() }) }) } t(), e(), $(".arrow2").click(function () { 
                             return $("html, body").animate({ scrollTop: "+=400px" }, "slow"), !1 }),
                              $(".about, .scroll-down").click(function () { 
                                  return $("html, body").animate({ scrollTop: "1000px" }, 2500), !1 }),
                                   $(".skills, .scroll-down2").click(function () { 
                                       return $("html, body").animate({ scrollTop: "1900px" }, 4e3), !1 }),
                                        $(".download").click(function () { 
                                            return $("html, body").animate({ scrollTop: "2200px" }, 2500), !1 }),
                                             $(".contact").click(function () {
                                                  return $("html, body").animate({ scrollTop: "2400px" }, 3e3), !1 }), $(window).scroll(function i() { var t = $(window).scrollTop(); t >= 2400 ? $("#canvas").animate({ left: "200px" }, 1e4, i) : 2300 >= t && $("#canvas").css({ left: "-550px" }) }),
 $(window).scroll(function n() {
      function t() { 
          $(".twitter-bird").css("left") >= "399" ? $(".t-add").fadeIn(600) : $(".t-add").hide() } 
          var e = $(window).scrollTop();
           e >= 2400 ? ($(".twitter-bird").animate({ left: "400px" }, 1e4, n), t()) : 2300 >= e && ($(".twitter-bird").css({ left: "-150px" }), $(".t-add").hide()) }) }), $(document).ready(function () { var t = window.screen, e = q.width = t.width, i = q.height = t.height, n = Array(256).join(1).split(""), o = function () { q.getContext("2d").fillStyle = "rgba(255,255,255,.05)", q.getContext("2d").fillRect(0, 0, e, i), q.getContext("2d").fillStyle = "#666", n.map(function (t, e) { text = String.fromCharCode(400 + 33 * Math.random()), x_pos = 10 * e, q.getContext("2d").fillText(text, x_pos, t), n[e] = t > 758 + 1e4 * Math.random() ? 0 : t + 10 }) }; setInterval(o, 33) }), $(document).ready(function () { $(".btn-blob").hover(function () { $(this).toggleClass("blob") }) });