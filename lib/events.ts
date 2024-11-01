import va from "@vercel/analytics";

// Define the allowed event names
type EventName =
  | "copy_npm_command"
  | "copy_usage_import_code"
  | "copy_usage_code"
  | "copy_primitive_code"
  | "copy_theme_code"
  | "copy_block_code";

// Define the properties type, which allows string, number, boolean, or null
type AllowedPropertyValues = string | number | boolean | null;
type Properties = Record<string, AllowedPropertyValues> | undefined;

// Event type definition
interface Event {
  name: EventName;
  properties?: Properties;
}

// Function to validate if the input event is valid
function isValidEvent(input: any): input is Event {
  const allowedNames: EventName[] = [
    "copy_npm_command",
    "copy_usage_import_code",
    "copy_usage_code",
    "copy_primitive_code",
    "copy_theme_code",
    "copy_block_code",
  ];

  // Check if the event name is one of the allowed event names
  if (!allowedNames.includes(input.name)) {
    return false;
  }

  // Validate properties if they exist
  if (input.properties) {
    for (const key in input.properties) {
      const value = input.properties[key];
      if (
        typeof value !== "string" &&
        typeof value !== "number" &&
        typeof value !== "boolean" &&
        value !== null
      ) {
        return false;
      }
    }
  }

  return true;
}

// Function to track the event
export function trackEvent(input: Event): void {
  if (isValidEvent(input)) {
    va.track(input.name, input.properties);
  } else {
    console.error("Invalid event data:", input);
  }
}
