function execute(url) {
    load("__core.js");

    url = _trueServer(url);

    var doc = Http.get(url).html();

     var el = doc.select("div.list-chapter li.row .chapter a")
    const data = [];
    for (var i = el.size() - 1; i >= 0 ; i--) {
        var e = el.get(i);
        data.push({
            name: e.text(),
            url: e.attr("href"),
            host: _server
        })
    }

    return Response.success(data);
}