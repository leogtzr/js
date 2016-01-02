simply.title('Adeudo!');

var xhr = new XMLHttpRequest();

var xhrRequest = function (url, type) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        simply.scrollable(true);
        simply.body(this.responseText);
        simply.vibe('short');
    };
    xhr.open(type, url);
    xhr.send();
};

var url = 'http://jbossews-adeudoservicecuu.rhcloud.com/rest/ws/infractions/EFK6318?type=json';

xhrRequest(url, 'GET');
