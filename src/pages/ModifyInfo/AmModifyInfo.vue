<template>
    <div class="AmModifyInfo">
        <div class="content">
            <el-row :gutter="10">
                <el-col :md="8">
                    <div class="grid-content modifyInfo">
                        <div class="modifyTitle">
                            <img src="/static/img/modify.jpg" alt=""/>
                            <p>修改信息</p>
                        </div>
                        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                            <el-form-item label="姓名" prop="username">
                                <el-input placeholder="请输入姓名" v-model="ruleForm.username" disabled></el-input>
                            </el-form-item>
                            <el-form-item label="请输入昵称" prop="nickname">
                                <el-input v-model="ruleForm.nickname" placeholder="请输入昵称"></el-input>
                            </el-form-item>
                            <el-form-item label="投资年限" prop="touziyear">
                                <el-select v-model="ruleForm.touziyear" placeholder="请选择投资年限">
                                    <el-option label="1年" value="1"></el-option>
                                    <el-option label="2年" value="2"></el-option>
                                    <el-option label="3年" value="3"></el-option>
                                    <el-option label="4年" value="4"></el-option>
                                    <el-option label="5年" value="5"></el-option>
                                    <el-option label="6年" value="6"></el-option>
                                    <el-option label="7年" value="7"></el-option>
                                    <el-option label="8年" value="8"></el-option>
                                    <el-option label="9年" value="9"></el-option>
                                    <el-option label="10年" value="10"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="绑定邮箱" prop="email">
                                <el-input v-model="ruleForm.email" placeholder="请输入绑定邮箱"></el-input>
                            </el-form-item>
                            <el-form-item label="绑定手机" prop="telphone" >
                                <el-input v-model="ruleForm.telphone" placeholder="请输入绑定手机"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="submitRuleForm('ruleForm')">提交</el-button>
                                <el-button @click="resetForm('ruleForm')">重置</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </el-col>

                <el-col :md="8">
                    <div class="grid-content modifyInfo">
                        <div class="modifyTitle">
                            <img src="/static/img/modify.jpg" alt=""/>
                            <p>修改密码</p>
                        </div>
                        <el-form :model="pwdForm" :rules="pwdRules" ref="pwdForm" label-width="100px" class="demo-ruleForm">
                            <el-form-item label="原密码" prop="password">
                                <el-input type="password" v-model="pwdForm.password" placeholder="请输入原密码" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="新密码" prop="newPass">
                                <el-input type="password" v-model="pwdForm.newPass" placeholder="请输入新密码" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="确认密码" prop="checkPass">
                                <el-input type="password" v-model="pwdForm.checkPass" placeholder="请输入确认密码" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="submitPwdForm('pwdForm')">提交</el-button>
                                <el-button @click="resetForm('pwdForm')">重置</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </el-col>

                <el-col :md="8">
                    <div class="grid-content modifyInfo">
                        <div class="modifyTitle">
                            <img src="/static/img/modify.jpg" alt=""/>
                            <p>手机服务</p>
                        </div>
                        <el-form :model="phoneForm" :rules="phoneRules" ref="phoneForm" label-width="120px" class="demo-ruleForm">
                            <el-form-item label="当前绑定手机" prop="phone" >
                                <el-input v-model="phoneForm.phone" placeholder="请输入绑定手机"></el-input>
                            </el-form-item>
                            <el-form-item label="基础短信服务" prop="basicType">
                                <el-checkbox-group v-model="phoneForm.basicType" class="phoneGroup">
                                    <el-checkbox label="网站密码找回" name="basicType"></el-checkbox>
                                    <el-checkbox label="提现申请短信验证" name="basicType"></el-checkbox>
                                    <el-checkbox label="提现申请提醒" name="basicType"></el-checkbox>
                                </el-checkbox-group>
                            </el-form-item>
                            <el-form-item label="可选短信服务" prop="selectType">
                                <el-checkbox-group v-model="phoneForm.selectType" class="phoneGroup">
                                    <el-checkbox label="投标通知" name="selectType"></el-checkbox>
                                    <el-checkbox label="满标/流标/撤销通知" name="selectType"></el-checkbox>
                                    <el-checkbox label="回款通知" name="selectType"></el-checkbox>
                                    <el-checkbox label="本息保障通知" name="selectType"></el-checkbox>
                                    <el-checkbox label="优质标提醒通知" name="selectType"></el-checkbox>
                                </el-checkbox-group>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="submitPhoneForm('phoneForm')">提交</el-button>
                                <el-button @click="resetForm('phoneForm')">重置</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import url from "../../apis/url";
    import axios from "axios";

    export default {
        name: "AmModifyInfo",
        components:{
        },
        data() {
            let validateTelphone = (rule, value, callback) =>{
                if (value === '') {
                    callback(new Error('请输入手机号'));
                } else {
                    let phoneRegex = /^1[3|4|5|7|8]\d{9}$/
                    if (!phoneRegex.test(value)) {
                        callback(new Error('手机号码格式不正确！'));
                    }
                    callback();
                }
            };
            let validateNewPass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入新密码'));
                } else {
                    if (this.pwdForm.checkPass !== '') {
                        this.$refs.pwdForm.validateField('checkPass');
                    }
                    callback();
                }
            };
            let validateCheckPass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入确认密码'));
                } else if (value !== this.pwdForm.newPass) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                ruleForm: {
                    username: '',
                    nickname: '',
                    touziyear: '',
                    email:'',
                    telphone:''
                },
                pwdForm:{
                    password: '',
                    newPass: '',
                    checkPass: ''
                },
                phoneForm:{
                    phone:'',
                    basicType: [],
                    selectType:[]
                },
                rules: {
                    // username: [
                    //      {  message: '请输入姓名', trigger: 'blur' }
                    // ],
                    nickname: [
                        { required: true, message: '请输入昵称', trigger: 'blur' },
                        { min: 2, max: 8, message: '长度在 2 到 8 个字符', trigger: 'blur' }
                    ],
                    touziyear: [
                        { required: true, message: '请选择投资年限', trigger: 'change' }
                    ],
                    email:[
                        { required: true, message: '请输入绑定邮箱', trigger: 'blur' },
                        { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
                    ],
                    telphone:[
                        { required: true, validator: validateTelphone, trigger: 'blur' }
                    ]
                },
                pwdRules: {
                    password: [
                        { required: true, message: '请输入原密码', trigger: 'blur' }
                    ],
                    newPass: [
                        { required: true,validator: validateNewPass, trigger: 'blur' }
                    ],
                    checkPass: [
                        {required: true, validator: validateCheckPass, trigger: 'blur' }
                    ]
                },
                phoneRules:{
                    phone:[
                        { required: true, validator: validateTelphone, trigger: 'blur' }
                    ],
                    basicType: [
                        { type: 'array', required: true, message: '请至少选择一个基础短信服务', trigger: 'change' }
                    ],
                    selectType: [
                        { type: 'array', required: true, message: '请至少选择一个可选短信服务', trigger: 'change' }
                    ]
                }
            };
        },
        methods:{
            showMessage(type,message){
                this.$message({
                    type: type,
                    message: message
                });
            },
            submitRuleForm(formName){
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        let key = sessionStorage.getItem("aimanage");
                        axios.post(url.url+"/users/upUser",{
                            key,
                            nickname:this.ruleForm.nickname,
                            touziyear:this.ruleForm.touziyear,
                            email: this.ruleForm.email,
                            telphone: this.ruleForm.telphone

                        }).then(response=>{
                            // console.log(response);
                            if(response.data.ok === 1){
                                this.showMessage('success','修改信息成功~');
                                // this.$router.push('/AmInfoList');
                            }else{
                                this.$message.error('修改失败请重试')
                            }
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            submitPwdForm(formName){
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        let key = sessionStorage.getItem("aimanage");
                        axios.post(url.url+"/users/upPass",{
                            key,
                            pass1:this.pwdForm.password,
                            pass2:this.pwdForm.newPass
                        }).then(response=>{
                                console.log(response);
                                if(response.data.ok === 1){
                                    this.showMessage('success','修改密码成功~');
                                    // this.$router.push('/AmInfoList');
                                }else if(response.data.ok === 0){
                                    this.showMessage('error','旧密码错误~');
                                }else if(response.data.ok === -2){
                                    this.showMessage('warning','key错误~');
                                }else{
                                    this.$message.error('修改失败请重试')
                                }
                            })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            submitPhoneForm(formName){
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        let key = sessionStorage.getItem("aimanage");
                        axios.post(url.url+"/users/upFuWu",{
                            key,
                            telphone:this.phoneForm.phone,
                            baseType:this.phoneForm.basicType,
                            changeType:this.phoneForm.selectType
                        }).then(response=>{
                            // console.log(response);
                            if(response.data.ok === 1){
                                this.showMessage('success','修改手机服务成功~');
                                // this.$router.push('/AmInfoList');
                            }else if(response.data.ok === -2){
                                this.showMessage('warning','key错误~');
                            }else{
                                this.$message.error('修改失败请重试')
                            }
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            getPersonalInfo(){
                let key = sessionStorage.getItem("aimanage");

                axios.get(url.url+"/getPersonalInfo",{
                    params:{
                        key
                    }
                })
                .then(res=>{
                    // console.log(res.data.data.personalInfo  )
                    let dataArr = res.data.data.personalInfo.user;
                    this.ruleForm.username = dataArr.username;
                    this.ruleForm.nickname = dataArr.nickname;
                    // console.log(this.ruleForm.nickname)
                    this.ruleForm.touziyear = dataArr.touziyear;
                    this.ruleForm.email = dataArr.email;
                    this.ruleForm.telphone = this.phoneForm.phone = dataArr.telphone;
                    // console.log(this.phoneForm.phone)
                    this.phoneForm.baseType = (dataArr.baseType);
                    this.phoneForm.changeType = (dataArr.changeType);
                })
            }
        },
        mounted() {
            this.getPersonalInfo();
        }
    }
</script>

<style scoped>
    /*content*/
    .content{
        padding: 10px 15px;
    }
    /*modifyInfo*/
    .modifyInfo{
        border: 1px solid #dfdfdf;
        font-size: 14px;
        padding: 10px;
        margin: 5px;
    }
    .modifyTitle{
        width: 100%;
        cursor: pointer;
        background-color: #3bc5ff;
        color: #fff;
        font-size: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 0;
        margin-bottom: 22px;
    }
    .modifyTitle img{
        width: 14px;
        height: 11px;
        margin-right: 5px;
    }
    .phoneGroup{
        display: flex;
        flex-direction: column;
    }
</style>