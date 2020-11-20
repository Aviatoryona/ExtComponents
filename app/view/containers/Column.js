Ext.define('ExtComponents.view.containers.Column', {
  extend: 'Ext.window.Window',

  xtype: 'extcomponents-column',

  shadow: true,
  frame: true,
  width: 600,
  title: 'Column Layout',
  modal: true,
  autoshow: true,
  closable: true,

  items: [
    {
      xtype: 'containerfield',
      layout: {
        type: 'column'
      },
      defaults: {
        xtype: 'textfield',
        allowBlank: false
      },
      items: [
        {
          xtype: 'container',
          layout: 'vbox',
          columnWidth: 0.7,
          title: 'Sign Up',
          items: [
            {
              fieldLabel: 'Username:',
              placeholder: 'Username...'
            },
            {
              fieldLabel: 'Fullname:',
              placeholder: 'Fullname...'
            },
            {
              fieldLabel: 'Email:',
              placeholder: 'Email...'
            },
            {
              margin: '0 10',
              xtype: 'passwordfield',
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
        },

        {
          xtype: 'container',
          layout: 'vbox',
          title:'Sign In',
          columnWidth: 0.3,
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
              text: 'Login',
              handler: function () {
                alert('You clicked')
              }
            }
          ]
        }
      ]
    }
  ]
})
