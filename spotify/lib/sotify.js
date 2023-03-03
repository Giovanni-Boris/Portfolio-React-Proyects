import SpotifyWebApi from "spotify-web-api-node";

const scopes = [
  "user-read-email",
  "playlist-read-private",
  "playlist-read-collaborative",
  "user-read-email",
  "streaming",
  "user-read-private",
  "user-library-read",
  "user-top-read",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-follow-read",
].join(",");

NEXTAUTH_URL=http://locahost:3000
NEXT_PUBLIC_CLIENT_SECRET=b11cb13b42094ce3b7efcbe644291b5e
NEXT_PUBLIC_CLIENT_ID=c985a903478c42639910b32701988ec7
JWT_SECRET=some_super_secret_value