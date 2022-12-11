function execute() {
    load("__core.js");
    
    var genres = [];
    var response = fetch(_server + "/tim-truyen");
    var html = response.html();
    var tags = html.select("div.genres div ul li a");


    for(let i = 0; i < tags.length; i++) {
        var tag = tags.get(i);

        genres.push({
            title: tag.text(),
            input: tag.attr("href"),
            script: "gen.js"
        });
    }   

    return Response.success(genres);
}