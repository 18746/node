const { UserList } = require("../date/user");

let apiDemoList = [
  {
    method: "post",
    url: "/rigister",
    fn: (req, res) => {
      console.log("body", req.body);
      console.log("data", req.data);
      let userId = new Date().getTime() + "";
      userId =
        "user_" +
        userId.substring(userId.length - 5) +
        req.body.phoneNumber.substring(7);

      let flag;
      for (var i = 0; i < UserList.length; i++) {
        flag =  UserList[i].phoneNumber == req.body.phoneNumber ?  true : false;
        if(flag=true) break;
      }

    //   if (flag) {
    //     res.status(500);
    //     res.json({
    //       data: {
    //         phoneNumber: req.body.phoneNumber,
    //       },
    //       success: false,
    //       messageText: "该手机号已经注册，请更换其他手机号注册！",
    //     });
    //   } else {
        res.status(200);
        res.json({
          data: {
            userId: userId,
            userName: req.body.userName,
            phoneNumber: req.body.phoneNumber,
            accountCancel: "no",
          },
          success: true,
          messageText: "注册成功",
        });
        UserList.push({
          userId: userId,
          userName: req.body.userName,
          phoneNumber: req.body.phoneNumber,
          userPassWord: req.body.password,
          accountCancel: "no",
          sex: "2",
          addresss: [],
        });
      }
    },
//   },
{
    method: "post",
    url: "/login",
    fn: (req, res) => {
      console.log("body", req.body);
      console.log("data", req.data);
     
      let flag;
      for (var i = 0; i < UserList.length; i++) {
        flag =  UserList[i].phoneNumber == req.body.phoneNumber ?  true : false;
        if(flag=true) break;
      }

      if (flag) {
        if( req.body.password===UserList[i].userPassWord){
            res.status(200);
            res.json({
              data: {
                userId: UserList[i].userId,
                userName: req.body.userName,
                phoneNumber: req.body.phoneNumber,
              },
              success: true,
              messageText: "登录成功",
            });
        }else{
            res.status(500);
            res.json({
              data: {
                phoneNumber: req.body.phoneNumber,
              },
              success: false,
              messageText: "手机号或密码有误请重新输入！",
            });
        }
       
      }else{
        res.status(500);
        res.json({
          data: {
            phoneNumber: req.body.phoneNumber,
          },
          success: false,
          messageText: "该手机号未注册，如有需要请注册！",
        });
      }   
    },
}
];

module.exports = [...apiDemoList];
