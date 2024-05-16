import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateUsername(name: string): string {
  // Remove non-alphanumeric characters and convert to lowercase
  let username = name.replace(/\W/g, "").toLowerCase();

  // Append random alphanumeric string for uniqueness
  const randomString = Math.random().toString(36).substring(2, 8); // 6 characters long
  username += randomString;

  return username;
}

export function getCurrentUnixTimestamp() {
  return Math.floor(Date.now() / 1000);
}
