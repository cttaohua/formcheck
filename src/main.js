import matchRule from './match.js';
import ck_type from './type.js';
import ck_alert from './alert.js';

var phoneMatch = matchRule.phoneMatch;
var numberMatch = matchRule.numberMatch;
var emailMatch = matchRule.emailMatch;


function formcheck(params) {

    var id = params['el'];

    if (!id) {
        console.error('no parameter');
        return;
    }
	
    var f = document.getElementById(id);
    if (!f) {
        console.error('not found ' + id + ' element');
        return;
    }

    var obj = {
        result: true,
        info: ''
    };

    var ck_ele = f.querySelectorAll("[ck]");

    if (ck_ele.length) {

        for (var i = 0, len = ck_ele.length; i < len; i++) {
            var e = ck_ele[i];
            var type = e.getAttribute('ck-type');
            var alert = e.getAttribute('ck-alert');
            var match = e.getAttribute('ck-match');
            var value = e.value;
            if (match) {
                if (!(match.test(value))) {
                    obj['result'] = false;
                    obj['info'] = alert ? alert : '';
                    e.focus();
                    i = len;
                    break;
                }
            } else {
                switch (type) {
                    case ck_type.phone:
                        if (!(phoneMatch.test(value))) {
                            obj['result'] = false;
                            obj['info'] = alert ? alert : ck_alert.phone;
                            e.focus();
                            i = len;
                            break;
                        }
                        break;
                    case ck_type.number:
                        if (!(numberMatch.test(value))) {
                            obj['result'] = false;
                            obj['info'] = alert ? alert : ck_alert.number;
                            e.focus();
                            i = len;
                            break;
                        }
                        break;
                    case ck_type.email:
                        if (!(emailMatch.test(value))) {
                            obj['result'] = false;
                            obj['info'] = alert ? alert : ck_alert.empty;
                            e.focus();
                            i = len;
                            break;
                        }
                        break;
                    case ck_type.empty:
                        if (!value.length) {
                            obj['result'] = false;
                            obj['info'] = alert ? alert : ck_alert.empty;
                            e.focus();
                            i = len;
                            break;
                        }
                        break;
                    default:
                        if (!value.length) {
                            obj['result'] = false;
                            obj['info'] = alert ? alert : ck_alert.empty;
                            e.focus();
                            i = len;
                            break;
                        }
                        break;
                }
            }
        }
        return obj;
    }

    console.error('not found ' + id + ' element');

}

window.formcheck = formcheck;

export default formcheck

