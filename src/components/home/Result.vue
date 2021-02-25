<template>
<div class="demo-image__lazy">
  <img v-if="imageUrl" :src="this.imageUrl" class="avatar">
</div>
</template>
<script>
  export default {
    data() {
      return {
        imageUrl: ''
      }
    },
  methods:{
   acceptPicture(){
        var vm = this;
        vm.imageUrl=vm.$route.query.imageUrl
        console.log(this.imageUrl)
        console.log("开始打印图片地址")
      //  vm.id = vm.$route.params.id; // 接收值
      //  vm.word =vm.$route.params.word;
      //  vm.audio=vm.$route.params.audio;
      //  vm.pictureList.push(vm.$route.params.picture1); // 插入值
      //  vm.pictureList.push(vm.$route.params.picture2);
      //  vm.pictureList.push(vm.$route.params.picture3);
      //  vm.pictureList.push(vm.$route.params.picture4);
      //  console.log("开始打印图片地址")
      //  console.log(this.pictureList)
          }
},  
    mounted(){
        this.acceptPicture();
    }
  }
  


</script>

<style scoped>

</style>