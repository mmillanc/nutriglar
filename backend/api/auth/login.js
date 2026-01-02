import crypto from "crypto";

function base64url(buffer) {
  return buffer
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

export default function handler(req, res) {
  const codeVerifier = base64url(crypto.randomBytes(32));

  const codeChallenge = base64url(
    crypto.createHash("sha256").update(codeVerifier).digest()
  );

  // cookie segura (simple y efectiva)
  res.setHeader(
    "Set-Cookie",
    `ml_code_verifier=${codeVerifier}; HttpOnly; Secure; Path=/; Max-Age=300`
  );

  const url =
    `https://auth.mercadolibre.cl/authorization` +
    `?response_type=code` +
    `&client_id=${process.env.ML_CLIENT_ID}` +
    `&redirect_uri=${process.env.ML_REDIRECT_URI}` +
    `&code_challenge=${codeChallenge}` +
    `&code_challenge_method=S256`;

  res.redirect(url);
}
