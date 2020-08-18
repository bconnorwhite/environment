
export type Environment = "development" | "production";

export function getEnvironment(environment = process.env.NODE_ENV): Environment {
  return environment === "production" ? "production" : "development";
}

export function isProduction(environment?: string) {
  return getEnvironment(environment) === "production";
}

export function isDevelopment(environment?: string) {
  return !isProduction(environment);
}

const environment = getEnvironment();

export default environment;
