import Converterdb from "../models/converterdb.js";



const GET_conversions = (req, res) =>{
  res.send("ESTO ES GET")
}


const POST_conversion = async (req, res) => {
  try {
    const { tipo, numero } = req.body;

    const newConversion = new Converterdb({ numero, tipo });
    await newConversion.save();
    res.status(200).send("AGREGADO EXITOSAMENTE");
    console.log(newConversion);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

export {GET_conversions, POST_conversion };
