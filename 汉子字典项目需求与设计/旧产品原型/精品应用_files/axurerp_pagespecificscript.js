
var PageName = '精品应用';
var PageId = 'f8b102d202f94aa6b23c9f8e8e603b5d'
var PageUrl = '精品应用.html'
document.title = '精品应用';
var PageNotes = 
{
"pageName":"精品应用",
"showNotesNames":"False"}
var $OnLoadVariable = '';

var $CSUM;

var hasQuery = false;
var query = window.location.hash.substring(1);
if (query.length > 0) hasQuery = true;
var vars = query.split("&");
for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0].length > 0) eval("$" + pair[0] + " = decodeURIComponent(pair[1]);");
} 

if (hasQuery && $CSUM != 1) {
alert('Prototype Warning: The variable values were too long to pass to this page.\nIf you are using IE, using Firefox will support more data.');
}

function GetQuerystring() {
    return '#OnLoadVariable=' + encodeURIComponent($OnLoadVariable) + '&CSUM=1';
}

function PopulateVariables(value) {
    var d = new Date();
  value = value.replace(/\[\[OnLoadVariable\]\]/g, $OnLoadVariable);
  value = value.replace(/\[\[PageName\]\]/g, PageName);
  value = value.replace(/\[\[GenDay\]\]/g, '3');
  value = value.replace(/\[\[GenMonth\]\]/g, '6');
  value = value.replace(/\[\[GenMonthName\]\]/g, '六月');
  value = value.replace(/\[\[GenDayOfWeek\]\]/g, '星期一');
  value = value.replace(/\[\[GenYear\]\]/g, '2013');
  value = value.replace(/\[\[Day\]\]/g, d.getDate());
  value = value.replace(/\[\[Month\]\]/g, d.getMonth() + 1);
  value = value.replace(/\[\[MonthName\]\]/g, GetMonthString(d.getMonth()));
  value = value.replace(/\[\[DayOfWeek\]\]/g, GetDayString(d.getDay()));
  value = value.replace(/\[\[Year\]\]/g, d.getFullYear());
  return value;
}

function OnLoad(e) {

}

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u16 = document.getElementById('u16');

var u12 = document.getElementById('u12');

var u15 = document.getElementById('u15');

var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'top';
var u0 = document.getElementById('u0');

var u8 = document.getElementById('u8');

var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'top';
var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'center';
var u5 = document.getElementById('u5');

u5.style.cursor = 'pointer';
if (bIE) u5.attachEvent("onclick", Clicku5);
else u5.addEventListener("click", Clicku5, true);
function Clicku5(e)
{
windowEvent = e;


if (true) {

	self.location.href="更多.html" + GetQuerystring();

}

}

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'center';
var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'top';
var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'center';
var u2 = document.getElementById('u2');

var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'top';
var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'top';
var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'top';
if (window.OnLoad) OnLoad();
