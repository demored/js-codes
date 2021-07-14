<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">Hero List</h2>
    <a class="btn btn-success" href="add.html">新增</a>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
        <tr>
          <th>id</th>
          <th>姓名</th>
          <th>性别</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in list" :key="item.id">
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>{{item.age}}</td>
          <td>{{item.job}}</td>
          <td>
            <a href="edit.html">编辑</a> &nbsp;&nbsp;
            <a href="javascript:window.confirm('Are you sure?')">删除</a>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

import axios from "axios"

export default {
    data(){
      return {
        list:[]
      }
    },
    methods:{
      loadData(){
        axios.get('/api/')
          .then(
            (response) => {
              console.log(response);
              this.list = response.data;
            })
          .catch(
            (error) => {
              console.log(error);
            });
      }
    },
  mounted() {
    this.loadData()
  },
}
</script>

<style>
</style>
