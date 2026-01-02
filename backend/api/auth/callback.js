import axios from "axios";

export default async function handler(req, res) {
  const { code } = req.query;

  if (!code) {
    return res.status(400).json({ error: "No code recibido" });
  }

  // 🔐 leer cookie con code_verifier
  const cookies = req.headers.cookie || "";
  const match = cookies.match(/ml_code_verifier=([^;]+)/);
  const codeVerifier = match?.[1];

  if (!codeVerifier) {
    return res.status(400).json({ error: "code_verifier no encontrado" });
  }

  try {
    const response = await axios.post(
      "https://api.mercadolibre.com/oauth/token",
      {
        grant_type: "authorization_code",
        client_id: process.env.ML_CLIENT_ID,
        client_secret: process.env.ML_CLIENT_SECRET,
        code,
        redirect_uri: process.env.ML_REDIRECT_URI,
        code_verifier: codeVerifier // 👈 CLAVE
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    const {
      access_token,
      refresh_token,
      expires_in
    } = response.data;

    // ✅ AQUÍ
    global.mlTokens = {
      access_token,
      refresh_token,
      expires_at: Date.now() + expires_in * 1000
    };

    // 🔐 aquí luego puedes guardar access_token / refresh_token
    return res.json(response.data);

  } catch (err) {
    return res.status(500).json({
      error: "OAuth failed",
      details: err.response?.data || err.message
    });
  }
}
