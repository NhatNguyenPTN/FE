Ext.define('App.view.organization.Wizard', {
    extend: 'App.view.widgets.Wizard',
    xtype: [
        'organizationwizard',
        'organizationcreate',
        'organizationedit'
    ],

    controller: {
        type: 'organizationwizard'
    },

    viewModel: {
        type: 'organizationwizard'
    },

    bind: {
        title: '{record.phantom? "Add" : "Edit"} Organization'
    },

    screens: [{
        title: 'General',
        iconCls: 'x-fa fa-info',
        items: [ {
            xtype: 'textfield',
            reference: 'name',
            label: 'Name',
            required: true,
            bind: '{record.name}'
        }, {
            xtype: 'checkboxfield',
            name: 'tomato',
            label: 'Active'
        }, {
            xtype: 'combobox',
            label: 'Group Owner',
            displayField: 'label',
            valueField: 'value',
            queryMode: 'local',
            forceSelection: true,
            required: true,
            bind: {
                value: '{record.manager_id}',
                store: '{managers}'
            }
        }, {
            xtype: 'textfield',
            reference: 'name',
            label: 'Comment',
            required: true,
        }]
    }]
});
