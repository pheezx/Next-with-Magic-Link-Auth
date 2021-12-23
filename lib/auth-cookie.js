import { serialize } from "cookie";

export const MAX_AGE = 60 * 60 * 8; // 8 hours

export const setTokenCookie = (res, token) => {
  const cookieOptions = {
    maxAge: MAX_AGE,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    sameSite: "lax",
  };
  const cookie = serialize("token", token, cookieOptions);
  res.setHeader("Set-Cookie", cookie);
};
