const Base_url = import.meta.env.VITE_BASE_URL;

// verfiy payment
export const verifyPayment = async (matric) => {

    console.log(matric);
    return;
  try {
    const response = await fetch(`${Base_url}/verify-payment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(matric),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};