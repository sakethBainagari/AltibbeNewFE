import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'

// Import schemas
import {blogPost} from './schemas/blogPost'
import {category} from './schemas/category'
import {author} from './schemas/author'

export default defineConfig({
  name: 'altibbe-blog',
  title: 'Altibbe Blog CMS',
  
  projectId: '1q7w1hkb',
  dataset: 'altibe',
  
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Altibbe Blog')
          .items([
            // Blog Posts
            S.listItem()
              .title('Blog Posts')
              .icon(() => '📝')
              .child(
                S.documentTypeList('blogPost')
                  .title('Blog Posts')
                  .filter('_type == "blogPost"')
              ),
            
            // Categories  
            S.listItem()
              .title('Categories')
              .icon(() => '📂')
              .child(
                S.documentTypeList('category')
                  .title('Categories')
                  .filter('_type == "category"')
              ),
            
            // Authors
            S.listItem()
              .title('Authors')
              .icon(() => '👥')
              .child(
                S.documentTypeList('author')
                  .title('Authors')
                  .filter('_type == "author"')
              ),
            
            // Divider
            S.divider(),
            
            // All Documents (for advanced users)
            ...S.documentTypeListItems().filter(
              (listItem) => !['blogPost', 'category', 'author'].includes(listItem.getId()!)
            ),
          ])
    }),
    visionTool(),
  ],
  
  schema: {
    types: [blogPost, category, author],
  },
}) 