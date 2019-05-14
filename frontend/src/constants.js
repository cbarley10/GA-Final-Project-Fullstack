const PROD = true;
let server_url;

if (PROD === true) {
  server_url = "http://ec2-3-19-58-232.us-east-2.compute.amazonaws.com";
} else {
  server_url = "http://localhost:3001";
}

const VISIBLE_PAGE_NUMS = 5;
const API_URL = "https://rickandmortyapi.com/api/character";
const FAVORITES_URL = `${server_url}/favorites`;
const USERS_URL = `${server_url}/user`;
const USER_TOKEN_URL = `${server_url}/users/me/token`;
const USER_LOGIN_URL = `${server_url}/user/login`;
const TIMEOUT_TIME = 1500;
const SPECIES_OPTIONS = [
  "human",
  "alien",
  "humanoid",
  "unknown",
  "poopybutthole",
  "mytholog",
  "robot",
  "disease",
  "cronenberg",
  "parasite",
  "animal",
  "vampire"
];
const STATUS = ["alive", "dead", "unknown"];

export {
  VISIBLE_PAGE_NUMS,
  API_URL,
  SPECIES_OPTIONS,
  STATUS,
  TIMEOUT_TIME,
  FAVORITES_URL,
  USERS_URL,
  USER_TOKEN_URL,
  USER_LOGIN_URL
};
