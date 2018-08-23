module.export = {
    create: ((req, res) => {
        const db = req.app.get('db');
        db.create_product({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            imageUrl: req.body.imageUrl
        }).then(newProduct => {
            res.json(newProduct)
        }).catch(error => {
            console.log('Create Product Error:', error);
        })
    }),
    getOne:'',
    getAll:'',
    update:'',
    delete:''
}