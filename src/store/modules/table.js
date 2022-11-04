const state = {
  tableList: [
    {
      'id': '520000201107263912',
      'product_name': '自行车',
      'status': '',
      'product_type': 'vehicle',
      'product_price': 1000,
      'shelf_time': '1979-04-03 17:08:16',
      'stock': 792
    },
    {
      'id': '50000020060809336X',
      'product_name': '山地车',
      'status': '',
      'product_type': 'vehicle',
      'product_price': 20000,
      'shelf_time': '1985-05-14 16:53:48',
      'stock': 1628
    },
    {
      'id': '430000198810225233',
      'product_name': '摩托车',
      'status': '',
      'product_type': 'vehicle',
      'product_price': 40000,
      'shelf_time': '1981-11-16 08:20:30',
      'stock': 4468
    },
    {
      'id': '440000201501282222',
      'product_name': '轿车',
      'status': '',
      'product_type': 'vehicle',
      'product_price': 200000,
      'shelf_time': '2000-06-10 13:55:10',
      'stock': 4169
    },
    {
      'id': '630000198009251484',
      'product_name': '货车',
      'status': '',
      'product_type': 'vehicle',
      'product_price': 150000,
      'shelf_time': '2016-05-17 10:23:01',
      'stock': 2499
    },
    {
      'id': '530000199607037657',
      'product_name': '公交车',
      'status': '',
      'product_type': 'vehicle',
      'product_price': 1000000,
      'shelf_time': '2011-05-23 18:52:04',
      'stock': 2785
    },
    {
      'id': '150000197906129594',
      'product_name': '披萨',
      'status': '',
      'product_type': 'food',
      'product_price': 50,
      'shelf_time': '1984-08-31 13:54:28',
      'stock': 1999
    },
    {
      'id': '220000197408096302',
      'product_name': '蛋糕',
      'status': '',
      'product_type': 'food',
      'product_price': 20,
      'shelf_time': '2002-06-01 07:14:53',
      'stock': 4702
    },
    {
      'id': '150000201407204288',
      'product_name': '汉堡',
      'status': '',
      'product_type': 'food',
      'product_price': 15,
      'shelf_time': '1987-08-27 23:02:59',
      'stock': 4810
    },
    {
      'id': '500000201512175410',
      'product_name': '咖啡',
      'status': '',
      'product_type': 'fruit',
      'product_price': 20,
      'shelf_time': '1986-08-05 13:04:15',
      'stock': 3999
    },
    {
      'id': '330000200309200346',
      'product_name': '苹果',
      'status': '',
      'product_type': 'fruit',
      'product_price': 3,
      'shelf_time': '1984-09-28 17:29:19',
      'stock': 3913
    },
    {
      'id': '420000198004051046',
      'product_name': '香蕉',
      'status': '',
      'product_type': 'fruit',
      'product_price': 1,
      'shelf_time': '1983-03-03 04:37:24',
      'stock': 1146
    },
    {
      'id': '440000201707186615',
      'product_name': '蓝莓',
      'status': '',
      'product_type': 'fruit',
      'product_price': 10,
      'shelf_time': '1976-12-18 07:27:38',
      'stock': 1614
    },
    {
      'id': '150000199208253474',
      'product_name': '芒果',
      'status': '',
      'product_type': 'fruit',
      'product_price': 5,
      'shelf_time': '1991-10-16 22:23:28',
      'stock': 4838
    },
    {
      'id': '120000201105296273',
      'product_name': '水蜜桃',
      'status': '',
      'product_type': 'fruit',
      'product_price': 6,
      'shelf_time': '2020-12-12 22:55:42',
      'stock': 2204
    },
    {
      'id': '320000198008168133',
      'product_name': '木瓜',
      'status': '',
      'product_type': 'fruit',
      'product_price': 13,
      'shelf_time': '1994-01-26 20:12:04',
      'stock': 1912
    },
    {
      'id': '620000201611114709',
      'product_name': '哈密瓜',
      'status': '',
      'product_type': 'fruit',
      'product_price': 17,
      'shelf_time': '1990-07-09 17:29:06',
      'stock': 4009
    },
    {
      'id': '520000199203313860',
      'product_name': '圣女果',
      'status': '',
      'product_type': 'fruit',
      'product_price': 20,
      'shelf_time': '2007-10-12 07:49:45',
      'stock': 3552
    },
    {
      'id': '990000197811248132',
      'product_name': '手机',
      'status': '',
      'product_type': 'digital',
      'product_price': 9000,
      'shelf_time': '2012-06-01 15:38:55',
      'stock': 3751
    },
    {
      'id': '510000199108198647',
      'product_name': '手表',
      'status': '',
      'product_type': 'digital',
      'product_price': 6000,
      'shelf_time': '2021-05-05 00:00:59',
      'stock': 1319
    },
    {
      'id': '42000019881012115X',
      'product_name': '电脑',
      'status': '',
      'product_type': 'digital',
      'product_price': 10000,
      'shelf_time': '1989-06-12 15:23:01',
      'stock': 4379
    },
    {
      'id': '210000199111226134',
      'product_name': '电视',
      'status': '',
      'product_type': 'digital',
      'product_price': 7000,
      'shelf_time': '2014-03-22 04:56:38',
      'stock': 2468
    },
    {
      'id': '130000197511030676',
      'product_name': '耳机',
      'status': '',
      'product_type': 'digital',
      'product_price': 1000,
      'shelf_time': '1982-09-11 17:15:21',
      'stock': 3677
    },
    {
      'id': '430000201503212648',
      'product_name': '高光',
      'status': '',
      'product_type': 'makeup',
      'product_price': 70,
      'shelf_time': '1996-12-22 16:36:52',
      'stock': 2679
    },
    {
      'id': '630000200403207916',
      'product_name': '哑光',
      'status': '',
      'product_type': 'makeup',
      'product_price': 70,
      'shelf_time': '1981-08-19 20:55:20',
      'stock': 2979
    },
    {
      'id': '360000200109291357',
      'product_name': '珠光',
      'status': '',
      'product_type': 'makeup',
      'product_price': 70,
      'shelf_time': '1996-07-09 16:01:35',
      'stock': 832
    },
    {
      'id': '360000199808116130',
      'product_name': '唇釉',
      'status': '',
      'product_type': 'makeup',
      'product_price': 200,
      'shelf_time': '1999-10-09 21:00:37',
      'stock': 459
    },
    {
      'id': '640000200902096351',
      'product_name': '气垫',
      'status': '',
      'product_type': 'makeup',
      'product_price': 200,
      'shelf_time': '1982-01-03 01:18:11',
      'stock': 2634
    },
    {
      'id': '410000201510171887',
      'product_name': '眼影刷',
      'status': '',
      'product_type': 'makeup',
      'product_price': 50,
      'shelf_time': '1975-09-08 05:59:39',
      'stock': 3805
    },
    {
      'id': '440000198111144823',
      'product_name': '遮瑕刷',
      'status': '',
      'product_type': 'makeup',
      'product_price': 20,
      'shelf_time': '2011-07-04 12:05:30',
      'stock': 3001
    }
  ]
}

const mutations = {
  ADD_INFO: (state, info) => {
    state.tableList.push(info)
  },
  DELETE_INFO: (state, id) => {
    state.tableList = state.tableList.filter((info) => info.id !== id)
    console.log(state.tableList)
  },
  EDIT_INFO: (state, newInfo) => {
    const index = state.tableList.findIndex((item) => item.id === newInfo.id)
    state.tableList[index] = { ...newInfo }
  },
  CHECK_SHELF_TIME: (state) => {
    const data = state.tableList

    data.forEach(item => {
      const shelfTime = new Date(item.shelf_time.replace(/-/g, '/'))
      const currentTime = new Date()
      let dateDiff = currentTime.getTime() - shelfTime.getTime()
      let dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000))
      if (dayDiff > 30) {
        item.status = 'expired'
      } else if (
        dayDiff <= 30 && dayDiff > 1
      ) {
        item.status = 'soon'
      } else {
        item.status = 'normal'
      }
    })
  }

}

const actions = {
  addInfo({ commit }, data) {
    return new Promise((resolve, reject) => {
      console.log(data)
      commit('ADD_INFO', data)
      resolve(data)
    })
  },
  deleteInfo({ commit }, data) {
    commit('DELETE_INFO', data)
  },
  editInfo({ commit }, data) {
    commit('EDIT_INFO', data)
  },
  refreshShelfTime({ commit }) {
    commit('CHECK_SHELF_TIME')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
