var fileName = location.href.split("/").slice(-1);
var link0;
var link1;
var link2;
var path0;
var path1;
var path2;

if (fileName == "") {
	link0 = "Links";
	link1 = "Downloads";
	link2 = "Changelog";

	path0 = "links.html";
	path1 = "downloads.html";
	path2 = "changelog.html";
}
if (fileName == "changelog.html") {
	link0 = "Home";
	link1 = "Links";
	link2 = "Downloads";

	path0 = "index.html";
	path1 = "links.html";
	path2 = "downloads.html";
}
if (fileName == "downloads.html") {
	link0 = "Home";
	link1 = "Links";
	link2 = "Changelog";

	path0 = "index.html";
	path1 = "links.html";
	path2 = "changelog.html";
}
if (fileName == "links.html") {
	link0 = "Home";
	link1 = "Downloads";
	link2 = "Changelog";

	path0 = "index.html";
	path1 = "downloads.html";
	path2 = "changelog.html";
}

document.write('\
	<div id="mySidenav" class="sidenav" align="left">\
		<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>\
		<a href=" '+ path0 +' ">'+ link0 +'</a>\
		<a href="'+ path1 +'">'+ link1 +'</a>\
		<a href="'+ path2 +'">'+ link2 +'</a>\
	</div>\
	<span style="font-size:30px;cursor:pointer" onclick="openNav()">&#9776;</span>\
	');
