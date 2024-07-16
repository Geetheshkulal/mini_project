'use strict';

/**
 * basic-course service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::basic-course.basic-course');
