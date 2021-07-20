import { deployDefaultFeatureAppCoreStack } from '@volkswagen-onehub/oneaudi-os-infrastructure';
import environment from './environment';

const {
  stage,
  appName,
  appVersion,
  awsAccountId: accountId,
  apiBaseDirectory,
  appBaseDirectory,
} = environment;

/**
 * By calling deployDefaultFeatureAppCoreStack we make use of the oneAudi OS infrastructure package that
 * comes with a AWS CDK implementation for deploying AWS resources.
 *
 * The default stack sets up an appropriate AWS infrastructure with components like S3, CloudFront, Route53,
 * DNS-validated certificates, API Gateway and Lambda functions.
 *
 * Additionally it takes care of deploying your appBaseDirectory (dist folder) to S3 and all functions within
 * the apiBaseDirectory to AWS Lambda.
 */
deployDefaultFeatureAppCoreStack(accountId, {
  appName,
  stage,
  s3Config: appBaseDirectory
    ? {
        sourceDirectory: appBaseDirectory,
        targetDirectory: appVersion,
      }
    : undefined,
  lambdaConfig: apiBaseDirectory
    ? {
        sourceDirectory: apiBaseDirectory,
      }
    : undefined,
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Example for having a more sophisticated stack by extending the feature app core stack

// import { FeatureAppCoreStack } from '@volkswagen-onehub/oneaudi-os-infrastructure';
// import { App } from '@aws-cdk/core';
// import { Bucket } from '@aws-cdk/aws-s3';

// class MyFancyStack extends FeatureAppCoreStack {
//   constructor() {
//     super(
//       new App(),
//       {
//         env: {
//           account: accountId,
//           region: 'us-east-1',
//         },
//       },
//       {
//         appName,
//         stage,
//         s3Config: appBaseDirectory ? {
//           sourceDirectory: appBaseDirectory,
//           targetDirectory: appVersion,
//         } : undefined,
//         lambdaConfig: apiBaseDirectory ? {
//           sourceDirectory: apiBaseDirectory
//         } : undefined
//       }
//     );

//     new Bucket(this, `Bucket-${appName}-2`, {
//       bucketName: `${appName}-2`,
//     });
//   }
// }

// new MyFancyStack();
