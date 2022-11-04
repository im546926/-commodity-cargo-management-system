<template>
  <div :class="{'show':show}" class="header-search">
    <svg-icon class-name="search-icon" icon-class="search" @click.stop="click"/>
    <el-select
      ref="headerSearchSelect"
      v-model="search"
      :remote-method="querySearch"
      filterable
      default-first-option
      remote
      clearable
      placeholder="Search"
      class="header-search-select"
      @change="change"
      @clear="clearQuery"
    >
      <el-option
        v-for="{item,refIndex} in options"
        :key="refIndex"
        :value="item.product_name"
        :label="item.product_name"
      />
    </el-select>
  </div>
</template>

<script>
// 安装模糊搜索库 fuse
import Fuse from 'fuse.js'
import { mapGetters } from 'vuex'

export default {
  name: 'HeaderSearch',
  data() {
    return {
      search: '',
      options: [],
      searchPool: [{ title: '你' }, { title: 'me' }, { title: 'ta' }],
      show: false,
      fuse: undefined
    }
  },
  computed: {
    ...mapGetters([
      'tableList'
    ])
  },
  watch: {
    searchPool(list) {
      // this.initFuse(list)
    },
    show(value) {
      if (value) {
        document.body.addEventListener('click', this.close)
      } else {
        document.body.removeEventListener('click', this.close)
      }
    }
  },
  mounted() {
    this.searchPool = this.tableList
    // 初始化 fuse 搜索库
    this.initFuse(this.searchPool)
  },
  methods: {
    // 控制 input 展开收起
    click() {
      this.show = !this.show
      if (this.show) {
        this.$refs.headerSearchSelect?.focus()
      }
    },
    close() {
      this.$refs.headerSearchSelect?.blur()
      this.options = []
      this.show = false
    },
    // 选中选项后执行
    change() {
      this.$emit('searchProducts', this.options)

      this.options = []

      this.$nextTick(() => {
        this.show = false
      })
    },
    clearQuery() {
      this.$emit('clearQuery')
    },
    initFuse(list) {
      this.fuse = new Fuse(list, {
        shouldSort: true,
        threshold: 0.4,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: [{
          name: 'product_name',
          weight: 0.7
        }, {
          name: 'product_type',
          weight: 0.3
        }]
      })
    },
    querySearch(query) {
      if (query !== '') {
        this.options = this.fuse.search(query)
      } else {
        this.options = []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.header-search {
  font-size: 0 !important;

  .search-icon {
    cursor: pointer;
    font-size: 18px;
    vertical-align: middle;
  }

  .header-search-select {
    font-size: 18px;
    transition: width 0.2s;
    width: 0;
    overflow: hidden;
    background: transparent;
    border-radius: 0;
    display: inline-block;
    vertical-align: middle;

    ::v-deep .el-input__inner {
      border-radius: 0;
      border: 0;
      padding-left: 20px;
      padding-right: 0;
      box-shadow: none !important;
      border-bottom: 1px solid #d9d9d9;
      vertical-align: middle;
    }
  }

  &.show {
    .header-search-select {
      width: 210px;
      margin-left: 10px;
    }
  }
}
</style>
