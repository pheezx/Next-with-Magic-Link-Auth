import { Magic } from "@magic-sdk/admin";
import { setLoginSession } from "../../lib/auth";

export default async function login(req, res) {
  const magic = new Magic(process.env.MAGIC_SECRET_KEY);
  const didToken = req.headers.authorization.substr(7);
  const metadata = await magic.users.getMetadataByToken(didToken);
  await setLoginSession(res, metadata);
  res.send({ done: true });
}
