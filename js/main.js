function updateClock() {
  let now = new Date();
  let dname = now.getDay(),
      mo = now.getMonth(),
      dnum = now.getDate(),
      yr = now.getFullYear(),
      hou = now.getHours(),
      min = now.getMinutes(),
      sec = now.getSeconds(),
      pe = "오전"
      
      if(hou === 0) {
        hou = 12
      }
      if(hou > 12) {
        hou = hou - 12
        pe = "오후"
      }
      
    Number.prototype.pad = function(digits) {
      let n = this.toString();
      while (n.length < digits) {
        n = "0" + n;
      }
      return n;
    }

      
   let months = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"]
   let week = [ "일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일" ]
   let ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"]
	let values = [week[dname], months[mo], dnum.pad(2), yr, hou.pad(2), min.pad(2), sec.pad(2), pe];

   
   for (let i = 0; i < ids.length; i++) {
   document.getElementById(ids[i]).firstChild.nodeValue = values[i]
   }
}

function initClock() {
  updateClock()
  window.setInterval("updateClock()", 1)

}