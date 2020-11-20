Ext.define('ExtComponents.view.containers.Hbox', {
  extend: 'Ext.window.Window',

  // Uncomment to give this component an xtype
  xtype: 'extcomponents-hbox',

  shadow: true,
  frame: true,
  width: 600,
  title: 'HBox Layout',
  modal: true,
  autoshow: true,
  closable: true,

  items: [
    {
      xtype: 'containerfield',
      layout: {
        type: 'hbox'
      },
      defaults: {
        xtype: 'textfield',
        allowBlank: false
      },
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
