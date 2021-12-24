chrome.tabs.getSelected(null,function(tab) {
    var tablink = tab.url;
    var base=tablink.substring(0,19);
    var err="ERROR:Not a GitHub Repo";
    if( base === "https://github.com/"){
        var url=tablink.substring(19);
        url="https://api.github.com/repos/"+url;
        fetch(url)
        .then(reponse => reponse.json())
        .then(data => {
            if(data.message === "Not Found"){
                document.getElementById('text').innerText=err;
            }
            else {
                let size=data.size;
                let unit=" KB";
                document.getElementById('text').innerText=size+unit;
                // if(size>=1000000){
                //     size=Math.round(size/1000000);
                //     unit=" GB";
                // }
                // else 
                if(size>=1000){
                    size=math.round(size/1000);
                    unit=" MB";
                }
                document.getElementById('text').innerText=size+unit;
            }
        })
        .catch(error => {
            console.error('Error:',error);
        })
    } else {
        document.getElementById('text').innerText=err;
    }
});
