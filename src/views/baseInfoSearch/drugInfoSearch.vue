<template>
    <section>
        <!--工具条-->
        <!-- <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
            <el-form :inline="true" :model="filters">
                <el-form-item>
                    <el-input v-model="filters.name" placeholder="搜索名称"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" v-on:click="getUsers">查询</el-button>
                </el-form-item>
            </el-form>
        </el-col>

        <el-table :data="users" highlight-current-row v-loading="listLoading" @selection-change="selsChange" style="width: 100%;">
            <el-table-column type="selection" width="55">
            </el-table-column>
            <el-table-column type="index" width="60">
            </el-table-column>
            <el-table-column prop="name" label="通用名" width="120" sortable>
            </el-table-column>
            <el-table-column prop="sex" label="商品名" width="100" sortable>
            </el-table-column>
            <el-table-column prop="age" label="英文名" width="100" sortable>
            </el-table-column>
            <el-table-column prop="birth" label="剂型" width="120" sortable>
            </el-table-column>
            <el-table-column prop="addr" label="规格包装" min-width="180" sortable>
            </el-table-column>
            <el-table-column prop="productor" label="生产商家" min-width="180" sortable>
            </el-table-column>
            <el-table-column prop="category" label="分类" min-width="180" sortable>
            </el-table-column>
            <el-table-column prop="codetype" label="本位码" min-width="180" sortable>
            </el-table-column>
            <el-table-column prop="standard" label="国药标准" min-width="180" sortable>
            </el-table-column>
        </el-table> -->
    </section>
</template>

// <script>
//     import util from '../../common/js/util'
//     //import NProgress from 'nprogress'
//     import { getUserListPage, getUserList} from '../../api/api';

//     export default {
//         data() {
//             return {
//                 filters: {
//                     name: ''
//                 },
//                 users: [],
//                 total: 0,
//                 page: 1,
//                 listLoading: false,
//                 sels: [],//列表选中列

//                 editFormVisible: false,//编辑界面是否显示
//                 editLoading: false,
//                 editFormRules: {
//                     name: [
//                         { required: true, message: '请输入姓名', trigger: 'blur' }
//                     ]
//                 },
//                 addFormVisible: false,//新增界面是否显示
//                 addLoading: false,
//             }
//         },
//         methods: {
//             //获取用户列表
//             getUsers() {
                
//                 let para = {
//                    // name: this.filters.name
//                    name:'尼'
//                 };
//                 this.listLoading = true;
//                 //NProgress.start();
//                 getUserList(para).then((res) => {
//                     debugger;
//                     //this.total = res.data.total;
//                     console.log(res);
                 
//                 });
//             },
//             selsChange: function (sels) {
//                 this.sels = sels;
//             },
//         },
//         mounted() {
//             this.getUsers();
//         }
//     }

// </script>

<style scoped>

</style>