count_like();

$(document).ready(function() {
    $("#like-btn").click(like);
    $("#unlike-btn").click(unlike);
});

function count_like(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, {fblike: "getlike"}, function(response){
            $("#number_like").html(response.number);
        });
    });
}

function like(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, {fblike: "like"}, function(response){
            $("#txt").html("Đã like toàn bộ");
        });
    });
}

function unlike(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, {fblike: "unlike"}, function(response){
            $("#txt").html("Đã unlike toàn bộ");
        });
    });
}