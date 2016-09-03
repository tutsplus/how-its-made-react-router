const json = require('./data.json');

export default Object.assign(json, {
    getCategory(name) {
        return json.categories.find(x=>x.name === name);
    },

    getProduct(category, product) {
        const cat = this.getCategory(category);
        return cat.products.find(x=>x.name === product);
    }


});
