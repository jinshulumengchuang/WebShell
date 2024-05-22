mymain = document.getElementById('main')
mymain.width = document.documentElement.clientWidth
mymain.height = document.documentElement.clentHeight * 0.4
pathele = document.getElementById("path")
pathele.value = '/'
var path
function confirm() {
    mymain.src = 'cgi-bin/main.sh?cd ' + pathele.value + ';' + document.getElementById("command").value
}
