import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges and applies Tailwind CSS classes using the `clsx` and `twMerge` functions.
 */
export default function cn(...inputs: string[]): string {
  return twMerge(clsx(inputs));
}
