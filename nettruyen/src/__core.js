const _server = "https://www.nettruyentv.com";
const _proxyImage = "https://tooltruyen.ngatngay.net/proxy/nettruyen?url="

function _trueServer(url) {
    url = url.replace("nettruyen.com", "nettruyenmoi.com");
    url = url.replace("nettruyentop.com", "nettruyenmoi.com");
    url = url.replace("nettruyenvip.com", "nettruyenmoi.com");
    url = url.replace("nettruyenpro.com", "nettruyenmoi.com");
    url = url.replace("nettruyengo.com", "nettruyenmoi.com");
    url = url.replace("nettruyenmoi.com", "nettruyenone.com");
    url = url.replace("nettruyenone.com", "nettruyenco.com");
    url = url.replace("nettruyenco.com", "nettruyenme.com");
    url = url.replace("nettruyenme.com", "nettruyenin.com");
    url = url.replace("nettruyenin.com", "nettruyenon.com");
    url = url.replace("nettruyenon.com", "nettruyentv.com");

    return url;
}