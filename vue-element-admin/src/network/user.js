import http from './request'

export function getUserList(){
    return http({
        url:"/api/userlist",
    })
}