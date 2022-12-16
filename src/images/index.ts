import React, { ReactElement, SVGProps } from 'react';

import accountants from './accountants.svg';
import auditors from './auditors.svg';
import lawyers from './lawyers.svg';
import others from './others.svg';
import image from './image.svg';
import dataServices from './data-1.svg'
import businessProcess from './business-process.svg';
import softwareSolutions from './software-solutions.svg';
import technologyAdvisory from './technology-advisory.svg';
import testingServices from './testing-services.svg';
import perfTesting from './prefTesting.svg';
import architecture from './architecture.svg';
import backendCloud from './backendCloud.svg';
import frontEnd from './frontEnd.svg';
import uiUX from './uiUx.svg'

export default {
  accountants: accountants.src,
  auditors: auditors.src,
  lawyers: lawyers.src,
  others: others.src,
  image: image.src,
  dataServices: dataServices.src,
  businessProcess: businessProcess.src,
  softwareSolutions: softwareSolutions.src,
  technologyAdvisory: technologyAdvisory.src,
  testingServices: testingServices.src,
  perfTesting: perfTesting.src,
  architecture: architecture.src,
  backendCloud: backendCloud.src,
  frontEnd: frontEnd.src,
  uiUX: uiUX.src
} as Record<string, any>;
