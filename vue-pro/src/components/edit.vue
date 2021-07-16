<template>
  <div>
    <h2 class="sub-header">编辑人物</h2>
    <form @submit.prevent="submitFrom">
      <div class="form-group">
        <label for="exampleInputEmail1">用户名</label>
        <input v-model="formData.name" type="text" class="form-control" id="exampleInputEmail1" placeholder="请输入姓名"/>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">性别</label>
        <input type="text" v-model="formData.gender"  class="form-control" id="exampleInputPassword1" placeholder="请输入性别" />
      </div>
      <button type="submit" @click="editItem()" class="btn btn-success">编辑人物</button>
    </form>
  </div>
</template>

<script>
import axios from "axios"
  export default {
    data(){
      return {
        //数据双向绑定
        formData:{
          name:"",
          gender:""
        }
      }
    },
    //页面加载完，相当于window.onload
    mounted() {
      this.editInfo();
    },
    methods:{
      editInfo(){
        const {id} = this.$route.params;
        console.log(id)
        axios.get("/api/index.php?act=edit&id="+id).then(res => {
          console.log(res)
          this.formData = res.data;

        }).catch(err => {
          console.log(err)
        })
      },
      submitFrom() {
        console.log(this.formData);
      },

      editItem(){

        if(this.formData.name && this.formData.gender){

          axios.post("/api/index.php?act=editHandle", this.formData).then(res => {
            console.log("--------------")
            console.log(res);
          }).catch(err => {
            console.log(err)
          })
        }else{
          console.log("信息必填")
        }
      }
    }
  }
</script>

<style>
</style>


