function count_like(){
    var number = $(".oajrlxb2.bp9cbjyn.g5ia77u1.mtkw9kbi.tlpljxtp.qensuy8j.ppp5ayq2.goun2846.ccm00jje.s44p3ltw.mk2mc5f4.rt8b4zig.n8ej3o3l.agehan2d.sk4xxmp2.rq0escxv.nhd2j8a9.j83agx80.mg4g778l.btwxx1t3.pfnyh3mw.p7hjln8o.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.tgvbjcpo.hpfvmrgz.jb3vyjys.rz4wbd8a.qt6c0cv9.a8nywdso.l9j0dhe7.i1ao9s8h.esuyzwwr.f1sip0of.du4w35lb.lzcic4wl.abiwlrkh.p8dawk7l.buofh1pr.taijpn5t").not(".n3ffmt46").length;
    return number;
}

function like(){
    $like_btn = $(".oajrlxb2.bp9cbjyn.g5ia77u1.mtkw9kbi.tlpljxtp.qensuy8j.ppp5ayq2.goun2846.ccm00jje.s44p3ltw.mk2mc5f4.rt8b4zig.n8ej3o3l.agehan2d.sk4xxmp2.rq0escxv.nhd2j8a9.j83agx80.mg4g778l.btwxx1t3.pfnyh3mw.p7hjln8o.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.tgvbjcpo.hpfvmrgz.jb3vyjys.rz4wbd8a.qt6c0cv9.a8nywdso.l9j0dhe7.i1ao9s8h.esuyzwwr.f1sip0of.du4w35lb.lzcic4wl.abiwlrkh.p8dawk7l.buofh1pr.taijpn5t").not(".n3ffmt46");
    $like_btn.each(function(index){
        this.click();
    });
}

function unlike(){
    $unlike_btn = $(".oajrlxb2.bp9cbjyn.g5ia77u1.mtkw9kbi.tlpljxtp.qensuy8j.ppp5ayq2.goun2846.ccm00jje.s44p3ltw.mk2mc5f4.rt8b4zig.n8ej3o3l.agehan2d.sk4xxmp2.rq0escxv.nhd2j8a9.j83agx80.mg4g778l.btwxx1t3.pfnyh3mw.p7hjln8o.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.tgvbjcpo.hpfvmrgz.jb3vyjys.rz4wbd8a.qt6c0cv9.a8nywdso.l9j0dhe7.i1ao9s8h.esuyzwwr.f1sip0of.du4w35lb.lzcic4wl.abiwlrkh.p8dawk7l.buofh1pr.taijpn5t.n3ffmt46").not("");
    $unlike_btn.each(function(index){
        this.click();
    });
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if(request.fblike == "getlike"){
        var number_like = count_like();
        sendResponse({number: number_like});
    }

    if(request.fblike == "like"){
        like();
        sendResponse({number: 1});
    }

    if(request.fblike == "unlike"){
        unlike();
        sendResponse({number: 0});
    }
});