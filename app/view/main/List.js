/**
 * This view is an example list of people.
 */

Ext.define('ExtComponents.view.main.List', {
  extend: 'Ext.grid.Grid',
  xtype: 'mainlist',

  requires: ['ExtComponents.store.Personnel'],

  controller: 'main',

  title: 'Personnel',

  store: {
    type: 'personnel'
  },

  selModel: {
    injectCheckbox: 'first',
    checkOnly: false,
    model: 'MULTI',
    type: 'checkboxmodel'
  },

  columns: [
    {
      flex:1
    },
    {
      text: 'Component',
      dataIndex: 'name',
      width: 100,
      flex: 2,
      cell: {
        userCls: 'bold'
      }
    },
    {
      text: 'Action',
      dataIndex: 'view',
      width: 230
    },
  ],

  listeners: {
    select: 'onItemSelected'
  }
})
