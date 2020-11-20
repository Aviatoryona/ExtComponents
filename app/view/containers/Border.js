Ext.define('ExtComponents.view.containers.Border', {
  extend: 'Ext.container.Container',

  xtype: 'extcomponents-border',

  fullscreen: true,

  layout: 'fit',

  items: [
    {
      title: 'South Region is resizable',
      region: 'south',
      xtype: 'panel',
      height: 100,
      split: true,
      margin: '0 5 5 5'
    },
    {
      title: 'West Region is collapsible',
      region: 'west',
      xtype: 'panel',
      margin: '5 0 0 5',
      width: 200,
      collapsible: true,
      id: 'west-region-container',
      layout: 'fit'
    },
    {
      title: 'Welcome, login here',
      region: 'center',
      xtype: 'panel',
      layout: 'vbox',
      margin: '5 5 0 0',
      items: [
        {
          fieldLabel: 'Username:',
          placeholder: 'Username...'
        },
        {
          margin: '0 10',
          fieldLabel: 'Password:',
          placeholder: 'Password...'
        },
        {
          margin: '0 10',
          xtype: 'button',
          text: 'Submit',
          handler: function () {
            alert('You clicked')
          }
        }
      ]
    }
  ]
})
