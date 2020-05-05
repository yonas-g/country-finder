const countries = require('./src/data/countries.json')
const utils = require('./src/util')

/**
 * find country by country code 
 * eg: US || us for USA
 *     ET || et || ETH || eth for Ethiopia
 * @param {String} code 
 */
const byCountryCode = code => {
    code = code.toUpperCase()
    if (code.length == 2) {
        return countries.find(c => c.iso2 == code)
    } else {
        return countries.find(c => c.iso3 == code)
    }
}

/**
 * find by using unique number id of a country
 * @param {Integer} id 
 */
const byId = id => {
    return countries.find(c => c.id == id)
}

/**
 * find by using country name
 * eg: Ethiopia
 * @param {String} name 
 */
const byName = name => {
    name = name.toLowerCase()

    return countries.find(c => c.name.toLowerCase() == name)
}

/**
 * by continent name
 * eg: Africa
 *     Asia
 * 
 */
const byContinent = continent => {
    continent = continent.toLowerCase()

    return countries.filter(c => c.continent.toLowerCase() == continent)
}

/**
 * a list of available countries with the following parameters
 * - id
 * - name
 * - iso2
 * - iso3
 * - continent
 * - lat
 * - long
 */

const all = () => {
    return countries
}

module.exports = {
    byCountryCode,
    byId,
    byName,
    byContinent,
    all
}