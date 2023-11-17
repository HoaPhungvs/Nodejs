import products from "../model/Products"

export const create = async(req,res)=>{
    try {
        const data = await products.create(req.body)
        if(!data){
            return res.status(404).json({
                mes:"failed create"
            })
        }
        return res.status(200).json({
            mes:"successful create ",
            data
        })
    } catch (error) {
        return res.status(500).json({
            mes:error.mes
        })
    }
}
export const getAll = async(req,res)=>{
    try {
        console.log("req.query", req.query);
    const _limit = req.query._limit || 10;
    const _page = req.query._page || 1;
    const _sort = req.query._sort || "createdAt";
    const _order = req.query._order || "asc";
    const options = {
      limit: _limit,
      page: _page,
      // [sort] {Object | String}
      sort: {
        [_sort]: _order === "asc" ? 1 : -1,
      },
      // createdAt:
    };
    // const data = await Product.find({});
    // Model.paginate([query], [options], [callback])
    const data = await products.paginate({}, options);
        // const data = await products.find({})
        if(!data || data.length){
            return res.status(404).json({
                mes:"failed getAll"
            })
        }
        return res.status(200).json({
            mes:"successful getAll ",
            data
        })
    } catch (error) {
        return res.status(500).json({
            mes:error.mes
        })
    }
}
export const getDetail = async(req,res)=>{
    try {
        const data = await products.findById(req.params.id)
        if(!data){
            return res.status(404).json({
                mes:"failed getDetail"
            })
        }
        return res.status(200).json({
            mes:"successful getDetail ",
            data
        })
    } catch (error) {
        return res.status(500).json({
            mes:error.mes
        })
    }
}
export const remove = async(req,res)=>{
    try {
        const data = await products.findByIdAndDelete(req.params.id)
        if(!data){
            return res.status(404).json({
                mes:"failed delete"
            })
        }
        return res.status(200).json({
            mes:"successful delete ",
            data
        })
    } catch (error) {
        return res.status(500).json({
            mes:error.mes
        })
    }
}

export const update = async(req,res)=>{
    try {
        const data = await products.findByIdAndUpdate(req.params.id,req.body,{new:true})
        if(!data){
            return res.status(404).json({
                mes:"failed update"
            })
        }
        return res.status(200).json({
            mes:"successful update ",
            data
        })
    } catch (error) {
        return res.status(500).json({
            mes:error.mes
        })
    }
}