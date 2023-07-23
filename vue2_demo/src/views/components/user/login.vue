<template>
    <div class="login">
        <div v-if="flag" class="body">
            <label>
                用户名：
                <input type="text" v-model="rigister.userName">
            </label>
            <label>
                手机号：
                <input type="text" v-model="rigister.phoneNumber">
            </label>
            <label>
                密码：
                <input class="password" :type="rigister.passwordType" v-model="rigister.password">
                <button class="pass" @click="changePassWord(rigister, 'passwordType')">s</button>
            </label>
            <label>
                确认密码：
                <input class="password" :type="rigister.passwordAgainType" v-model="rigister.passwordAgain">
                <button class="pass" @click="changePassWord(rigister, 'passwordAgainType')">s</button>
            </label>
            <button @click="rigisterFun">注册</button>
        </div>
        <div v-else class="body">
            <label>
                手机号：
                <input type="text" v-model="login.phoneNumber">
            </label>
            <label>
                密码：
                <input class="password" :type="login.passwordType" v-model="login.password">
                <button class="pass" @click="changePassWord(login, 'passwordType')">s</button>
            </label>
            <button @click="loginFun">登录</button>
        </div>
        <div class="footer">
            <button v-if="!flag" @click="changeFlag">去注册</button>
            <button v-else @click="changeFlag">已有账号</button>
        </div>
    </div>
</template>
  
<script>
//   import HelloWorld from '@/components/HelloWorld.vue'
//   import axios from 'axios'
import request from '@/utils/request'

export default {
    name: 'login',
    data() {
        return {
            flag: true,
            rigister: {
                userName: '',
                phoneNumber: '',
                password: '',
                passwordType: 'password',
                passwordAgain: '',
                passwordAgainType: 'password'
            },
            login: {
                phoneNumber: '',
                password: '',
                passwordType: 'password',
            },
        }
    },
    created() {

    },
    methods: {
        changeFlag() {
            this.flag = !this.flag;
            this.rigister.password = '';
            this.rigister.passwordType = 'password';
            this.rigister.passwordAgain = '';
            this.rigister.passwordAgain = '';
            this.rigister.passwordAgainType = 'password';
            this.login.password = '';
            this.login.passwordType = 'password';
        },
        changePassWord(obj, passwordKey) {
            if (obj[passwordKey] === 'password') {
                obj[passwordKey] = 'text';
                return true;
            }
            if (obj[passwordKey] === 'text') {
                obj[passwordKey] = 'password';
                return true;
            }
        },
        async rigisterFun() {
            if (this.rigister.userName && this.rigister.phoneNumber && this.rigister.password && this.rigister.passwordAgain) {
                if (this.rigister.password == this.rigister.passwordAgain) {
                    // 调用接口
                    // xxx.regist
                    await request({
                        method: 'post',
                        url: '/api/rigister',
                        data: this.rigister
                    }).then((res) => {
                        console.log(res);
                    }).catch(err => {
                        console.log(err);
                    });
                } else {
                    this.$alert('确认密码与密码不同！！！')
                }
            } else {
                this.$alert('请输入')
            }
        },
        loginFun() {

        }
    }
}
</script>

<style lang="less" scoped>
.login {
    position: absolute;
    width: 100%;
    bottom: 36vh;
    .body {
        display: flex;
        flex-direction: column;
        align-items: center;
        label {
            min-width: 250px;
            display: flex;
            justify-content: space-between;
            position: relative;
            input {
                width: 162px;
                &[type="password"]::-ms-reveal {
                    display:none;
                }
            }
            .password {
                padding-right: 24px;
                width: 140px;
            }
            .pass {
                position: absolute;
                width: 22px;
                height: 22px;
                right: 0px;
            }
        }
        & > * {
            margin-bottom: 10px; 
        }
    }
    .footer {
        text-align: right;
        padding: 0px 30px;
    }
}
</style>