//create all your actions here..

export const loginUser = (userinfo) => {
    console.log(userinfo);
    return{
        type: 'LOGIN_USER',
        payload: userinfo
    }
};
