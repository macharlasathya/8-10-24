var str1="       sathya";
var str2="narayana      ";
var str1trim = str1.trimStart();
var str2trim = str2.trimEnd();
console.log(str1trim)
console.log(str2trim)
var concat=str1trim.concat(str2trim);
console.log(concat)
var com_upper=concat.toUpperCase();
console.log(com_upper)
var extract=com_upper.slice(5,9);
console.log(extract)
var index_value=extract.indexOf('R')
console.log(index_value)
var lower_case=extract.toLowerCase();
console.log(lower_case)
var char="M"
var contact_all=char.concat(lower_case)
console.log(contact_all)
var upper_convet=contact_all.toUpperCase();
console.log(upper_convet)
var last_extarct=upper_convet.slice(-2,-1);
console.log(last_extarct)
var first_str="nandu";
var second_str="sathya";
console.log(first_str)
console.log(second_str)
var extact_first=first_str.slice(0,3);
var extact_second=second_str.slice(-3);
console.log(extact_first)
console.log(extact_second)
var concat_tog=extact_first.concat(extact_second);
console.log(concat_tog)
var upper_all=concat_tog.toUpperCase();
console.log(upper_all);
var word="        nandu     ";
console.log(word)
var trim=word.trim();
console.log(trim)
var first_char=trim.charAt(0);
var last_char=trim.charAt(4);
var first_upper=first_char.toUpperCase();
var last_upper=last_char.toUpperCase();
console.log(first_upper)
console.log(last_upper)
var specifi_extract=trim.slice(1,4);
console.log(specifi_extract)
var another_str=" we are from hyd";
console.log(another_str)
var all_concat=specifi_extract.concat(another_str)
console.log(all_concat)
var example="hello there , how are you ";
var index=example.indexOf('are');
console.log(index)