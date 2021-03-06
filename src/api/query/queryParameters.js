const supportedParameters = [
  'endtime',
  'starttime',
  'updatedafter',
  'minlatitude',
  'minlongitude',
  'maxlatitude',
  'maxlongitude',
  'latitude',
  'longitude',
  'maxradius',
  'maxradiuskm',
  'catalog',
  'contributor',
  'eventid',
  'includeallmagnitudes',
  'includeallorigins',
  'includearrivals',
  'includedeleted',
  'includesuperseded',
  'limit',
  'maxdepth',
  'maxmagnitude',
  'mindepth',
  'minmagnitude',
  'offset',
  'orderby',
  'alertlevel',
  'eventtype',
  'maxcdi',
  'maxgap',
  'maxmmi',
  'maxsig',
  'mincdi',
  'minfelt',
  'mingap',
  'minsig',
  'producttype',
  'productcode',
  'reviewstatus'
]

module.exports = class QueryParameters {
  constructor (query) {
    const parameters = Object.entries(query)
      .filter(([key]) => supportedParameters.includes(key))
      .filter(([_, value]) => !!value || value === 0)
      .reduce((prev, [key, value]) => {
        prev[key] = value
        return prev
      }, {})

    parameters.format = 'geojson'

    return parameters
  }
}
