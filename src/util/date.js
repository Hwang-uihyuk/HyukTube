import { format,register } from 'timeago.js';
import koLocale from 'timeago.js/lib/lang/ko'

register('ko',koLocale);

//별도로 지원안해주면 'en_US'
export function formatAgo(date, lang = 'en_US'){
    return format(date, lang);
}