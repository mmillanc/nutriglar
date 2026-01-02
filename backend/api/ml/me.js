// api/ml/me.js
import axios from "axios";

export default async function handler(req, res) {
  const token = global.mlTokens?.access_token;

  if (!token) {
    return res.status(401).json({ error: "No autenticado" });
  }

  const response = await axios.get(
    "https://api.mercadolibre.com/users/me",
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  res.json(response.data);
}
