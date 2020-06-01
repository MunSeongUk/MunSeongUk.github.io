$(function(){
    $('#nationalassembly-hack-video').modal({
        show: false
    }).on('hidden.bs.modal', function() {
        $('#nationalassembly-hack-video div div div.plyr div button')[0].click();
    }).on('show.bs.modal', function() {
        $('#nationalassembly-hack-video div div div.plyr div button')[0].click();
    });

    $('#korea-china-hack-video').modal({
        show: false
    }).on('hidden.bs.modal', function() {
        $('#korea-china-hack-video div div div.plyr div button')[0].click();
    }).on('show.bs.modal', function() {
        $('#korea-china-hack-video div div div.plyr div button')[0].click();
    });

    $('#angelhack-video').modal({
        show: false
    }).on('hidden.bs.modal', function() {
        $('#angelhack-video div div div.plyr div button')[0].click();
    }).on('show.bs.modal', function() {
        $('#angelhack-video div div div.plyr div button')[0].click();
    });

    $('#bizcon-contest2-video').modal({
        show: false
    }).on('hidden.bs.modal', function() {
        $('#bizcon-contest2-video div div div.plyr div button')[0].click();
    }).on('show.bs.modal', function() {
        $('#bizcon-contest2-video div div div.plyr div button')[0].click();
    });
});