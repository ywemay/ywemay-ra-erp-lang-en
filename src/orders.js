const orders = {
  status: 'Status',
  orders: 'Orders',
  order: 'Order',
  items: 'Orders Items',
  count: 'Orders Count',
  no: {
    items: 'No order items found...',
  },
}

const sales = {
  orders: 'Sales Orders',
  order: 'Sale Order',
  extended: 'Extended',
}

const messages = {
  no: {
    sales: {
      orders: 'No sales orders found.'
    }
  }
}

const info = {
  product: {
    sales: {
      orders: 'Sale orders where this product is part of products list:',
    }
  }
}

export default {
  orders,
  sales, 
  actions: {
    new: { order: 'New Order' }
  },
  messages,
  total: {
    orders: 'Orders Count',
    orderItems: 'Orders Items Count',
  },
  last: {
    orderDate: 'Last Order At',
    proposalDate: 'Last Proposal At',
  },
  first: {
    orderDate: 'First Order At',
    proposalDate: 'Fist Proposal At',
  },
  info,
}