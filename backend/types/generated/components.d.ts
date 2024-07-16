import type { Schema, Attribute } from '@strapi/strapi';

export interface BasicCourseTopicsBasicCourseTopics extends Schema.Component {
  collectionName: 'components_basic_course_topics_basic_course_topics';
  info: {
    displayName: 'BasicCourse-topics';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.RichText;
    vedioUrl: Attribute.String;
  };
}

export interface TopicsContent extends Schema.Component {
  collectionName: 'components_topics_contents';
  info: {
    displayName: 'content';
  };
  attributes: {
    name: Attribute.String;
  };
}

export interface TopicsVedioTopic extends Schema.Component {
  collectionName: 'components_component_vedio_topics';
  info: {
    displayName: 'Topics';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.RichText;
    vedioUrl: Attribute.String;
  };
}

export interface VedioTopicsVedioTopics extends Schema.Component {
  collectionName: 'components_vedio_topics_vedio_topics';
  info: {
    displayName: 'Vedio-Topics';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.RichText;
    vedioUrl: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'basic-course-topics.basic-course-topics': BasicCourseTopicsBasicCourseTopics;
      'topics.content': TopicsContent;
      'topics.vedio-topic': TopicsVedioTopic;
      'vedio-topics.vedio-topics': VedioTopicsVedioTopics;
    }
  }
}
