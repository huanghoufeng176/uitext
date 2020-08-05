<template>
  <div class="login">
    <div class="dengluBOx">
      <!-- 登录图片 -->
      <div class="denglutupian">
        <img src="~assets/img/logo.png" alt />
      </div>
      <!-- 登录表单 -->
      <el-form ref="formRef" label-width="0px" :model="biaodanFormModel" :rules="biaodanRules">
        <el-form-item prop="username">
          <el-input placeholder="请输入用户名" v-model="biaodanFormModel.username" prefix-icon="iconfont icon-xingmingyonghumingnicheng"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" placeholder="请输入密码" v-model="biaodanFormModel.password" prefix-icon="iconfont icon-quanxianguanli"></el-input>
        </el-form-item>
        <el-form-item class="anniu">
          <el-button @click="dengluClick" type="primary">登录</el-button>
          <el-button @click="resetClick" type="info">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
//导入网络封装
import {request} from 'network/request.js'
export default {
  components: {},
  data() {
    return {
      //表单双向绑定数据
      biaodanFormModel:{
        username:'admin',
        password:'123456'
      },
      //表单用户名，登录输入密码校验规则
      biaodanRules:{
        username:[
          { required: true, message: '请输入用户名称', trigger: 'blur' },
          { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
        ],
        password:[
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
        ]
      }
    };
  },
  created() {},
  mounted() {},
  watch: {},
  computed: {},
  methods: {
    //点击重置按钮，数据重置
    resetClick(){
      this.$refs.formRef.resetFields()
    },
    //表单登录页面
    dengluClick(){
      this.$refs.formRef.validate(valid=>{
        if(!valid){
          this.$message.error('请输入正确的用户名或密码')
          return
        }
        //校验规则验证通过后， 发起网络请求
        request({
          url:'login',
          method:'post',
          data:this.biaodanFormModel
        }).then(res=>{
          if(res.data.meta.status!==200){
            this.$message.error('登录失败')
          }
          console.log(res)
          this.$message.success('登录成功')
          window.sessionStorage.setItem('token',res.data.data.token)
          this.$router.push('/home')
        })
      })
    }
  },
};
</script>
<style scoped>
.login {
  height: 100%;
  background-color: #264a6b;
}
.dengluBOx {
  width: 460px;
  height: 300px;
  background-color: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -250px;
  margin-top: -150px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 1000, 0.01);
  border-radius: 3px;
  padding: 0 20px;
}
.denglutupian {
  width: 110px;
  height: 110px;
  border: 1px solid #eceeeb;
  border-radius: 50%;
  padding: 10px;
  position: absolute;
  left: 50%;
  margin-left: -65px;
  margin-top: -65px;
  background-color: #fff;
}
.denglutupian img {
  border-radius: 50%;
  width: 110px;
  height: 110px;
  background-color: #eceeeb;
}
.el-form {
  margin-top: 90px;
}
.anniu {
  position: absolute;
  right: 20px;
  bottom: 0px;
}
.el-input{
  margin-top: 20px;
}
</style>