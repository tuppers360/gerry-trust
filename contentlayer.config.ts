import {
  ComputedFields,
  defineDocumentType,
  defineNestedType,
  makeSource
} from 'contentlayer/source-files';

const computedFields: ComputedFields = {
  slug: {
    type: 'string',
    resolve: (doc: any) =>
      doc._raw.sourceFileName.replace(/\.md$/, '').replace(/\.mdx$/, '')
  }
};

const OgImage = defineNestedType(() => ({
  name: 'ogImage',
  fields: {
    url: { type: 'string', required: true }
  }
}));

const Author = defineNestedType(() => ({
  name: 'Author',
  fields: {
    name: { type: 'string', required: true },
    picture: { type: 'string', required: true }
  }
}));

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/*.md`,
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true
    }
  },
  computedFields
}));

const Story = defineDocumentType(() => ({
  name: 'Story',
  filePathPattern: `stories/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the story',
      required: true
    },
    publishedAt: {
      type: 'date',
      description: 'The date of the post',
      required: true
    },
    summary: {
      type: 'string',
      description: 'The excerpt of the story',
      required: true
    },
    coverImage: {
      type: 'string',
      description: 'The cover image of the story',
      required: true
    },
    ogImage: {
      type: 'nested',
      of: OgImage
    },
    author: {
      type: 'nested',
      of: Author
    }
  },
  computedFields
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post, Story]
});
