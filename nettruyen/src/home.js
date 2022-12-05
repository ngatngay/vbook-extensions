function execute() {
    load("__core.js");
    
    return Response.success([
        {title: "Mới cập nhật", input: _server + "/tim-truyen", script: "gen.js"},
        {title: "Truyện mới", input: _server + "/tim-truyen?status=-1&sort=15", script: "gen.js"},
        {title: "Top all", input: _server + "/tim-truyen?status=-1&sort=10", script: "gen.js"},
        {title: "Top tháng", input: _server + "/tim-truyen?status=-1&sort=11", script: "gen.js"},
        {title: "Top tuần", input: _server + "/tim-truyen?status=-1&sort=12", script: "gen.js"},
        {title: "Top ngày", input: _server + "/tim-truyen?status=-1&sort=13", script: "gen.js"},
        {title: "Theo dõi", input: _server + "/tim-truyen?status=-1&sort=20", script: "gen.js"},
        {title: "Bình luận", input: _server + "/tim-truyen?status=-1&sort=25", script: "gen.js"}
    ]);
}