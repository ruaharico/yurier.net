import { defineType } from 'sanity'

import ReadingTimeInput from '~/sanity/components/ReadingTimeInput'

export const readingTimeType = defineType({
  name: 'readingTime',
  title: 'Reading Time',
  description: '自动计算阅读时间',
  type: 'number',
  components: {
    input: ReadingTimeInput,
  },
})
