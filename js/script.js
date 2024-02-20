var _____WB$wombat$assign$function_____ = function (name) { return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function (obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");

  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");


  (function(w, C) {
    function v() {
        var e = D.elements;
        return "string" == typeof e ? e.split(" ") : e
    }

    function z(f) {
        var e = u[f[d]];
        e || (e = {}, A++, f[d] = A, u[A] = e);
        return e
    }

    function c(f, e, g) {
        e || (e = C);
        if (B) {
            return e.createElement(f)
        }
        g || (g = z(e));
        e = g.cache[f] ? g.cache[f].cloneNode() : a.test(f) ? (g.cache[f] = g.createElem(f)).cloneNode() : g.createElem(f);
        return e.canHaveChildren && !F.test(f) ? g.frag.appendChild(e) : e
    }

    function E(f, e) {
        if (!e.cache) {
            e.cache = {}, e.createElem = f.createElement, e.createFrag = f.createDocumentFragment, e.frag = e.createFrag()
        }
        f.createElement = function(g) {
            return !D.shivMethods ? e.createElem(g) : c(g, f, e)
        };
        f.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + v().join().replace(/\w+/g, function(g) {
            e.createElem(g);
            e.frag.createElement(g);
            return 'c("' + g + '")'
        }) + ");return n}")(D, e.frag)
    }

    function b(f) {
        f || (f = C);
        var e = z(f);
        if (D.shivCSS && !y && !e.hasCSS) {
            var h, g = f;
            h = g.createElement("p");
            g = g.getElementsByTagName("head")[0] || g.documentElement;
            h.innerHTML = "x<style>article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}</style>";
            h = g.insertBefore(h.lastChild, g.firstChild);
            e.hasCSS = !!h
        }
        B || E(f, e);
        return f
    }
    var x = w.html5 || {},
        F = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        a = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        y, d = "_html5shiv",
        A = 0,
        u = {},
        B;
    (function() {
        try {
            var f = C.createElement("a");
            f.innerHTML = "<xyz></xyz>";
            y = "hidden" in f;
            var e;
            if (!(e = 1 == f.childNodes.length)) {
                C.createElement("a");
                var h = C.createDocumentFragment();
                e = "undefined" == typeof h.cloneNode || "undefined" == typeof h.createDocumentFragment || "undefined" == typeof h.createElement
            }
            B = e
        } catch (g) {
            B = y = !0
        }
    })();
    var D = {
        elements: x.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup main mark meter nav output progress section summary time video",
        version: "3.6.2",
        shivCSS: !1 !== x.shivCSS,
        supportsUnknownElements: B,
        shivMethods: !1 !== x.shivMethods,
        type: "default",
        shivDocument: b,
        createElement: c,
        createDocumentFragment: function(g, f) {
            g || (g = C);
            if (B) {
                return g.createDocumentFragment()
            }
            for (var f = f || z(g), l = f.frag.cloneNode(), k = 0, j = v(), i = j.length; k < i; k++) {
                l.createElement(j[k])
            }
            return l
        }
    };
    w.html5 = D;
    b(C)
})(this, document);
(function(w, C) {
    function v() {
        var e = D.elements;
        return "string" == typeof e ? e.split(" ") : e
    }

    function z(f) {
        var e = u[f[d]];
        e || (e = {}, A++, f[d] = A, u[A] = e);
        return e
    }

    function c(f, e, g) {
        e || (e = C);
        if (B) {
            return e.createElement(f)
        }
        g || (g = z(e));
        e = g.cache[f] ? g.cache[f].cloneNode() : a.test(f) ? (g.cache[f] = g.createElem(f)).cloneNode() : g.createElem(f);
        return e.canHaveChildren && !F.test(f) ? g.frag.appendChild(e) : e
    }

    function E(f, e) {
        if (!e.cache) {
            e.cache = {}, e.createElem = f.createElement, e.createFrag = f.createDocumentFragment, e.frag = e.createFrag()
        }
        f.createElement = function(g) {
            return !D.shivMethods ? e.createElem(g) : c(g, f, e)
        };
        f.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + v().join().replace(/\w+/g, function(g) {
            e.createElem(g);
            e.frag.createElement(g);
            return 'c("' + g + '")'
        }) + ");return n}")(D, e.frag)
    }

    function b(f) {
        f || (f = C);
        var e = z(f);
        if (D.shivCSS && !y && !e.hasCSS) {
            var h, g = f;
            h = g.createElement("p");
            g = g.getElementsByTagName("head")[0] || g.documentElement;
            h.innerHTML = "x<style>article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}</style>";
            h = g.insertBefore(h.lastChild, g.firstChild);
            e.hasCSS = !!h
        }
        B || E(f, e);
        return f
    }
    var x = w.html5 || {},
        F = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        a = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        y, d = "_html5shiv",
        A = 0,
        u = {},
        B;
    (function() {
        try {
            var f = C.createElement("a");
            f.innerHTML = "<xyz></xyz>";
            y = "hidden" in f;
            var e;
            if (!(e = 1 == f.childNodes.length)) {
                C.createElement("a");
                var h = C.createDocumentFragment();
                e = "undefined" == typeof h.cloneNode || "undefined" == typeof h.createDocumentFragment || "undefined" == typeof h.createElement
            }
            B = e
        } catch (g) {
            B = y = !0
        }
    })();
    var D = {
        elements: x.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup main mark meter nav output progress section summary time video",
        version: "3.6.2",
        shivCSS: !1 !== x.shivCSS,
        supportsUnknownElements: B,
        shivMethods: !1 !== x.shivMethods,
        type: "default",
        shivDocument: b,
        createElement: c,
        createDocumentFragment: function(g, f) {
            g || (g = C);
            if (B) {
                return g.createDocumentFragment()
            }
            for (var f = f || z(g), l = f.frag.cloneNode(), k = 0, j = v(), i = j.length; k < i; k++) {
                l.createElement(j[k])
            }
            return l
        }
    };
    w.html5 = D;
    b(C)
})(this, document);
var background = transparent_renderer();
var imageObj = new Image();
fromGroup = null;

function redraw() {
    renderAvatar($("#stroke_size").val(), $("#pixel_size").val(), $("#double_stroke:checked").val(), $("#separate_legs:checked").val(), $("#show_hat:checked").val(), $("#stroke_colour").val(), imageObj, $("#mosaic:checked").val(), $("#mosaic_dividers").val(), 0.95, $("#sepia:checked").val(), $("#sepia_level").val(), $("input[name='avatar_type']:checked").val())
}

function getDeviders(a) {
    return (function(d, c) {
        while (d--) {
            c[d] = d + 1
        }
        return c
    })(a, []).filter(function(b) {
        return b <= 7 && a % b == 0
    })
}

function rebuildDividers(d) {
    var c = getDeviders(d);
    var b = $("#mosaic_dividers");
    var a = b.val();
    b.html("");
    c.map(function(e) {
        b.append('<option value="' + e + '">' + e + "</option")
    });
    b.val(Math.min(a, d)).attr("selected", true)
}

function transparent_renderer() {
    return function(a, b) {}
}

function radial_renderer() {
    return function(c, b) {
        c.rect(0, 0, b.width, b.height);
        var a = c.createRadialGradient(b.width / 2, b.height / 2, 10, b.width / 2, b.height / 2, 600);
        a.addColorStop(0, $("#start_color").val());
        a.addColorStop(1, $("#end_color").val());
        c.fillStyle = a;
        c.fill()
    }
}

$("#start_color, #end_color, #show_hat, #double_stroke, #separate_legs, #mosaic").on("input", function() {
    redraw(); // Call redraw() function when color changes
});

function init() {
    $("input[name=bg]").change(function() {
        console.log($(this).val());
        $(".bg_controls").hide();
        $("#bg_controls_" + $(this).val()).show();
        background = eval($(this).val() + "_renderer").call();
        redraw()
    });
    $("#input").change(function(e) {
        imageObj.src = URL.createObjectURL(e.target.files[0])
    });
    $(".tooltipitem").tooltip({
        container: "body"
    });
    $("#mosaic_dividers").change(function() {
        redraw()
    });
    $(".control").click(function() {
        redraw()
    });

    $('#stroke_colour').on('input', function() {
        redraw();
    });

    $("#pixel_size_slider").on("input", function() {
        var pixelSize = Math.floor($(this).val() / 5);
        $("#pixel_size").val(pixelSize);
        rebuildDividers(pixelSize);
        redraw();
    });
    
    $("#stroke_size_slider").on("input", function() {
        var strokeSize = $(this).val();
        $("#stroke_size").val(strokeSize);
        rebuildDividers(strokeSize);
        redraw();
    }); 

    rebuildDividers($("#pixel_size").val());

    $("#sepia").change(function() {
        redraw();
    });

    $("#sepia_level_slider").on("input", function() {
        var sepiaSize = $(this).val();
        $("#sepia_level").val(sepiaSize);
        rebuildDividers(sepiaSize);
        redraw();
    }); 

    $("input[name='avatar_type']").change(function() {
        if ($("input[name='avatar_type']:checked").val() == "round") {
            $(".hideable").hide()
        } else {
            $(".hideable").show()
        }
        redraw()
    });
    imageObj.onload = function() {
        if (imageObj.width == 64 && imageObj.height == 64) {
            // Crop the image to 64x32 if it's 64x64
            var canvas = document.createElement('canvas');
            canvas.width = 64;
            canvas.height = 32;
            var ctx = canvas.getContext('2d');
            ctx.drawImage(imageObj, 0, 0, 64, 32, 0, 0, 64, 32);
            imageObj.src = canvas.toDataURL(); // Update the image source to the cropped image
            imageObj.onload = function() {
                redraw();
            };
        }
        else if (imageObj.width != 64 || imageObj.height != 32) {
            $("#errors").append('<div class="alert alert-danger alert-dismissible fade show" role="alert"><strong>Ooops!</strong> Only standard 64x32 or 64x64 skin files accepted.<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>')
        } else {
            redraw()
        }
    };
    
    //getSkinFile(decodeURI(location.hash.replace(/.*#([^&]*).*/, "$1")), false)
}

// This one is not working, had to figure a fix.
function getSkinFile(d, c) {
    console.log(d);
    var b;
    var a;
    if (d != "" && (b = URIToArray(d)["skin"]) != undefined) {
        imageObj.src = "/from_skins?url=" + encodeURIComponent(b)
    } else {
        if (d != "" && (a = URIToArray(d)["nick"]) != undefined) {
            $("#nick").val(a);
            $("#download_skin").click()
        } else {
            if (c) {
                imageObj.src = $("a.examples:last").attr("href")
            } else {
                getSkinFile(decodeURI(location.search.replace(/.*hash\=([^&]*).*/, "$1")), true)
            }
        }
    }
}

function URIToArray(c) {
    var b = {};
    var d = decodeURIComponent(c).split("&");
    for (var a = 0; a < d.length; a++) {
        var e = d[a].split("=");
        b[decodeURIComponent(e[0])] = decodeURIComponent(decodeURIComponent(e[1]).replace(/\+/g, "%20"))
    }
    return b
}
$(document).ready(function() {
    init()
});
var W3CDOM = (document.createElement && document.getElementsByTagName);

function initFileUploads() {
    if (!W3CDOM) {
        return
    }
    var c = document.createElement("input");
    c.className = "input-medium";
    var d = document.createElement("div");
    d.className = "fakefile";
    d.appendChild(c);
    var a = document.getElementsByTagName("input");
    for (var b = 0; b < a.length; b++) {
        if (a[b].type != "file") {
            continue
        }
        if (a[b].parentNode.className != "fileinputs") {
            continue
        }
        a[b].className = "file hidden";
        var e = d.cloneNode(true);
        a[b].parentNode.appendChild(e);
        a[b].relatedElement = e.getElementsByTagName("input")[0];
        a[b].onchange = a[b].onmouseout = function() {
            this.relatedElement.value = this.value
        }
    }
}
initFileUploads();
var r = [0, 0, 0, 1, 1, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 7, 7, 7, 7, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 11, 11, 12, 12, 12, 12, 13, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 17, 18, 19, 19, 20, 21, 22, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 39, 40, 41, 42, 44, 45, 47, 48, 49, 52, 54, 55, 57, 59, 60, 62, 65, 67, 69, 70, 72, 74, 77, 79, 81, 83, 86, 88, 90, 92, 94, 97, 99, 101, 103, 107, 109, 111, 112, 116, 118, 120, 124, 126, 127, 129, 133, 135, 136, 140, 142, 143, 145, 149, 150, 152, 155, 157, 159, 162, 163, 165, 167, 170, 171, 173, 176, 177, 178, 180, 183, 184, 185, 188, 189, 190, 192, 194, 195, 196, 198, 200, 201, 202, 203, 204, 206, 207, 208, 209, 211, 212, 213, 214, 215, 216, 218, 219, 219, 220, 221, 222, 223, 224, 225, 226, 227, 227, 228, 229, 229, 230, 231, 232, 232, 233, 234, 234, 235, 236, 236, 237, 238, 238, 239, 239, 240, 241, 241, 242, 242, 243, 244, 244, 245, 245, 245, 246, 247, 247, 248, 248, 249, 249, 249, 250, 251, 251, 252, 252, 252, 253, 254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
    g = [0, 0, 1, 2, 2, 3, 5, 5, 6, 7, 8, 8, 10, 11, 11, 12, 13, 15, 15, 16, 17, 18, 18, 19, 21, 22, 22, 23, 24, 26, 26, 27, 28, 29, 31, 31, 32, 33, 34, 35, 35, 37, 38, 39, 40, 41, 43, 44, 44, 45, 46, 47, 48, 50, 51, 52, 53, 54, 56, 57, 58, 59, 60, 61, 63, 64, 65, 66, 67, 68, 69, 71, 72, 73, 74, 75, 76, 77, 79, 80, 81, 83, 84, 85, 86, 88, 89, 90, 92, 93, 94, 95, 96, 97, 100, 101, 102, 103, 105, 106, 107, 108, 109, 111, 113, 114, 115, 117, 118, 119, 120, 122, 123, 124, 126, 127, 128, 129, 131, 132, 133, 135, 136, 137, 138, 140, 141, 142, 144, 145, 146, 148, 149, 150, 151, 153, 154, 155, 157, 158, 159, 160, 162, 163, 164, 166, 167, 168, 169, 171, 172, 173, 174, 175, 176, 177, 178, 179, 181, 182, 183, 184, 186, 186, 187, 188, 189, 190, 192, 193, 194, 195, 195, 196, 197, 199, 200, 201, 202, 202, 203, 204, 205, 206, 207, 208, 208, 209, 210, 211, 212, 213, 214, 214, 215, 216, 217, 218, 219, 219, 220, 221, 222, 223, 223, 224, 225, 226, 226, 227, 228, 228, 229, 230, 231, 232, 232, 232, 233, 234, 235, 235, 236, 236, 237, 238, 238, 239, 239, 240, 240, 241, 242, 242, 242, 243, 244, 245, 245, 246, 246, 247, 247, 248, 249, 249, 249, 250, 251, 251, 252, 252, 252, 253, 254, 255],
    b = [53, 53, 53, 54, 54, 54, 55, 55, 55, 56, 57, 57, 57, 58, 58, 58, 59, 59, 59, 60, 61, 61, 61, 62, 62, 63, 63, 63, 64, 65, 65, 65, 66, 66, 67, 67, 67, 68, 69, 69, 69, 70, 70, 71, 71, 72, 73, 73, 73, 74, 74, 75, 75, 76, 77, 77, 78, 78, 79, 79, 80, 81, 81, 82, 82, 83, 83, 84, 85, 85, 86, 86, 87, 87, 88, 89, 89, 90, 90, 91, 91, 93, 93, 94, 94, 95, 95, 96, 97, 98, 98, 99, 99, 100, 101, 102, 102, 103, 104, 105, 105, 106, 106, 107, 108, 109, 109, 110, 111, 111, 112, 113, 114, 114, 115, 116, 117, 117, 118, 119, 119, 121, 121, 122, 122, 123, 124, 125, 126, 126, 127, 128, 129, 129, 130, 131, 132, 132, 133, 134, 134, 135, 136, 137, 137, 138, 139, 140, 140, 141, 142, 142, 143, 144, 145, 145, 146, 146, 148, 148, 149, 149, 150, 151, 152, 152, 153, 153, 154, 155, 156, 156, 157, 157, 158, 159, 160, 160, 161, 161, 162, 162, 163, 164, 164, 165, 165, 166, 166, 167, 168, 168, 169, 169, 170, 170, 171, 172, 172, 173, 173, 174, 174, 175, 176, 176, 177, 177, 177, 178, 178, 179, 180, 180, 181, 181, 181, 182, 182, 183, 184, 184, 184, 185, 185, 186, 186, 186, 187, 188, 188, 188, 189, 189, 189, 190, 190, 191, 191, 192, 192, 193, 193, 193, 194, 194, 194, 195, 196, 196, 196, 197, 197, 197, 198, 199];
var manipulateCanvas = document.createElement("canvas");
manipulateCanvas.width = 50;
manipulateCanvas.height = 50;
var figureImg = null;

function renderOriginalFigure(d, q, i, o, n, e, D, A, a, u, j, F, z, v) {
    d = parseInt(d);
    var C = Math.max(Math.ceil(q * d / 2 / 100), 1);
    var p = 2 * C;
    q = parseInt(q);
    var B = i.height / 2 - (12 + (o ? 0 : 1)) * q / 2 - (4 + (n ? 1 : 0)) * p / 2;
    background(e, i);
    var h = D;
    e.imageSmoothingEnabled = false;
    e.mozImageSmoothingEnabled = false;
    e.webkitImageSmoothingEnabled = false;
    e.translate(i.width / 2, B);
    e.beginPath();
    e.rect(-8 * q / 2 - C, C, (8) * q + p, (8) * q + p);
    e.lineWidth = p;
    e.strokeStyle = A;
    e.stroke();
    for (var t = 0; t < 8; t++) {
        for (var s = 0; s < 8; s++) {
            e.drawImage(h, 8 + t, 8 + s, 1, 1, -8 * q / 2 + t * q, p + s * q, q, q);
            if (a) {
                e.drawImage(h, 40 + t, 8 + s, 1, 1, -8 * q / 2 + t * q, p + s * q, q, q)
            }
        }
    }
    e.translate(0, 8 * q + (1 + (n ? 1 : 0)) * p);
    e.beginPath();
    e.rect(-(2) * q / 2 - C, C, (2) * q + p, (3) * q + p);
    e.stroke();
    e.drawImage(h, 20, 20, 8, 12, -2 * q / 2, p, 2 * q, 3 * q);
    var f = function() {
        e.beginPath();
        e.rect(-(2) * q / 2 - p - q - C, C, q + p, 2 * q + (o ? 0 : 1) * q + p);
        e.stroke();
        e.drawImage(h, 44, 20, 4, 12, -2 * q / 2 - q - p, p, 1 * q, 2 * q + (o ? 0 : 1) * q)
    };
    f();
    e.save();
    e.scale(-1, 1);
    f();
    e.restore();
    e.translate(0, 3 * q + p);
    e.beginPath();
    e.rect(-(2) * q / 2 - C, C, 2 * q + p, (1 + ((o ? 0 : 2))) * q + (o ? 1 : 0) * p);
    e.stroke();
    e.drawImage(h, 4, 20, 4, 12, -2 * q / 2, p - (o ? 0 : p), 1 * q, (1) * q + (o ? 0 : 2) * q);
    e.scale(-1, 1);
    e.drawImage(h, 4, 20, 4, 12, -2 * q / 2, p - (o ? 0 : p), 1 * q, (1) * q + (o ? 0 : 2) * q);
    if (u) {
        var E = q / j;
        var w = B + 8 * q + (n ? 3 : 2) * p;
        var c = 2 * q + (o ? 0 : 1) * q;
        var k = w + 3 * q + (o ? 1 : 0) * p;
        var m = (1) * q + (o ? 0 : 2) * q;
        var l = [{
            x: i.width / 2 - q,
            y: w,
            w: 2 * q,
            h: 3 * q
        }, {
            x: i.width / 2 - 2 * q - p,
            y: w,
            w: 1 * q,
            h: c
        }, {
            x: i.width / 2 + q + p,
            y: w,
            w: 1 * q,
            h: c
        }, {
            x: i.width / 2 - q,
            y: k,
            w: 1 * q,
            h: m
        }, {
            x: i.width / 2,
            y: k,
            w: 1 * q,
            h: m
        }];
        l.map(function(y) {
            var G = e.getImageData(y.x, y.y, y.w, y.h);
            var x = mosaic(G, E, y.w, F);
            e.putImageData(x, y.x, y.y, 0, 0, y.w, y.h)
        })
    }
    if (z) {
        doSepiaFilter(e, i, v)
    }
    e.restore()
}

function renderRoundedFigure(c, m, h, k, j, d, E, w, a, s, i, F, v, t, n) {
    if (figureImg == undefined) {
        figureImg = new Image();
        figureImg.onload = redraw;
        figureImg.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAASCAMAAABYd88+AAAAAXNSR0IArs4c6QAAAMBQTFRFDQ0NFxccCAgIBwcHBAQEnJKNppqVCwsLEAgIqp6XopiTMjIylW9OPz09a2trWlpadG9vCQkJ2Jtr//LyCgoKyIxb4KRs4Ztr2ZNjyY5b2KNt8qx06Kx06aRt0Z5pSyAGQxgEOxgE+byEGRkZ7+/vQyAGVCAHUygPVCAO+bySdFE9KTEq9/f3QyANXDAWfFlFbEk0XCgVSygPe004fVE9W0IsZEo0dUk1ZTkfSygUZTklbUEtZEEtXDAdUzAWAAAAe6MnPQAAAAF0Uk5TAEDm2GYAAAABYktHRACIBR1IAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3gEbBBUvxfVdQAAAADFJREFUCNdjYGCwhwIGIAATUAacDWJSzEExGp+l9gjtuDkM9jAOsgn2cFPg9oGtABMAkNsPQ5CEvx8AAAAASUVORK5CYII=";
        return
    }
    var D = Math.max(Math.ceil(m / 2), 1);
    var l = D * 2;
    m = l;
    m = parseInt(m);
    var z = h.height / 2 - (12 + (k ? 0 : 1)) * m / 2 - (4 + (j ? 1 : 0)) * l / 2;
    var p = 0;
    var C = function() {
        if (p == 2) {
            d.restore();
            if (s) {
                var K = m / i;
                var x = z + 8 * m + 2 * l;
                var I = 3 * m;
                var J = x + 6 * m;
                var y = (1) * m;
                var G = [{
                    x: h.width / 2 - 3 * m,
                    y: x,
                    w: 6 * m,
                    h: 6 * m
                }, {
                    x: h.width / 2 - 4 * m - l,
                    y: x + m,
                    w: 1 * m,
                    h: I
                }, {
                    x: h.width / 2 + 3 * m + l,
                    y: x + m,
                    w: 1 * m,
                    h: I
                }, {
                    x: h.width / 2 - 3 * m,
                    y: J,
                    w: 2 * m,
                    h: y
                }, {
                    x: h.width / 2 + m,
                    y: J,
                    w: 2 * m,
                    h: y
                }];
                G.map(function(M) {
                    var N = d.getImageData(M.x, M.y, M.w, M.h);
                    var L = mosaic(N, K, M.w, F);
                    d.putImageData(L, M.x, M.y, 0, 0, M.w, M.h)
                })
            }
            if (v) {
                doSepiaFilter(d, h, t)
            }
            var H = d.getImageData(0, 0, h.width, h.height);
            n.getContext("2d").putImageData(H, 0, 0);
            p = 0
        } else {
            p++
        }
    };
    background(d, h);
    d.translate(h.width / 2, z);
    var f = E;
    d.imageSmoothingEnabled = false;
    d.mozImageSmoothingEnabled = false;
    d.webkitImageSmoothingEnabled = false;
    d.fillStyle = w;
    for (var q = 0; q < 12; q++) {
        for (var o = 0; o < 18; o++) {
            d.drawImage(figureImg, q, o, 1, 1, -12 * m / 2 + q * m, o * m, m, m)
        }
    }
    var A = manipulateCanvas.getContext("2d");
    A.drawImage(f, 8, 8, 1, 8, 0, 0, 1, 6);
    A.drawImage(f, 8 + 7, 8, 1, 8, 9, 0, 1, 6);
    if (a) {
        A.drawImage(f, 40, 8, 1, 8, 0, 0, 1, 6);
        A.drawImage(f, 40 + 7, 8, 1, 8, 9, 0, 1, 6)
    }
    var B = new Image();
    B.onload = function() {
        for (var G = 0; G < 10; G++) {
            for (var H = 0; H < 6; H++) {
                d.drawImage(B, G, H, 1, 1, -10 * m / 2 + G * m, (H + 1) * m + l, m, m)
            }
        }
        for (var G = 0; G < 8; G++) {
            for (var H = 0; H < 8; H++) {
                d.drawImage(f, 8 + G, 8 + H, 1, 1, -8 * m / 2 + G * m, l + H * m, m, m);
                if (a) {
                    d.drawImage(f, 40 + G, 8 + H, 1, 1, -8 * m / 2 + G * m, l + H * m, m, m)
                }
            }
        }
        C()
    };
    B.src = manipulateCanvas.toDataURL("image/png");
    d.drawImage(f, 44, 20, 4, 12, -5 * m, 11 * m, m, 3 * m);
    d.drawImage(f, 44, 20, 4, 12, 5 * m - m, 11 * m, m, 3 * m);
    var e = new Image();
    e.onload = function() {
        d.drawImage(e, 1, 0, 6, 6, -3 * m, 10 * m, 6 * m, 6 * m);
        d.drawImage(e, 0, 0, 1, 1, -4 * m, 10 * m, m, m);
        d.drawImage(e, 0, 0, 1, 1, 3 * m, 10 * m, m, m);
        C()
    };
    A.drawImage(f, 20, 20, 8, 12, 0, 0, 8, 6);
    e.src = manipulateCanvas.toDataURL("image/png");
    var u = new Image();
    A.drawImage(f, 4, 20, 4, 12, 0, 0, 4, 12);
    u.onload = function() {
        d.drawImage(u, 0, 0, 4, 12, -3 * m, 16 * m, 2 * m, m);
        d.drawImage(u, 0, 0, 4, 12, 1 * m, 16 * m, 2 * m, m);
        C()
    };
    u.src = manipulateCanvas.toDataURL("image/png")
}

function renderAvatar(c, k, i, j, a, p, t, l, h, v, o, m, n) {
    var f = document.getElementById("myCanvas");
    f.width = f.width;
    f.height = f.height;
    var d = f.getContext("2d");
    d.setTransform(1, 0, 0, 1, 0, 0);
    d.save();
    if ("round" == n) {
        var q = document.createElement("canvas");
        q.width = f.width;
        q.height = f.height;
        renderRoundedFigure(c, k, q, j, i, q.getContext("2d"), t, p, a, l, h, v, o, m, f)
    } else {
        renderOriginalFigure(c, k, f, j, i, d, t, p, a, l, h, v, o, m)
    }
    if (fromGroup != undefined && fromGroup != null) {
        d.font = "bold 18pt Arial";
        var s = f.width - d.measureText(fromGroup).width - 20;
        var e = f.height - u(d.font);
        d.fillText(fromGroup, s, e);

        function u(x) {
            var y = document.createElement("span");
            y.appendChild(document.createTextNode("height"));
            document.body.appendChild(y);
            y.style.cssText = "font: " + x + "; white-space: nowrap; display: inline;";
            var w = y.offsetHeight;
            document.body.removeChild(y);
            return w
        }
    }
}

function doSepiaFilter(a, f, k) {
    var l = a.getImageData(0, 0, f.width, f.height);
    for (var h = 0; h < l.data.length; h += 4) {
        l.data[h] = r[l.data[h]];
        l.data[h + 1] = g[l.data[h + 1]];
        l.data[h + 2] = b[l.data[h + 2]];
        if (k > 0) {
            var d = Math.round(k - Math.random() * k);
            for (var e = 0; e < 3; e++) {
                var c = d + l.data[h + e];
                l.data[h + e] = (c > 255) ? 255 : c
            }
        }
    }
    a.putImageData(l, 0, 0)
}

function mosaic(c, k, l, j) {
    for (var e = 0, d = c.data, a = d.length; e < a >> 2; e++) {
        var f = e << 2;
        var h = {
            r: d[f],
            g: d[f + 1],
            b: d[f + 2]
        };
        c = applyFilters(k, l, c, f, h, j)
    }
    return c
}

function applyFilters(k, l, c, f, h, i) {
    var e = c.data;
    var o = (i == 0 ? 0.95 : i);
    var j = f >> 2;
    var m = Math.floor(j / l);
    var a = m % k;
    var n = j - (m * l);
    var d = n % k;
    if (a) {
        j -= a * l
    }
    if (d) {
        j -= d
    }
    j = j << 2;
    e = setRGB(e, f, findColorDifference(o, e[j], h.r), findColorDifference(o, e[j + 1], h.g), findColorDifference(o, e[j + 2], h.b));
    return c
}

function setRGB(f, c, e, d, a) {
    f[c] = e;
    f[c + 1] = d;
    f[c + 2] = a;
    return f
}

function findColorDifference(c, a, d) {
    return (c * a + (1 - c) * d)
}

function resample_hermite(c, a, o, u, l) {
    var D = Date.now();
    var I = c.getContext("2d").getImageData(0, 0, a, o);
    var F = c.getContext("2d").getImageData(0, 0, u, l);
    var G = I.data;
    var d = F.data;
    var k = a / u;
    var z = o / l;
    var t = Math.ceil(k / 2);
    var x = Math.ceil(z / 2);
    for (var A = 0; A < l; A++) {
        for (var B = 0; B < u; B++) {
            var C = (B + A * u) * 4;
            var s = 0;
            var E = 0;
            var y = gx_g = gx_b = gx_a = 0;
            var f = (A + 0.5) * z;
            for (var v = Math.floor(A * z); v < (A + 1) * z; v++) {
                var n = Math.abs(f - (v + 0.5)) / x;
                var h = (B + 0.5) * k;
                var q = n * n;
                for (var e = Math.floor(B * k); e < (B + 1) * k; e++) {
                    var p = Math.abs(h - (e + 0.5)) / t;
                    var m = Math.sqrt(q + p * p);
                    if (m >= -1 && m <= 1) {
                        s = 2 * m * m * m - 3 * m * m + 1;
                        if (s > 0) {
                            p = 4 * (e + v * a);
                            y += s * G[p];
                            gx_g += s * G[p + 1];
                            gx_b += s * G[p + 2];
                            gx_a += s * G[p + 3];
                            E += s
                        }
                    }
                }
            }
            d[C] = y / E;
            d[C + 1] = gx_g / E;
            d[C + 2] = gx_b / E;
            d[C + 3] = gx_a / E
        }
    }
    console.log("hermite = " + (Math.round(Date.now() - D) / 1000) + " s");
    c.getContext("2d").clearRect(0, 0, Math.max(a, u), Math.max(o, l));
    c.getContext("2d").putImageData(F, 0, 0)
};
(function(i, e, g) {
    var n = {
            beforeShow: b,
            move: b,
            change: b,
            show: b,
            hide: b,
            color: false,
            flat: false,
            showInput: false,
            showButtons: true,
            clickoutFiresChange: false,
            showInitial: false,
            showPalette: false,
            showPaletteOnly: false,
            showSelectionPalette: true,
            localStorageKey: false,
            appendTo: "body",
            maxSelectionSize: 7,
            cancelText: "cancel",
            chooseText: "choose",
            preferredFormat: false,
            className: "",
            showAlpha: false,
            theme: "sp-light",
            palette: ["fff", "000"],
            selectionPalette: [],
            disabled: false
        },
        d = [],
        j = !!/msie/i.exec(i.navigator.userAgent),
        m = (function() {
            function v(z, y) {
                return !!~("" + z).indexOf(y)
            }
            var x = document.createElement("div");
            var w = x.style;
            w.cssText = "background-color:rgba(0,0,0,.5)";
            return v(w.backgroundColor, "rgba") || v(w.backgroundColor, "hsla")
        })(),
        r = ["<div class='sp-replacer'>", "<div class='sp-preview'><div class='sp-preview-inner'></div></div>", "<div class='sp-dd'>&#9660;</div>", "</div>"].join(""),
        q = (function() {
            var v = "";
            if (j) {
                for (var w = 1; w <= 6; w++) {
                    v += "<div class='sp-" + w + "'></div>"
                }
            }
            return ["<div class='sp-container sp-hidden'>", "<div class='sp-palette-container'>", "<div class='sp-palette sp-thumb sp-cf'></div>", "</div>", "<div class='sp-picker-container'>", "<div class='sp-top sp-cf'>", "<div class='sp-fill'></div>", "<div class='sp-top-inner'>", "<div class='sp-color'>", "<div class='sp-sat'>", "<div class='sp-val'>", "<div class='sp-dragger'></div>", "</div>", "</div>", "</div>", "<div class='sp-hue'>", "<div class='sp-slider'></div>", v, "</div>", "</div>", "<div class='sp-alpha'><div class='sp-alpha-inner'><div class='sp-alpha-handle'></div></div></div>", "</div>", "<div class='sp-input-container sp-cf'>", "<input class='sp-input' type='text' spellcheck='false'  />", "</div>", "<div class='sp-initial sp-thumb sp-cf'></div>", "<div class='sp-button-container sp-cf'>", "<a class='sp-cancel' href='#'></a>", "<button class='sp-choose'></button>", "</div>", "</div>", "</div>"].join("")
        })();

    function t(B, w, z) {
        var y = [];
        for (var x = 0; x < B.length; x++) {
            var v = tinycolor(B[x]);
            var C = v.toHsl().l < 0.5 ? "sp-thumb-el sp-thumb-dark" : "sp-thumb-el sp-thumb-light";
            C += (tinycolor.equals(w, B[x])) ? " sp-thumb-active" : "";
            var A = m ? ("background-color:" + v.toRgbString()) : "filter:" + v.toFilter();
            y.push('<span title="' + v.toRgbString() + '" data-color="' + v.toRgbString() + '" class="' + C + '"><span class="sp-thumb-inner" style="' + A + ';" /></span>')
        }
        return "<div class='sp-cf " + z + "'>" + y.join("") + "</div>"
    }

    function p() {
        for (var v = 0; v < d.length; v++) {
            if (d[v]) {
                d[v].hide()
            }
        }
    }

    function o(x, v) {
        var w = e.extend({}, n, x);
        w.callbacks = {
            move: u(w.move, v),
            change: u(w.change, v),
            show: u(w.show, v),
            hide: u(w.hide, v),
            beforeShow: u(w.beforeShow, v)
        };
        return w
    }

    function s(aX, ae) {
        var aW = o(ae, aX),
            aU = aW.flat,
            U = aW.showSelectionPalette,
            w = aW.localStorageKey,
            ag = aW.theme,
            P = aW.callbacks,
            C = f(aa, 10),
            M = false,
            aF = 0,
            ac = 0,
            aG = 0,
            ar = 0,
            J = 0,
            aq = 0,
            aP = 0,
            ak = 0,
            W = 0,
            N = 0,
            av = 0,
            aQ = 1,
            af = aW.palette.slice(0),
            ah = e.isArray(af[0]) ? af : [af],
            aB = aW.selectionPalette.slice(0),
            aA = aW.maxSelectionSize,
            x = "sp-dragging",
            E = null;
        var V = aX.ownerDocument,
            L = V.body,
            B = e(aX),
            aN = false,
            aH = e(q, V).addClass(ag),
            G = aH.find(".sp-color"),
            aE = aH.find(".sp-dragger"),
            K = aH.find(".sp-hue"),
            aT = aH.find(".sp-slider"),
            ax = aH.find(".sp-alpha-inner"),
            X = aH.find(".sp-alpha"),
            ay = aH.find(".sp-alpha-handle"),
            I = aH.find(".sp-input"),
            O = aH.find(".sp-palette"),
            aV = aH.find(".sp-initial"),
            aj = aH.find(".sp-cancel"),
            F = aH.find(".sp-choose"),
            Q = B.is("input"),
            au = Q && !aU,
            aL = (au) ? e(r).addClass(ag).addClass(aW.className) : e([]),
            ao = (au) ? aL : B,
            H = aL.find(".sp-preview-inner"),
            R = aW.color || (Q && B.val()),
            aI = false,
            T = aW.preferredFormat,
            am = T,
            D = !aW.showButtons || aW.clickoutFiresChange;

        function v() {
            aH.toggleClass("sp-flat", aU);
            aH.toggleClass("sp-input-disabled", !aW.showInput);
            aH.toggleClass("sp-alpha-enabled", aW.showAlpha);
            aH.toggleClass("sp-buttons-disabled", !aW.showButtons);
            aH.toggleClass("sp-palette-disabled", !aW.showPalette);
            aH.toggleClass("sp-palette-only", aW.showPaletteOnly);
            aH.toggleClass("sp-initial-disabled", !aW.showInitial);
            aH.addClass(aW.className);
            aa()
        }

        function aC() {
            if (j) {
                aH.find("*:not(input)").attr("unselectable", "on")
            }
            v();
            if (au) {
                B.after(aL).hide()
            }
            if (aU) {
                B.after(aH).hide()
            } else {
                var a2 = aW.appendTo === "parent" ? B.parent() : e(aW.appendTo);
                if (a2.length !== 1) {
                    a2 = e("body")
                }
                a2.append(aH)
            }
            if (w && i.localStorage) {
                try {
                    var a0 = i.localStorage[w].split(",#");
                    if (a0.length > 1) {
                        delete i.localStorage[w];
                        e.each(a0, function(a4, a5) {
                            aM(a5)
                        })
                    }
                } catch (a3) {}
                try {
                    aB = i.localStorage[w].split(";")
                } catch (a3) {}
            }
            ao.bind("click.spectrum touchstart.spectrum", function(a4) {
                if (!aN) {
                    ap()
                }
                a4.stopPropagation();
                if (!e(a4.target).is("input")) {
                    a4.preventDefault()
                }
            });
            if (B.is(":disabled") || (aW.disabled === true)) {
                S()
            }
            aH.click(l);
            I.change(aJ);
            I.bind("paste", function() {
                setTimeout(aJ, 1)
            });
            I.keydown(function(a4) {
                if (a4.keyCode == 13) {
                    aJ()
                }
            });
            aj.text(aW.cancelText);
            aj.bind("click.spectrum", function(a4) {
                a4.stopPropagation();
                a4.preventDefault();
                az("cancel")
            });
            F.text(aW.chooseText);
            F.bind("click.spectrum", function(a4) {
                a4.stopPropagation();
                a4.preventDefault();
                if (at()) {
                    ai(true);
                    az()
                }
            });
            c(X, function(a6, a5, a4) {
                aQ = (a6 / aq);
                if (a4.shiftKey) {
                    aQ = Math.round(aQ * 10) / 10
                }
                aD()
            });
            c(K, function(a5, a4) {
                W = parseFloat(a4 / ar);
                aD()
            }, A, aY);
            c(G, function(bb, a9, a8) {
                if (!a8.shiftKey) {
                    E = null
                } else {
                    if (!E) {
                        var a6 = N * aF;
                        var a4 = ac - (av * ac);
                        var a5 = Math.abs(bb - a6) > Math.abs(a9 - a4);
                        E = a5 ? "x" : "y"
                    }
                }
                var a7 = !E || E === "x";
                var ba = !E || E === "y";
                if (a7) {
                    N = parseFloat(bb / aF)
                }
                if (ba) {
                    av = parseFloat((ac - a9) / ac)
                }
                aD()
            }, A, aY);
            if (!!R) {
                Z(R);
                aw();
                am = T || tinycolor(R).format;
                aM(R)
            } else {
                aw()
            }
            if (aU) {
                z()
            }

            function a1(a4) {
                if (a4.data && a4.data.ignore) {
                    Z(e(this).data("color"));
                    aD()
                } else {
                    Z(e(this).data("color"));
                    ai(true);
                    aD();
                    az()
                }
                return false
            }
            var aZ = j ? "mousedown.spectrum" : "click.spectrum touchstart.spectrum";
            O.delegate(".sp-thumb-el", aZ, a1);
            aV.delegate(".sp-thumb-el:nth-child(1)", aZ, {
                ignore: true
            }, a1)
        }

        function aM(aZ) {
            if (U) {
                var a1 = tinycolor(aZ).toRgbString();
                if (e.inArray(a1, aB) === -1) {
                    aB.push(a1);
                    while (aB.length > aA) {
                        aB.shift()
                    }
                }
                if (w && i.localStorage) {
                    try {
                        i.localStorage[w] = aB.join(";")
                    } catch (a0) {}
                }
            }
        }

        function aO() {
            var a4 = [];
            var a3 = aB;
            var a2 = {};
            var a0;
            if (aW.showPalette) {
                for (var a1 = 0; a1 < ah.length; a1++) {
                    for (var aZ = 0; aZ < ah[a1].length; aZ++) {
                        a0 = tinycolor(ah[a1][aZ]).toRgbString();
                        a2[a0] = true
                    }
                }
                for (a1 = 0; a1 < a3.length; a1++) {
                    a0 = tinycolor(a3[a1]).toRgbString();
                    if (!a2.hasOwnProperty(a0)) {
                        a4.push(a3[a1]);
                        a2[a0] = true
                    }
                }
            }
            return a4.reverse().slice(0, aW.maxSelectionSize)
        }

        function aR() {
            var aZ = aK();
            var a0 = e.map(ah, function(a1, a2) {
                return t(a1, aZ, "sp-palette-row sp-palette-row-" + a2)
            });
            if (aB) {
                a0.push(t(aO(), aZ, "sp-palette-row sp-palette-row-selection"))
            }
            O.html(a0.join(""))
        }

        function al() {
            if (aW.showInitial) {
                var aZ = aI;
                var a0 = aK();
                aV.html(t([aZ, a0], a0, "sp-palette-row-initial"))
            }
        }

        function A() {
            if (ac <= 0 || aF <= 0 || ar <= 0) {
                aa()
            }
            aH.addClass(x);
            E = null
        }

        function aY() {
            aH.removeClass(x)
        }

        function aJ() {
            var aZ = tinycolor(I.val());
            if (aZ.ok) {
                Z(aZ)
            } else {
                I.addClass("sp-validation-error")
            }
        }

        function ap() {
            if (M) {
                az()
            } else {
                z()
            }
        }

        function z() {
            var aZ = e.Event("beforeShow.spectrum");
            if (M) {
                aa();
                return
            }
            B.trigger(aZ, [aK()]);
            if (P.beforeShow(aK()) === false || aZ.isDefaultPrevented()) {
                return
            }
            p();
            M = true;
            e(V).bind("click.spectrum", az);
            e(i).bind("resize.spectrum", C);
            aL.addClass("sp-active");
            aH.removeClass("sp-hidden");
            if (aW.showPalette) {
                aR()
            }
            aa();
            aw();
            aI = aK();
            al();
            P.show(aI);
            B.trigger("show.spectrum", [aI])
        }

        function az(a0) {
            if (a0 && a0.type == "click" && a0.button == 2) {
                return
            }
            if (!M || aU) {
                return
            }
            M = false;
            e(V).unbind("click.spectrum", az);
            e(i).unbind("resize.spectrum", C);
            aL.removeClass("sp-active");
            aH.addClass("sp-hidden");
            var aZ = !tinycolor.equals(aK(), aI);
            if (aZ) {
                if (D && a0 !== "cancel") {
                    ai(true)
                } else {
                    an()
                }
            }
            P.hide(aK());
            B.trigger("hide.spectrum", [aK()])
        }

        function an() {
            Z(aI, true)
        }

        function Z(aZ, a1) {
            if (tinycolor.equals(aZ, aK())) {
                return
            }
            var a0 = tinycolor(aZ);
            var a2 = a0.toHsv();
            W = (a2.h % 360) / 360;
            N = a2.s;
            av = a2.v;
            aQ = a2.a;
            aw();
            if (a0.ok && !a1) {
                am = T || a0.format
            }
        }

        function aK(aZ) {
            aZ = aZ || {};
            return tinycolor.fromRatio({
                h: W,
                s: N,
                v: av,
                a: Math.round(aQ * 100) / 100
            }, {
                format: aZ.format || am
            })
        }

        function at() {
            return !I.hasClass("sp-validation-error")
        }

        function aD() {
            aw();
            P.move(aK());
            B.trigger("move.spectrum", [aK()])
        }

        function aw() {
            I.removeClass("sp-validation-error");
            aS();
            var a1 = tinycolor.fromRatio({
                h: W,
                s: 1,
                v: 1
            });
            G.css("background-color", a1.toHexString());
            var a5 = am;
            if (aQ < 1) {
                if (a5 === "hex" || a5 === "hex3" || a5 === "hex6" || a5 === "name") {
                    a5 = "rgb"
                }
            }
            var a2 = aK({
                    format: a5
                }),
                a6 = a2.toHexString(),
                a3 = a2.toRgbString();
            if (m || a2.alpha === 1) {
                H.css("background-color", a3)
            } else {
                H.css("background-color", "transparent");
                H.css("filter", a2.toFilter())
            }
            if (aW.showAlpha) {
                var a0 = a2.toRgb();
                a0.a = 0;
                var aZ = tinycolor(a0).toRgbString();
                var a4 = "linear-gradient(left, " + aZ + ", " + a6 + ")";
                if (j) {
                    ax.css("filter", tinycolor(aZ).toFilter({
                        gradientType: 1
                    }, a6))
                } else {
                    ax.css("background", "-webkit-" + a4);
                    ax.css("background", "-moz-" + a4);
                    ax.css("background", "-ms-" + a4);
                    ax.css("background", a4)
                }
            }
            if (aW.showInput) {
                I.val(a2.toString(a5))
            }
            if (aW.showPalette) {
                aR()
            }
            al()
        }

        function aS() {
            var a1 = N;
            var aZ = av;
            var a4 = a1 * aF;
            var a2 = ac - (aZ * ac);
            a4 = Math.max(-aG, Math.min(aF - aG, a4 - aG));
            a2 = Math.max(-aG, Math.min(ac - aG, a2 - aG));
            aE.css({
                top: a2,
                left: a4
            });
            var a0 = aQ * aq;
            ay.css({
                left: a0 - (aP / 2)
            });
            var a3 = (W) * ar;
            aT.css({
                top: a3 - ak
            })
        }

        function ai(a0) {
            var aZ = aK();
            if (Q) {
                B.val(aZ.toString(am)).change()
            }
            var a1 = !tinycolor.equals(aZ, aI);
            aI = aZ;
            aM(aZ);
            if (a0 && a1) {
                P.change(aZ);
                B.trigger("change.spectrum", [aZ])
            }
        }

        function aa() {
            aF = G.width();
            ac = G.height();
            aG = aE.height();
            J = K.width();
            ar = K.height();
            ak = aT.height();
            aq = X.width();
            aP = ay.width();
            if (!aU) {
                aH.css("position", "absolute");
                aH.offset(a(aH, ao))
            }
            aS()
        }

        function y() {
            B.show();
            ao.unbind("click.spectrum touchstart.spectrum");
            aH.remove();
            aL.remove();
            d[ab.id] = null
        }

        function Y(aZ, a0) {
            if (aZ === g) {
                return e.extend({}, aW)
            }
            if (a0 === g) {
                return aW[aZ]
            }
            aW[aZ] = a0;
            v()
        }

        function ad() {
            aN = false;
            B.attr("disabled", false);
            ao.removeClass("sp-disabled")
        }

        function S() {
            az();
            aN = true;
            B.attr("disabled", true);
            ao.addClass("sp-disabled")
        }
        aC();
        var ab = {
            show: z,
            hide: az,
            toggle: ap,
            reflow: aa,
            option: Y,
            enable: ad,
            disable: S,
            set: function(aZ) {
                Z(aZ);
                ai()
            },
            get: aK,
            destroy: y,
            container: aH
        };
        ab.id = d.push(ab) - 1;
        return ab
    }

    function a(C, D) {
        var B = 0;
        var z = C.outerWidth();
        var F = C.outerHeight();
        var v = D.outerHeight();
        var E = C[0].ownerDocument;
        var w = E.documentElement;
        var A = w.clientWidth + e(E).scrollLeft();
        var x = w.clientHeight + e(E).scrollTop();
        var y = D.offset();
        y.top += v;
        y.left -= Math.min(y.left, (y.left + z > A && A > z) ? Math.abs(y.left + z - A) : 0);
        y.top -= Math.min(y.top, ((y.top + F > x && x > F) ? Math.abs(F + v - B) : B));
        return y
    }

    function b() {}

    function l(v) {
        v.stopPropagation()
    }

    function u(w, x) {
        var y = Array.prototype.slice;
        var v = y.call(arguments, 2);
        return function() {
            return w.apply(x, v.concat(y.call(arguments)))
        }
    }

    function c(A, F, w, x) {
        F = F || function() {};
        w = w || function() {};
        x = x || function() {};
        var G = A.ownerDocument || document;
        var I = false;
        var z = {};
        var J = 0;
        var H = 0;
        var C = ("ontouchstart" in i);
        var B = {};
        B.selectstart = E;
        B.dragstart = E;
        B["touchmove mousemove"] = y;
        B["touchend mouseup"] = D;

        function E(K) {
            if (K.stopPropagation) {
                K.stopPropagation()
            }
            if (K.preventDefault) {
                K.preventDefault()
            }
            K.returnValue = false
        }

        function y(O) {
            if (I) {
                if (j && document.documentMode < 9 && !O.button) {
                    return D()
                }
                var N = O.originalEvent.touches;
                var L = N ? N[0].pageX : O.pageX;
                var K = N ? N[0].pageY : O.pageY;
                var P = Math.max(0, Math.min(L - z.left, H));
                var M = Math.max(0, Math.min(K - z.top, J));
                if (C) {
                    E(O)
                }
                F.apply(A, [P, M, O])
            }
        }

        function v(M) {
            var K = (M.which) ? (M.which == 3) : (M.button == 2);
            var L = M.originalEvent.touches;
            if (!K && !I) {
                if (w.apply(A, arguments) !== false) {
                    I = true;
                    J = e(A).height();
                    H = e(A).width();
                    z = e(A).offset();
                    e(G).bind(B);
                    e(G.body).addClass("sp-dragging");
                    if (!C) {
                        y(M)
                    }
                    E(M)
                }
            }
        }

        function D() {
            if (I) {
                e(G).unbind(B);
                e(G.body).removeClass("sp-dragging");
                x.apply(A, arguments)
            }
            I = false
        }
        e(A).bind("touchstart mousedown", v)
    }

    function f(w, y, v) {
        var x;
        return function() {
            var A = this,
                z = arguments;
            var B = function() {
                x = null;
                w.apply(A, z)
            };
            if (v) {
                clearTimeout(x)
            }
            if (v || !x) {
                x = setTimeout(B, y)
            }
        }
    }

    function h() {
        if (i.console) {
            if (Function.prototype.bind) {
                h = Function.prototype.bind.call(console.log, console)
            } else {
                h = function() {
                    Function.prototype.apply.call(console.log, console, arguments)
                }
            }
            h.apply(this, arguments)
        }
    }
    var k = "spectrum.id";
    e.fn.spectrum = function(y, v) {
        if (typeof y == "string") {
            var x = this;
            var w = Array.prototype.slice.call(arguments, 1);
            this.each(function() {
                var z = d[e(this).data(k)];
                if (z) {
                    var A = z[y];
                    if (!A) {
                        throw new Error("Spectrum: no such method: '" + y + "'")
                    }
                    if (y == "get") {
                        x = z.get()
                    } else {
                        if (y == "container") {
                            x = z.container
                        } else {
                            if (y == "option") {
                                x = z.option.apply(z, w)
                            } else {
                                if (y == "destroy") {
                                    z.destroy();
                                    e(this).removeData(k)
                                } else {
                                    A.apply(z, w)
                                }
                            }
                        }
                    }
                }
            });
            return x
        }
        return this.spectrum("destroy").each(function() {
            var z = s(this, y);
            e(this).data(k, z.id)
        })
    };
    e.fn.spectrum.load = true;
    e.fn.spectrum.loadOpts = {};
    e.fn.spectrum.draggable = c;
    e.fn.spectrum.defaults = n;
    e.spectrum = {};
    e.spectrum.localization = {};
    e.spectrum.palettes = {};
    e.fn.spectrum.processNativeColorInputs = function() {
        var w = e("<input type='color' value='!' />")[0];
        var v = w.type === "color" && w.value != "!";
        if (!v) {
            e("input[type=color]").spectrum({
                preferredFormat: "hex6"
            })
        }
    };
    (function(O) {
        var L = /^[\s,#]+/,
            G = /\s+$/,
            H = 0,
            v = Math,
            S = v.round,
            A = v.min,
            D = v.max,
            C = v.random;

        function Q(ab, Y) {
            ab = (ab) ? ab : "";
            Y = Y || {};
            if (typeof ab == "object" && ab.hasOwnProperty("_tc_id")) {
                return ab
            }
            var ad = I(ab);
            var Z = ad.r,
                ac = ad.g,
                ae = ad.b,
                af = ad.a,
                aa = S(100 * af) / 100,
                ag = Y.format || ad.format;
            if (Z < 1) {
                Z = S(Z)
            }
            if (ac < 1) {
                ac = S(ac)
            }
            if (ae < 1) {
                ae = S(ae)
            }
            return {
                ok: ad.ok,
                format: ag,
                _tc_id: H++,
                alpha: af,
                toHsv: function() {
                    var ah = K(Z, ac, ae);
                    return {
                        h: ah.h * 360,
                        s: ah.s,
                        v: ah.v,
                        a: af
                    }
                },
                toHsvString: function() {
                    var ai = K(Z, ac, ae);
                    var ak = S(ai.h * 360),
                        aj = S(ai.s * 100),
                        ah = S(ai.v * 100);
                    return (af == 1) ? "hsv(" + ak + ", " + aj + "%, " + ah + "%)" : "hsva(" + ak + ", " + aj + "%, " + ah + "%, " + aa + ")"
                },
                toHsl: function() {
                    var ah = T(Z, ac, ae);
                    return {
                        h: ah.h * 360,
                        s: ah.s,
                        l: ah.l,
                        a: af
                    }
                },
                toHslString: function() {
                    var ai = T(Z, ac, ae);
                    var ak = S(ai.h * 360),
                        aj = S(ai.s * 100),
                        ah = S(ai.l * 100);
                    return (af == 1) ? "hsl(" + ak + ", " + aj + "%, " + ah + "%)" : "hsla(" + ak + ", " + aj + "%, " + ah + "%, " + aa + ")"
                },
                toHex: function(ah) {
                    return R(Z, ac, ae, ah)
                },
                toHexString: function(ah) {
                    return "#" + R(Z, ac, ae, ah)
                },
                toRgb: function() {
                    return {
                        r: S(Z),
                        g: S(ac),
                        b: S(ae),
                        a: af
                    }
                },
                toRgbString: function() {
                    return (af == 1) ? "rgb(" + S(Z) + ", " + S(ac) + ", " + S(ae) + ")" : "rgba(" + S(Z) + ", " + S(ac) + ", " + S(ae) + ", " + aa + ")"
                },
                toPercentageRgb: function() {
                    return {
                        r: S(V(Z, 255) * 100) + "%",
                        g: S(V(ac, 255) * 100) + "%",
                        b: S(V(ae, 255) * 100) + "%",
                        a: af
                    }
                },
                toPercentageRgbString: function() {
                    return (af == 1) ? "rgb(" + S(V(Z, 255) * 100) + "%, " + S(V(ac, 255) * 100) + "%, " + S(V(ae, 255) * 100) + "%)" : "rgba(" + S(V(Z, 255) * 100) + "%, " + S(V(ac, 255) * 100) + "%, " + S(V(ae, 255) * 100) + "%, " + aa + ")"
                },
                toName: function() {
                    return X[R(Z, ac, ae, true)] || false
                },
                toFilter: function(ak) {
                    var al = R(Z, ac, ae);
                    var an = al;
                    var am = Math.round(parseFloat(af) * 255).toString(16);
                    var ai = am;
                    var ah = Y && Y.gradientType ? "GradientType = 1, " : "";
                    if (ak) {
                        var aj = Q(ak);
                        an = aj.toHex();
                        ai = Math.round(parseFloat(aj.alpha) * 255).toString(16)
                    }
                    return "progid:DXImageTransform.Microsoft.gradient(" + ah + "startColorstr=#" + y(am) + al + ",endColorstr=#" + y(ai) + an + ")"
                },
                toString: function(ai) {
                    ai = ai || this.format;
                    var ah = false;
                    if (ai === "rgb") {
                        ah = this.toRgbString()
                    }
                    if (ai === "prgb") {
                        ah = this.toPercentageRgbString()
                    }
                    if (ai === "hex" || ai === "hex6") {
                        ah = this.toHexString()
                    }
                    if (ai === "hex3") {
                        ah = this.toHexString(true)
                    }
                    if (ai === "name") {
                        ah = this.toName()
                    }
                    if (ai === "hsl") {
                        ah = this.toHslString()
                    }
                    if (ai === "hsv") {
                        ah = this.toHsvString()
                    }
                    return ah || this.toHexString()
                }
            }
        }
        Q.fromRatio = function(Y, ab) {
            if (typeof Y == "object") {
                var Z = {};
                for (var aa in Y) {
                    if (Y.hasOwnProperty(aa)) {
                        if (aa === "a") {
                            Z[aa] = Y[aa]
                        } else {
                            Z[aa] = z(Y[aa])
                        }
                    }
                }
                Y = Z
            }
            return Q(Y, ab)
        };

        function I(Z) {
            var aa = {
                r: 0,
                g: 0,
                b: 0
            };
            var Y = 1;
            var ab = false;
            var ac = false;
            if (typeof Z == "string") {
                Z = B(Z)
            }
            if (typeof Z == "object") {
                if (Z.hasOwnProperty("r") && Z.hasOwnProperty("g") && Z.hasOwnProperty("b")) {
                    aa = E(Z.r, Z.g, Z.b);
                    ab = true;
                    ac = String(Z.r).substr(-1) === "%" ? "prgb" : "rgb"
                } else {
                    if (Z.hasOwnProperty("h") && Z.hasOwnProperty("s") && Z.hasOwnProperty("v")) {
                        Z.s = z(Z.s);
                        Z.v = z(Z.v);
                        aa = P(Z.h, Z.s, Z.v);
                        ab = true;
                        ac = "hsv"
                    } else {
                        if (Z.hasOwnProperty("h") && Z.hasOwnProperty("s") && Z.hasOwnProperty("l")) {
                            Z.s = z(Z.s);
                            Z.l = z(Z.l);
                            aa = F(Z.h, Z.s, Z.l);
                            ab = true;
                            ac = "hsl"
                        }
                    }
                }
                if (Z.hasOwnProperty("a")) {
                    Y = Z.a
                }
            }
            Y = parseFloat(Y);
            if (isNaN(Y) || Y < 0 || Y > 1) {
                Y = 1
            }
            return {
                ok: ab,
                format: Z.format || ac,
                r: A(255, D(aa.r, 0)),
                g: A(255, D(aa.g, 0)),
                b: A(255, D(aa.b, 0)),
                a: Y
            }
        }

        function E(aa, Z, Y) {
            return {
                r: V(aa, 255) * 255,
                g: V(Z, 255) * 255,
                b: V(Y, 255) * 255
            }
        }

        function T(Y, ac, ae) {
            Y = V(Y, 255);
            ac = V(ac, 255);
            ae = V(ae, 255);
            var af = D(Y, ac, ae),
                aa = A(Y, ac, ae);
            var ab, ag, Z = (af + aa) / 2;
            if (af == aa) {
                ab = ag = 0
            } else {
                var ad = af - aa;
                ag = Z > 0.5 ? ad / (2 - af - aa) : ad / (af + aa);
                switch (af) {
                    case Y:
                        ab = (ac - ae) / ad + (ac < ae ? 6 : 0);
                        break;
                    case ac:
                        ab = (ae - Y) / ad + 2;
                        break;
                    case ae:
                        ab = (Y - ac) / ad + 4;
                        break
                }
                ab /= 6
            }
            return {
                h: ab,
                s: ag,
                l: Z
            }
        }

        function F(ad, ag, ac) {
            var Y, ae, af;
            ad = V(ad, 360);
            ag = V(ag, 100);
            ac = V(ac, 100);

            function ab(aj, ai, ah) {
                if (ah < 0) {
                    ah += 1
                }
                if (ah > 1) {
                    ah -= 1
                }
                if (ah < 1 / 6) {
                    return aj + (ai - aj) * 6 * ah
                }
                if (ah < 1 / 2) {
                    return ai
                }
                if (ah < 2 / 3) {
                    return aj + (ai - aj) * (2 / 3 - ah) * 6
                }
                return aj
            }
            if (ag === 0) {
                Y = ae = af = ac
            } else {
                var Z = ac < 0.5 ? ac * (1 + ag) : ac + ag - ac * ag;
                var aa = 2 * ac - Z;
                Y = ab(aa, Z, ad + 1 / 3);
                ae = ab(aa, Z, ad);
                af = ab(aa, Z, ad - 1 / 3)
            }
            return {
                r: Y * 255,
                g: ae * 255,
                b: af * 255
            }
        }

        function K(Y, ab, ad) {
            Y = V(Y, 255);
            ab = V(ab, 255);
            ad = V(ad, 255);
            var ae = D(Y, ab, ad),
                Z = A(Y, ab, ad);
            var aa, ag, af = ae;
            var ac = ae - Z;
            ag = ae === 0 ? 0 : ac / ae;
            if (ae == Z) {
                aa = 0
            } else {
                switch (ae) {
                    case Y:
                        aa = (ab - ad) / ac + (ab < ad ? 6 : 0);
                        break;
                    case ab:
                        aa = (ad - Y) / ac + 2;
                        break;
                    case ad:
                        aa = (Y - ab) / ac + 4;
                        break
                }
                aa /= 6
            }
            return {
                h: aa,
                s: ag,
                v: af
            }
        }

        function P(ac, aj, ah) {
            ac = V(ac, 360) * 6;
            aj = V(aj, 100);
            ah = V(ah, 100);
            var ab = v.floor(ac),
                ae = ac - ab,
                aa = ah * (1 - aj),
                Z = ah * (1 - ae * aj),
                ai = ah * (1 - (1 - ae) * aj),
                ag = ab % 6,
                Y = [ah, Z, aa, aa, ai, ah][ag],
                ad = [ai, ah, ah, Z, aa, aa][ag],
                af = [aa, aa, ai, ah, ah, Z][ag];
            return {
                r: Y * 255,
                g: ad * 255,
                b: af * 255
            }
        }

        function R(ab, aa, Y, ac) {
            var Z = [y(S(ab).toString(16)), y(S(aa).toString(16)), y(S(Y).toString(16))];
            if (ac && Z[0].charAt(0) == Z[0].charAt(1) && Z[1].charAt(0) == Z[1].charAt(1) && Z[2].charAt(0) == Z[2].charAt(1)) {
                return Z[0].charAt(0) + Z[1].charAt(0) + Z[2].charAt(0)
            }
            return Z.join("")
        }
        Q.equals = function(Z, Y) {
            if (!Z || !Y) {
                return false
            }
            return Q(Z).toRgbString() == Q(Y).toRgbString()
        };
        Q.random = function() {
            return Q.fromRatio({
                r: C(),
                g: C(),
                b: C()
            })
        };
        Q.desaturate = function(Z, aa) {
            var Y = Q(Z).toHsl();
            Y.s -= ((aa || 10) / 100);
            Y.s = N(Y.s);
            return Q(Y)
        };
        Q.saturate = function(Z, aa) {
            var Y = Q(Z).toHsl();
            Y.s += ((aa || 10) / 100);
            Y.s = N(Y.s);
            return Q(Y)
        };
        Q.greyscale = function(Y) {
            return Q.desaturate(Y, 100)
        };
        Q.lighten = function(Z, aa) {
            var Y = Q(Z).toHsl();
            Y.l += ((aa || 10) / 100);
            Y.l = N(Y.l);
            return Q(Y)
        };
        Q.darken = function(Z, aa) {
            var Y = Q(Z).toHsl();
            Y.l -= ((aa || 10) / 100);
            Y.l = N(Y.l);
            return Q(Y)
        };
        Q.complement = function(Z) {
            var Y = Q(Z).toHsl();
            Y.h = (Y.h + 180) % 360;
            return Q(Y)
        };
        Q.triad = function(Z) {
            var Y = Q(Z).toHsl();
            var aa = Y.h;
            return [Q(Z), Q({
                h: (aa + 120) % 360,
                s: Y.s,
                l: Y.l
            }), Q({
                h: (aa + 240) % 360,
                s: Y.s,
                l: Y.l
            })]
        };
        Q.tetrad = function(Z) {
            var Y = Q(Z).toHsl();
            var aa = Y.h;
            return [Q(Z), Q({
                h: (aa + 90) % 360,
                s: Y.s,
                l: Y.l
            }), Q({
                h: (aa + 180) % 360,
                s: Y.s,
                l: Y.l
            }), Q({
                h: (aa + 270) % 360,
                s: Y.s,
                l: Y.l
            })]
        };
        Q.splitcomplement = function(Z) {
            var Y = Q(Z).toHsl();
            var aa = Y.h;
            return [Q(Z), Q({
                h: (aa + 72) % 360,
                s: Y.s,
                l: Y.l
            }), Q({
                h: (aa + 216) % 360,
                s: Y.s,
                l: Y.l
            })]
        };
        Q.analogous = function(Z, ac, ad) {
            ac = ac || 6;
            ad = ad || 30;
            var Y = Q(Z).toHsl();
            var ab = 360 / ad;
            var aa = [Q(Z)];
            for (Y.h = ((Y.h - (ab * ac >> 1)) + 720) % 360; --ac;) {
                Y.h = (Y.h + ab) % 360;
                aa.push(Q(Y))
            }
            return aa
        };
        Q.monochromatic = function(aa, ad) {
            ad = ad || 6;
            var ac = Q(aa).toHsv();
            var af = ac.h,
                ae = ac.s,
                Z = ac.v;
            var ab = [];
            var Y = 1 / ad;
            while (ad--) {
                ab.push(Q({
                    h: af,
                    s: ae,
                    v: Z
                }));
                Z = (Z + Y) % 1
            }
            return ab
        };
        Q.readability = function(ac, aa) {
            var ab = Q(ac).toRgb();
            var Z = Q(aa).toRgb();
            var Y = (ab.r * 299 + ab.g * 587 + ab.b * 114) / 1000;
            var ae = (Z.r * 299 + Z.g * 587 + Z.b * 114) / 1000;
            var ad = (Math.max(ab.r, Z.r) - Math.min(ab.r, Z.r) + Math.max(ab.g, Z.g) - Math.min(ab.g, Z.g) + Math.max(ab.b, Z.b) - Math.min(ab.b, Z.b));
            return {
                brightness: Math.abs(Y - ae),
                color: ad
            }
        };
        Q.readable = function(Z, Y) {
            var aa = Q.readability(Z, Y);
            return aa.brightness > 125 && aa.color > 500
        };
        Q.mostReadable = function(af, ae) {
            var ab = null;
            var Z = 0;
            var ag = false;
            for (var ad = 0; ad < ae.length; ad++) {
                var aa = Q.readability(af, ae[ad]);
                var ac = aa.brightness > 125 && aa.color > 500;
                var Y = 3 * (aa.brightness / 125) + (aa.color / 500);
                if ((ac && !ag) || (ac && ag && Y > Z) || ((!ac) && (!ag) && Y > Z)) {
                    ag = ac;
                    Z = Y;
                    ab = Q(ae[ad])
                }
            }
            return ab
        };
        var J = Q.names = {
            aliceblue: "f0f8ff",
            antiquewhite: "faebd7",
            aqua: "0ff",
            aquamarine: "7fffd4",
            azure: "f0ffff",
            beige: "f5f5dc",
            bisque: "ffe4c4",
            black: "000",
            blanchedalmond: "ffebcd",
            blue: "00f",
            blueviolet: "8a2be2",
            brown: "a52a2a",
            burlywood: "deb887",
            burntsienna: "ea7e5d",
            cadetblue: "5f9ea0",
            chartreuse: "7fff00",
            chocolate: "d2691e",
            coral: "ff7f50",
            cornflowerblue: "6495ed",
            cornsilk: "fff8dc",
            crimson: "dc143c",
            cyan: "0ff",
            darkblue: "00008b",
            darkcyan: "008b8b",
            darkgoldenrod: "b8860b",
            darkgray: "a9a9a9",
            darkgreen: "006400",
            darkgrey: "a9a9a9",
            darkkhaki: "bdb76b",
            darkmagenta: "8b008b",
            darkolivegreen: "556b2f",
            darkorange: "ff8c00",
            darkorchid: "9932cc",
            darkred: "8b0000",
            darksalmon: "e9967a",
            darkseagreen: "8fbc8f",
            darkslateblue: "483d8b",
            darkslategray: "2f4f4f",
            darkslategrey: "2f4f4f",
            darkturquoise: "00ced1",
            darkviolet: "9400d3",
            deeppink: "ff1493",
            deepskyblue: "00bfff",
            dimgray: "696969",
            dimgrey: "696969",
            dodgerblue: "1e90ff",
            firebrick: "b22222",
            floralwhite: "fffaf0",
            forestgreen: "228b22",
            fuchsia: "f0f",
            gainsboro: "dcdcdc",
            ghostwhite: "f8f8ff",
            gold: "ffd700",
            goldenrod: "daa520",
            gray: "808080",
            green: "008000",
            greenyellow: "adff2f",
            grey: "808080",
            honeydew: "f0fff0",
            hotpink: "ff69b4",
            indianred: "cd5c5c",
            indigo: "4b0082",
            ivory: "fffff0",
            khaki: "f0e68c",
            lavender: "e6e6fa",
            lavenderblush: "fff0f5",
            lawngreen: "7cfc00",
            lemonchiffon: "fffacd",
            lightblue: "add8e6",
            lightcoral: "f08080",
            lightcyan: "e0ffff",
            lightgoldenrodyellow: "fafad2",
            lightgray: "d3d3d3",
            lightgreen: "90ee90",
            lightgrey: "d3d3d3",
            lightpink: "ffb6c1",
            lightsalmon: "ffa07a",
            lightseagreen: "20b2aa",
            lightskyblue: "87cefa",
            lightslategray: "789",
            lightslategrey: "789",
            lightsteelblue: "b0c4de",
            lightyellow: "ffffe0",
            lime: "0f0",
            limegreen: "32cd32",
            linen: "faf0e6",
            magenta: "f0f",
            maroon: "800000",
            mediumaquamarine: "66cdaa",
            mediumblue: "0000cd",
            mediumorchid: "ba55d3",
            mediumpurple: "9370db",
            mediumseagreen: "3cb371",
            mediumslateblue: "7b68ee",
            mediumspringgreen: "00fa9a",
            mediumturquoise: "48d1cc",
            mediumvioletred: "c71585",
            midnightblue: "191970",
            mintcream: "f5fffa",
            mistyrose: "ffe4e1",
            moccasin: "ffe4b5",
            navajowhite: "ffdead",
            navy: "000080",
            oldlace: "fdf5e6",
            olive: "808000",
            olivedrab: "6b8e23",
            orange: "ffa500",
            orangered: "ff4500",
            orchid: "da70d6",
            palegoldenrod: "eee8aa",
            palegreen: "98fb98",
            paleturquoise: "afeeee",
            palevioletred: "db7093",
            papayawhip: "ffefd5",
            peachpuff: "ffdab9",
            peru: "cd853f",
            pink: "ffc0cb",
            plum: "dda0dd",
            powderblue: "b0e0e6",
            purple: "800080",
            red: "f00",
            rosybrown: "bc8f8f",
            royalblue: "4169e1",
            saddlebrown: "8b4513",
            salmon: "fa8072",
            sandybrown: "f4a460",
            seagreen: "2e8b57",
            seashell: "fff5ee",
            sienna: "a0522d",
            silver: "c0c0c0",
            skyblue: "87ceeb",
            slateblue: "6a5acd",
            slategray: "708090",
            slategrey: "708090",
            snow: "fffafa",
            springgreen: "00ff7f",
            steelblue: "4682b4",
            tan: "d2b48c",
            teal: "008080",
            thistle: "d8bfd8",
            tomato: "ff6347",
            turquoise: "40e0d0",
            violet: "ee82ee",
            wheat: "f5deb3",
            white: "fff",
            whitesmoke: "f5f5f5",
            yellow: "ff0",
            yellowgreen: "9acd32"
        };
        var X = Q.hexNames = x(J);

        function x(aa) {
            var Z = {};
            for (var Y in aa) {
                if (aa.hasOwnProperty(Y)) {
                    Z[aa[Y]] = Y
                }
            }
            return Z
        }

        function V(aa, Y) {
            if (M(aa)) {
                aa = "100%"
            }
            var Z = W(aa);
            aa = A(Y, D(0, parseFloat(aa)));
            if (Z) {
                aa = parseInt(aa * Y, 10) / 100
            }
            if ((v.abs(aa - Y) < 0.000001)) {
                return 1
            }
            return (aa % Y) / parseFloat(Y)
        }

        function N(Y) {
            return A(1, D(0, Y))
        }

        function U(Y) {
            return parseInt(Y, 16)
        }

        function M(Y) {
            return typeof Y == "string" && Y.indexOf(".") != -1 && parseFloat(Y) === 1
        }

        function W(Y) {
            return typeof Y === "string" && Y.indexOf("%") != -1
        }

        function y(Y) {
            return Y.length == 1 ? "0" + Y : "" + Y
        }

        function z(Y) {
            if (Y <= 1) {
                Y = (Y * 100) + "%"
            }
            return Y
        }
        var w = (function() {
            var ac = "[-\\+]?\\d+%?";
            var ab = "[-\\+]?\\d*\\.\\d+%?";
            var Y = "(?:" + ab + ")|(?:" + ac + ")";
            var aa = "[\\s|\\(]+(" + Y + ")[,|\\s]+(" + Y + ")[,|\\s]+(" + Y + ")\\s*\\)?";
            var Z = "[\\s|\\(]+(" + Y + ")[,|\\s]+(" + Y + ")[,|\\s]+(" + Y + ")[,|\\s]+(" + Y + ")\\s*\\)?";
            return {
                rgb: new RegExp("rgb" + aa),
                rgba: new RegExp("rgba" + Z),
                hsl: new RegExp("hsl" + aa),
                hsla: new RegExp("hsla" + Z),
                hsv: new RegExp("hsv" + aa),
                hex3: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                hex6: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
            }
        })();

        function B(Z) {
            Z = Z.replace(L, "").replace(G, "").toLowerCase();
            var Y = false;
            if (J[Z]) {
                Z = J[Z];
                Y = true
            } else {
                if (Z == "transparent") {
                    return {
                        r: 0,
                        g: 0,
                        b: 0,
                        a: 0
                    }
                }
            }
            var aa;
            if ((aa = w.rgb.exec(Z))) {
                return {
                    r: aa[1],
                    g: aa[2],
                    b: aa[3]
                }
            }
            if ((aa = w.rgba.exec(Z))) {
                return {
                    r: aa[1],
                    g: aa[2],
                    b: aa[3],
                    a: aa[4]
                }
            }
            if ((aa = w.hsl.exec(Z))) {
                return {
                    h: aa[1],
                    s: aa[2],
                    l: aa[3]
                }
            }
            if ((aa = w.hsla.exec(Z))) {
                return {
                    h: aa[1],
                    s: aa[2],
                    l: aa[3],
                    a: aa[4]
                }
            }
            if ((aa = w.hsv.exec(Z))) {
                return {
                    h: aa[1],
                    s: aa[2],
                    v: aa[3]
                }
            }
            if ((aa = w.hex6.exec(Z))) {
                return {
                    r: U(aa[1]),
                    g: U(aa[2]),
                    b: U(aa[3]),
                    format: Y ? "name" : "hex"
                }
            }
            if ((aa = w.hex3.exec(Z))) {
                return {
                    r: U(aa[1] + "" + aa[1]),
                    g: U(aa[2] + "" + aa[2]),
                    b: U(aa[3] + "" + aa[3]),
                    format: Y ? "name" : "hex"
                }
            }
            return false
        }
        O.tinycolor = Q
    })(this);
    e(function() {
        if (e.fn.spectrum.load) {
            e.fn.spectrum.processNativeColorInputs()
        }
    })
})(window, jQuery);
}