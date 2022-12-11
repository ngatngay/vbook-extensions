const _server = "https://www.nettruyenmin.com";
const _oldServer = [
    "nettruyen.com",
    "nettruyenmoi.com",
    "nettruyenone.com",
    "nettruyentop.com",
    "nettruyenvip.com",
    "nettruyenpro.com",
    "nettruyengo.com",
    "nettruyenco.com",
    "nettruyenme.com",
    "nettruyenin.com",
    "nettruyenon.com",
    "nettruyentv.com"
];

const _proxyImage = "https://tooltruyen.ngatngay.net/proxy/nettruyen?url="

function _trueServer(url) {
    server = _server.split(".");
    server = server[server.length - 2] + "." + server[server.length - 1];

    _oldServer.forEach(function (value) {
        url = url.replace(value, server);
    });

    return url;
}