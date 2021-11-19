function login(){
        var account = $("#Login").val();
        if (account == "") {
            alert("帳號欄位不能為空，請輸入Google帳號");
        }
        else {
            $("#mainiframe", document.body).attr("src","https://calendar.
            google.com/calendar/embed?src="+ account +"%40gmail.com&ctz=
            Asia%2FTaipei");
            $("#showBlock").toggle("slow");
            $("#Logout_button").toggle("slow");
            $("#LoginBlock").hide(1000);
        }
    }

    function logout(){
        $("#showBlock").hide(1000);
        $("#Logout_button").hide(1000);
        $("#LoginBlock").toggle("slow");
    }