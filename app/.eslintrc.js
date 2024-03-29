module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:storybook/recommended",
    "plugin:you-dont-need-lodash-underscore/compatible",
    // Disable ESLint code formatting rules which conflict with Prettier
    "prettier",
    // `next` should be extended last according to their docs
    // https://nextjs.org/docs/basic-features/eslint
    "next/core-web-vitals",
  ],
  rules: {
    // Next.js <Image> component is useful for optimizing images, but also requires additional
    // dependencies to work in standalone mode. It may be overkill for most projects at
    // Nava which aren't image heavy.
    "@next/next/no-img-element": "off",
  },
  // Additional lint rules. These get layered onto the top-level rules.
  overrides: [
    // Lint config specific to Test files
    {
      files: ["tests/**/?(*.)+(spec|test).[jt]s?(x)"],
      plugins: ["jest"],
      extends: [
        "plugin:jest/recommended",
        "plugin:jest-dom/recommended",
        "plugin:testing-library/react",
      ],
      rules: {
        "no-restricted-imports": [
          "error",
          {
            paths: [
              {
                message:
                  'Import from "tests/react-utils" instead so that translations work.',
                name: "@testing-library/react",
              },
            ],
          },
        ],
      },
    },
    // Lint config specific to TypeScript files
    {
      files: "**/*.+(ts|tsx)",
      excludedFiles: [".storybook/*.ts?(x)"],
      parserOptions: {
        // These paths need defined to support rules that require type information
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.json"],
      },
      extends: [
        "plugin:@typescript-eslint/recommended",
        // Disable vanilla ESLint rules that conflict with those in @typescript-eslint
        "plugin:@typescript-eslint/eslint-recommended",
        // Rules that specifically require type information
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
      plugins: ["@typescript-eslint"],
      rules: {
        // Prevent dead code accumulation
        "@typescript-eslint/no-unused-vars": "error",
        // The usage of `any` defeats the purpose of typescript. Consider using `unknown` type instead instead.
        "@typescript-eslint/no-explicit-any": "error",
      },
    },
  ],
  settings: {
    // Support projects where Next.js isn't installed in the root directory (such as a monorepo)
    next: {
      rootDir: __dirname,
    },
  },
};
