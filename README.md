# Clearviction + Sanity Clean Content Studio

## Updating config

1. Update the schema files in `./schemas` to add new pages, sections, or questions.
2. Commit and push the changes, open a PR, and merge to main.
3. In clearviction-next repository, the `/utils` folder contains corresponding files that also must be updated to match the new schema changes.
4. Commit and push the changes, open a PR, and merge to main.
5. Visit the [Sanity Studio](https://clearviction.sanity.studio/desk), update any fields that were added, and publish the changes.
6. In the Sanity Studio, click the Deploy tab, and deploy changes.
7. Visit the [Clearviction website](https://clearviction.org/), and verify that the new pages are working as expected.

## Adding new pages

1. Visit the [Sanity Studio](https://clearviction.sanity.studio/desk)
2. In the "Calculator Page" section, click to create a new page.
3. Fill out all of the fields.
   - the title and slug fields should following the naming convention below, and can be found on the Clearviction Figma design pages.
   - clicking generate will create a slug based on the title.
   - the boolean flag fields are used to determine how pages are displayed, so be sure to select all that apply.
   - when adding a new choice, make sure to label it properly, and add a link to the page that it will navigate to. The following page must be completed before you can link to it, so if you are linking to a new page, you will need to create it first.

## Page naming convention

**< section-name > - < descriptor > - < order-number > - < status >**

ex: **"offense-fish-1-cont"** -> in the offense section, the first page of the fishing violation questions, and the page is not an end page, so we continue.

## Sanity docs and links

- [Read “getting started” in the docs](https://www.sanity.io/docs/introduction/getting-started?utm_source=readme)
- [Join the community Slack](https://slack.sanity.io/?utm_source=readme)
- [Extend and build plugins](https://www.sanity.io/docs/content-studio/extending?utm_source=readme)
