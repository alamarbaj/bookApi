
exports.book = async (req,res) =>{
    try {
        const result = await bookSchema.find();

        res.json({
            status: true,
            data: result,
            message: "Book List Fetched successfully...."
        })
    } catch (error) {
        res.json({
            status: false,
            data: [],
            message: error.message
        })

    }
}

exports.bookAdd = async(req,res) =>{
    try {
        console.log(req.body);
        const body = req.body
        const obj = {
            name: body.name,
            imageurl: body.imageurl,
            author : body.author,
            price: body.price,
            page: body.page
        }
        const result = await bookSchema.create(obj);
        res.json({
            status: true,
            data: result,
            message: "Book Added successfully...."
        })
    }
    catch (error) {
        console.log(error)
        res.json({
            status: false,
            data: [],
            message: error.message
        })
    }
}


exports.getbookId = async (req, res) => {

    try {
        const _id = req.params._id;
        const result = await bookSchema.findOne({ _id });

        res.json({
            status: true,
            data: result,
            message: "book Fetched successfully...."
        })
    } catch (error) {
        res.json({
            status: false,
            data: [],
            message: error.message
        })

    }
}

exports.bookUpdate = async (req, res) => {
    try {
        const _id = req.body._id
        const body = req.body
        const obj = {
            name: body.name,
            imageurl: body.imageurl,
            author : body.author,
            price: body.price,
            page: body.page,
            updatedAt: new Date()
        }
        const result = await bookSchema.updateOne({ _id }, { $set: obj });
        res.json({
            status: true,
            data: result,
            message: "Book Updated successfully...."
        })
    }
    catch (error) {
        res.json({
            status: false,
            data: [],
            message: error.message
        })
    }
}

exports.bookDelete = async (req, res) => {

    try {
        const _id = req.params._id;
        const result = await bookSchema.remove({ _id });

        res.json({
            status: true,
            data: result,
            message: "Book Delete successfully...."
        })
    } catch (error) {
        res.json({
            status: false,
            data: [],
            message: error.message
        })

    }
}