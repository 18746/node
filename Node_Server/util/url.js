const user = require('./user');

let apiDemoList = [
    {
        method: 'get',
        url: '/',
        fn: (req, res) => {
            console.log(req.params)
            console.log(req.query)
            res.status(200);
            res.json({
                a:123,b:3245
            });
        }
    }, {
        method: 'post',
        url: '/',
        fn: (req, res) => {
            // console.log(req)
            console.log('body', req.body)
            console.log('data', req.data)
            console.log('params', req.params)
            console.log('query', req.query)
            
            res.status(200);
            // res.send({a:123,b:3245});

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
    ...apiDemoList,
    ...user,
]
