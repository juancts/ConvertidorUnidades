
// export const post_conversion =async (apiConv)=>{
//     console.log("*****************API**********:",apiConv);
//    const jsonData= await fetch("http://localhost:4000/post", apiConv)
//    console.log("API REQ:", jsonData)
// }

export const post_conversion = async (apiConv) => {
    console.log("*****************API**********:", apiConv);
    try {
      const response = await fetch("http://localhost:4000/post", {
        method: "POST",
        body: JSON.stringify(apiConv),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const jsonData = await response.json();
      console.log("API REQ:", jsonData);
    } catch (error) {
      console.error("Error:", error);
    }
  };