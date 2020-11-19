Ext.define('ExtComponents.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    model: 'ExtComponents.model.Personnel',

    data: {
        items: [
            { name: 'Simple Text Field', view: "View", fieldXtype: 'extcomponents-simpletextfield' },
            { name: 'Number Field', view: "View", fieldXtype: 'extcomponents-numberfield' },
            { name: 'CheckBox Field', view: "View", fieldXtype: 'extcomponents-checkbox' },
            { name: 'CheckBoxGroup', view: "View", fieldXtype: 'extcomponents-checkboxgroup' },
            { name: 'ComboBox', view: "View", fieldXtype: 'extcomponents-combobox' },
            { name: 'Container', view: "View", fieldXtype: 'extcomponents-containerfield' },
            { name: 'DateField', view: "View", fieldXtype: 'extcomponents-datefield' },
            { name: 'EmailField', view: "View", fieldXtype: 'extcomponents-emailfield' },
            { name: 'PasswordField', view: "View", fieldXtype: 'extcomponents-passwordfield' },
            { name: 'RadioField', view: "View", fieldXtype: 'extcomponents-radiofield' },
            { name: 'RadioGroup', view: "View", fieldXtype: 'extcomponents-radiogroup' },
            { name: 'Spinner', view: "View", fieldXtype: 'extcomponents-spinner' },
            { name: 'Select', view: "View", fieldXtype: 'extcomponents-select' },
            { name: 'Time', view: "View", fieldXtype: 'extcomponents-time' },
            { name: 'URL', view: "View", fieldXtype: 'extcomponents-urlfield' },
            { name: 'File', view: "View", fieldXtype: 'extcomponents-filefield' },
            { name: 'TextArea', view: "View", fieldXtype: 'extcomponents-textareafield' },
            { name: 'HtmlEditor', view: "View", fieldXtype: 'extcomponents-htmleditorfield' },
            { name: 'Tags', view: "View", fieldXtype: 'extcomponents-tagfield' },
        ]
    },

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
