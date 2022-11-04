<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="ID" width="45">
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column label="Product_Name">
        <template slot-scope="scope">
          {{ scope.row.product_name }}
        </template>
      </el-table-column>
      <el-table-column label="Type" prop="product_type" width="110" align="center" sortable>
        <template slot-scope="scope">
          <span>{{ scope.row.product_type }}</span>
        </template>
      </el-table-column>
      <el-table-column label="price" prop="product_price" width="110" align="center" sortable>
        <template slot-scope="scope">
          {{ scope.row.product_price }}
        </template>
      </el-table-column>
      <el-table-column label="Stock" prop="stock" width="110" align="center" sortable>
        <template slot-scope="scope">
          {{ scope.row.stock }}
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="Status" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="Shelf_time" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time"/>
          <span>{{ scope.row.shelf_time }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)"
          >编辑
          </el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="货物信息" :visible.sync="dialogFormVisible">
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="Product name">
          <el-input v-model="form.product_name"/>
        </el-form-item>
        <el-form-item label="Stock">
          <el-input v-model="form.stock" style="width: 20%"/>
        </el-form-item>
        <el-form-item label="Shelf life">
          <el-col :span="11">
            <el-date-picker v-model="form.date" type="date" placeholder="Pick a date" style="width: 100%;"/>
          </el-col>
          <el-col :span="2" class="line">:</el-col>
          <el-col :span="11">
            <el-time-picker
              v-model="form.time"
              type="fixed-time"
              format="HH:mm"
              placeholder="Pick a time"
              style="width: 100%;"
            />
          </el-col>
        </el-form-item>
        <el-form-item label="Product type">
          <el-radio-group v-model="form.type">
            <el-radio label="Online activities" name="type"/>
            <el-radio label="Promotion activities" name="type"/>
            <el-radio label="Offline activities" name="type"/>
            <el-radio label="Simple brand exposure" name="type"/>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="editProduct">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getList } from '@/api/table'
import { mapGetters } from 'vuex'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        normal: 'success',
        soon: 'gray',
        expired: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: [],
      listLoading: true,
      dialogFormVisible: false,
      form: {
        product_name: '',
        stock: '',
        product_type: '',
        date: '',
        time: '',
        type: ''
      }
    }
  },
  computed: {
    ...mapGetters([
      'tableList'
    ]),
    dateString() {
      return new Date(this.form.date)?.toLocaleDateString()
    },
    timeString() {
      return new Date(this.form.time)?.toLocaleTimeString()
    }
  },
  created() {
    this.fetchData()
    setInterval(() => {
      this.$store.dispatch('table/refreshShelfTime')
    }, 1000)
  },
  methods: {
    editProduct() {
      this.form.date = this.dateString === 'Invalid Date' ? '' : this.dateString
      this.form.time = this.timeString === 'Invalid Date' ? '' : this.timeString
      this.form.shelf_time = this.form.date + ' ' + this.form.time

      this.$store.dispatch('table/editInfo', this.form)

      this.fetchData()

      this.$axios({
        url: '/writeFile',
        method: 'get',
        params: {
          form: this.$store.state.table.tableList
        }
      }).then((res) => {
        this.dialogFormVisible = false
      })
    },
    handleEdit(index, row) {
      this.form = { ...row }
      this.dialogFormVisible = true
    },
    handleDelete(index, row) {
      this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then(() => {
        console.log(row)
        this.list.splice(index, 1)
        this.$store.dispatch('table/deleteInfo', row.id)
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    fetchData() {
      this.listLoading = true
      this.list = []
      // getList().then(response => {
      //   this.list = response.data.items
      //   this.listLoading = false
      //   this.$axios({
      //     url: '/writeFile',
      //     method: 'get',
      //     params: {
      //       list: this.list
      //     }
      //   })
      // })
      // 造假
      this.tableList.forEach((item) => {
        this.list.push(item)
      })
      this.listLoading = false
    }
  }
}
</script>
