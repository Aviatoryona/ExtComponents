Ext.define('ExtComponents.view.textfields.SimpleTextField', {
  extend: 'Ext.window.Window',

  xtype: 'extcomponents-simpletextfield',

  title: 'Simple Text Field',

  shadow: true,
  frame: true,
  autoShow: true,
  modal: true,
  width: 400,
  layout: 'fit',
  closable: true,

  requires: ['Ext.window.Window'],

  items: [
    {
      xtype: 'fieldset',
      title: 'Simple Text Field',
      items: [
        {
          xtype: 'textfield',
          label: 'Text Field',
          allowBlank: false,
          name: 'fieldName',
          placeholder: 'Enter value here...',
          required: true,
          errorMessage: 'Please enter a value'
        },
        {
          xtype: 'spacer'
        },
        {
          xtype: 'button',
          iconCls: 'x-fa fa-arrow-circle-down',
          text: 'Click Me',
          alignSelf: 'center',
          flex: 2,
          handler: function () {
            alert('You clicked me');
            this.getView().destroy();
          }
        }
      ],
      buttons: [
        {
          text: 'close',
          handler: function () {
            this.getView().destroy()
          }
        }
      ]
    }
  ]
})
