const Product = require('../model/products')


const getAllProducts = async (req, res) => { // <-- FIXED ORDER
  try {
      const product = await Product.find({});
      res.status(200).json(product);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};


const getAllProduct = async(req,res) => {
    try{
        const {id} = req.params
        const product= await Product.findById(id);
        if(!product){
          return res.status(404).json("Product not found")
        }
        
        res.status(200).json(product);
        
    
      }catch(error){
        res.status(500).json({message:error.message})
      }
}


const createProduct = async(req,res) =>{
    try{
        // const {_id,...prod}=req.body
        const product = await Product.create(req.body)
        res.status(200).json(product)
    
      }catch(error){
        res.status(500).json({message:error.message})
    
      }
}

const updateProduct = async(req,res) =>{
    try{
        const {id}=req.params
        const product = await Product.findByIdAndUpdate(id,req.body)
        if(!product){
          return res.status(404).json({message:"Product not Found"})
        }
        
          const UpdateProduct = await Product.findById(id)
          res.status(200).json(UpdateProduct)
        
         }catch(error){
          res.status(500).json({message:error.message})
      
         }
}


const deleteProduct = async(req,res) => {
    try{
        const {id} = req.params
        const product = await Product.findByIdAndDelete(id);
        if(!product){
          return res.status(404).json({message:"Product Not Found"})
        }
        res.status(200).json({message:"Product Deleted Successfully...!!!!"})
      
      }catch(error){
        res.status(500).json({message:error.message})
      }
}

module.exports ={
    getAllProduct,
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct
}