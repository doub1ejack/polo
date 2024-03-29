/**
 * Validate environment variables
 */
export interface PoloErrorMessage {
  message: string;
  type: "required" | "invalid";
}
export function validateEnvVariables(): PoloErrorMessage[] | null {
  // List of required environment variables
  const requiredEnvVariables = ["NEXT_PUBLIC_SHORT_URL_DOMAIN_NAME"];
  const missingVars = requiredEnvVariables.reduce(
    (missingVars: PoloErrorMessage[], envVar: string) => {
      if (!process.env[envVar]) {
        missingVars.push({
          message: `Missing required environment variable: ${envVar}`,
          type: "required",
        });
      }
      return missingVars;
    },
    []
  );

  // Return error info or null
  if (missingVars.length > 0) {
    return missingVars;
  } else return null;
}
