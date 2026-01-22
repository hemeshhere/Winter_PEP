let userRole="editor";
function isAuthenticated(userRole){
    if(userRole==="admin" || userRole==="guest" || userRole==="editor"){
        if(userRole==="admin"){
            console.log("Welcome to the dashboard");
        }
        else{
            console.log("Access Denied");
        }
    }
}
isAuthenticated(userRole);
