/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[7],{517:function(wa,sa,h){h.r(sa);var pa=h(0),na=h(3),ma=h(176);wa=h(112);var ja=h(290);h=h(436);var ia=window;wa=function(ea){function x(y,f,e){f=ea.call(this,y,f,e)||this;if(y.name&&"xod"!==y.name.toLowerCase().split(".").pop())throw Error("Not an XOD file");if(!ia.FileReader||!ia.File||!ia.Blob)throw Error("File API is not supported in this browser");f.file=y;f.qE=[];f.aM=0;return f}Object(pa.c)(x,ea);x.prototype.pP=function(y,
f,e){var a=this,b=new FileReader;b.onloadend=function(n){if(0<a.qE.length){var r=a.qE.shift();r.Nsa.readAsBinaryString(r.file)}else a.aM--;if(b.error){n=b.error;if(n.code===n.ABORT_ERR){Object(na.j)("Request for chunk "+f.start+"-"+f.stop+" was aborted");return}return e(n)}if(n=b.content||n.target.result)return e(!1,n);Object(na.j)("No data was returned from FileReader.")};f&&(y=(y.slice||y.webkitSlice||y.mozSlice||y.EBa).call(y,f.start,f.stop));0===a.qE.length&&50>a.aM?(b.readAsBinaryString(y),a.aM++):
a.qE.push({Nsa:b,file:y});return function(){b.abort()}};x.prototype.xv=function(y){var f=this;f.mE=!0;var e=ma.a;f.pP(f.file,{start:-e,stop:f.file.size},function(a,b){if(a)return Object(na.j)("Error loading end header: %s "+a),y(a);if(b.length!==e)throw Error("Zip end header data is wrong size!");f.Wd=new ja.a(b);var n=f.Wd.g_();f.pP(f.file,n,function(r,aa){if(r)return Object(na.j)("Error loading central directory: %s "+r),y(r);if(aa.length!==n.stop-n.start)throw Error("Zip central directory data is wrong size!");
f.Wd.d4(aa);f.IL=!0;f.mE=!1;return y(!1)})})};x.prototype.qQ=function(y,f){var e=this,a=e.Zh[y];if(e.Wd.VX(y)){var b=e.Wd.cz(y),n=e.pP(e.file,b,function(r,aa){delete e.Zh[y];if(r)return Object(na.j)('Error loading part "%s": %s, '+y+", "+r),f(r);if(aa.length!==b.stop-b.start)throw Error("Part data is wrong size!");f(!1,y,aa,e.Wd.V0(y))});a.I6=!0;a.cancel=n}else f(Error('File not found: "'+y+'"'),y)};return x}(wa.a);Object(h.a)(wa);Object(h.b)(wa);sa["default"]=wa}}]);}).call(this || window)
