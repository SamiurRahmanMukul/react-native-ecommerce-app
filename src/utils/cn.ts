import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges and applies Tailwind CSS classes using the `clsx` and `twMerge` functions.
 *
 * @param {...string} inputs - The Tailwind CSS classes to be merged and applied.
 * @return {string} - The merged and applied Tailwind CSS classes.
 */
export default function cn(...inputs: string[]) {
  return twMerge(clsx(inputs));
}
