# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
I refactored the code by adding documentation as comments where necessary to increase readability of the code and make it much easier for future maintenance. I also restructured and simplified the code, and removed redundant code lines thereby reducing the number of code lines which makes the file size smaller thereby improving performance. Removing redundant code lines after I restructured and simplified the code also makes the code to be more clean and readable. Finally, I formatted the code lines a bit to aid readability and make the code much cleaner.
