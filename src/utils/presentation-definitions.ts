//PEX for requesting email type VC
const emailVc = {
  id: 'vp_token_with_email_vc',
  input_descriptors: [
    {
      id: 'email_vc',
      name: 'Email VC',
      purpose: 'Check if VC data contains necessary fields',
      group: ['A'],
      constraints: {
        fields: [
          {
            path: ['$.type'],
            purpose: 'Check if VC type is correct',
            filter: {
              type: 'array',
              contains: {
                type: 'string',
                pattern: 'Email',
              },
            },
          },
          {
            path: ['$.credentialSubject.email'],
            purpose: 'Check if VC contains email field',
            filter: {
              type: 'string',
            },
          },
          {
            path: ['$.issuer'],
            purpose: 'Check if VC Issuer is Trusted',
            filter: {
              type: 'string',
              pattern:
                '^did:key:zQ3shtMGCU89kb2RMknNZcYGUcHW8P6Cq3CoQyvoDs7Qqh33N|^did:elem:EiBb5gyC1mu3t31oYwMsYWg1U2HyNtaVQ0NKn5UkAzB8BQ',
            },
          },
        ],
      },
    },
  ],
}

//PEX for requesting both Email and IndividualProfile
const emailAndHITProfileVC = {
  id: 'vp_combined_email_user_profile_combined',
  submission_requirements: [
    {
      rule: 'pick',
      min: 1,
      from: 'A',
    },
  ],
  input_descriptors: [
    {
      id: 'email_vc',
      name: 'Email VC',
      purpose: 'Check if VC data contains necessary fields',
      group: ['A'],
      constraints: {
        fields: [
          {
            path: ['$.type'],
            purpose: 'Check if VC type is correct',
            filter: {
              type: 'array',
              contains: {
                type: 'string',
                pattern: 'Email',
              },
            },
          },
          {
            path: ['$.credentialSubject.email'],
            purpose: 'Check if VC contains email field',
            filter: {
              type: 'string',
            },
          },
          {
            path: ['$.issuer'],
            purpose: 'Check if VC Issuer is Trusted',
            filter: {
              type: 'string',
              pattern:
                '^did:key:zQ3shtMGCU89kb2RMknNZcYGUcHW8P6Cq3CoQyvoDs7Qqh33N|^did:elem:EiBb5gyC1mu3t31oYwMsYWg1U2HyNtaVQ0NKn5UkAzB8BQ',
            },
          },
        ],
      },
    },
    {
      id: 'mobile_vc',
      name: 'mobile VC',
      purpose: 'Check if VC data contains necessary fields',
      group: ['A'],
      constraints: {
        fields: [
          {
            path: ['$.type'],
            purpose: 'Check if VC type is correct',
            filter: {
              type: 'array',
              contains: {
                type: 'string',
                pattern: 'HITPhoneNumber',
              },
            },
          },
          {
            path: ['$.credentialSubject.phoneNumber'],
            purpose: 'phone Number',
            filter: {
              type: 'string',
            },
          },
        ],
      },
    },
    {
      id: 'givenname_vc',
      name: 'givenname VC',
      purpose: 'Check if VC data contains necessary fields',
      group: ['A'],
      constraints: {
        fields: [
          {
            path: ['$.type'],
            purpose: 'Check if VC type is correct',
            filter: {
              type: 'array',
              contains: {
                type: 'string',
                pattern: 'HITGivenName',
              },
            },
          },
          {
            path: ['$.credentialSubject.givenName'],
            purpose: 'given Name',
            filter: {
              type: 'string',
            },
          },
        ],
      },
    },
    {
      id: 'familyName',
      name: 'familyName VC',
      purpose: 'Check if VC data contains necessary fields',
      group: ['A'],
      constraints: {
        fields: [
          {
            path: ['$.type'],
            purpose: 'Check if VC type is correct',
            filter: {
              type: 'array',
              contains: {
                type: 'string',
                pattern: 'HITFamilyName',
              },
            },
          },
          {
            path: ['$.credentialSubject.familyName'],
            purpose: 'family Name',
            filter: {
              type: 'string',
            },
          },
        ],
      },
    },
    {
      id: 'middleName',
      name: 'middleName VC',
      purpose: 'Check if VC data contains necessary fields',
      group: ['A'],
      constraints: {
        fields: [
          {
            path: ['$.type'],
            purpose: 'Check if VC type is correct',
            filter: {
              type: 'array',
              contains: {
                type: 'string',
                pattern: 'HITMiddleName',
              },
            },
          },
          {
            path: ['$.credentialSubject.middleName'],
            purpose: 'middleName',
            filter: {
              type: 'string',
            },
          },
        ],
      },
    },
    {
      id: 'nickname',
      name: 'nickname',
      purpose: 'Check if VC data contains necessary fields',
      group: ['A'],
      constraints: {
        fields: [
          {
            path: ['$.type'],
            purpose: 'Check if VC type is correct',
            filter: {
              type: 'array',
              contains: {
                type: 'string',
                pattern: 'HITNickname',
              },
            },
          },
          {
            path: ['$.credentialSubject.nickname'],
            purpose: 'nickname',
            filter: {
              type: 'string',
            },
          },
        ],
      },
    },
    {
      id: 'birthdate',
      name: 'birthdate',
      purpose: 'Check if VC data contains necessary fields',
      group: ['A'],
      constraints: {
        fields: [
          {
            path: ['$.type'],
            purpose: 'Check if VC type is correct',
            filter: {
              type: 'array',
              contains: {
                type: 'string',
                pattern: 'HITBirthdate',
              },
            },
          },
          {
            path: ['$.credentialSubject.birthdate'],
            purpose: 'birthdate',
            filter: {
              type: 'string',
            },
          },
        ],
      },
    },
    {
      id: 'gender',
      name: 'gender',
      purpose: 'Check if VC data contains necessary fields',
      group: ['A'],
      constraints: {
        fields: [
          {
            path: ['$.type'],
            purpose: 'Check if VC type is correct',
            filter: {
              type: 'array',
              contains: {
                type: 'string',
                pattern: 'HITGender',
              },
            },
          },
          {
            path: ['$.credentialSubject.gender'],
            purpose: 'gender',
            filter: {
              type: 'string',
            },
          },
        ],
      },
    },
    {
      id: 'picture',
      name: 'picture',
      purpose: 'Check if VC data contains necessary fields',
      group: ['A'],
      constraints: {
        fields: [
          {
            path: ['$.type'],
            purpose: 'Check if VC type is correct',
            filter: {
              type: 'array',
              contains: {
                type: 'string',
                pattern: 'HITPicture',
              },
            },
          },
          {
            path: ['$.credentialSubject.picture'],
            purpose: 'picture',
            filter: {
              type: 'string',
            },
          },
        ],
      },
    },
    {
      id: 'address',
      name: 'address',
      purpose: 'Check if VC data contains necessary fields',
      group: ['A'],
      constraints: {
        fields: [
          {
            path: ['$.type'],
            purpose: 'Check if VC type is correct',
            filter: {
              type: 'array',
              contains: {
                type: 'string',
                pattern: 'HITAddress',
              },
            },
          },
          {
            path: ['$.credentialSubject.formatted'],
          },
          {
            path: ['$.credentialSubject.locality'],
          },
          {
            path: ['$.credentialSubject.postalCode'],
          },
          {
            path: ['$.credentialSubject.country'],
          },
        ],
      },
    },
  ],
}

const emailAndProfileVC = {
  id: 'vp_combined_email_user_profile_combined',
  submission_requirements: [
    {
      rule: 'pick',
      min: 1,
      from: 'A',
    },
  ],
  input_descriptors: [
    {
      id: 'email_vc',
      name: 'Email VC',
      purpose: 'Check if VC data contains necessary fields',
      group: ['A'],
      constraints: {
        fields: [
          {
            path: ['$.type'],
            purpose: 'Check if VC type is correct',
            filter: {
              type: 'array',
              contains: {
                type: 'string',
                pattern: 'Email',
              },
            },
          },
          {
            path: ['$.credentialSubject.email'],
            purpose: 'Check if VC contains email field',
            filter: {
              type: 'string',
            },
          },
          {
            path: ['$.issuer'],
            purpose: 'Check if VC Issuer is Trusted',
            filter: {
              type: 'string',
              pattern:
                '^did:key:zQ3shtMGCU89kb2RMknNZcYGUcHW8P6Cq3CoQyvoDs7Qqh33N|^did:elem:EiBb5gyC1mu3t31oYwMsYWg1U2HyNtaVQ0NKn5UkAzB8BQ',
            },
          },
        ],
      },
    },
    {
      id: 'profile_vc',
      name: 'profile VC',
      purpose: 'Check if VC data contains necessary fields',
      group: ['A'],
      constraints: {
        fields: [
          {
            path: ['$.type'],
            purpose: 'Check if VC type is correct',
            filter: {
              type: 'array',
              contains: {
                type: 'string',
                pattern: 'UserProfile',
              },
            },
          },
        ],
      },
    },
  ],
}

const moviePreference = {
  id: 'vp_token_with_movie_vc',
  input_descriptors: [
    {
      id: 'movie_vc',
      name: 'movie VC type',
      purpose: 'Check if VC type is correct',
      constraints: {
        fields: [
          {
            path: ['$.type'],
            purpose: 'Check if VC type is correct',
            filter: {
              type: 'array',
              contains: {
                type: 'string',
                pattern: 'MoviePreferences',
              },
            },
          },
        ],
      },
    },
  ],
}

const livenessVC = {
  id: 'vp_token_with_liveness_vc',
  input_descriptors: [
    {
      id: 'liveness_vc',
      name: 'movie VC type',
      purpose: 'Check if VC type is correct',
      constraints: {
        fields: [
          {
            path: ['$.type'],
            purpose: 'Check if VC type is correct',
            filter: {
              type: 'array',
              contains: {
                type: 'string',
                pattern: 'HITLivenessCheck',
              },
            },
          },
          {
            path: ['$.issuer'],
            purpose: 'Check if VC Issuer is Trusted',
            filter: {
              type: 'string',
              pattern:
                '^did:key:zQ3shtMGCU89kb2RMknNZcYGUcHW8P6Cq3CoQyvoDs7Qqh33N|^did:elem:EiBb5gyC1mu3t31oYwMsYWg1U2HyNtaVQ0NKn5UkAzB8BQ',
            },
          },
        ],
      },
    },
  ],
}

const webinarRegistrationVC = {
  id: 'vp_combined_email_user_profile_combined',
  submission_requirements: [
    {
      rule: 'pick',
      min: 1,
      from: 'A',
    },
  ],
  input_descriptors: [
    {
      id: 'email_vc',
      name: 'Email VC',
      purpose: 'Check if VC data contains necessary fields',
      group: ['A'],
      constraints: {
        fields: [
          {
            path: ['$.type'],
            purpose: 'Check if VC type is correct',
            filter: {
              type: 'array',
              contains: {
                type: 'string',
                pattern: 'WebinarRegistrationSchema',
              },
            },
          },
          {
            path: ['$.credentialSubject.credtype'],
            purpose: 'Check if VC contains field',
            filter: {
              type: 'string',
            },
          }
        ],
      },
    }
  ],
}

export const presentationDefinitions = {
  emailVc,
  emailAndProfileVC,
  moviePreference,
  livenessVC,
  webinarRegistrationVC
} as const
