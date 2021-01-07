let url = "https://api.github.com/users/xidhu/repos";
let reponames, langRawList =[];
let langs = [{language:"HTML",count:0},{language:"CSS",count:0},{language:"JavaScript",count:0},{language:"Dart",count:0},{language:"C",count:0},{language:"Java",count:0},{language:"Kotlin",count:0},{language:"Swift",count:0}];


const setSkills = () => {
    let isMobile =  window.innerWidth < window.innerHeight?true:false;
    let langNames = [].slice.call(document.getElementsByClassName('skill-text')).map((e) => {return e});
    let langPrgs = [].slice.call(document.getElementsByClassName('skill-pgrs-bar')).map((e) => {return e});
    let langPrst = [].slice.call(document.getElementsByClassName('skill-pgrs-prst')).map((e) => {return e});
    for(let i = 0 ; i < langNames.length ;i++ ){
        let percentage = langs[i].count > 0 ? langs[i].count : 3;
        langPrst[i].innerHTML = percentage + "%";
        if(isMobile){
            langPrgs[i].style.width = (40/100 * percentage) + "vw";
        }
        else{
            langPrgs[i].style.width = (50/100 * percentage) + "vw";
        }
    }
}


const convertToPercentage = (data) => {
  reponames = data.map((e) => {
    return e.name;
  });
  reponames.forEach((e) => {
    url = "https://api.github.com/repos/xidhu/"+e+"/languages";
    var languageFetch = new XMLHttpRequest();
    languageFetch.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);
        langRawList.push(data);
        
      }
    };
    languageFetch.open("GET", url, true);
    languageFetch.send();
  });
  
  setTimeout(()=>{
    console.log(langRawList);
    let total = 0;
    langs.forEach((lan)=>{
        langRawList.forEach((l)=>{
            if(l[lan.language] != null){
                lan.count += l[lan.language];
            }
        })
      })
    langs.forEach((l)=>{
        total += l.count;
    })
    langs.forEach((l)=>{
        l.count = Math.round(((l.count)/total) * 100);
    })
    setSkills();
      
  },1000)
};

const fetchData = () => {
    var repoFetch = new XMLHttpRequest();
repoFetch.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var data = JSON.parse(this.responseText);
    convertToPercentage(data);
  }
};
repoFetch.open("GET", url, true);
repoFetch.send();
}

fetchData();
window.addEventListener("resize", ()=>{setSkills()});
