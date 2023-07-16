exports.list = [
    {
        method: 'get',
        url: '/',
        fn: (req, res) => {
            console.log(req.params)
            console.log(req.query)
            res.send({
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
            res.send({
                a:123,b:3245
            });
        }
    }
]
