function execute(url) {
    load("__core.js");

    url = _trueServer(url);

    var doc = Http.get(url).html();
    var el = doc.select(".page-chapter img");
    
    var data = [];
    
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        var img = e.attr("data-original");
    
        if (!img) {
            img = e.attr("src");
        }

        if (img) {
            if (img.startsWith("//")) {
                img = "http:" + img;
            }

            // cdn
            if (typeof _proxyImage !== 'undefined') {
                img = _proxyImage + encodeURIComponent(img);
            }

            data.push(img);
        }
    }

    return Response.success(data);
}