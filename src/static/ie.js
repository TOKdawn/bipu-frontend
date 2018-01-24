const browser = navigator.appName
const bVersion = navigator.appVersion
const version = bVersion.split(';')
const trimVersion = version[1].replace(/[ ]/g, '')
const matchVersion = ['MSIE5.0', 'MSIE6.0', 'MSIE7.0', 'MSIE8.0', 'MSIE9.0']
if (browser === 'Microsoft Internet Explorer' && matchVersion.toString().indexOf(trimVersion) > -1) {
    window.location.href = '/update.html'
}
