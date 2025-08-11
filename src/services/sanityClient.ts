import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// Sanity client configuration
export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || '1q7w1hkb',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'altibe',
  apiVersion: import.meta.env.VITE_SANITY_API_VERSION || '2024-03-15',
  useCdn: true, // Enable CDN for faster responses in production
})

// Image URL builder for optimized images
const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// Helper function to check if Sanity is properly configured
export function isSanityConfigured(): boolean {
  const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || '1q7w1hkb'
  return !!projectId && projectId !== 'your_project_id_here'
} 