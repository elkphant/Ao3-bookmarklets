javascript:(function(){
  var e=document.getElementById('workskin');
  if(e){
    var t=e.innerHTML;
    var n=t.replace(/&nbsp;/g,'').replaceAll(/<br\s*\/?>/ig,%27</p><p>%27);
      e.innerHTML=%27<p>%27+n+%27</p>%27}
})();
