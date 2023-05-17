import Mock from 'mockjs'
const Random = Mock.Random;
let userList = []
let userLength = 30
for (let index = 0; index < userLength; index++) {
    userList.push(Mock.mock({
        id:'@id',
        name:'@cname',
        birthday:Random.date('yyyy-MM-dd'),
        'age|18-40':18
    }))    
}

Mock.mock("/api/userlist",'get',()=>{
    return {
        code: "200",
        data: userList,
      };   
})