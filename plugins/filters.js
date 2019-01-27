import Vue from 'vue'
import Captalize from '~/filters/string/capitalize'
import Uppercase from '~/filters/string/uppercase'
import Lowercase from '~/filters/string/lowercase'
import Truncate from '~/filters/string/truncate'

import Date from '~/filters/date/date'
import DateTime from '~/filters/date/datetime'

Vue.filter('capitalize', Captalize)
Vue.filter('uppercase', Uppercase)
Vue.filter('lowercase', Lowercase)
Vue.filter('truncate', Truncate)

Vue.filter('date', Date)
Vue.filter('datetime', DateTime)
