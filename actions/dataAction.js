

function itemFunc (item) {
	var formatedItem = {description: {se: item.descriptionSv, en: item.descriptionEn},
      price: {sek: item.priceSek, Eur: item.priceEur},
      title: {se: item.titleSv, en: item.titleEn},}
      'attributesSv' in item ? formatedItem.attributes = {se: item.attributesSv, en: item.attributesEn} : null 
      'tagsSv'in item ? formatedItem.tags = {se: item.tagsSv, en: item.tagsEn} : null
      return formatedItem
}
function formatData (data) {
	return [data].map(obj => ({
  	title: {en: obj.titleEn, se: obj.titleSv},
  	description: {en: obj.descriptionEn, se: obj.descriptionSv},
  	categories: obj.categories.map(catObj => ({
    	title: {se: catObj.titleSv, en: catObj.titleEn},
    	items: catObj.items.map(itemFunc)
  	}))
	}))
}
export function dataAction (data) {
	console.log(data)
	return {
		type: 'DATA',
		data: formatData(data)
	}
}
