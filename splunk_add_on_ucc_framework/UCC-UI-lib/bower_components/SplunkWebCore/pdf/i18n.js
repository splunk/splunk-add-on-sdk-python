// get locale data, fallback to use en-US for undefined locale
var LOCALES = {
	    'en_US': {"days": {"stand-alone": {"wide": {"0": "Monday", "1": "Tuesday", "2": "Wednesday", "3": "Thursday", "4": "Friday", "5": "Saturday", "6": "Sunday"}, "abbreviated": {"0": "Monday", "1": "Tuesday", "2": "Wednesday", "3": "Thursday", "4": "Friday", "5": "Saturday", "6": "Sunday"}, "narrow": {"0": "M", "1": "T", "2": "W", "3": "T", "4": "F", "5": "S", "6": "S"}}, "format": {"wide": {"0": "Monday", "1": "Tuesday", "2": "Wednesday", "3": "Thursday", "4": "Friday", "5": "Saturday", "6": "Sunday"}, "abbreviated": {"0": "Mon", "1": "Tue", "2": "Wed", "3": "Thu", "4": "Fri", "5": "Sat", "6": "Sun"}, "narrow": {"0": "M", "1": "T", "2": "W", "3": "T", "4": "F", "5": "S", "6": "S"}}}, "scientific_format": "#E0", "minus_sign": "-", "date_formats": {"medium": {"pattern": "MMM d, yyyy", "format": "%(MMM)s %(d)s, %(yyyy)s"}, "short": {"pattern": "M/d/yy", "format": "%(M)s/%(d)s/%(yy)s"}, "long": {"pattern": "MMMM d, yyyy", "format": "%(MMMM)s %(d)s, %(yyyy)s"}, "full": {"pattern": "EEEE, MMMM d, yyyy", "format": "%(EEEE)s, %(MMMM)s %(d)s, %(yyyy)s"}}, "decimal_symbol": ".", "time_formats": {"medium": {"pattern": "h:mm:ss a", "format": "%(h)s:%(mm)s:%(ss)s %(a)s"}, "short": {"pattern": "h:mm a", "format": "%(h)s:%(mm)s %(a)s"}, "long": {"pattern": "h:mm:ss a z", "format": "%(h)s:%(mm)s:%(ss)s %(a)s %(z)s"}, "full": {"pattern": "h:mm:ss a v", "format": "%(h)s:%(mm)s:%(ss)s %(a)s %(v)s"}}, "group_symbol": ",", "plus_sign": "+", "datetime_formats": {"null": "{1} {0}"}, "locale_name": "en_US", "first_week_day": 6, "eras": {"wide": {"0": "Before Christ", "1": "Anno Domini"}, "abbreviated": {"0": "BC", "1": "AD"}, "narrow": {"0": "B", "1": "A"}}, "exp_symbol": "E", "quarters": {"stand-alone": {"wide": {"1": "1st quarter", "2": "2nd quarter", "3": "3rd quarter", "4": "4th quarter"}, "abbreviated": {"1": "1st quarter", "2": "2nd quarter", "3": "3rd quarter", "4": "4th quarter"}, "narrow": {"1": "1", "2": "2", "3": "3", "4": "4"}}, "format": {"wide": {"1": "1st quarter", "2": "2nd quarter", "3": "3rd quarter", "4": "4th quarter"}, "abbreviated": {"1": "Q1", "2": "Q2", "3": "Q3", "4": "Q4"}, "narrow": {"1": "1", "2": "2", "3": "3", "4": "4"}}}, "min_week_days": 1, "months": {"stand-alone": {"wide": {"1": "January", "2": "February", "3": "March", "4": "April", "5": "May", "6": "June", "7": "July", "8": "August", "9": "September", "10": "October", "11": "November", "12": "December"}, "abbreviated": {"1": "January", "2": "February", "3": "March", "4": "April", "5": "May", "6": "June", "7": "July", "8": "August", "9": "September", "10": "October", "11": "November", "12": "December"}, "narrow": {"1": "J", "2": "F", "3": "M", "4": "A", "5": "M", "6": "J", "7": "J", "8": "A", "9": "S", "10": "O", "11": "N", "12": "D"}}, "format": {"wide": {"1": "January", "2": "February", "3": "March", "4": "April", "5": "May", "6": "June", "7": "July", "8": "August", "9": "September", "10": "October", "11": "November", "12": "December"}, "abbreviated": {"1": "Jan", "2": "Feb", "3": "Mar", "4": "Apr", "5": "May", "6": "Jun", "7": "Jul", "8": "Aug", "9": "Sep", "10": "Oct", "11": "Nov", "12": "Dec"}, "narrow": {"1": "J", "2": "F", "3": "M", "4": "A", "5": "M", "6": "J", "7": "J", "8": "A", "9": "S", "10": "O", "11": "N", "12": "D"}}}, "percent_format": "#,##0%", "number_format": "#,##0.###", "periods": {"am": "AM", "pm": "PM"}},
		'fr_FR': {"eras": {"wide": {"0": "avant J\u00e9sus-Christ", "1": "apr\u00e8s J\u00e9sus-Christ"}, "narrow": {"0": "av. J.-C.", "1": "ap. J.-C."}, "abbreviated": {"0": "av. J.-C.", "1": "ap. J.-C."}}, "months": {"stand-alone": {"wide": {"1": "janvier", "2": "f\u00e9vrier", "3": "mars", "4": "avril", "5": "mai", "6": "juin", "7": "juillet", "8": "ao\u00fbt", "9": "septembre", "10": "octobre", "11": "novembre", "12": "d\u00e9cembre"}, "narrow": {"1": "J", "2": "F", "3": "M", "4": "A", "5": "M", "6": "J", "7": "J", "8": "A", "9": "S", "10": "O", "11": "N", "12": "D"}, "abbreviated": {"1": "janvier", "2": "f\u00e9vrier", "3": "mars", "4": "avril", "5": "mai", "6": "juin", "7": "juillet", "8": "ao\u00fbt", "9": "septembre", "10": "octobre", "11": "novembre", "12": "d\u00e9cembre"}}, "format": {"wide": {"1": "janvier", "2": "f\u00e9vrier", "3": "mars", "4": "avril", "5": "mai", "6": "juin", "7": "juillet", "8": "ao\u00fbt", "9": "septembre", "10": "octobre", "11": "novembre", "12": "d\u00e9cembre"}, "narrow": {"1": "J", "2": "F", "3": "M", "4": "A", "5": "M", "6": "J", "7": "J", "8": "A", "9": "S", "10": "O", "11": "N", "12": "D"}, "abbreviated": {"1": "janv.", "2": "f\u00e9vr.", "3": "mars", "4": "avr.", "5": "mai", "6": "juin", "7": "juil.", "8": "ao\u00fbt", "9": "sept.", "10": "oct.", "11": "nov.", "12": "d\u00e9c."}}}, "exp_symbol": "E", "days": {"stand-alone": {"wide": {"0": "lundi", "1": "mardi", "2": "mercredi", "3": "jeudi", "4": "vendredi", "5": "samedi", "6": "dimanche"}, "narrow": {"0": "L", "1": "M", "2": "M", "3": "J", "4": "V", "5": "S", "6": "D"}, "abbreviated": {"0": "lundi", "1": "mardi", "2": "mercredi", "3": "jeudi", "4": "vendredi", "5": "samedi", "6": "dimanche"}}, "format": {"wide": {"0": "lundi", "1": "mardi", "2": "mercredi", "3": "jeudi", "4": "vendredi", "5": "samedi", "6": "dimanche"}, "narrow": {"0": "L", "1": "M", "2": "M", "3": "J", "4": "V", "5": "S", "6": "D"}, "abbreviated": {"0": "lun.", "1": "mar.", "2": "mer.", "3": "jeu.", "4": "ven.", "5": "sam.", "6": "dim."}}}, "time_formats": {"short": {"pattern": "HH:mm", "format": "%(HH)s:%(mm)s"}, "long": {"pattern": "HH:mm:ss z", "format": "%(HH)s:%(mm)s:%(ss)s %(z)s"}, "medium": {"pattern": "HH:mm:ss", "format": "%(HH)s:%(mm)s:%(ss)s"}, "full": {"pattern": "HH:mm:ss v", "format": "%(HH)s:%(mm)s:%(ss)s %(v)s"}}, "percent_format": "#,##0 %", "minus_sign": "-", "plus_sign": "+", "first_week_day": 0, "datetime_formats": {"null": "{1} {0}"}, "number_format": "#,##0.###", "date_formats": {"short": {"pattern": "dd/MM/yy", "format": "%(dd)s/%(MM)s/%(yy)s"}, "long": {"pattern": "d MMMM yyyy", "format": "%(d)s %(MMMM)s %(yyyy)s"}, "medium": {"pattern": "d MMM yyyy", "format": "%(d)s %(MMM)s %(yyyy)s"}, "full": {"pattern": "EEEE d MMMM yyyy", "format": "%(EEEE)s %(d)s %(MMMM)s %(yyyy)s"}}, "min_week_days": 4, "quarters": {"stand-alone": {"wide": {"1": "1er trimestre", "2": "2e trimestre", "3": "3e trimestre", "4": "4e trimestre"}, "narrow": {"1": "1", "2": "2", "3": "3", "4": "4"}, "abbreviated": {"1": "1er trimestre", "2": "2e trimestre", "3": "3e trimestre", "4": "4e trimestre"}}, "format": {"wide": {"1": "1er trimestre", "2": "2e trimestre", "3": "3e trimestre", "4": "4e trimestre"}, "narrow": {"1": "T1", "2": "T2", "3": "T3", "4": "T4"}, "abbreviated": {"1": "T1", "2": "T2", "3": "T3", "4": "T4"}}}, "decimal_symbol": ",", "periods": {"pm": "PM", "am": "AM"}, "group_symbol": " ", "locale_name": "fr_FR", "scientific_format": "#E0"},
		'de_DE': {"eras": {"wide": {"0": "v. Chr.", "1": "n. Chr."}, "narrow": {"0": "v. Chr.", "1": "n. Chr."}, "abbreviated": {"0": "v. Chr.", "1": "n. Chr."}}, "months": {"stand-alone": {"wide": {"1": "Januar", "2": "Februar", "3": "M\u00e4rz", "4": "April", "5": "Mai", "6": "Juni", "7": "Juli", "8": "August", "9": "September", "10": "Oktober", "11": "November", "12": "Dezember"}, "narrow": {"1": "J", "2": "F", "3": "M", "4": "A", "5": "M", "6": "J", "7": "J", "8": "A", "9": "S", "10": "O", "11": "N", "12": "D"}, "abbreviated": {"1": "Januar", "2": "Februar", "3": "M\u00e4r", "4": "April", "5": "Mai", "6": "Juni", "7": "Jul", "8": "Aug", "9": "Sep", "10": "Okt", "11": "Nov", "12": "Dez"}}, "format": {"wide": {"1": "Januar", "2": "Februar", "3": "M\u00e4rz", "4": "April", "5": "Mai", "6": "Juni", "7": "Juli", "8": "August", "9": "September", "10": "Oktober", "11": "November", "12": "Dezember"}, "narrow": {"1": "J", "2": "F", "3": "M", "4": "A", "5": "M", "6": "J", "7": "J", "8": "A", "9": "S", "10": "O", "11": "N", "12": "D"}, "abbreviated": {"1": "Jan", "2": "Feb", "3": "Mrz", "4": "Apr", "5": "Mai", "6": "Jun", "7": "Jul", "8": "Aug", "9": "Sep", "10": "Okt", "11": "Nov", "12": "Dez"}}}, "exp_symbol": "\u00d710^", "days": {"stand-alone": {"wide": {"0": "Montag", "1": "Dienstag", "2": "Mittwoch", "3": "Donnerstag", "4": "Freitag", "5": "Samstag", "6": "Sonntag"}, "narrow": {"0": "M", "1": "D", "2": "M", "3": "D", "4": "F", "5": "S", "6": "S"}, "abbreviated": {"0": "Montag", "1": "Dienstag", "2": "Mittwoch", "3": "Donnerstag", "4": "Freitag", "5": "Samstag", "6": "Sonntag"}}, "format": {"wide": {"0": "Montag", "1": "Dienstag", "2": "Mittwoch", "3": "Donnerstag", "4": "Freitag", "5": "Samstag", "6": "Sonntag"}, "narrow": {"0": "M", "1": "D", "2": "M", "3": "D", "4": "F", "5": "S", "6": "S"}, "abbreviated": {"0": "Mo.", "1": "Di.", "2": "Mi.", "3": "Do.", "4": "Fr.", "5": "Sa.", "6": "So."}}}, "time_formats": {"short": {"pattern": "HH:mm", "format": "%(HH)s:%(mm)s"}, "long": {"pattern": "HH:mm:ss z", "format": "%(HH)s:%(mm)s:%(ss)s %(z)s"}, "medium": {"pattern": "HH:mm:ss", "format": "%(HH)s:%(mm)s:%(ss)s"}, "full": {"pattern": "HH:mm:ss v", "format": "%(HH)s:%(mm)s:%(ss)s %(v)s"}}, "percent_format": "#,##0 %", "minus_sign": "-", "plus_sign": "+", "first_week_day": 0, "datetime_formats": {"null": "{1} {0}"}, "number_format": "#,##0.###", "date_formats": {"short": {"pattern": "dd.MM.yy", "format": "%(dd)s.%(MM)s.%(yy)s"}, "long": {"pattern": "d. MMMM yyyy", "format": "%(d)s. %(MMMM)s %(yyyy)s"}, "medium": {"pattern": "dd.MM.yyyy", "format": "%(dd)s.%(MM)s.%(yyyy)s"}, "full": {"pattern": "EEEE, d. MMMM yyyy", "format": "%(EEEE)s, %(d)s. %(MMMM)s %(yyyy)s"}}, "min_week_days": 4, "quarters": {"stand-alone": {"wide": {"1": "1. Quartal", "2": "2. Quartal", "3": "3. Quartal", "4": "4. Quartal"}, "narrow": {"1": "1", "2": "2", "3": "3", "4": "4"}, "abbreviated": {"1": "1. Quartal", "2": "2. Quartal", "3": "3. Quartal", "4": "4. Quartal"}}, "format": {"wide": {"1": "1. Quartal", "2": "2. Quartal", "3": "3. Quartal", "4": "4. Quartal"}, "narrow": {"1": "1", "2": "2", "3": "3", "4": "4"}, "abbreviated": {"1": "Q1", "2": "Q2", "3": "Q3", "4": "Q4"}}}, "decimal_symbol": ",", "periods": {"pm": "nachm.", "am": "vorm."}, "group_symbol": ".", "locale_name": "de_DE", "scientific_format": "#E0"},
		'it_IT': {"eras": {"wide": {"0": "a.C.", "1": "d.C"}, "narrow": {"0": "aC", "1": "dC"}, "abbreviated": {"0": "aC", "1": "dC"}}, "months": {"stand-alone": {"wide": {"1": "Gennaio", "2": "Febbraio", "3": "Marzo", "4": "Aprile", "5": "Maggio", "6": "Giugno", "7": "Luglio", "8": "agosto", "9": "settembre", "10": "ottobre", "11": "novembre", "12": "dicembre"}, "narrow": {"1": "G", "2": "F", "3": "M", "4": "A", "5": "M", "6": "G", "7": "L", "8": "A", "9": "S", "10": "O", "11": "N", "12": "D"}, "abbreviated": {"1": "gennaio", "2": "febbraio", "3": "marzo", "4": "aprile", "5": "maggio", "6": "giugno", "7": "Luglio", "8": "agosto", "9": "settembre", "10": "ottobre", "11": "novembre", "12": "dicembre"}}, "format": {"wide": {"1": "gennaio", "2": "febbraio", "3": "marzo", "4": "aprile", "5": "maggio", "6": "giugno", "7": "Luglio", "8": "agosto", "9": "settembre", "10": "ottobre", "11": "novembre", "12": "dicembre"}, "narrow": {"1": "G", "2": "F", "3": "M", "4": "A", "5": "M", "6": "G", "7": "L", "8": "A", "9": "S", "10": "O", "11": "N", "12": "D"}, "abbreviated": {"1": "gen", "2": "feb", "3": "mar", "4": "apr", "5": "mag", "6": "giu", "7": "lug", "8": "ago", "9": "set", "10": "ott", "11": "nov", "12": "dic"}}}, "exp_symbol": "E", "days": {"stand-alone": {"wide": {"0": "Luned\u00ec", "1": "Marted\u00ec", "2": "Mercoled\u00ec", "3": "Gioved\u00ec", "4": "Venerd\u00ec", "5": "Sabato", "6": "Domenica"}, "narrow": {"0": "L", "1": "M", "2": "M", "3": "G", "4": "V", "5": "S", "6": "D"}, "abbreviated": {"0": "luned\u00ec", "1": "marted\u00ec", "2": "mercoled\u00ec", "3": "gioved\u00ec", "4": "venerd\u00ec", "5": "sabato", "6": "domenica"}}, "format": {"wide": {"0": "luned\u00ec", "1": "marted\u00ec", "2": "mercoled\u00ec", "3": "gioved\u00ec", "4": "venerd\u00ec", "5": "sabato", "6": "domenica"}, "narrow": {"0": "L", "1": "M", "2": "M", "3": "G", "4": "V", "5": "S", "6": "D"}, "abbreviated": {"0": "lun", "1": "mar", "2": "mer", "3": "gio", "4": "ven", "5": "sab", "6": "dom"}}}, "time_formats": {"short": {"pattern": "HH.mm", "format": "%(HH)s.%(mm)s"}, "long": {"pattern": "HH.mm.ss z", "format": "%(HH)s.%(mm)s.%(ss)s %(z)s"}, "medium": {"pattern": "HH.mm.ss", "format": "%(HH)s.%(mm)s.%(ss)s"}, "full": {"pattern": "HH.mm.ss v", "format": "%(HH)s.%(mm)s.%(ss)s %(v)s"}}, "percent_format": "#,##0%", "minus_sign": "-", "plus_sign": "+", "first_week_day": 0, "datetime_formats": {"null": "{1} {0}"}, "number_format": "#,##0.###", "date_formats": {"short": {"pattern": "dd/MM/yy", "format": "%(dd)s/%(MM)s/%(yy)s"}, "long": {"pattern": "dd MMMM yyyy", "format": "%(dd)s %(MMMM)s %(yyyy)s"}, "medium": {"pattern": "dd/MMM/yyyy", "format": "%(dd)s/%(MMM)s/%(yyyy)s"}, "full": {"pattern": "EEEE d MMMM yyyy", "format": "%(EEEE)s %(d)s %(MMMM)s %(yyyy)s"}}, "min_week_days": 4, "quarters": {"stand-alone": {"wide": {"1": "1o trimestre", "2": "2o trimestre", "3": "3o trimestre", "4": "4o trimestre"}, "narrow": {"1": "1", "2": "2", "3": "3", "4": "4"}, "abbreviated": {"1": "1o trimestre", "2": "2o trimestre", "3": "3o trimestre", "4": "4o trimestre"}}, "format": {"wide": {"1": "1o trimestre", "2": "2o trimestre", "3": "3o trimestre", "4": "4o trimestre"}, "narrow": {"1": "1", "2": "2", "3": "3", "4": "4"}, "abbreviated": {"1": "T1", "2": "T2", "3": "T3", "4": "T4"}}}, "decimal_symbol": ",", "periods": {"pm": "p.", "am": "m."}, "group_symbol": ".", "locale_name": "it_IT", "scientific_format": "#E0"},
	    'ja_JP': {"days": {"stand-alone": {"wide": {"0": "\u6708\u66dc\u65e5", "1": "\u706b\u66dc\u65e5", "2": "\u6c34\u66dc\u65e5", "3": "\u6728\u66dc\u65e5", "4": "\u91d1\u66dc\u65e5", "5": "\u571f\u66dc\u65e5", "6": "\u65e5\u66dc\u65e5"}, "abbreviated": {"0": "\u6708\u66dc\u65e5", "1": "\u706b\u66dc\u65e5", "2": "\u6c34\u66dc\u65e5", "3": "\u6728\u66dc\u65e5", "4": "\u91d1\u66dc\u65e5", "5": "\u571f\u66dc\u65e5", "6": "\u65e5\u66dc\u65e5"}, "narrow": {"0": "\u6708", "1": "\u706b", "2": "\u6c34", "3": "\u6728", "4": "\u91d1", "5": "\u571f", "6": "\u65e5"}}, "format": {"wide": {"0": "\u6708\u66dc\u65e5", "1": "\u706b\u66dc\u65e5", "2": "\u6c34\u66dc\u65e5", "3": "\u6728\u66dc\u65e5", "4": "\u91d1\u66dc\u65e5", "5": "\u571f\u66dc\u65e5", "6": "\u65e5\u66dc\u65e5"}, "abbreviated": {"0": "\u6708", "1": "\u706b", "2": "\u6c34", "3": "\u6728", "4": "\u91d1", "5": "\u571f", "6": "\u65e5"}, "narrow": {"0": "\u6708", "1": "\u706b", "2": "\u6c34", "3": "\u6728", "4": "\u91d1", "5": "\u571f", "6": "\u65e5"}}}, "scientific_format": "#E0", "minus_sign": "-", "date_formats": {"medium": {"pattern": "yyyy/MM/dd", "format": "%(yyyy)s/%(MM)s/%(dd)s"}, "short": {"pattern": "yy/MM/dd", "format": "%(yy)s/%(MM)s/%(dd)s"}, "long": {"pattern": "yyyy\u5e74M\u6708d\u65e5", "format": "%(yyyy)s\u5e74%(M)s\u6708%(d)s\u65e5"}, "full": {"pattern": "yyyy\u5e74M\u6708d\u65e5EEEE", "format": "%(yyyy)s\u5e74%(M)s\u6708%(d)s\u65e5%(EEEE)s"}}, "decimal_symbol": ".", "time_formats": {"medium": {"pattern": "H:mm:ss", "format": "%(H)s:%(mm)s:%(ss)s"}, "short": {"pattern": "H:mm", "format": "%(H)s:%(mm)s"}, "long": {"pattern": "HH:mm:ssz", "format": "%(HH)s:%(mm)s:%(ss)s%(z)s"}, "full": {"pattern": "H\u6642mm\u5206ss\u79d2v", "format": "%(H)s\u6642%(mm)s\u5206%(ss)s\u79d2%(v)s"}}, "group_symbol": ",", "plus_sign": "+", "datetime_formats": {"null": "{1} {0}"}, "locale_name": "ja_JP", "first_week_day": 6, "eras": {"wide": {"0": "\u7d00\u5143\u524d", "1": "\u897f\u66a6"}, "abbreviated": {"0": "\u7d00\u5143\u524d", "1": "\u897f\u66a6"}, "narrow": {"0": "\u7d00\u5143\u524d", "1": "\u897f\u66a6"}}, "exp_symbol": "E", "quarters": {"stand-alone": {"wide": {"1": "\u7b2c1\u56db\u534a\u671f", "2": "\u7b2c2\u56db\u534a\u671f", "3": "\u7b2c3\u56db\u534a\u671f", "4": "\u7b2c4\u56db\u534a\u671f"}, "abbreviated": {"1": "\u7b2c1\u56db\u534a\u671f", "2": "\u7b2c2\u56db\u534a\u671f", "3": "\u7b2c3\u56db\u534a\u671f", "4": "\u7b2c4\u56db\u534a\u671f"}, "narrow": {"1": "1", "2": "2", "3": "3", "4": "4"}}, "format": {"wide": {"1": "\u7b2c1\u56db\u534a\u671f", "2": "\u7b2c2\u56db\u534a\u671f", "3": "\u7b2c3\u56db\u534a\u671f", "4": "\u7b2c4\u56db\u534a\u671f"}, "abbreviated": {"1": "Q1", "2": "Q2", "3": "Q3", "4": "Q4"}, "narrow": {"1": "1", "2": "2", "3": "3", "4": "4"}}}, "min_week_days": 1, "months": {"stand-alone": {"wide": {"1": "1\u6708", "2": "2\u6708", "3": "3\u6708", "4": "4\u6708", "5": "5\u6708", "6": "6\u6708", "7": "7\u6708", "8": "8\u6708", "9": "9\u6708", "10": "10\u6708", "11": "11\u6708", "12": "12\u6708"}, "abbreviated": {"1": "1\u6708", "2": "2\u6708", "3": "3\u6708", "4": "4\u6708", "5": "5\u6708", "6": "6\u6708", "7": "7\u6708", "8": "8\u6708", "9": "9\u6708", "10": "10\u6708", "11": "11\u6708", "12": "12\u6708"}, "narrow": {"1": "1", "2": "2", "3": "3", "4": "4", "5": "5", "6": "6", "7": "7", "8": "8", "9": "9", "10": "10", "11": "11", "12": "12"}}, "format": {"wide": {"1": "1\u6708", "2": "2\u6708", "3": "3\u6708", "4": "4\u6708", "5": "5\u6708", "6": "6\u6708", "7": "7\u6708", "8": "8\u6708", "9": "9\u6708", "10": "10\u6708", "11": "11\u6708", "12": "12\u6708"}, "abbreviated": {"1": "1\u6708", "2": "2\u6708", "3": "3\u6708", "4": "4\u6708", "5": "5\u6708", "6": "6\u6708", "7": "7\u6708", "8": "8\u6708", "9": "9\u6708", "10": "10\u6708", "11": "11\u6708", "12": "12\u6708"}, "narrow": {"1": "1", "2": "2", "3": "3", "4": "4", "5": "5", "6": "6", "7": "7", "8": "8", "9": "9", "10": "10", "11": "11", "12": "12"}}}, "percent_format": "#,##0%", "number_format": "#,##0.###", "periods": {"am": "\u5348\u524d", "pm": "\u5348\u5f8c"}},
	    'ko_KR': {"days": {"stand-alone": {"wide": {"0": "\uc6d4\uc694\uc77c", "1": "\ud654\uc694\uc77c", "2": "\uc218\uc694\uc77c", "3": "\ubaa9\uc694\uc77c", "4": "\uae08\uc694\uc77c", "5": "\ud1a0\uc694\uc77c", "6": "\uc77c\uc694\uc77c"}, "abbreviated": {"0": "\uc6d4\uc694\uc77c", "1": "\ud654\uc694\uc77c", "2": "\uc218\uc694\uc77c", "3": "\ubaa9\uc694\uc77c", "4": "\uae08\uc694\uc77c", "5": "\ud1a0\uc694\uc77c", "6": "\uc77c\uc694\uc77c"}, "narrow": {"0": "\uc6d4", "1": "\ud654", "2": "\uc218", "3": "\ubaa9", "4": "\uae08", "5": "\ud1a0", "6": "\uc77c"}}, "format": {"wide": {"0": "\uc6d4\uc694\uc77c", "1": "\ud654\uc694\uc77c", "2": "\uc218\uc694\uc77c", "3": "\ubaa9\uc694\uc77c", "4": "\uae08\uc694\uc77c", "5": "\ud1a0\uc694\uc77c", "6": "\uc77c\uc694\uc77c"}, "abbreviated": {"0": "\uc6d4", "1": "\ud654", "2": "\uc218", "3": "\ubaa9", "4": "\uae08", "5": "\ud1a0", "6": "\uc77c"}, "narrow": {"0": "\uc6d4", "1": "\ud654", "2": "\uc218", "3": "\ubaa9", "4": "\uae08", "5": "\ud1a0", "6": "\uc77c"}}}, "scientific_format": "#E0", "minus_sign": "-", "date_formats": {"medium": {"pattern": "yyyy. M. d.", "format": "%(yyyy)s. %(M)s. %(d)s."}, "short": {"pattern": "yy. M. d.", "format": "%(yy)s. %(M)s. %(d)s."}, "long": {"pattern": "yyyy\ub144 M\uc6d4 d\uc77c", "format": "%(yyyy)s\ub144 %(M)s\uc6d4 %(d)s\uc77c"}, "full": {"pattern": "yyyy\ub144 M\uc6d4 d\uc77c EEEE", "format": "%(yyyy)s\ub144 %(M)s\uc6d4 %(d)s\uc77c %(EEEE)s"}}, "decimal_symbol": ".", "time_formats": {"medium": {"pattern": "a h:mm:ss", "format": "%(a)s %(h)s:%(mm)s:%(ss)s"}, "short": {"pattern": "a h:mm", "format": "%(a)s %(h)s:%(mm)s"}, "long": {"pattern": "a hh\uc2dc mm\ubd84 ss\ucd08 z", "format": "%(a)s %(hh)s\uc2dc %(mm)s\ubd84 %(ss)s\ucd08 %(z)s"}, "full": {"pattern": "a hh\uc2dc mm\ubd84 ss\ucd08 v", "format": "%(a)s %(hh)s\uc2dc %(mm)s\ubd84 %(ss)s\ucd08 %(v)s"}}, "group_symbol": ",", "plus_sign": "+", "datetime_formats": {"null": "{1} {0}"}, "locale_name": "ko_KR", "first_week_day": 6, "eras": {"wide": {"0": "\uc11c\ub825\uae30\uc6d0\uc804", "1": "\uc11c\ub825\uae30\uc6d0"}, "abbreviated": {"0": "\uae30\uc6d0\uc804", "1": "\uc11c\uae30"}, "narrow": {"0": "\uae30\uc6d0\uc804", "1": "\uc11c\uae30"}}, "exp_symbol": "E", "quarters": {"stand-alone": {"wide": {"1": "\uc81c 1/4\ubd84\uae30", "2": "\uc81c 2/4\ubd84\uae30", "3": "\uc81c 3/4\ubd84\uae30", "4": "\uc81c 4/4\ubd84\uae30"}, "abbreviated": {"1": "\uc81c 1/4\ubd84\uae30", "2": "\uc81c 2/4\ubd84\uae30", "3": "\uc81c 3/4\ubd84\uae30", "4": "\uc81c 4/4\ubd84\uae30"}, "narrow": {"1": "1", "2": "2", "3": "3", "4": "4"}}, "format": {"wide": {"1": "\uc81c 1/4\ubd84\uae30", "2": "\uc81c 2/4\ubd84\uae30", "3": "\uc81c 3/4\ubd84\uae30", "4": "\uc81c 4/4\ubd84\uae30"}, "abbreviated": {"1": "1\ubd84\uae30", "2": "2\ubd84\uae30", "3": "3\ubd84\uae30", "4": "4\ubd84\uae30"}, "narrow": {"1": "1", "2": "2", "3": "3", "4": "4"}}}, "min_week_days": 1, "months": {"stand-alone": {"wide": {"1": "1\uc6d4", "2": "2\uc6d4", "3": "3\uc6d4", "4": "4\uc6d4", "5": "5\uc6d4", "6": "6\uc6d4", "7": "7\uc6d4", "8": "8\uc6d4", "9": "9\uc6d4", "10": "10\uc6d4", "11": "11\uc6d4", "12": "12\uc6d4"}, "abbreviated": {"1": "1\uc6d4", "2": "2\uc6d4", "3": "3\uc6d4", "4": "4\uc6d4", "5": "5\uc6d4", "6": "6\uc6d4", "7": "7\uc6d4", "8": "8\uc6d4", "9": "9\uc6d4", "10": "10\uc6d4", "11": "11\uc6d4", "12": "12\uc6d4"}, "narrow": {"1": "1\uc6d4", "2": "2\uc6d4", "3": "3\uc6d4", "4": "4\uc6d4", "5": "5\uc6d4", "6": "6\uc6d4", "7": "7\uc6d4", "8": "8\uc6d4", "9": "9\uc6d4", "10": "10\uc6d4", "11": "11\uc6d4", "12": "12\uc6d4"}}, "format": {"wide": {"1": "1\uc6d4", "2": "2\uc6d4", "3": "3\uc6d4", "4": "4\uc6d4", "5": "5\uc6d4", "6": "6\uc6d4", "7": "7\uc6d4", "8": "8\uc6d4", "9": "9\uc6d4", "10": "10\uc6d4", "11": "11\uc6d4", "12": "12\uc6d4"}, "abbreviated": {"1": "1\uc6d4", "2": "2\uc6d4", "3": "3\uc6d4", "4": "4\uc6d4", "5": "5\uc6d4", "6": "6\uc6d4", "7": "7\uc6d4", "8": "8\uc6d4", "9": "9\uc6d4", "10": "10\uc6d4", "11": "11\uc6d4", "12": "12\uc6d4"}, "narrow": {"1": "1\uc6d4", "2": "2\uc6d4", "3": "3\uc6d4", "4": "4\uc6d4", "5": "5\uc6d4", "6": "6\uc6d4", "7": "7\uc6d4", "8": "8\uc6d4", "9": "9\uc6d4", "10": "10\uc6d4", "11": "11\uc6d4", "12": "12\uc6d4"}}}, "percent_format": "#,##0%", "number_format": "#,##0.###", "periods": {"am": "\uc624\uc804", "pm": "\uc624\ud6c4"}},
	    'zh_CN': {"days": {"stand-alone": {"wide": {"0": "\u661f\u671f\u4e00", "1": "\u661f\u671f\u4e8c", "2": "\u661f\u671f\u4e09", "3": "\u661f\u671f\u56db", "4": "\u661f\u671f\u4e94", "5": "\u661f\u671f\u516d", "6": "\u661f\u671f\u65e5"}, "abbreviated": {"0": "\u661f\u671f\u4e00", "1": "\u661f\u671f\u4e8c", "2": "\u661f\u671f\u4e09", "3": "\u661f\u671f\u56db", "4": "\u661f\u671f\u4e94", "5": "\u661f\u671f\u516d", "6": "\u661f\u671f\u65e5"}, "narrow": {"0": "\u4e00", "1": "\u4e8c", "2": "\u4e09", "3": "\u56db", "4": "\u4e94", "5": "\u516d", "6": "\u65e5"}}, "format": {"wide": {"0": "\u661f\u671f\u4e00", "1": "\u661f\u671f\u4e8c", "2": "\u661f\u671f\u4e09", "3": "\u661f\u671f\u56db", "4": "\u661f\u671f\u4e94", "5": "\u661f\u671f\u516d", "6": "\u661f\u671f\u65e5"}, "abbreviated": {"0": "\u5468\u4e00", "1": "\u5468\u4e8c", "2": "\u5468\u4e09", "3": "\u5468\u56db", "4": "\u5468\u4e94", "5": "\u5468\u516d", "6": "\u5468\u65e5"}, "narrow": {"0": "\u4e00", "1": "\u4e8c", "2": "\u4e09", "3": "\u56db", "4": "\u4e94", "5": "\u516d", "6": "\u65e5"}}}, "scientific_format": "#E0", "minus_sign": "-", "date_formats": {"medium": {"pattern": "yyyy-M-d", "format": "%(yyyy)s-%(M)s-%(d)s"}, "short": {"pattern": "yy-M-d", "format": "%(yy)s-%(M)s-%(d)s"}, "long": {"pattern": "yyyy\u5e74M\u6708d\u65e5", "format": "%(yyyy)s\u5e74%(M)s\u6708%(d)s\u65e5"}, "full": {"pattern": "yyyy\u5e74M\u6708d\u65e5EEEE", "format": "%(yyyy)s\u5e74%(M)s\u6708%(d)s\u65e5%(EEEE)s"}}, "decimal_symbol": ".", "time_formats": {"medium": {"pattern": "ahh:mm:ss", "format": "%(a)s%(hh)s:%(mm)s:%(ss)s"}, "short": {"pattern": "ah:mm", "format": "%(a)s%(h)s:%(mm)s"}, "long": {"pattern": "ahh\u65f6mm\u5206ss\u79d2z", "format": "%(a)s%(hh)s\u65f6%(mm)s\u5206%(ss)s\u79d2%(z)s"}, "full": {"pattern": "ahh\u65f6mm\u5206ss\u79d2v", "format": "%(a)s%(hh)s\u65f6%(mm)s\u5206%(ss)s\u79d2%(v)s"}}, "group_symbol": ",", "plus_sign": "+", "datetime_formats": {"null": "{1} {0}"}, "locale_name": "zh_CN", "first_week_day": 6, "eras": {"wide": {"0": "\u516c\u5143\u524d", "1": "\u516c\u5143"}, "abbreviated": {"0": "\u516c\u5143\u524d", "1": "\u516c\u5143"}, "narrow": {"0": "\u516c\u5143\u524d", "1": "\u516c\u5143"}}, "exp_symbol": "E", "quarters": {"stand-alone": {"wide": {"1": "\u7b2c1\u5b63\u5ea6", "2": "\u7b2c2\u5b63\u5ea6", "3": "\u7b2c3\u5b63\u5ea6", "4": "\u7b2c4\u5b63\u5ea6"}, "abbreviated": {"1": "\u7b2c1\u5b63\u5ea6", "2": "\u7b2c2\u5b63\u5ea6", "3": "\u7b2c3\u5b63\u5ea6", "4": "\u7b2c4\u5b63\u5ea6"}, "narrow": {"1": "1", "2": "2", "3": "3", "4": "4"}}, "format": {"wide": {"1": "\u7b2c1\u5b63\u5ea6", "2": "\u7b2c2\u5b63\u5ea6", "3": "\u7b2c3\u5b63\u5ea6", "4": "\u7b2c4\u5b63\u5ea6"}, "abbreviated": {"1": "1\u5b63", "2": "2\u5b63", "3": "3\u5b63", "4": "4\u5b63"}, "narrow": {"1": "1", "2": "2", "3": "3", "4": "4"}}}, "min_week_days": 1, "months": {"stand-alone": {"wide": {"1": "\u4e00\u6708", "2": "\u4e8c\u6708", "3": "\u4e09\u6708", "4": "\u56db\u6708", "5": "\u4e94\u6708", "6": "\u516d\u6708", "7": "\u4e03\u6708", "8": "\u516b\u6708", "9": "\u4e5d\u6708", "10": "\u5341\u6708", "11": "\u5341\u4e00\u6708", "12": "\u5341\u4e8c\u6708"}, "abbreviated": {"1": "\u4e00\u6708", "2": "\u4e8c\u6708", "3": "\u4e09\u6708", "4": "\u56db\u6708", "5": "\u4e94\u6708", "6": "\u516d\u6708", "7": "\u4e03\u6708", "8": "\u516b\u6708", "9": "\u4e5d\u6708", "10": "\u5341\u6708", "11": "\u5341\u4e00\u6708", "12": "\u5341\u4e8c\u6708"}, "narrow": {"1": "1\u6708", "2": "2\u6708", "3": "3\u6708", "4": "4\u6708", "5": "5\u6708", "6": "6\u6708", "7": "7\u6708", "8": "8\u6708", "9": "9\u6708", "10": "10\u6708", "11": "11\u6708", "12": "12\u6708"}}, "format": {"wide": {"1": "1\u6708", "2": "2\u6708", "3": "3\u6708", "4": "4\u6708", "5": "5\u6708", "6": "6\u6708", "7": "7\u6708", "8": "8\u6708", "9": "9\u6708", "10": "10\u6708", "11": "11\u6708", "12": "12\u6708"}, "abbreviated": {"1": "1\u6708", "2": "2\u6708", "3": "3\u6708", "4": "4\u6708", "5": "5\u6708", "6": "6\u6708", "7": "7\u6708", "8": "8\u6708", "9": "9\u6708", "10": "10\u6708", "11": "11\u6708", "12": "12\u6708"}, "narrow": {"1": "1\u6708", "2": "2\u6708", "3": "3\u6708", "4": "4\u6708", "5": "5\u6708", "6": "6\u6708", "7": "7\u6708", "8": "8\u6708", "9": "9\u6708", "10": "10\u6708", "11": "11\u6708", "12": "12\u6708"}}}, "percent_format": "#,##0%", "number_format": "#,##0.###", "periods": {"am": "\u4e0a\u5348", "pm": "\u4e0b\u5348"}},
	    'zh_TW': {"days": {"stand-alone": {"wide": {"0": "\u661f\u671f\u4e00", "1": "\u661f\u671f\u4e8c", "2": "\u661f\u671f\u4e09", "3": "\u661f\u671f\u56db", "4": "\u661f\u671f\u4e94", "5": "\u661f\u671f\u516d", "6": "\u661f\u671f\u65e5"}, "abbreviated": {"0": "\u661f\u671f\u4e00", "1": "\u661f\u671f\u4e8c", "2": "\u661f\u671f\u4e09", "3": "\u661f\u671f\u56db", "4": "\u661f\u671f\u4e94", "5": "\u661f\u671f\u516d", "6": "\u661f\u671f\u65e5"}, "narrow": {"0": "\u4e00", "1": "\u4e8c", "2": "\u4e09", "3": "\u56db", "4": "\u4e94", "5": "\u516d", "6": "\u65e5"}}, "format": {"wide": {"0": "\u661f\u671f\u4e00", "1": "\u661f\u671f\u4e8c", "2": "\u661f\u671f\u4e09", "3": "\u661f\u671f\u56db", "4": "\u661f\u671f\u4e94", "5": "\u661f\u671f\u516d", "6": "\u661f\u671f\u65e5"}, "abbreviated": {"0": "\u5468\u4e00", "1": "\u5468\u4e8c", "2": "\u5468\u4e09", "3": "\u5468\u56db", "4": "\u5468\u4e94", "5": "\u5468\u516d", "6": "\u5468\u65e5"}, "narrow": {"0": "\u4e00", "1": "\u4e8c", "2": "\u4e09", "3": "\u56db", "4": "\u4e94", "5": "\u516d", "6": "\u65e5"}}}, "scientific_format": "#E0", "minus_sign": "-", "date_formats": {"medium": {"pattern": "yyyy-M-d", "format": "%(yyyy)s-%(M)s-%(d)s"}, "short": {"pattern": "yy-M-d", "format": "%(yy)s-%(M)s-%(d)s"}, "long": {"pattern": "yyyy\u5e74M\u6708d\u65e5", "format": "%(yyyy)s\u5e74%(M)s\u6708%(d)s\u65e5"}, "full": {"pattern": "yyyy\u5e74M\u6708d\u65e5EEEE", "format": "%(yyyy)s\u5e74%(M)s\u6708%(d)s\u65e5%(EEEE)s"}}, "decimal_symbol": ".", "time_formats": {"medium": {"pattern": "ahh:mm:ss", "format": "%(a)s%(hh)s:%(mm)s:%(ss)s"}, "short": {"pattern": "ah:mm", "format": "%(a)s%(h)s:%(mm)s"}, "long": {"pattern": "ahh\u65f6mm\u5206ss\u79d2z", "format": "%(a)s%(hh)s\u65f6%(mm)s\u5206%(ss)s\u79d2%(z)s"}, "full": {"pattern": "ahh\u65f6mm\u5206ss\u79d2v", "format": "%(a)s%(hh)s\u65f6%(mm)s\u5206%(ss)s\u79d2%(v)s"}}, "group_symbol": ",", "plus_sign": "+", "datetime_formats": {"null": "{1} {0}"}, "locale_name": "zh_TW", "first_week_day": 6, "eras": {"wide": {"0": "\u516c\u5143\u524d", "1": "\u516c\u5143"}, "abbreviated": {"0": "\u516c\u5143\u524d", "1": "\u516c\u5143"}, "narrow": {"0": "\u516c\u5143\u524d", "1": "\u516c\u5143"}}, "exp_symbol": "E", "quarters": {"stand-alone": {"wide": {"1": "\u7b2c1\u5b63\u5ea6", "2": "\u7b2c2\u5b63\u5ea6", "3": "\u7b2c3\u5b63\u5ea6", "4": "\u7b2c4\u5b63\u5ea6"}, "abbreviated": {"1": "\u7b2c1\u5b63\u5ea6", "2": "\u7b2c2\u5b63\u5ea6", "3": "\u7b2c3\u5b63\u5ea6", "4": "\u7b2c4\u5b63\u5ea6"}, "narrow": {"1": "1", "2": "2", "3": "3", "4": "4"}}, "format": {"wide": {"1": "\u7b2c1\u5b63\u5ea6", "2": "\u7b2c2\u5b63\u5ea6", "3": "\u7b2c3\u5b63\u5ea6", "4": "\u7b2c4\u5b63\u5ea6"}, "abbreviated": {"1": "1\u5b63", "2": "2\u5b63", "3": "3\u5b63", "4": "4\u5b63"}, "narrow": {"1": "1", "2": "2", "3": "3", "4": "4"}}}, "min_week_days": 1, "months": {"stand-alone": {"wide": {"1": "\u4e00\u6708", "2": "\u4e8c\u6708", "3": "\u4e09\u6708", "4": "\u56db\u6708", "5": "\u4e94\u6708", "6": "\u516d\u6708", "7": "\u4e03\u6708", "8": "\u516b\u6708", "9": "\u4e5d\u6708", "10": "\u5341\u6708", "11": "\u5341\u4e00\u6708", "12": "\u5341\u4e8c\u6708"}, "abbreviated": {"1": "\u4e00\u6708", "2": "\u4e8c\u6708", "3": "\u4e09\u6708", "4": "\u56db\u6708", "5": "\u4e94\u6708", "6": "\u516d\u6708", "7": "\u4e03\u6708", "8": "\u516b\u6708", "9": "\u4e5d\u6708", "10": "\u5341\u6708", "11": "\u5341\u4e00\u6708", "12": "\u5341\u4e8c\u6708"}, "narrow": {"1": "1\u6708", "2": "2\u6708", "3": "3\u6708", "4": "4\u6708", "5": "5\u6708", "6": "6\u6708", "7": "7\u6708", "8": "8\u6708", "9": "9\u6708", "10": "10\u6708", "11": "11\u6708", "12": "12\u6708"}}, "format": {"wide": {"1": "1\u6708", "2": "2\u6708", "3": "3\u6708", "4": "4\u6708", "5": "5\u6708", "6": "6\u6708", "7": "7\u6708", "8": "8\u6708", "9": "9\u6708", "10": "10\u6708", "11": "11\u6708", "12": "12\u6708"}, "abbreviated": {"1": "1\u6708", "2": "2\u6708", "3": "3\u6708", "4": "4\u6708", "5": "5\u6708", "6": "6\u6708", "7": "7\u6708", "8": "8\u6708", "9": "9\u6708", "10": "10\u6708", "11": "11\u6708", "12": "12\u6708"}, "narrow": {"1": "1\u6708", "2": "2\u6708", "3": "3\u6708", "4": "4\u6708", "5": "5\u6708", "6": "6\u6708", "7": "7\u6708", "8": "8\u6708", "9": "9\u6708", "10": "10\u6708", "11": "11\u6708", "12": "12\u6708"}}}, "percent_format": "#,##0%", "number_format": "#,##0.###", "periods": {"am": "\u4e0a\u5348", "pm": "\u4e0b\u5348"}}
    };

var getLocaleData = function (locale) {
    if (!LOCALES[locale]) {
	    locale = 'en_US';
    }
    return LOCALES[locale];
}

exports.getLocaleData = getLocaleData;