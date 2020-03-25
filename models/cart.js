module.exports = function Cart(oldCart) {
    this.items = oldCart.items || {};
    this.totalQty = oldCart.totalQty || 0;
    this.totalPrice = oldCart.totalPrice || 0;
    this.priceChil = oldCart.priceChil || 0;
    this.priceKid = oldCart.priceKid || 0;
    this.coupons = oldCart.coupons || {
        description: 0
    };
    this.totalDiscount = oldCart.totalDiscount || this.totalPrice;
    this.add = function (item, id, quantity, numChil, numKid) {
        var keyId = id
        var storedItem = this.items[keyId];
        if (!storedItem) {
            storedItem = this.items[keyId] = {
                item: item,
                qty: 0,
                price: 0,
                numChil: 0,
                numKid: 0,
            };
            this.totalQty++;
        }
        // storedItem.qty++;
        storedItem.numChil = parseInt(storedItem.numChil) + parseInt(numChil); // 30%
        storedItem.numKid = parseInt(storedItem.numKid) + parseInt(numKid);// 50%
        storedItem.qty = parseInt(storedItem.qty) + parseInt(quantity);
        storedItem.totalNumber =  parseInt(storedItem.qty) + parseInt(storedItem.numChil) + parseInt(storedItem.numKid);
        storedItem.price = (parseInt(storedItem.item.price) * parseInt(storedItem.qty)) + (parseInt(storedItem.item.price) * storedItem.numChil * 0.7) + (parseInt(storedItem.item.price) * storedItem.numKid * 0.5);
        storedItem.priceChil = (parseInt(storedItem.item.price) * storedItem.numChil * 0.7);
        storedItem.priceKid = (parseInt(storedItem.item.price) * storedItem.numKid * 0.5);

        if(!storedItem){
            this.totalPrice =  this.totalPrice + storedItem.price
            this.priceChil = this.priceChil + storedItem.priceChil
            this.priceKid = this.priceKid + storedItem.priceKid
        }else{
            this.totalPrice =  this.totalPrice +  (parseInt(storedItem.item.price) * parseInt(quantity)) + (parseInt(storedItem.item.price) * numChil * 0.7) + (parseInt(storedItem.item.price) * numKid * 0.5);
            this.priceChil = (parseInt(storedItem.item.price) * storedItem.numChil * 0.7)
            this.priceKid = (parseInt(storedItem.item.price) * storedItem.numKid * 0.5);
        }
        
        // this.totalPrice += 100
        this.totalDiscount = this.totalPrice

    }
    this.generateArray = function () {
        var arr = [];
        for (var id in this.items) {
            arr.push(this.items[id])
        }
        return arr;
    }
    this.removeItem = function (id) {
        this.totalQty--;
        this.totalPrice -= parseInt(this.items[id].price);
        delete this.items[id];

    }
}