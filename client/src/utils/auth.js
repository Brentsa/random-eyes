import decode from 'jwt-decode';

class AuthService
{
    //set the token to local storage and reroute to main page
    login(idToken){
        localStorage.setItem('id_token', idToken);
        return window.location.assign('/');
    }
    
    //remove the token from local storage
    logout(){
        localStorage.removeItem('id_token');
        return window.location.assign('/');
    }

    //return true or false if the user is logged in or not
    loggedIn(){
        const token = this.getToken();
        return !!token && !this.isTokenExpired(token);
    }

    //return true or false evaluation based on a token expiry date
    isTokenExpired(token){
        //check for a token and say it is expired if nothing is returned
        const decodedToken = decode(token);
        if(!decodedToken) return true;

        //evaluate the expiry of the token and return a boolean value
        const isExpired = decodedToken.exp < Date.now()/1000 ? true : false;
        return isExpired;
    }

    //Get the saved token from local storage
    getToken(){
        return localStorage.getItem('id_token');
    }

    //Decode the token from local storage and return the profile data
    getProfile(){
        return decode(this.getToken());
    }

}

export default new AuthService();