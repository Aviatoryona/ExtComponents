Ext.define('ExtComponents.view.containers.Vbox', {
  extend: 'Ext.window.Window',

  xtype: 'extcomponents-vbox',

  shadow: true,
  frame: true,
  width: 400,
  title: 'VBox Layout',
  modal: true,
  autoshow: true,
  closable: true,

  items: [
    {
      xtype: 'containerfield',
      layout: {
        type: 'vbox'
      },
      defaults: {
        xtype: 'textfield',
        allowBlank: false
      },
      items: [
        {
          fieldLabel: 'Username:',
          placeholder: 'Username...',
        },
        {
          fieldLabel: 'Password:',
          placeholder: 'Password...',
        },
        {
          xtype: 'spacer'
        },
        {
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
