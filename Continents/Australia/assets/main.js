var gform;
        gform || (document.addEventListener("gform_main_scripts_loaded", function() {
            gform.scriptsLoaded = !0
        }), window.addEventListener("DOMContentLoaded", function() {
            gform.domLoaded = !0
        }), gform = {
            domLoaded: !1,
            scriptsLoaded: !1,
            initializeOnLoaded: function(o) {
                gform.domLoaded && gform.scriptsLoaded ? o() : !gform.domLoaded && gform.scriptsLoaded ? window.addEventListener("DOMContentLoaded", o) : document.addEventListener("gform_main_scripts_loaded", o)
            },
            hooks: {
                action: {},
                filter: {}
            },
            addAction: function(o, n, r, t) {
                gform.addHook("action", o, n, r, t)
            },
            addFilter: function(o, n, r, t) {
                gform.addHook("filter", o, n, r, t)
            },
            doAction: function(o) {
                gform.doHook("action", o, arguments)
            },
            applyFilters: function(o) {
                return gform.doHook("filter", o, arguments)
            },
            removeAction: function(o, n) {
                gform.removeHook("action", o, n)
            },
            removeFilter: function(o, n, r) {
                gform.removeHook("filter", o, n, r)
            },
            addHook: function(o, n, r, t, i) {
                null == gform.hooks[o][n] && (gform.hooks[o][n] = []);
                var e = gform.hooks[o][n];
                null == i && (i = n + "_" + e.length), gform.hooks[o][n].push({
                    tag: i,
                    callable: r,
                    priority: t = null == t ? 10 : t
                })
            },
            doHook: function(n, o, r) {
                var t;
                if (r = Array.prototype.slice.call(r, 1), null != gform.hooks[n][o] && ((o = gform.hooks[n][o]).sort(function(o, n) {
                        return o.priority - n.priority
                    }), o.forEach(function(o) {
                        "function" != typeof(t = o.callable) && (t = window[t]), "action" == n ? t.apply(null, r) : r[0] = t.apply(null, r)
                    })), "filter" == n) return r[0]
            },
            removeHook: function(o, n, t, i) {
                var r;
                null != gform.hooks[o][n] && (r = (r = gform.hooks[o][n]).filter(function(o, n, r) {
                    return !!(null != i && i != o.tag || null != t && t != o.priority)
                }), gform.hooks[o][n] = r)
            }
        });

        var SF_LDATA = {
            "ajax_url": "https:\/\/scribemedia.com\/wp-admin\/admin-ajax.php",
            "home_url": "https:\/\/scribemedia.com\/",
            "extensions": []
        };
        (function() {
            var gs = document.createElement('script');
            gs.src = 'https://js.partnerstack.com/v1/';
            gs.type = 'text/javascript';
            gs.async = 'true';
            gs.onload = gs.onreadystatechange = function() {
                var rs = this.readyState;
                if (rs && rs != 'complete' && rs != 'loaded') return;
                try {
                    growsumo._initialize('pk_PdBuxW792pwEpul1sZWHzmVz4RzIlM4e');
                    if (typeof(growsumoInit) === 'function') {
                        growsumoInit();
                    }
                } catch (e) {}
            };
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(gs, s);
        })();

        (function(a, s, y, n, c, h, i, d, e) {
            s.className += ' ' + y;
            h.start = 1 * new Date;
            h.end = i = function() {
                s.className = s.className.replace(RegExp(' ?' + y), '')
            };
            (a[n] = a[n] || []).hide = h;
            setTimeout(function() {
                i();
                h.end = null
            }, c);
            h.timeout = c;
        })(window, document.documentElement, 'async-hide', 'dataLayer', 4000, {
            'GTM-KRGWRMQ': true
        });

        document.body.className += ' hidden';
        (function(d) {
            var s = d.createElement('script');
            s.type = 'text/javascript';
            s.src = 'https://a.omappapi.com/app/js/api.min.js';
            s.async = true;
            s.dataset.campaign = 'cbvwqs0ochogyedpblam';
            s.dataset.user = '57624';
            d.getElementsByTagName('head')[0].appendChild(s);
        })(document);

        (function(d) {
            var s = d.createElement('script');
            s.type = 'text/javascript';
            s.src = 'https://a.omappapi.com/app/js/api.min.js';
            s.async = true;
            s.dataset.campaign = 'gyzfj7wyalvqf77dcnys';
            s.dataset.user = '57624';
            d.getElementsByTagName('head')[0].appendChild(s);
        })(document);

        (function(d) {
            var s = d.createElement('script');
            s.type = 'text/javascript';
            s.src = 'https://a.omappapi.com/app/js/api.min.js';
            s.async = true;
            s.dataset.campaign = 'xjv07go6iub8dncwjcu1';
            s.dataset.user = '57624';
            d.getElementsByTagName('head')[0].appendChild(s);
        })(document);

        (function(d) {
            var s = d.createElement('script');
            s.type = 'text/javascript';
            s.src = 'https://a.omappapi.com/app/js/api.min.js';
            s.async = true;
            s.dataset.campaign = 'wrszw3aprwpenl4qopln';
            s.dataset.user = '57624';
            d.getElementsByTagName('head')[0].appendChild(s);
        })(document);

        (function(d) {
            var s = d.createElement('script');
            s.type = 'text/javascript';
            s.src = 'https://a.omappapi.com/app/js/api.min.js';
            s.async = true;
            s.dataset.campaign = 'gvg6jhv1gw6ng69ksvoa';
            s.dataset.user = '57624';
            d.getElementsByTagName('head')[0].appendChild(s);
        })(document);

        (function(d) {
            var s = d.createElement('script');
            s.type = 'text/javascript';
            s.src = 'https://a.omappapi.com/app/js/api.min.js';
            s.async = true;
            s.dataset.campaign = 'cmlkmulb5rftk9hvysl5';
            s.dataset.user = '57624';
            d.getElementsByTagName('head')[0].appendChild(s);
        })(document);

        (function(d) {
            var s = d.createElement('script');
            s.type = 'text/javascript';
            s.src = 'https://a.omappapi.com/app/js/api.min.js';
            s.async = true;
            s.dataset.campaign = 'arg5ug9ymoku8hpri33x';
            s.dataset.user = '57624';
            d.getElementsByTagName('head')[0].appendChild(s);
        })(document);

        (function(d) {
            var s = d.createElement('script');
            s.type = 'text/javascript';
            s.src = 'https://a.omappapi.com/app/js/api.min.js';
            s.async = true;
            s.dataset.campaign = 'yqy3g7gz1zmade3s1n9q';
            s.dataset.user = '57624';
            d.getElementsByTagName('head')[0].appendChild(s);
        })(document);

        (function(d) {
            var s = d.createElement('script');
            s.type = 'text/javascript';
            s.src = 'https://a.omappapi.com/app/js/api.min.js';
            s.async = true;
            s.dataset.campaign = 'yj4lpowvmvewn4wvxvng';
            s.dataset.user = '57624';
            d.getElementsByTagName('head')[0].appendChild(s);
        })(document);

        (function(d) {
            var s = d.createElement('script');
            s.type = 'text/javascript';
            s.src = 'https://a.omappapi.com/app/js/api.min.js';
            s.async = true;
            s.dataset.campaign = 'ffpgiiurr2eruu4wiozm';
            s.dataset.user = '57624';
            d.getElementsByTagName('head')[0].appendChild(s);
        })(document);

        var cbvwqs0ochogyedpblam_shortcode = true;
        var gyzfj7wyalvqf77dcnys_shortcode = true;
        var xjv07go6iub8dncwjcu1_shortcode = true;
        var wrszw3aprwpenl4qopln_shortcode = true;
        var gvg6jhv1gw6ng69ksvoa_shortcode = true;
        var cmlkmulb5rftk9hvysl5_shortcode = true;
        var arg5ug9ymoku8hpri33x_shortcode = true;
        var yqy3g7gz1zmade3s1n9q_shortcode = true;
        var yj4lpowvmvewn4wvxvng_shortcode = true;
        var ffpgiiurr2eruu4wiozm_shortcode = true;

        jQuery(document).ready(function(jQuery) {
            jQuery.datepicker.setDefaults({
                "closeText": "Close",
                "currentText": "Today",
                "monthNames": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                "monthNamesShort": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                "nextText": "Next",
                "prevText": "Previous",
                "dayNames": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "dayNamesShort": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                "dayNamesMin": ["S", "M", "T", "W", "T", "F", "S"],
                "dateFormat": "MM d, yy",
                "firstDay": 1,
                "isRTL": false
            });
        });

        (function(d) {
            var s = d.createElement("script");
            s.type = "text/javascript";
            s.src = "https://a.omappapi.com/app/js/api.min.js";
            s.async = true;
            s.id = "omapi-script";
            d.getElementsByTagName("head")[0].appendChild(s);
        })(document);

        wp.i18n.setLocaleData({
            'text direction\u0004ltr': ['ltr']
        });

        (function(domain, translations) {
            var localeData = translations.locale_data[domain] || translations.locale_data.messages;
            localeData[""].domain = domain;
            wp.i18n.setLocaleData(localeData, domain);
        })("default", {
            "locale_data": {
                "messages": {
                    "": {}
                }
            }
        });

        var gform_i18n = {
            "datepicker": {
                "days": {
                    "monday": "Mon",
                    "tuesday": "Tue",
                    "wednesday": "Wed",
                    "thursday": "Thu",
                    "friday": "Fri",
                    "saturday": "Sat",
                    "sunday": "Sun"
                },
                "months": {
                    "january": "January",
                    "february": "February",
                    "march": "March",
                    "april": "April",
                    "may": "May",
                    "june": "June",
                    "july": "July",
                    "august": "August",
                    "september": "September",
                    "october": "October",
                    "november": "November",
                    "december": "December"
                },
                "firstDay": 1,
                "iconText": "Select date"
            }
        };
        var gf_global = {
            "gf_currency_config": {
                "name": "U.S. Dollar",
                "symbol_left": "$",
                "symbol_right": "",
                "symbol_padding": "",
                "thousand_separator": ",",
                "decimal_separator": ".",
                "decimals": 2,
                "code": "USD"
            },
            "base_url": "https:\/\/scribemedia.com\/wp-content\/plugins\/gravityforms",
            "number_formats": [],
            "spinnerUrl": "https:\/\/scribemedia.com\/wp-content\/plugins\/gravityforms\/images\/spinner.svg",
            "strings": {
                "newRowAdded": "New row added.",
                "rowRemoved": "Row removed",
                "formSaved": "The form has been saved.  The content contains the link to return and complete the form."
            }
        };
        var gf_legacy_multi = {
            "6": "1"
        };
        /* ]]> */


        gform.initializeOnLoaded(function() {
            jQuery(document).on('gform_post_render', function(event, formId, currentPage) {
                if (formId == 6) {
                    if (typeof Placeholders != 'undefined') {
                        Placeholders.enable();
                    }
                    jQuery(document).on('submit.gravityforms', '.gform_wrapper form', function(event) {
                        jQuery('<input>').attr('type', 'hidden')
                            .attr('name', 'gf_zero_spam_key')
                            .attr('value', '8mE4X5TQqHoApnjk7vb6MlHHjOi8j4B3lGA6whzpycp2TAoNcHR87y1RKwKTyOhG')
                            .appendTo(jQuery(this));
                    });
                }
            });
            jQuery(document).bind('gform_post_conditional_logic', function(event, formId, fields, isInit) {})
        });

        gform.initializeOnLoaded(function() {
            jQuery(document).trigger('gform_post_render', [6, 1])
        });


        var omapi_localized = {
            ajax: 'https://scribemedia.com/wp-admin/admin-ajax.php?optin-monster-ajax-route=1',
            nonce: '37c3e0b418',
            slugs: {
                "cbvwqs0ochogyedpblam": {
                    "slug": "cbvwqs0ochogyedpblam",
                    "mailpoet": false
                },
                "gyzfj7wyalvqf77dcnys": {
                    "slug": "gyzfj7wyalvqf77dcnys",
                    "mailpoet": false
                },
                "xjv07go6iub8dncwjcu1": {
                    "slug": "xjv07go6iub8dncwjcu1",
                    "mailpoet": false
                },
                "wrszw3aprwpenl4qopln": {
                    "slug": "wrszw3aprwpenl4qopln",
                    "mailpoet": false
                },
                "gvg6jhv1gw6ng69ksvoa": {
                    "slug": "gvg6jhv1gw6ng69ksvoa",
                    "mailpoet": false
                },
                "cmlkmulb5rftk9hvysl5": {
                    "slug": "cmlkmulb5rftk9hvysl5",
                    "mailpoet": false
                },
                "arg5ug9ymoku8hpri33x": {
                    "slug": "arg5ug9ymoku8hpri33x",
                    "mailpoet": false
                },
                "yqy3g7gz1zmade3s1n9q": {
                    "slug": "yqy3g7gz1zmade3s1n9q",
                    "mailpoet": false
                },
                "yj4lpowvmvewn4wvxvng": {
                    "slug": "yj4lpowvmvewn4wvxvng",
                    "mailpoet": false
                },
                "ffpgiiurr2eruu4wiozm": {
                    "slug": "ffpgiiurr2eruu4wiozm",
                    "mailpoet": false
                }
            }
        };


        var omapi_data = {
            "wc_cart": [],
            "object_id": 18903,
            "object_key": "post",
            "object_type": "post",
            "term_ids": [8]
        };


        (function(e, t, o, n, p, r, i) {
            e.visitorGlobalObjectAlias = n;
            e[e.visitorGlobalObjectAlias] = e[e.visitorGlobalObjectAlias] || function() {
                (e[e.visitorGlobalObjectAlias].q = e[e.visitorGlobalObjectAlias].q || []).push(arguments)
            };
            e[e.visitorGlobalObjectAlias].l = (new Date).getTime();
            r = t.createElement("script");
            r.src = o;
            r.async = true;
            i = t.getElementsByTagName("script")[0];
            i.parentNode.insertBefore(r, i)
        })(window, document, "https://diffuser-cdn.app-us1.com/diffuser/diffuser.js", "vgo");
        vgo('setAccount', '224300783');
        vgo('setTrackByDefault', true);

        vgo('process');


        
document.getElementById('button').addEventListener('click',
function(){
   document.querySelector(".bg-modal").style.display = 'flex';
})

document.querySelector('.close').addEventListener('click', function(){
   document.querySelector('.bg-modal').style.display = 'none'
})