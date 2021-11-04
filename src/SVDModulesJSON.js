export default [
  {
    "_id": "61633707d5b8e2e7f1886f90",
    "type": "form",
    "tags": [],
    "owner": "5c5ab50f22697c0ad23ccdf8",
    "components": [{
        "label": "Text Input - Multiple Lines",
        "autoExpand": false,
        "tableView": true,
        "validate": {"required": true},
        "key": "textInputMultipleLines",
        "type": "textarea",
        "input": true
      }, {
        "label": "Text Input - Single Line",
        "tableView": true,
        "key": "textInputSingleLine",
        "type": "textfield",
        "input": true
      }, {
        "label": "Dropdown Menu",
        "widget": "choicesjs",
        "placeholder": "Hint Text",
        "tableView": true,
        "data": {
          "values": [{"label": "Value 1", "value": "value1"}, {
            "label": "Value 2",
            "value": "value2"
          }, {"label": "Value 3", "value": "value3"}]
        },
        "key": "dropdownMenu",
        "type": "select",
        "input": true
      }, {
        "label": "Radio Button List",
        "optionsLabelPosition": "right",
        "inline": false,
        "tableView": false,
        "values": [{"label": "Item 1", "value": "item1", "shortcut": ""}, {
          "label": "Item 2",
          "value": "item2",
          "shortcut": ""
        }, {"label": "Item 3", "value": "item3", "shortcut": ""}],
        "key": "radioButtonList",
        "type": "radio",
        "input": true,
        "defaultValue": "item1"
      }, {
        "label": "Checkbox List",
        "optionsLabelPosition": "right",
        "tableView": false,
        "values": [{"label": "Item 1", "value": "item1", "shortcut": ""}, {
          "label": "Item 2",
          "value": "item2",
          "shortcut": ""
        }, {"label": "Item 3", "value": "item3", "shortcut": ""}],
        "key": "checkboxList",
        "type": "selectboxes",
        "input": true,
        "inputType": "checkbox",
        "defaultValue": {"item1": false, "item2": true, "item3": true}
      }, {
        "title": "Header??",
        "collapsible": true,
        "key": "header",
        "type": "panel",
        "label": "Panel",
        "input": false,
        "tableView": false,
        "components": [{
          "label": "Text Field",
          "tableView": true,
          "key": "textField",
          "type": "textfield",
          "input": true
        }, {
          "label": "Password",
          "autocomplete": "alexey@form.io",
          "tableView": false,
          "key": "password",
          "type": "password",
          "input": true,
          "protected": true
        }, {
          "label": "Date / Time",
          "format": "yyyy-MM-dd",
          "tableView": false,
          "enableMinDateInput": false,
          "datePicker": {"disableWeekends": false, "disableWeekdays": false},
          "enableMaxDateInput": false,
          "enableTime": false,
          "key": "dateTime",
          "type": "datetime",
          "input": true,
          "widget": {
            "type": "calendar",
            "displayInTimezone": "viewer",
            "locale": "en",
            "useLocaleSettings": false,
            "allowInput": true,
            "mode": "single",
            "enableTime": false,
            "noCalendar": false,
            "format": "yyyy-MM-dd",
            "hourIncrement": 1,
            "minuteIncrement": 1,
            "time_24hr": false,
            "minDate": null,
            "disableWeekends": false,
            "disableWeekdays": false,
            "maxDate": null
          }
        }],
        "collapsed": false
      }
    ],
    "revisions": "",
    "_vid": 0,
    "title": "Qualifacts Service Default",
    "display": "form",
    "access": [{
      "roles": ["5ca604953285517cc40c1d50", "5ca604953285511ff90c1d51", "5ca604953285512fc00c1d52", "5f75d9c6bd452f27a75a0c08", "6038ef560850db3039611697"],
      "type": "read_all"
    }],
    "submissionAccess": [],
    "controller": "",
    "properties": {},
    "settings": {},
    "name": "qualifactsServiceDefault",
    "path": "qualifactsservicedefault",
    "project": "5ca6049532855178e40c1d4f",
    "created": "2021-10-10T18:55:03.217Z",
    "modified": "2021-10-25T10:28:14.330Z",
    "machineName": "devtest:qualifactsServiceDefault",
    "config": {"devStageURL": "https://devtest.form.io"}
  },
]
