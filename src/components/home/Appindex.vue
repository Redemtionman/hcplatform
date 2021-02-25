
<template>

  <body id="poster1">
    <div class="bg">
      <el-image :src="src" class="img"></el-image>
    </div>

    <div class="bg1">
      <el-button type="success" round @click="result()"
        >查看人脸识别结果</el-button
      >
    </div>
    <el-upload
      class="photo"
      drag
      ref=""
      :on-success="handleAvatarSuccess"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      action="http://localhost:8443/result"
      name="file"
      multiple
      accept="image/*"
      :before-upload="beforeAvatarUpload"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text" >将文件拖到此处，或<em >点击上传</em></div>
      <div class="el-upload__tip" slot="tip">
        只能上传jpg/png文件，且不超过4M
      </div>
    </el-upload>
  </body>
</template>


<script>
export default {
  data() {
    return {
      imageUrl: require("../../assets/timg.jpg"),
      griddata: [
        {
          imagurl1: require("../../assets/loginbackground.jpg"),
        },
        {
          imagurl2: "../../assets/wuyanzu.jpg",
        },
      ],
      src: require("../../assets/loginbackground.jpg"),
      fileList: [
        {
          name: "food.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
        {
          name: "food2.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
      ],
    };
  },
  methods: {
        handleAvatarSuccess(res, file) {
          
        // this.imageUrl = URL.createObjectURL(file.raw);
        console.log(file)
        console.log(this.imageUrl)
        console.log(res)
        this.$message.success("上传成功")
        // this.imageUrl=res
        // let a=JSON.stringify(res)
        // console.log(a)
        // let blob = new Blob([JSON.stringify(res)], { type: 'image/jpeg'});
        // console.log(blob)
        // let url = window.URL.createObjectURL(res.raw);
        // // console.log(url)
        // this.imageUrl = url
      },
      beforeAvatarUpload(file){
       
        const isJPG = file.type === 'image/jpeg';
        const isLt4M = file.size / 1024 / 1024 < 4;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt4M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt4M;
      },

      result() {
      this.$router.push({
        path: "/result",
        query:{imageUrl:this.imageUrl}
        }
       )
       console.log(imageUrl)
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      }
  },
};
</script>

<style>
#poster1 {
  background-color: #202222;
  background-position: center;
  height: 100%;
  width: 100%;
  background-size: cover;
  position: fixed;
}
.avatar-uploader .el-upload {
  border: 1px dashed#2E3030;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #2e3030;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #202222;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
  color: #202222;
}
.but1 {
  color: #eaf6ef;
  width: 100%;
  height: 80%;
}
.bg {
  width: 100%;
  height: 40%;
}
.img {
  width: 100%;
  height: 100%;
}
.bg1 {
  height: 14%;
  padding-left: 10%;
  padding-right: 10%;
  margin-top: 4%;
}
.upload-demo {
  color: #2e3030;
}
.eleel-upload__tip {
  color: #eaf6ef;
}
body {
  margin: 0px;
}
</style>
