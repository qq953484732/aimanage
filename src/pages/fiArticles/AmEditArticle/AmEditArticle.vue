<template>
    <div class="AmEditArticle">
        <div class="content">
            <el-table :data="articleTableData"
                      class="modifyFundArticlesTable"
                      border
                      style="width: 100%"
                      align="center">
                <el-table-column
                        type="index"
                        label="序号"
                        align="center"
                        width="60">
                </el-table-column>
                <el-table-column
                        prop="title"
                        label="文章标题"
                        header-align='center'
                        align="left"
                        width="250">
                    <template slot-scope="scope">
                        <span class="title" @click="findArticle(scope.row._id)">{{scope.row.title}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="publishDate"
                        label="发布时间"
                        align='center'
                        width="160"
                        sortable>
                </el-table-column>
                <el-table-column
                        prop="author"
                        label="作者"
                        align='center'
                        width="80"
                        sortable>
                </el-table-column>
                <el-table-column
                        prop="category"
                        label="类目"
                        align='center'
                        width="80"
                        sortable>
                </el-table-column>
                <el-table-column
                        prop="important"
                        label="重要性"
                        align='center'
                        width="165"
                        sortable>
                    <template slot-scope="scope">
                        <el-rate
                                class="irate"
                                v-model="rate_value"
                                disabled-void-color="#67c23a"
                                :max='parseInt(scope.row.important)'
                                disabled>
                        </el-rate>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="status"
                        label="状态"
                        align='center'
                        width='92'
                        :filters="fields.articleStatus.filter.list"
                        :filter-method="filterStatus"
                        filter-placement="bottom-end">
                    <template slot-scope="scope">
                        <el-tag :type="articleStatusTag(scope.row.status)" close-transition>
                            {{scope.row.status == "1" ? "已发布":((scope.row.status == "2") ? "待发布":"已删除")}}
                        </el-tag>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="data"
                        align='center'
                        label="操作">
                    <template slot-scope='scope'>
                        <el-button v-if="scope.row.status!='1'" size="mini" type="success" @click="handleModifyStatus(scope.row,'1')">发布
                        </el-button>
                        <el-button v-if="scope.row.status!='2'" size="mini" @click="handleModifyStatus(scope.row,'2')">草稿
                        </el-button>
                        <el-button v-if="scope.row.status!='3'" size="mini" type="danger" @click="handleModifyStatus(scope.row,'3')">删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="block">
                <el-pagination
                        v-if='paginations.total > 0'
                        :page-sizes="paginations.page_sizes"
                        :page-size="paginations.page_size"
                        :layout="paginations.layout"
                        :total="paginations.total"
                        :current-page='paginations.page_index'
                        @current-change='handleCurrentChange'
                        @size-change='handleSizeChange'>
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    import url from "../../../apis/url";
    import axios from "axios";
    export default {
        name: "AmEditArticle",
        components:{
        },
        data(){
            return {
                articleTableData: [],
                rate_value:null,
                formatList: {
                    1: '已发布',
                    2: '待发布',
                    3: '已删除'
                },
                fields: {
                    articleStatus:{
                        filter: {
                            list: [
                                {
                                    text: '已发布',
                                    value: 1
                                },{
                                    text: '待发布',
                                    value: 2
                                },
                                {
                                    text: '已删除',
                                    value: 3
                                }
                            ],
                            multiple: true
                        }
                    }
                },
                //需要给分页组件传的信息
                paginations: {
                    page_index: 1,  // 当前位于哪页
                    total: 0,        // 总数
                    page_size: 20,   // 1页显示多少条
                    page_sizes: [5, 10, 15, 20],  //每页显示多少条
                    layout: "total, sizes, prev, pager, next, jumper"   // 翻页属性
                },
            }
        },
        methods: {
            filterStatus(value, item) {
                const type = parseInt(item.status);
                return this.formatList[value] === this.formatList[type];
            },
            articleStatusTag(item){
                let basic = "";
                switch (item) {
                    case '1':
                        basic = 'success';
                        break;
                    case '2':
                        basic = 'warning';
                        break;
                    case '3':
                        basic = 'danger';
                        break;
                }
                return basic;
            },
            handleModifyStatus(row, status) {
                this.$message({
                    message: '操作成功',
                    type: 'success'
                });
                row.status = status;

                axios.post(url.url+"/upFundArticles",{
                    _id:row._id,
                    status:status
                })
            },
            getData(obj){
                axios.get(url.url+"/getFundArticlesOrder",{
                    params:obj
                }).then(res=>{
                    this.articleTableData = res.data.data
                    // console.log(this.articleTableData)
                    this.paginations.total = res.data.max
                })
            },
            handleSizeChange: function (size) {
                this.paginations.pagesize = size;
                // console.log(this.paginations.pagesize)  //每页下拉显示数据
                this.getData({
                     pageIndex:this.paginations.currentPage,      //默认为1
                    // name: 1,        //不传默认不排序,传值为下方数组的下标，
                    // num:1, 		//不传默认不排序，为1时正序，为-1倒序
                    // status:[0,1,2],             //发布状态,数组对象范围为0-2
                    liPage:size      //一页数据请求几个  默认20，可不传
                });
            },
            handleCurrentChange: function(currentPage){
                this.paginations.currentPage = currentPage;
                // console.log(this.paginations.currentPage)  //点击第几页
                this.getData({
                    pageIndex:currentPage,      //默认为1
                    // name: 1,        //不传默认不排序,传值为下方数组的下标，
                    // num:1, 		//不传默认不排序，为1时正序，为-1倒序
                    // status:[0,1,2],             //发布状态,数组对象范围为0-2
                    liPage:this.paginations.pagesize      //一页数据请求几个  默认20，可不传
                });

            },
            findArticle(id){
                // console.log(row);
                //实现菜单跳转，重定向
                this.$router.push('/home/findArticle?id='+id);
            }
        },
        mounted() {
            this.getData();
        },
        watch:{
            articleTableData(a){
                a.forEach(e=>{
                e.publishDate =new Date(e.publishDate).toJSON().split(".")[0].replace(/T/g, ' ');
                })
            }
        }
    }
</script>

<style scoped>
    .content{
        padding: 10px 15px;
    }
    .title{
        color:#606266;
        cursor:pointer;
    }
</style>
