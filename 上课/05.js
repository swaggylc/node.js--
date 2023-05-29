const url = require('url')
const qs=require('querystring')
var obj = url.parse('https://www.bilibili.com/video/BV1re4y1M7ko/?spm_id_from=333.1007.top_right_bar_window_custom_collection.content.click&vd_source=c64f8fb7dafd8431ae20520d687bea86')
// console.log(obj);
console.log(qs.parse(obj.query));