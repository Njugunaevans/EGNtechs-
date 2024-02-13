

    var tablinks=document.getElementsByClassName("tab-links");
    var tabcontents=document.getElementsByClassName("tab-contents");
    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classlist.remove("active-link");
        }
        for(tabcontent of tabcontents){
            tabbcontent.classlist.remove("active-tab");
        }
        
Event.currentTarget.classlist.add("active-link");
document.getElementById(tabname).classList.add("active-tab");
    }


