function value(id){
    return document.getElementById(id).value;
}
function cmail(email) 
                    {
                        var re = /\S+@\S+\.\S+/;
                        return re.test(email);
                    }
function empty(id){
    if (document.getElementById(id).value === ""){
        return true;
    }else{
        return false;
    }
}
function submit(id){
    document.getElementById(id).submit();
}
function g_focus(id){
    var warn = id + "req";
    document.getElementById(warn).style.display = "block";
    document.getElementById("req" + id + "br").style.display = "block";
    document.getElementById(id).style.border = "1px solid red";
    document.getElementById(id).focus();
}
function l_focus(id){
    var warn = id + "req";
    document.getElementById(warn).style.display = "none";
    document.getElementById("req" + id + "br").style.display = "none";
    document.getElementById(id).style.border = "0px";
}