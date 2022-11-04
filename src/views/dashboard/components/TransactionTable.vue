<template>
  <div>
    <el-table :data="list" style="width: 100%;padding-top: 15px;">
      <el-table-column label="Order_No" min-width="95">
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column label="Product_Name" min-width="100">
        <template slot-scope="scope">
          {{ scope.row.product_name }}
        </template>
      </el-table-column>
      <el-table-column label="Product_Price" width="145" align="center">
        <template slot-scope="scope">
          ¥{{ scope.row.product_price }}
        </template>
      </el-table-column>
      <el-table-column label="Status" width="100" align="center">
        <template slot-scope="{row}">
          <el-tag :type="row.status | statusFilter">
            {{ row.status }}
          </el-tag>
        </template>
      </el-table-column>

    </el-table>
    <Pagination :total="200" :hidden="false"/>
  </div>

</template>

<script>
// import { transactionList } from '@/api/remote-search'
import Pagination from '@/components/Pagination'

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
      goods_list: null
    }
  },
  props: ['list'],
  components: {
    Pagination
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      // transactionList().then(response => {
      //   this.list = response.data.items.slice(0, 8)
      // })
    }
  }
}
</script>
