var phoneMatch = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/;
var numberMatch = /^[0-9]+.?[0-9]*$/;
var emailMatch = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;

export default {
	phoneMatch: phoneMatch,
	numberMatch: numberMatch,
	emailMatch: emailMatch
}