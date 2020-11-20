Ext.define('ExtComponents.view.inspinialoginscreen.LoginScreen', {
  extend: 'Ext.Container',

  xtype: 'extcomponents-loginscreen',

  autoSize: true,
  fullscreen: true,
  padding: '50 0 20 0',
  style: {
    'background-color': '#f3f3f4'
  },
  layout: {
    type: 'vbox',
    align: 'middle'
  },
  // scrollable: 'n',

  items: [
    {
      xtype: 'formpanel',
      padding: 30,
      layout: {
        type: 'vbox',
        align: 'middle'
      },
      style: 'background-color: #f3f3f4',
      width: 400,
      items: [
        {
          xtype: 'component',
          html: 'IN+',
          style: {
            'font-size': '180px',
            'color': '#e6e6e6',
            'text-align': 'center',
            'font-weight': '800',
            'letter-spacing': '-10px',
            'margin-bottom': '0'
          }
        },
        {
          xtype: 'component',
          height: 40
        },
        {
          xtype: 'component',
          margin: '50',
          html:
            'Perfectly designed and precisely prepared admin theme with over 50 pages with extra new web app views.<br/><br/>Login in. To see it in action.',
          style: {
            'font-size': '13px',
            'text-align': 'center',
            'color': '#676a6c'
          }
        },
        {
          xtype: 'textfield',
          label: 'Username',
          allowBlank: false,
        },
        {
          xtype: 'passwordfield',
          label: 'Password',
          allowBlank: false,
        },
        {
          xtype: 'button',
          text: 'login',
          allowBlank: false,
          margin: '30',
          width:280,
          style: {
            'color': '#fff',
            'background-color': '#1ab394',
            'border-color': '#1ab394',
            'border-radius': '3px',
          }
        },
        {
          xtype: 'component',
          html: "<a style='color: #007bff;text-decoration: none;' href=''>Forgot your Password?</a>",
          margin: '20',
          style: {
            'font-size': '13px',
            'text-align': 'center',
          },
          width: 400
        },
        {
          xtype: 'component',
          html: "Do not have an account?",
          style: {
            'font-size': '13px',
            'text-align': 'center',
            'margin': 'auto'
          },
          width: 400
        },
        {
          xtype: 'button',
          text: 'Create an account',
          allowBlank: false,
          style: {
            'color': '#000',
            'background-color': '#fff',
            'border-color': '#1ab394',
            'border-radius': '3px',
          }
        },
        {
          xtype: 'component',
          html: "Powered by Inspinia &copy; 2020",
          style: {
            'font-size': '13px',
            'text-align': 'center',
            'margin': 'auto'
          },
          width: 400
        },
      ]
    }
  ]
})
