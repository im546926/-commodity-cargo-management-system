<template>
  <div class="dashboard-editor-container">

    <HeaderSearch @searchProducts="handleSearch" @clearQuery="handleClear"/>

    <el-row :gutter="8">
      <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 12}" :xl="{span: 12}"
              style="padding-right:8px;margin-bottom:30px;"
      >
        <transaction-table :list="list"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TransactionTable from './components/TransactionTable'
import HeaderSearch from '@/components/HeaderSearch'
import { mapGetters } from 'vuex'

export default {
  name: 'DashboardAdmin',
  components: {
    TransactionTable,
    HeaderSearch
  },
  data() {
    return {
      list: []
    }
  },
  computed: {
    ...mapGetters([
      'tableList'
    ])
  },
  created() {
    this.$store.dispatch('table/refreshShelfTime')
    this.list = this.tableList
  },
  methods: {
    handleSearch(productList) {
      this.list = []
      productList.forEach(({ item }) => {
          this.list.push(item)
        }
      )
    },
    handleClear() {
      this.list = this.tableList
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;


}

</style>
