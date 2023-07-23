const {user} = require('../date/user');

let apiDemoList = [
    {
        method: 'post',
        url: '/rigister',
        fn: (req, res) => {
            console.log('body', req.body)
            console.log('data', req.data)

            user.UserList.push({
                userId: '0001',
                userName: req.body.userName,
                phoneNumber: req.body.phoneNumber,
                userPassWord:  req.body.password,

                sex: '2',
                addresss: []
                
            });

            console.log(req.body.userName,'已经注册成功！！！')

            res.status(200);
            res.json({
                data: {
                    a:123,b:3245
                },
                success: true,
                messageText: '成功'
            });
        }
    }
]

module.exports = [
    ...apiDemoList
]