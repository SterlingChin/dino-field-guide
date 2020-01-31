export const dinoListCleanup = (dinolist) => {
    let dinoObj = {}
    const getHref = (str) => {
        return str.slice(str.indexOf('=') + 2, str.indexOf('>') - 1)
    }

    const getLabel = (str) => {
        const newStr = str.slice(str.indexOf('>') + 1, str.length - 4)
        return newStr.slice(newStr.indexOf('-') + 2, str.length)
    }

    const getName = (str) => {
        const newStr = str.slice(str.indexOf('>') + 1, str.length)
        return newStr.slice(0, newStr.indexOf('-') - 1)
    }

    const cleanUp = (str) => {
        const str1 = str.replace(/&#34;/g, '"')
        return str1.replace(/&#39;/g, "'")
    }

    const getWiki = (str) => {
        const URL_BASE = "https://en.wikipedia.org/wiki/"
        return `${URL_BASE}${str}`
    }
    const list = dinolist.map(dino => {
        let obj = {}
        const cleanedUpDino = cleanUp(dino)
        if (cleanedUpDino.indexOf('=') > 0) {
            obj['name'] = getName(cleanedUpDino)
            obj['label'] = getLabel(cleanedUpDino)
            obj['url'] = getHref(cleanedUpDino)
        } else {
            obj['name'] = cleanedUpDino.slice(0, cleanedUpDino.indexOf('-') - 1)
            obj['label'] = cleanedUpDino.slice(cleanedUpDino.indexOf('-') + 2, cleanedUpDino.length)
        }
        obj['wiki'] = getWiki(obj.name)
        return obj
    })
    list.forEach(item => {
        const letter = item.name[0]
        dinoObj[letter] ? dinoObj[letter] = [...dinoObj[letter], item] : dinoObj[letter] = [item]
    })
    return dinoObj
}