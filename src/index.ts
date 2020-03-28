const isProduction = process.env.NODE_ENV === "production"
const isDevelopment = !isProduction;

const environment: "development" | "production" = isProduction ? "production" : "development";

export default environment;

export {
  isDevelopment,
  isProduction
}
