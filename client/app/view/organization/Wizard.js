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
        title: '{record.phantom? "Add" : "Edit"} Group'
    },

    screens: [{
        title: 'General',
        iconCls: 'x-fa fa-info',
        items: [{
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
            queryMode: 'local',
            displayField: 'name',
            valueField: 'abbr',
            itemTpl: '<span role="option" class="x-boundlist-item">{name}</span>',
            displayTpl: '{name}',
            editable: false,
            store: [
                { name: 'Superuser' },
                { name: 'Presenter' },
                { name: 'Subscriber' }
            ]
        }, {
            xtype: 'textfield',
            reference: 'name',
            label: 'Comment',
            required: true,
        }]
    }]
});
