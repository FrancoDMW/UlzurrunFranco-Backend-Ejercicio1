class ProductManager {

    constructor() {
        this.products = []
    }

    addProduct = (title, description, price, thumbnail, code, stock) => {
        let idBuscado = this.products.find(producto => producto.code == code)
        if (idBuscado) {
            let idModificado = code+1
            return this.products.push({
                title: title,
                description: description,
                price: price,
                thumbnail: thumbnail,
                code: idModificado,
                stock: stock
            })
        }
        else {
            return this.products.push({
                title: title,
                description: description,
                price: price,
                thumbnail: thumbnail,
                code: code,
                stock: stock
            })
        }
    }

    /*validarId = (id) => {
        let idBuscado = this.products.find(producto => producto.code == id)
        if (idBuscado) {
            let idModificado = id++
            return (idModificado)
        }
        else {
            return (id)
        }

    }*/

    getProducts = () => {
        return this.products
    }

    getProductsById = (id) => {
        let idBuscado = this.products.find(producto => producto.code == id)
        if (this.products.length == 0) {
            return console.log("Error! no hay productos cargados")
        }
        if (idBuscado) {
            return idBuscado
        }
        else {
            return console.log("Error! el codigo ingresado no existe")
        }
    }
}

let producto = new ProductManager()
producto.addProduct("remera", "nike", 1000, "rutaimagen", 1, 11)
producto.addProduct("remera2", "nike2", 2000, "rutaimagen2", 1, 12)
producto.addProduct("remera4", "nike4", 3000, "rutaimagen4", 2, 14)
producto.addProduct("remera3", "nike3", 3000, "rutaimagen3", 3, 13)
console.log(producto.getProducts())
console.log(producto.getProductsById(2))