import Conversiondb from "../models/Conversiondb.js";



const GET_conversions = (req, res) =>{
  res.send("ESTO ES GET")
}


const POST_conversion = async (req, res) => {
  try {
    const { tipo, numero } = req.body;

    const newConversion = new Conversiondb({ numero, tipo });
    await newConversion.save();
    console.log(newConversion);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

export {GET_conversions, POST_conversion };
