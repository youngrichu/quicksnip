# QuickSnip

An open-source project that categorizes handy code snippets across various programming languages. Built with love and powered by an awesome community. 🚀

## How to contribute

Want to help make QuickSnip even better? You can contribute by:

- **Improving the Code**: Fix bugs, suggest new features, or optimize the project.
- **Adding New Snippets**: Share your favorite snippets to grow the database.
Be sure to check out the [CONTRIBUTING.md](/CONTRIBUTING.md) file for detailed guidelines.

### Improving the code

Got a feature idea or bug fix? Here's how you can contribute:

- [Open an issue](https://github.com/dostonnabotov/sass-template/issues) to share your ideas or report a bug.
- [Send a pull request](https://github.com/dostonnabotov/sass-template/pulls) with your changes.

### Adding a Snippet

The snippets database is located in the `/public/data` folder.

If you’d like to add a snippet for an **existing language** and **category**, use the following format:

```json
{
  "title": "Name of the snippet",
  "description": "A short explanation of what the snippet does",
  "code": [
    "your code goes here",
    "  this is a newline with a space"
  ],
  "tags": ["tag1", "tag2", "tag3"],
  "author": "your_github_username"
}
```

For details about adding new categories or programming languages, check out the [CONTRIBUTING.md](/CONTRIBUTING.md) file.

## Guidelines for Contributions

To keep things smooth and consistent, please:

- Use proper JSON formatting.
- Include all mandatory fields in the snippet.
- Test your snippet to ensure it works as expected.

Following these guidelines helps me (and everyone else) review and merge your contributions faster.

## License

QuickSnip is licensed under the [MIT License](/LICENSE). Feel free to use and share it as you like.