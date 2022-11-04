<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="Product name">
        <el-input v-model="form.product_name"/>
      </el-form-item>
      <el-form-item label="Stock">
        <el-input v-model="form.stock" style="width: 20%"/>
      </el-form-item>
      <el-form-item label="Price">
        <el-input v-model="form.product_price" style="width: 20%"/>
      </el-form-item>
      <el-form-item label="Shelf life">
        <el-col :span="11">
          <el-date-picker v-model="form.date" type="date" placeholder="Pick a date" style="width: 100%;"/>
        </el-col>
        <el-col :span="2" class="line">-</el-col>
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
        <el-radio-group v-model="form.product_type">
          <el-radio label="vehicle" name="type"/>
          <el-radio label="food" name="type"/>
          <el-radio label="digital" name="type"/>
          <el-radio label="fruit" name="type"/>
          <el-radio label="makeup" name="type"/>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button @click="onCancel">Cancel</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        product_name: '',
        stock: '',
        product_type: '',
        date: '',
        time: '',
        type: ''
      },
      arr: []
    }
  },
  computed: {
    dateString() {
      return new Date(this.form.date)?.toLocaleDateString()
    },
    timeString() {
      return new Date(this.form.time)?.toLocaleTimeString()
    }
  },
  methods: {
    onSubmit() {
      this.form.date = this.dateString === 'Invalid Date' ? '' : this.dateString
      this.form.time = this.timeString === 'Invalid Date' ? '' : this.timeString
      this.form.shelf_time = this.form.date + ' ' + this.form.time

      this.$store.dispatch('table/addInfo', this.form)

      this.$axios({
        url: '/writeFile',
        method: 'get',
        params: {
          form: this.$store.state.table.tableList
        }
      }).then((res) => {
        console.log(res)
      })
      this.$message('submit!')
    },
    onCancel() {
      // this.$axios({
      //   url: '/getList',
      //   method: 'get'
      // }).then((res) => {
      //   console.log(res)
      //   // this.arr = [...res]
      // })
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>
.line {
  text-align: center;
}
</style>

